import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.1";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Server-side validation schema
const callbackSchema = z.object({
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  note: z.string().max(500, "Note must be less than 500 characters").optional(),
  timezone: z.string().max(100, "Timezone must be less than 100 characters").optional()
});

type CallbackRequest = z.infer<typeof callbackSchema>;

// Escape HTML to prevent XSS in email templates
const escapeHtml = (str: string): string => {
  if (!str) return '';
  return str.replace(/[&<>"']/g, (char) => {
    const escapeMap: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return escapeMap[char] || char;
  });
};

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

    // Parse and validate request body
    const rawBody = await req.json();
    const validationResult = callbackSchema.safeParse(rawBody);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error.format());
      return new Response(
        JSON.stringify({ 
          error: "Invalid input data",
          details: validationResult.error.errors.map(e => e.message)
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = validationResult.data;

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
          <p><strong>Phone:</strong> ${escapeHtml(normalizedPhone)}</p>
          ${body.note ? `<p><strong>Note:</strong> ${escapeHtml(body.note)}</p>` : ""}
          ${body.timezone ? `<p><strong>Timezone:</strong> ${escapeHtml(body.timezone)}</p>` : ""}
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
    
    // Return safe error message to client
    const clientMessage = error instanceof z.ZodError 
      ? "Invalid input data"
      : "An error occurred processing your request";
    
    return new Response(
      JSON.stringify({ error: clientMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
