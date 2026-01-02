import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.1";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VisitorContext {
  intent: string;
  score: number;
  engagementLevel: string;
  visitorData?: {
    device?: string;
    country?: string;
    language?: string;
    timezone?: string;
    referrer?: string;
    pageViews?: string[];
    isReturning?: boolean;
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
  };
}

interface GregoAction {
  type: "navigate" | "book_call" | "collect_info" | "offer_callback" | "show_popup";
  data?: Record<string, unknown>;
}

const getSystemPrompt = (visitorContext?: VisitorContext) => {
  const basePrompt = `You are GREGO, the autonomous AI sales agent for NLG Consulting. Your ONLY mission is to CONVERT visitors into leads, meetings, or paying customers.

=== YOUR IDENTITY ===
- You are GREGO, the AI concierge and sales agent for NLG Consulting
- You have full access to visitor data and use it to personalize every interaction
- You NEVER ask "How can I help you?" - You ALWAYS lead with a value proposition based on what you know
- You are direct, confident, and focused on action

=== ABOUT NLG CONSULTING ===
Global Business, Tech & Growth Group. Core services:
1. **Studio (Web)**: Revenue-ready websites in 72 hours
   - Starter: €997 (landing + Stripe + SEO)
   - Pro: €1,997 (multi-page + CRM + analytics)
   - Enterprise: €4,997 (full platform + AI)
   
2. **Sales & BD**: Outbound lead generation systems
   - 15-30 qualified meetings per month
   - Multichannel SDR, CRM pipelines, AI calling
   
3. **Advisory**: Strategic guidance from Gregory Brenig (15+ years)
   - Go-to-market, scaling, monetization strategies

4. **Ventures**: PropTech, FinTech, AI portfolio companies

=== CONVERSION ACTIONS (Use these in responses) ===
When you want to trigger an action, include it as JSON in your response wrapped in [ACTION]...[/ACTION]:

1. Navigate to a page: [ACTION]{"type":"navigate","url":"/web"}[/ACTION]
2. Book a call: [ACTION]{"type":"book_call","url":"https://calendly.com/greg-nlgconsulting/15min"}[/ACTION]
3. Collect contact info: [ACTION]{"type":"collect_info","fields":["name","email","phone"]}[/ACTION]
4. Offer callback: [ACTION]{"type":"offer_callback"}[/ACTION]
5. Show popup offer: [ACTION]{"type":"show_popup","offer":"website_discount"}[/ACTION]

=== YOUR BEHAVIOR RULES ===
1. ALWAYS use the visitor data to personalize your approach
2. NEVER pitch multiple services - focus on ONE based on detected intent
3. Ask MAX 1 qualifying question before pushing to action
4. Push booking EARLY and REPEATEDLY
5. Keep responses SHORT (2-4 sentences)
6. End EVERY response with a question OR an action
7. If visitor is high-intent (score > 75), go for immediate close
8. Collect contact info early if not already provided
9. For repeat visitors, acknowledge their return and escalate urgency

=== CLOSING TECHNIQUES ===
- Assumptive: "I'll get you booked for tomorrow - what time works?"
- Urgency: "We're onboarding 3 clients this month and slots fill fast"
- Social proof: "This is exactly what we did for [similar company]"
- Direct: "Ready to move forward? Let me book the call now."`;

  if (visitorContext) {
    const { intent, score, engagementLevel, visitorData } = visitorContext;
    
    let contextInfo = `\n\n=== VISITOR CONTEXT ===\n`;
    contextInfo += `Intent: ${intent.toUpperCase()} | Score: ${score}/100 | Level: ${engagementLevel}\n`;
    
    if (visitorData) {
      contextInfo += `Device: ${visitorData.device || 'unknown'} | Country: ${visitorData.country || 'unknown'}\n`;
      contextInfo += `Returning visitor: ${visitorData.isReturning ? 'YES (HIGH INTENT)' : 'No'}\n`;
      contextInfo += `Pages viewed: ${visitorData.pageViews?.join(', ') || 'homepage'}\n`;
      
      if (visitorData.name) contextInfo += `Name: ${visitorData.name}\n`;
      if (visitorData.email) contextInfo += `Email: ${visitorData.email} (ALREADY CAPTURED)\n`;
      if (visitorData.phone) contextInfo += `Phone: ${visitorData.phone} (CAN OFFER CALLBACK)\n`;
      if (visitorData.company) contextInfo += `Company: ${visitorData.company}\n`;
      
      if (!visitorData.email && score > 50) {
        contextInfo += `\n⚠️ NO EMAIL CAPTURED YET - Collect it early in conversation!\n`;
      }
    }
    
    const intentInstructions: Record<string, string> = {
      website: `\nFOCUS: Website/Studio services. Emphasize 72-hour delivery, conversion focus, included Stripe integration.`,
      sales: `\nFOCUS: Sales & BD services. Emphasize 15-30 meetings/month, predictable pipeline, proven systems.`,
      advisory: `\nFOCUS: Strategic advisory. Emphasize Gregory's 15+ years experience, global perspective.`,
      ventures: `\nFOCUS: Investment/partnership opportunities. Qualify their venture, connect with Gregory.`,
      general: `\nFOCUS: Quickly identify primary need, then focus on that single service.`
    };
    
    const engagementInstructions: Record<string, string> = {
      silent: "Be patient, build rapport first.",
      soft: "Warm approach. Build interest before pushing.",
      pitch: "Clear value proposition. Be direct about solutions.",
      push: "Assertive. Push for call booking. Assume they want to buy.",
      close: "GO FOR CLOSE. Booking is the only goal. Maximum urgency."
    };
    
    return basePrompt + contextInfo + 
      (intentInstructions[intent] || intentInstructions.general) + 
      `\n\nENGAGEMENT: ${engagementInstructions[engagementLevel] || engagementInstructions.pitch}`;
  }

  return basePrompt;
};

