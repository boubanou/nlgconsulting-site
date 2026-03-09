import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Layers, BarChart3, Settings, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.nlgconsulting.co/use-cases",
      "url": "https://www.nlgconsulting.co/use-cases",
      "name": "AI Automation & Growth Use Cases | NLG Consulting",
      "description": "Selected use cases for AI automation, outsourced SDR, B2B lead generation, and sales process optimization. Strategic examples for C-level teams.",
      "isPartOf": { "@id": "https://www.nlgconsulting.co/#website" },
      "publisher": { "@id": "https://www.nlgconsulting.co/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.nlgconsulting.co/#organization",
      "name": "NLG Consulting",
      "url": "https://www.nlgconsulting.co",
      "logo": "https://www.nlgconsulting.co/logo.svg"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co/" },
        { "@type": "ListItem", "position": 2, "name": "Use Cases", "item": "https://www.nlgconsulting.co/use-cases" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is AI automation consulting?",
          "acceptedAnswer": { "@type": "Answer", "text": "AI automation consulting involves designing and implementing intelligent systems that reduce manual workload, improve data flow, and create scalable commercial processes — from lead qualification to pipeline management." }
        },
        {
          "@type": "Question",
          "name": "How does outsourced SDR support growth?",
          "acceptedAnswer": { "@type": "Answer", "text": "Outsourced SDR provides dedicated outbound capacity without the overhead of in-house hiring. It accelerates pipeline generation through structured prospecting, sequencing, and qualification workflows." }
        },
        {
          "@type": "Question",
          "name": "When should a company automate its sales workflows?",
          "acceptedAnswer": { "@type": "Answer", "text": "Companies typically benefit from automation when manual processes limit scalability, when response times affect conversion, or when leadership lacks visibility into pipeline activity and commercial performance." }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of combining AI automation with outbound sales?",
          "acceptedAnswer": { "@type": "Answer", "text": "Combining AI automation with outbound sales creates a more consistent operating cadence — improving lead scoring, follow-up discipline, personalization at scale, and overall pipeline velocity." }
        },
        {
          "@type": "Question",
          "name": "How can leadership teams evaluate whether lead generation systems are scalable?",
          "acceptedAnswer": { "@type": "Answer", "text": "Scalability depends on process repeatability, data quality, automation coverage, and the ability to maintain conversion rates as volume increases. A structured audit can identify constraints and improvement areas." }
        }
      ]
    }
  ]
};

const useCases = [
  {
    icon: Settings,
    title: "AI Workflow Automation for a B2B SaaS Company",
    context: "A European B2B SaaS company with a 40-person commercial team was managing lead routing, follow-up sequences, and CRM updates through a combination of manual processes and disconnected tools.",
    challenge: "The sales team spent significant time on administrative tasks — updating records, routing inbound leads, and manually triggering follow-up sequences. This reduced selling time and created inconsistencies in pipeline data.",
    intervention: "NLG Consulting conducted a workflow audit, mapped the existing sales process, and designed an integrated automation layer connecting the CRM, email sequencing, and lead scoring systems.",
    execution: "The engagement included AI-powered lead scoring, automated routing rules based on ICP criteria, and structured follow-up sequences triggered by prospect behavior. The CRM was configured to reflect real-time pipeline status.",
    outcomes: "The team reported a measurable reduction in manual data entry, improved lead response times, and better pipeline visibility for management. Sales activity became more consistent across the organization.",
    relevance: "For leadership teams managing growing commercial organizations, AI workflow automation creates operational clarity and ensures that sales capacity is directed toward revenue-generating activities rather than administrative overhead."
  },
  {
    icon: Target,
    title: "Outsourced SDR Structure for a PropTech Company",
    context: "An international PropTech operator entering new European markets needed to generate qualified meetings with property developers and institutional investors — without building a full in-house SDR function.",
    challenge: "Hiring, training, and managing SDRs across multiple geographies would have required months of ramp-up time and significant fixed costs. The company needed outbound capacity immediately.",
    intervention: "NLG Consulting designed a structured outbound program targeting specific buyer personas across three European markets, with tailored messaging frameworks for each segment.",
    execution: "The program included ICP definition, list building, multi-channel sequencing (email and LinkedIn), A/B testing of messaging angles, and weekly performance reviews with the client's leadership team.",
    outcomes: "The outbound program generated a consistent flow of qualified meetings within the first month. The client gained market intelligence and was able to refine its positioning based on prospect feedback.",
    relevance: "For companies expanding into new markets, outsourced SDR provides a structured, lower-risk approach to pipeline generation — delivering commercial momentum without the overhead and delay of in-house recruitment."
  },
  {
    icon: BarChart3,
    title: "Lead Generation System for a FinTech / Payments Company",
    context: "A growth-stage FinTech platform operating in the cross-border payments space needed to systematize its lead generation efforts and reduce dependency on founder-led sales.",
    challenge: "Lead generation was largely opportunistic — driven by inbound referrals and founder relationships. There was no structured pipeline, limited CRM discipline, and no repeatable outbound process.",
    intervention: "NLG Consulting built a lead generation system combining targeted outbound sequences, inbound content optimization, and CRM automation to create a structured and measurable pipeline.",
    execution: "The engagement included buyer persona development, competitive positioning analysis, multi-channel outbound campaigns, lead scoring implementation, and reporting dashboards for the leadership team.",
    outcomes: "The company transitioned from ad hoc lead generation to a structured system with improved qualification discipline, clearer pipeline stages, and better forecasting accuracy for the management team.",
    relevance: "FinTech companies operating in competitive markets benefit from structured lead generation systems that provide consistent deal flow and reduce the commercial risk of relying on a small number of relationships."
  },
  {
    icon: Layers,
    title: "Commercial Structuring for a Real Estate Investment Platform",
    context: "A real estate investment company managing a portfolio of residential and commercial assets wanted to professionalize its investor relations and deal origination process.",
    challenge: "The commercial function lacked a systematic approach to outbound engagement. Investor communication was inconsistent, and deal origination depended on a small network of personal contacts.",
    intervention: "NLG Consulting redesigned the commercial operating model — introducing structured outbound sequences for investor engagement, CRM-based deal tracking, and automated reporting for the investment committee.",
    execution: "The project included investor segmentation, communication cadence design, CRM configuration, automated follow-up workflows, and quarterly reporting templates aligned with institutional standards.",
    outcomes: "The company improved its investor communication cadence, reduced the time required to prepare investor reports, and gained better visibility into the deal origination pipeline.",
    relevance: "For real estate and investment platforms, commercial structuring creates the operating discipline required to scale investor engagement and deal flow without proportionally increasing headcount."
  },
  {
    icon: Users,
    title: "AI-Enabled Growth Support for a Founder-Led Services Firm",
    context: "A founder-led professional services firm with expertise in strategy consulting wanted to scale beyond its existing client base without compromising service quality or brand positioning.",
    challenge: "Growth was constrained by the founder's personal network. There was no outbound process, limited digital presence, and no structured approach to lead qualification or business development.",
    intervention: "NLG Consulting implemented an AI-assisted growth system combining content-driven inbound, targeted outbound, and workflow automation to create a scalable business development engine.",
    execution: "The engagement included positioning refinement, website optimization, AI-powered content distribution, LinkedIn outbound sequences, lead scoring, and a structured qualification framework.",
    outcomes: "The firm established a more consistent pipeline of qualified opportunities, reduced its reliance on founder-led sales, and improved its commercial focus through better process discipline.",
    relevance: "Founder-led firms often face a growth ceiling when commercial activity depends on a single individual. AI-enabled growth systems create the structure and leverage needed to scale sustainably."
  }
];

