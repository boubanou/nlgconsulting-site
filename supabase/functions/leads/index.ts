import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.1";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadRequest {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  locale: string;
  urgent?: boolean;
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

    const body: LeadRequest = await req.json();

    // Validate required fields
    if (!body.name || !body.email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Normalize phone to E.164 if provided
    let normalizedPhone = body.phone;
    if (normalizedPhone && !normalizedPhone.startsWith("+")) {
      normalizedPhone = "+" + normalizedPhone.replace(/\D/g, "");
    }

    // Insert lead into database
    const { data: lead, error: dbError } = await supabase
      .from("leads")
      .insert({
        name: body.name,
        email: body.email,
        company: body.company || null,
        phone: normalizedPhone || null,
        message: body.message || null,
        locale: body.locale || "en",
        consent: true,
        source: "website_contact_form",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save lead" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // If urgent, create callback record
    if (body.urgent && normalizedPhone) {
      await supabase.from("callbacks").insert({
        phone: normalizedPhone,
        note: `Urgent callback requested by ${body.name} (${body.email})`,
        status: "New",
      });
    }

    // Send notification email to internal team
    try {
      await resend.emails.send({
        from: "NLG Consulting <onboarding@resend.dev>",
        to: [alertEmail],
        subject: body.urgent
          ? `🔴 URGENT - New Lead: ${body.name}`
          : `New Lead: ${body.name}`,
        html: `
          <h2>${body.urgent ? "🔴 URGENT CALLBACK REQUESTED" : "New Lead Received"}</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
          ${normalizedPhone ? `<p><strong>Phone:</strong> ${normalizedPhone}</p>` : ""}
          ${body.message ? `<p><strong>Message:</strong> ${body.message}</p>` : ""}
          <p><strong>Language:</strong> ${body.locale}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
      });
    } catch (emailError) {
      console.error("Internal notification email error:", emailError);
      // Don't fail the request if email fails
    }

    // Send confirmation email to user
    const confirmationMessages: Record<string, { subject: string; body: string }> = {
      en: {
        subject: "We've received your message!",
        body: `Hello ${body.name}, thank you for contacting NLG Consulting. Our team will get back to you shortly.`
      },
      fr: {
        subject: "Nous avons bien reçu votre message !",
        body: `Bonjour ${body.name}, merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.`
      },
      es: {
        subject: "¡Hemos recibido tu mensaje!",
        body: `Hola ${body.name}, gracias por contactarnos. Nuestro equipo te responderá en breve.`
      },
      de: {
        subject: "Wir haben Ihre Nachricht erhalten!",
        body: `Hallo ${body.name}, danke für Ihre Nachricht. Unser Team wird sich bald bei Ihnen melden.`
      }
    };

    const locale = body.locale || "en";
    const confirmation = confirmationMessages[locale] || confirmationMessages.en;

    try {
      await resend.emails.send({
        from: "NLG Consulting <onboarding@resend.dev>",
        to: [body.email],
        subject: confirmation.subject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333;">${confirmation.subject}</h2>
            <p style="color: #666; line-height: 1.6;">${confirmation.body}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #999; font-size: 12px;">NLG Consulting</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Confirmation email error:", emailError);
      // Don't fail the request if confirmation email fails
    }

    return new Response(
      JSON.stringify({ ok: true, leadId: lead.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in leads function:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