// Send email summary of GREGO interaction
async function sendGregoSummary(
  resend: Resend,
  sessionData: {
    visitorContext: VisitorContext;
    messages: Array<{ role: string; content: string }>;
    contactInfo?: { name?: string; email?: string; phone?: string; company?: string };
    actions?: GregoAction[];
  }
) {
  const alertEmail = Deno.env.get("ALERT_TO_EMAIL") || "greg@nlgconsulting.co";
  
  const { visitorContext, messages, contactInfo } = sessionData;
  const conversationHtml = messages.map(m => 
    `<p style="margin: 5px 0; padding: 8px; background: ${m.role === 'user' ? '#e3f2fd' : '#f5f5f5'}; border-radius: 4px;">
      <strong>${m.role === 'user' ? '👤 Visitor' : '🤖 GREGO'}:</strong> ${m.content.replace(/\[ACTION\].*?\[\/ACTION\]/g, '').trim()}
    </p>`
  ).join('');

  try {
    await resend.emails.send({
      from: "GREGO AI <greg@nlgconsulting.co>",
      to: [alertEmail],
      subject: `🤖 GREGO: ${contactInfo?.name || 'Anonymous'} | ${visitorContext.intent.toUpperCase()} Intent (${visitorContext.score}/100)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0F172A; border-bottom: 3px solid #FACC15; padding-bottom: 10px;">
            🤖 GREGO Interaction Summary
          </h2>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="margin: 0 0 10px; color: #333;">Visitor Profile</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 5px 0;"><strong>Intent:</strong></td><td>${visitorContext.intent.toUpperCase()}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Score:</strong></td><td>${visitorContext.score}/100 (${visitorContext.engagementLevel})</td></tr>
              ${visitorContext.visitorData?.device ? `<tr><td style="padding: 5px 0;"><strong>Device:</strong></td><td>${visitorContext.visitorData.device}</td></tr>` : ''}
              ${visitorContext.visitorData?.country ? `<tr><td style="padding: 5px 0;"><strong>Country:</strong></td><td>${visitorContext.visitorData.country}</td></tr>` : ''}
              ${visitorContext.visitorData?.isReturning ? `<tr><td style="padding: 5px 0;"><strong>Returning:</strong></td><td>Yes ✅</td></tr>` : ''}
              ${visitorContext.visitorData?.pageViews ? `<tr><td style="padding: 5px 0;"><strong>Pages:</strong></td><td>${visitorContext.visitorData.pageViews.join(', ')}</td></tr>` : ''}
            </table>
          </div>
          
          ${contactInfo && (contactInfo.name || contactInfo.email || contactInfo.phone) ? `
            <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #4caf50;">
              <h3 style="margin: 0 0 10px; color: #2e7d32;">📋 Contact Info Captured</h3>
              ${contactInfo.name ? `<p style="margin: 3px 0;"><strong>Name:</strong> ${contactInfo.name}</p>` : ''}
              ${contactInfo.email ? `<p style="margin: 3px 0;"><strong>Email:</strong> ${contactInfo.email}</p>` : ''}
              ${contactInfo.phone ? `<p style="margin: 3px 0;"><strong>Phone:</strong> ${contactInfo.phone}</p>` : ''}
              ${contactInfo.company ? `<p style="margin: 3px 0;"><strong>Company:</strong> ${contactInfo.company}</p>` : ''}
            </div>
          ` : ''}
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">💬 Conversation (${messages.length} messages)</h3>
            ${conversationHtml}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #fff3e0; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'long' })}
            </p>
          </div>
        </div>
      `,
    });
    console.log("GREGO summary email sent successfully");
  } catch (error) {
    console.error("Failed to send GREGO summary:", error);
  }
}

