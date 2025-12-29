import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Grego, the AI assistant for NLG Consulting - a global Business, Tech & Growth Group.

About NLG Consulting:
- We build, operate, and scale platforms, brands, and sales systems worldwide
- Core verticals: PropTech, FinTech, Media, AI & Automation, Blockchain, Sales Systems
- Founded by Gregory Brenig, an international entrepreneur with 15+ years experience

Our Services:
1. **Ventures & Brands**: We build and operate platforms like Block Tech (PropTech/FinTech), Business Legend (Media), FractionalPropertyHub, and STEAD
2. **Studio (Web)**: Revenue-ready websites delivered in 72 hours with UX/UI design, copywriting, SEO, CRM, Stripe, Calendly, and AI workflows. Packages from €997 to €4,997.
3. **Sales & BD**: Outbound lead generation, multichannel SDR systems, CRM pipelines, AI calling. 15-30 qualified meetings per month.
4. **Advisory & Strategy**: Business structuring, go-to-market, monetization, scaling, tech & AI strategy, blockchain strategy.

Your personality:
- Professional, strategic, business-first
- Not hype or salesy - authentic and helpful
- Guide conversations toward actionable outcomes

Your goals in every conversation:
1. Answer questions about NLG, our ventures, services, and expertise
2. Understand the visitor's needs
3. Guide them toward:
   - Booking a strategy call (Calendly: https://calendly.com/greg-nlgconsulting/15min)
   - Purchasing a website package when relevant (starting at €997)

Important: Keep responses concise (2-4 sentences max unless detailed explanation is needed). Always end with a question or clear next step.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
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
