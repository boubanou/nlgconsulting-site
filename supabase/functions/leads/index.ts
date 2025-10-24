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
      console.log("Sending internal notification to:", alertEmail);
      const internalEmailResult = await resend.emails.send({
        from: "NLG Consulting <onboarding@resend.dev>",
        to: [alertEmail],
        subject: body.urgent
          ? `🔴 URGENT - New Lead: ${body.name}`
          : `New Lead: ${body.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #0F172A;">${body.urgent ? "🔴 URGENT CALLBACK REQUESTED" : "New Lead Received"}</h2>
            <div style="background: #f8f9fa; border-left: 4px solid #FACC15; padding: 15px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${body.name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${body.email}</p>
              ${body.company ? `<p style="margin: 5px 0;"><strong>Company:</strong> ${body.company}</p>` : ""}
              ${normalizedPhone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${normalizedPhone}</p>` : ""}
              ${body.message ? `<p style="margin: 5px 0;"><strong>Message:</strong> ${body.message}</p>` : ""}
              <p style="margin: 5px 0;"><strong>Language:</strong> ${body.locale.toUpperCase()}</p>
              <p style="margin: 5px 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' })}</p>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">View this lead in the <a href="${Deno.env.get('SITE_URL') || 'https://nlg-consulting.lovable.app'}/admin" style="color: #0F172A;">admin dashboard</a></p>
          </div>
        `,
      });
      console.log("Internal notification sent successfully:", internalEmailResult);
    } catch (emailError) {
      console.error("Internal notification email error:", emailError);
      // Don't fail the request if email fails, but log it prominently
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
      console.log("Sending confirmation email to:", body.email);
      const confirmationResult = await resend.emails.send({
        from: "NLG Consulting <onboarding@resend.dev>",
        to: [body.email],
        subject: confirmation.subject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
            <div style="background: linear-gradient(135deg, #0F172A 0%, #1e293b 100%); padding: 30px; border-radius: 8px 8px 0 0;">
              <h2 style="color: #FACC15; margin: 0;">${confirmation.subject}</h2>
            </div>
            <div style="padding: 30px; background: #f8f9fa; border-radius: 0 0 8px 8px;">
              <p style="color: #333; line-height: 1.6; font-size: 16px;">${confirmation.body}</p>
              <div style="margin: 25px 0; padding: 15px; background: white; border-left: 3px solid #FACC15; border-radius: 4px;">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Next steps:</strong> Our team will review your request and reach out within 24 hours.</p>
              </div>
            </div>
            <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 5px 0;">© ${new Date().getFullYear()} NLG Consulting</p>
              <p style="margin: 5px 0;">European Sales Development Experts</p>
            </div>
          </div>
        `,
      });
      console.log("Confirmation email sent successfully:", confirmationResult);
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