const interventionSteps = [
  { step: "01", title: "Audit & Discovery", description: "We assess your current commercial infrastructure, tools, workflows, and team structure to identify constraints and opportunities." },
  { step: "02", title: "Diagnosis & Strategy", description: "We define a clear diagnosis of what needs to change — and design a strategic plan aligned with your growth objectives and operating model." },
  { step: "03", title: "System Design", description: "We architect the technical and operational systems required — from CRM configuration to automation workflows and outbound sequences." },
  { step: "04", title: "Automation Layer", description: "We implement AI-powered automation across lead scoring, routing, follow-up sequences, and reporting to reduce manual workload." },
  { step: "05", title: "Outbound Execution", description: "Where applicable, we deploy structured outbound programs with targeted messaging, multi-channel sequencing, and performance tracking." },
  { step: "06", title: "Iteration & Governance", description: "We refine systems based on performance data, adjust targeting and messaging, and establish reporting cadences for leadership visibility." }
];

const faqs = [
  {
    question: "What is AI automation consulting?",
    answer: "AI automation consulting involves designing and implementing intelligent systems that reduce manual workload, improve data flow, and create scalable commercial processes — from lead qualification to pipeline management."
  },
  {
    question: "How does outsourced SDR support growth?",
    answer: "Outsourced SDR provides dedicated outbound capacity without the overhead of in-house hiring. It accelerates pipeline generation through structured prospecting, sequencing, and qualification workflows."
  },
  {
    question: "When should a company automate its sales workflows?",
    answer: "Companies typically benefit from automation when manual processes limit scalability, when response times affect conversion, or when leadership lacks visibility into pipeline activity and commercial performance."
  },
  {
    question: "What are the benefits of combining AI automation with outbound sales?",
    answer: "Combining AI automation with outbound sales creates a more consistent operating cadence — improving lead scoring, follow-up discipline, personalization at scale, and overall pipeline velocity."
  },
  {
    question: "How can leadership teams evaluate whether lead generation systems are scalable?",
    answer: "Scalability depends on process repeatability, data quality, automation coverage, and the ability to maintain conversion rates as volume increases. A structured audit can identify constraints and improvement areas."
  }
];

