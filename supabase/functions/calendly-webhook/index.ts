import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, calendly-webhook-signature",
};

interface CalendlyEvent {
  event: string;
  payload: {
    event_type: {
      name: string;
    };
    event: {
      uuid: string;
      start_time: string;
      end_time: string;
    };
    invitee: {
      name: string;
      email: string;
    };
  };
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const calendlySigningKey = Deno.env.get("CALENDLY_WEBHOOK_SECRET");

    const body = await req.text();
    
    // Verify webhook signature if secret is configured
    if (calendlySigningKey) {
      const signature = req.headers.get("calendly-webhook-signature");
      
      if (signature) {
        const encoder = new TextEncoder();
        const keyData = encoder.encode(calendlySigningKey);
        const messageData = encoder.encode(body);
        
        const cryptoKey = await crypto.subtle.importKey(
          "raw",
          keyData,
          { name: "HMAC", hash: "SHA-256" },
          false,
          ["sign"]
        );
        
        const signatureBuffer = await crypto.subtle.sign("HMAC", cryptoKey, messageData);
        const expectedSignature = Array.from(new Uint8Array(signatureBuffer))
          .map(b => b.toString(16).padStart(2, "0"))
          .join("");
        
        if (signature !== expectedSignature) {
          return new Response(
            JSON.stringify({ error: "Invalid signature" }),
            { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      }
    }
    
    const event: CalendlyEvent = JSON.parse(body);

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Only process "invitee.created" events
    if (event.event !== "invitee.created") {
      return new Response(
        JSON.stringify({ ok: true, message: "Event ignored" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { payload } = event;

    // Try to find matching lead by email
    const { data: lead } = await supabase
      .from("leads")
      .select("id")
      .eq("email", payload.invitee.email.toLowerCase())
      .maybeSingle();

    // Insert meeting
    const { data: meeting, error: meetingError } = await supabase
      .from("meetings")
      .upsert({
        calendly_event_id: payload.event.uuid,
        start_ts: payload.event.start_time,
        end_ts: payload.event.end_time,
        attendee_name: payload.invitee.name,
        attendee_email: payload.invitee.email.toLowerCase(),
        lead_id: lead?.id || null,
        notes: `Calendly: ${payload.event_type.name}`,
      }, { onConflict: "calendly_event_id" })
      .select()
      .single();

    if (meetingError) {
      console.error("Meeting insert error:", meetingError);
      return new Response(
        JSON.stringify({ error: "Failed to save meeting" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Meeting created:", meeting.id, "Lead linked:", lead?.id || "none");

    return new Response(
      JSON.stringify({ ok: true, meetingId: meeting.id, leadLinked: !!lead }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in calendly-webhook:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