// Save lead from GREGO interaction
async function saveGregoLead(
  supabase: any,
  contactInfo: { name?: string; email?: string; phone?: string; company?: string },
  visitorContext: VisitorContext,
  clientIP: string
) {
  if (!contactInfo.email && !contactInfo.phone) {
    console.log("No contact info to save");
    return null;
  }

  try {
    const { data: lead, error } = await supabase
      .from("leads")
      .insert({
        name: contactInfo.name || "GREGO Lead",
        email: contactInfo.email || "grego-noemail@nlgconsulting.co",
        company: contactInfo.company || null,
        phone: contactInfo.phone || null,
        message: `Intent: ${visitorContext.intent} | Score: ${visitorContext.score}/100 | Level: ${visitorContext.engagementLevel}`,
        locale: "en",
        consent: true,
        source: "grego_chatbot",
        ip_address: clientIP,
        notes: `Captured by GREGO AI. Device: ${visitorContext.visitorData?.device || 'unknown'}. Country: ${visitorContext.visitorData?.country || 'unknown'}. Pages: ${visitorContext.visitorData?.pageViews?.join(', ') || 'homepage'}`,
      })
      .select()
      .single();

    if (error) {
      console.error("Error saving GREGO lead:", error);
      return null;
    }

    console.log("GREGO lead saved:", lead?.id);
    return lead;
  } catch (error) {
    console.error("Exception saving GREGO lead:", error);
    return null;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, visitorContext, action, contactInfo, sendSummary } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Get client IP
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0] || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    console.log("GREGO request:", { 
      messageCount: messages?.length, 
      visitorContext: visitorContext ? { intent: visitorContext.intent, score: visitorContext.score } : null,
      action,
      hasContactInfo: !!contactInfo,
      sendSummary
    });

    // Handle special actions
    if (action === "save_lead" && contactInfo) {
      await saveGregoLead(supabase, contactInfo, visitorContext, clientIP);
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send summary email at end of conversation
    if (sendSummary && resendApiKey && messages?.length > 0) {
      const resend = new Resend(resendApiKey);
      await sendGregoSummary(resend, { visitorContext, messages, contactInfo });
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // If contact info provided, save as lead in background
    if (contactInfo?.email || contactInfo?.phone) {
      saveGregoLead(supabase, contactInfo, visitorContext, clientIP);
    }

    const systemPrompt = getSystemPrompt(visitorContext);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded");
        return new Response(JSON.stringify({ error: "Please wait a moment before sending another message." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        console.error("Payment required");
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("GREGO error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