const UseCases = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation & Growth Use Cases | NLG Consulting</title>
        <meta name="description" content="Selected use cases for AI automation consulting, outsourced SDR, B2B lead generation, and sales process optimization. Strategic examples for C-level teams seeking scalable growth." />
        <link rel="canonical" href="https://www.nlgconsulting.co/use-cases" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/use-cases" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/cas-usage" />
        <meta property="og:title" content="AI Automation & Growth Use Cases | NLG Consulting" />
        <meta property="og:description" content="Selected use cases for AI automation, outsourced SDR, B2B lead generation, and sales process optimization for leadership teams." />
        <meta property="og:url" content="https://www.nlgconsulting.co/use-cases" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation & Growth Use Cases | NLG Consulting" />
        <meta name="twitter:description" content="Selected use cases for AI automation, outsourced SDR, B2B lead generation, and sales process optimization for leadership teams." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
              AI Automation, Growth Systems & Strategic Use Cases
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Selected use cases for C-level teams seeking scalable growth through structured execution, automation, and commercial discipline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <Link to="/book">Book a Strategic Introduction Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
                Explore Selected Use Cases
              </a>
            </div>
          </div>
        </section>

        {/* Executive Introduction */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Structured Execution Over Tool Accumulation</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Many leadership teams are not lacking tools — they are lacking structured execution. The gap between commercial ambition and operational reality often comes down to process design, automation coverage, and outbound discipline.
              </p>
              <p>
                NLG Consulting helps companies create more efficient growth systems by combining <Link to="/ai-consulting" className="text-primary hover:underline">AI automation consulting</Link>, workflow design, <Link to="/outsourced-sdr" className="text-primary hover:underline">SDR and BDR outsourcing</Link>, outbound structuring, <Link to="/ai-lead-generation" className="text-primary hover:underline">lead generation systems</Link>, and sales process optimization.
              </p>
              <p>
                Our work is focused on clarity, process efficiency, scalability, operating leverage, and measurable commercial performance — delivered with the discretion and rigor expected by executive teams.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">Selected Use Cases</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Illustrative examples of how we support leadership teams in building scalable commercial systems.
            </p>

            <div className="space-y-12">
              {useCases.map((uc, i) => (
                <article key={i} className="border border-border rounded-lg p-6 md:p-8 bg-card">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-2.5 rounded-md bg-primary/5 text-primary shrink-0">
                      <uc.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">{uc.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-5 text-sm text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Context</h4>
                      <p>{uc.context}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Challenge</h4>
                      <p>{uc.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Strategic Intervention</h4>
                      <p>{uc.intervention}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Execution Layer</h4>
                      <p>{uc.execution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Indicative Outcomes</h4>
                      <p>{uc.outcomes}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Strategic Relevance</h4>
                      <p>{uc.relevance}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How We Intervene */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">How We Typically Intervene</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Our consulting logic follows a structured approach — from diagnosis to execution and ongoing governance.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {interventionSteps.map((step) => (
                <div key={step.step} className="p-6 rounded-lg border border-border bg-card">
                  <span className="text-xs font-mono text-primary/60 mb-2 block">{step.step}</span>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EEAT / Authority */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Research, Frameworks & Market Signals Informing Our Approach</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                Our thinking is informed by market research, strategic frameworks, and operating trends discussed by leading firms and technology companies. We continuously monitor how organizations are adopting AI, automation, and structured commercial processes to refine our methodology.
              </p>
              <p>
                Research from firms such as <a href="https://www.mckinsey.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">McKinsey</a> — including work by Michael Chui, Partner at McKinsey Global Institute — underscores that AI adoption in commercial functions is accelerating, with measurable productivity gains in sales operations. <a href="https://kpmg.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">KPMG</a>'s Trusted AI framework highlights the governance considerations that accompany enterprise-scale automation.
              </p>
              <p>
                In the technology ecosystem, platforms like <a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">HubSpot</a> (co-founded by Dharmesh Shah) and <a href="https://www.salesforce.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Salesforce</a> (led by Marc Benioff, Chair & CEO) continue to expand AI-native capabilities within CRM and marketing automation. <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenAI</a>, <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft</a>, and <a href="https://www.nvidia.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NVIDIA</a> are shaping the infrastructure layer that enables enterprise AI deployment.
              </p>
              <p>
                In financial services and FinTech, companies such as <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe</a>, <a href="https://www.etoro.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">eToro</a>, <a href="https://www.interactivebrokers.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Interactive Brokers</a>, <a href="https://www.rapyd.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rapyd</a>, and <a href="https://tipalti.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tipalti</a> are investing in automation to improve commercial efficiency and scale operations. In real estate and PropTech, platforms like <a href="https://www.pacaso.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pacaso</a> and <a href="https://www.roofstock.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Roofstock</a> demonstrate how technology-enabled approaches are transforming traditional industries. <a href="https://monday.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Monday.com</a> continues to expand workflow automation capabilities for commercial teams.
              </p>
              <p>
                These signals inform our approach — but our recommendations are always tailored to each client's specific context, maturity, and objectives.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left text-foreground font-medium py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Discuss Your Growth Structure</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              If you are reviewing your outbound model, automation stack, or commercial operating rhythm, we can assess where structure and leverage can be improved.
            </p>
            <Button asChild size="lg">
              <Link to="/book">Book a Strategic Introduction Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <MainFooter />
    </>
  );
};

export default UseCases;
