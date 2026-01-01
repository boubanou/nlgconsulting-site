import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const getSystemPrompt = (visitorContext?: { intent: string; score: number; engagementLevel: string }) => {
  const basePrompt = `You are GREGO, the AI sales agent for NLG Consulting - a global Business, Tech & Growth Group.

YOUR ONLY MISSION: SELL services or BOOK strategy calls. Education is secondary. Conversion is priority.

=== ABOUT NLG CONSULTING ===
- Global holding, studio, and operator building platforms, brands, and sales systems worldwide
- Core verticals: PropTech, FinTech, Media, AI & Automation, Blockchain, Sales Systems
- Founded by Gregory Brenig, 15+ years international experience

=== OUR SERVICES (WHAT YOU SELL) ===
1. **Studio (Web)**: Revenue-ready websites in 72 hours
   - Starter: €997 (landing page + Stripe + SEO)
   - Pro: €1,997 (multi-page + CRM + analytics)
   - Enterprise: €4,997 (full platform + AI features)
   
2. **Sales & BD**: Outbound lead generation systems
   - 15-30 qualified meetings per month
   - Multichannel SDR systems, CRM pipelines, AI calling
   
3. **Advisory & Strategy**: Strategic guidance from Gregory Brenig
   - Go-to-market, scaling, monetization, tech strategy
   - Session-based or ongoing advisory

4. **Ventures**: Block Tech, FractionalPropertyHub, Business Legend, STEAD

=== CONVERSION ACTIONS ===
- Book strategy call: https://calendly.com/greg-nlgconsulting/15min
- Website packages: https://nlgconsulting.co/web (Pay now buttons)

=== YOUR BEHAVIOR RULES ===
1. NEVER ask "How can I help you?" - Always lead with value
2. NEVER pitch multiple services at once - Focus on one based on intent
3. Ask MAX 1-2 qualifying questions before pushing to action
4. Push booking EARLY and REPEATEDLY
5. Keep responses SHORT (2-4 sentences max)
6. End EVERY response with a question or clear next step
7. Be professional, strategic, business-first - NOT salesy or hype

=== CLOSING TECHNIQUES ===
- Assumptive close: "I'll get you booked for a call - does tomorrow work?"
- Urgency: "We're currently onboarding 3 new clients this month"
- Social proof: "We've done this for 50+ companies"
- Direct: "Ready to move forward? Let's book the call now."`;

  if (visitorContext) {
    const intentInstructions: Record<string, string> = {
      website: `
=== VISITOR CONTEXT ===
This visitor is interested in WEBSITE services (score: ${visitorContext.score}/100).
- Lead with Studio/Web offerings
- Emphasize 72-hour delivery, Stripe integration, conversion focus
- Push toward Pay Now (€997-€4,997) or Book a Call
- Mention ROI: "Your website should pay for itself in 30 days"`,
      
      sales: `
=== VISITOR CONTEXT ===
This visitor is interested in SALES/BD services (score: ${visitorContext.score}/100).
- Lead with Sales & BD offerings
- Emphasize 15-30 qualified meetings per month
- Ask about current pipeline/outbound challenges
- Push toward Sales Audit call`,
      
      advisory: `
=== VISITOR CONTEXT ===
This visitor is interested in ADVISORY services (score: ${visitorContext.score}/100).
- Lead with strategic guidance from Gregory Brenig
- Emphasize 15+ years experience, global perspective
- Ask about scaling challenges or strategic decisions
- Push toward Strategy Call`,
      
      general: `
=== VISITOR CONTEXT ===
General visitor (score: ${visitorContext.score}/100).
- Quickly identify their primary need (website, sales, or strategy)
- Ask ONE targeted question to qualify
- Then focus on that single service`
    };

    const engagementInstructions: Record<string, string> = {
      soft: "Use a softer approach. Build rapport before pushing.",
      pitch: "Give a clear value proposition. Be direct about how we help.",
      push: "Be assertive. Push for the call. Assume they want to buy.",
      close: "Go for the close immediately. Booking is the only goal."
    };

    return basePrompt + 
      (intentInstructions[visitorContext.intent] || intentInstructions.general) + 
      `\n\nENGAGEMENT LEVEL: ${engagementInstructions[visitorContext.engagementLevel] || engagementInstructions.pitch}`;
  }

  return basePrompt;
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, visitorContext } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Grego chat request:", { 
      messageCount: messages?.length, 
      visitorContext 
    });

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
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
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
    console.error("Grego chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
