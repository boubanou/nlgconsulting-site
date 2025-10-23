import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.1";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CallbackRequest {
  phone: string;
  note?: string;
  timezone?: string;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY")!;
    const alertEmail = Deno.env.get("ALERT_TO_EMAIL")!;

    const supabase = createClient(supabaseUrl, supabaseKey);
    const resend = new Resend(resendApiKey);

    const body: CallbackRequest = await req.json();

    // Validate phone
    if (!body.phone) {
      return new Response(
        JSON.stringify({ error: "Phone is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Normalize phone to E.164
    let normalizedPhone = body.phone;
    if (!normalizedPhone.startsWith("+")) {
      normalizedPhone = "+" + normalizedPhone.replace(/\D/g, "");
    }

    // Insert callback into database
    const { data: callback, error: dbError } = await supabase
      .from("callbacks")
      .insert({
        phone: normalizedPhone,
        note: body.note || null,
        timezone: body.timezone || null,
        status: "New",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save callback request" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email
    try {
      await resend.emails.send({
        from: "NLG Consulting <onboarding@resend.dev>",
        to: [alertEmail],
        subject: `🔴 URGENT - Callback Request: ${normalizedPhone}`,
        html: `
          <h2>🔴 URGENT CALLBACK REQUESTED</h2>
          <p><strong>Phone:</strong> ${normalizedPhone}</p>
          ${body.note ? `<p><strong>Note:</strong> ${body.note}</p>` : ""}
          ${body.timezone ? `<p><strong>Timezone:</strong> ${body.timezone}</p>` : ""}
          <p><strong>Requested:</strong> ${new Date().toLocaleString()}</p>
        `,
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the request if email fails
    }

    return new Response(
      JSON.stringify({ ok: true, callbackId: callback.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in callbacks function:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
