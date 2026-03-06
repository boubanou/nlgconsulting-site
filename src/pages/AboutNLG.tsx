import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Globe, 
  Rocket, 
  Target, 
  Award,
  Building2,
  Linkedin,
  Brain,
  Workflow,
  Bot,
  BookOpen,
  CheckCircle
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const AboutNLG = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "About NLG Consulting",
        "description": "Meet Gregory Brenig and the NLG team. AI consulting, automation, and business growth systems for companies worldwide.",
        "url": "https://www.nlgconsulting.co/about"
      },
      {
        "@type": "Person",
        "name": "Gregory Brenig",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "NLG Consulting", "url": "https://www.nlgconsulting.co" },
        "knowsAbout": ["AI Consulting", "AI Automation", "Prompt Engineering", "B2B Sales", "PropTech", "FinTech", "Go-To-Market Strategy", "SaaS Monetization", "Business Process Automation"],
        "sameAs": "https://www.linkedin.com/in/gregorybrenig/",
        "description": "Founder and CEO of NLG Consulting. 15+ years building ventures and scaling businesses across PropTech, FinTech, Media, and AI. Author of 'Level Up in Fractional Real Estate'."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.nlgconsulting.co/about" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About NLG Consulting | AI Consulting & Business Growth Operator</title>
        <meta name="description" content="Meet Gregory Brenig and the NLG team. 15+ years building ventures, deploying AI systems, and advising companies on automation, sales, and growth worldwide." />
        <link rel="canonical" href="https://www.nlgconsulting.co/about" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/about" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/a-propos" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/about" />
        <meta property="og:title" content="About NLG Consulting | AI Consulting & Business Growth Operator" />
        <meta property="og:description" content="Meet Gregory Brenig and the NLG team. AI consulting, automation, and business growth systems for companies worldwide." />
        <meta property="og:image" content="https://www.nlgconsulting.co/logo.svg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">
              About NLG Consulting
            </Badge>
            <h1 className="mb-6">
              AI Consulting & Execution,{" "}
              <span className="text-gradient">Built by Operators</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              NLG Consulting is a global consulting and execution firm helping businesses understand, deploy, and scale AI systems — from strategy through to full implementation.
            </p>
          </div>
        </section>

        {/* What NLG Does */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="mb-6">What We Do</h2>
                <div className="prose text-muted-foreground max-w-none space-y-4">
                  <p>
                    Founded in 2020, NLG Consulting emerged from a simple observation: most businesses struggle to bridge the gap between AI strategy and operational execution.
                  </p>
                  <p>
                    We operate at the intersection of AI consulting, business automation, and hands-on implementation. Our clients — from early-stage startups to established enterprises — work with us to deploy AI systems that improve their marketing, sales, content production, and operational workflows.
                  </p>
                  <p>
                    What sets us apart is our execution-first philosophy. We don't just advise — we build, integrate, and run AI systems alongside your team. Whether it's designing AI agents, automating sales outreach, training teams on prompt engineering, or building an entire automation stack, we operate as your external AI department.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Brain className="w-5 h-5" />, label: "AI Strategy" },
                  { icon: <Workflow className="w-5 h-5" />, label: "Automation" },
                  { icon: <Bot className="w-5 h-5" />, label: "AI Agents" },
                  { icon: <Globe className="w-5 h-5" />, label: "Global Reach" },
                  { icon: <Rocket className="w-5 h-5" />, label: "Execution-First" },
                  { icon: <Target className="w-5 h-5" />, label: "Results-Driven" }
                ].map((item, i) => (
                  <Card key={i} className="border border-border">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="font-medium text-sm">{item.label}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="mb-4">Areas of Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our work spans the full spectrum of AI-driven business transformation — informed by the broader ecosystem of tools, platforms, and methodologies shaping the industry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { title: "AI Consulting & Strategy", desc: "Helping leaders navigate the rapidly evolving AI landscape — from understanding what tools like ChatGPT, Claude, and Perplexity mean for their business, to building an actionable AI roadmap." },
                { title: "Workflow & Process Automation", desc: "Designing and deploying automation systems using platforms like Make, Zapier, Airtable, and Notion — integrated with AI to eliminate manual work at scale." },
                { title: "AI Agents & Implementation", desc: "Building custom AI agents for sales, marketing, content, and operations — purpose-built to handle specific business processes autonomously." },
                { title: "Sales & Revenue Systems", desc: "Outsourced SDR teams, AI-powered outbound, and pipeline automation using Clay, Apollo, LinkedIn, HubSpot, and Salesforce integrations." },
                { title: "Prompt Engineering & Training", desc: "Expert training for teams on how to write effective prompts, design AI workflows, and integrate AI tools into daily operations." },
                { title: "Content & Marketing Automation", desc: "AI-powered content creation, SEO automation, social media management, and creative production using Midjourney, Canva, Figma, and specialized AI tools." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section — Enhanced EEAT */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-sm">
                  <img 
                    src="/images/gregory-brenig.jpg" 
                    alt="Gregory Brenig — Founder & CEO of NLG Consulting" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <Badge variant="outline" className="mb-4 text-xs uppercase tracking-wide">Founder & CEO</Badge>
                <h2 className="mb-2">Gregory Brenig</h2>
                <p className="text-muted-foreground mb-6">Operator · Builder · Author · AI Strategist</p>
                
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Gregory brings 15+ years of international experience spanning real estate, finance, technology, and media. He has built and scaled ventures across Europe, North America, and the Middle East — always at the intersection of technology and business execution.
                  </p>
                  <p>
                    As AI has reshaped the business landscape — driven by breakthroughs from companies like OpenAI, Anthropic, and Google DeepMind — Gregory has positioned NLG Consulting as an operator-led firm that helps businesses move from AI curiosity to AI execution.
                  </p>
                  <p>
                    His approach combines strategic clarity with hands-on implementation. Rather than delivering theoretical frameworks, Gregory and the NLG team deploy real systems — AI agents, automation workflows, sales infrastructure, and content engines — that produce measurable results.
                  </p>
                  <p>
                    Gregory is also the author of <em>"Level Up in Fractional Real Estate"</em>, exploring how technology is transforming property investment and access.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["AI Consulting", "Automation", "PropTech", "FinTech", "Author", "GTM Strategy"].map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <Button asChild size="sm">
                    <Link to="/book">Book a Call <ArrowRight className="ml-2 w-3.5 h-3.5" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.linkedin.com/in/gregorybrenig/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 w-3.5 h-3.5" /> LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://a.co/d/3wU4Qgc" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 w-3.5 h-3.5" /> Book
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <Award className="w-10 h-10 mx-auto mb-6 opacity-80" />
            <h2 className="text-primary-foreground mb-6">Our Philosophy</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
              "Execution beats theory. We don't just strategize — we build, deploy, and scale. Every day."
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Discipline", desc: "Rigorous processes and consistent execution. Every project follows proven methodologies." },
                { title: "Speed", desc: "In today's market, speed is a competitive advantage. We move fast and deliver on time." },
                { title: "Excellence", desc: "World-class standards in everything — from AI systems to client communication." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-primary-foreground/10">
                  <h3 className="font-semibold mb-2 text-primary-foreground">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries & Use Cases */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Industries We Serve</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "SaaS & Technology Companies",
                "PropTech & Real Estate",
                "FinTech & Financial Services",
                "B2B Service Companies",
                "Consulting & Advisory Firms",
                "Digital Agencies",
                "Startups & Scale-ups",
                "Enterprise Transformation"
              ].map((industry, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight text-center">
            <h2 className="mb-4">Let's Build Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need AI strategy, automation systems, or hands-on implementation — we're ready to execute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default AboutNLG;
