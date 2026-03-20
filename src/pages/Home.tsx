import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Brain,
  Workflow,
  Bot,
  Megaphone,
  TrendingUp,
  GraduationCap,
  Building2,
  Users,
  Zap,
  CheckCircle,
  Star,
  Calendar,
  Phone,
  Globe,
  Target
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "NLG Consulting",
        "alternateName": "N.L.G. Consulting Group",
        "url": "https://www.nlgconsulting.co",
        "logo": "https://www.nlgconsulting.co/logo.svg",
        "description": "AI-powered growth systems, revenue operations, and strategic advisory for FinTech, PropTech, SaaS, and B2B companies. AI consulting, agentic workflows, GTM structure, RevOps, and outbound infrastructure.",
        "founder": {
          "@type": "Person",
          "name": "Gregory Brenig",
          "jobTitle": "Founder & CEO",
          "sameAs": "https://www.linkedin.com/in/gregorybrenig/"
        },
        "foundingDate": "2020",
        "areaServed": ["Europe", "North America", "Middle East"],
        "sameAs": ["https://www.linkedin.com/company/nlg-consulting/"],
        "knowsAbout": ["AI Consulting", "AI Automation", "AI Agents", "Agentic AI", "Revenue Operations", "B2B Lead Generation", "GTM Strategy", "Workflow Automation", "Outsourced SDR", "Claude Code Automation"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nlgconsulting.co" }
        ]
      }
    ]
  };

  const clusters = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Consulting",
      description: "Practical AI strategy for business operations, sales, content, and growth — tied to measurable outcomes, not slide decks.",
      link: "/ai-consulting",
      cta: "Explore AI Consulting"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "AI Workflow Automation",
      description: "Design and deploy AI-powered workflows across marketing, sales, operations, and content production using Claude, GPT, Make, and custom pipelines.",
      link: "/ai-automation",
      cta: "Explore Automation"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Agents & Agentic Systems",
      description: "Custom AI agents built on Claude, GPT, and agentic frameworks — handling research, prospecting, content, and multi-step business workflows.",
      link: "/ai-agents-for-business",
      cta: "Explore AI Agents"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "AI Marketing Systems",
      description: "AI-powered content engines, SEO automation, social media workflows, and campaign systems that scale output without scaling headcount.",
      link: "/ai-marketing-automation",
      cta: "Explore AI Marketing"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI Sales & RevOps",
      description: "AI-enhanced outbound architecture, pipeline systems, CRM workflows, and revenue operations for consistent qualified meeting generation.",
      link: "/ai-sales-automation",
      cta: "Explore AI Sales"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Prompt Engineering & AI Training",
      description: "Hands-on training for teams on prompt design, AI workflow orchestration, Claude Code, and practical AI adoption for daily operations.",
      link: "/prompt-engineering-consulting",
      cta: "Explore Training"
    }
  ];

  const existingServices = [
    { icon: <Users className="w-5 h-5" />, title: "Outbound & Lead Generation", description: "AI-enhanced outbound systems, outsourced SDR infrastructure, and B2B meeting generation.", link: "/sales" },
    { icon: <Zap className="w-5 h-5" />, title: "Conversion Websites & SEO", description: "Revenue-ready websites, landing pages, and SEO authority assets — built as business tools, not design projects.", link: "/web" },
    { icon: <Target className="w-5 h-5" />, title: "Strategic Advisory", description: "GTM structure, commercial model review, AI adoption planning, and growth systems strategy for founders.", link: "/advisory" },
    { icon: <Building2 className="w-5 h-5" />, title: "Ventures & Platforms", description: "Platforms we build, test, and operate across PropTech, FinTech, and Media — execution-first.", link: "/ventures" },
  ];

  const logos = [
    { src: "/brands/hubspot.png", alt: "HubSpot" },
    { src: "/brands/notion.png", alt: "Notion" },
    { src: "/brands/aircall.png", alt: "Aircall" },
    { src: "/brands/deel.png", alt: "Deel" },
    { src: "/brands/payfit.png", alt: "PayFit" },
    { src: "/brands/revolut.png", alt: "Revolut" },
    { src: "/brands/qonto.png", alt: "Qonto" },
    { src: "/brands/wise.png", alt: "Wise" },
    { src: "/brands/alan.png", alt: "Alan" },
    { src: "/brands/nordesk.svg", alt: "Nordesk" },
    { src: "/brands/etoro.svg", alt: "eToro" },
    { src: "/brands/rapyd.svg", alt: "Rapyd" },
    { src: "/brands/linkedin.svg", alt: "LinkedIn" },
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered Growth Systems for FinTech, PropTech & B2B | NLG Consulting</title>
        <meta name="description" content="AI consulting, agentic workflows, RevOps, GTM strategy, and outbound infrastructure for FinTech, PropTech, SaaS & B2B companies. Qualified meetings and measurable revenue. Book a strategy call." />
        <link rel="canonical" href="https://www.nlgconsulting.co/" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/" />
        <meta property="og:title" content="AI-Powered Growth Systems for FinTech, PropTech & B2B | NLG Consulting" />
        <meta property="og:description" content="AI consulting, agentic workflows, RevOps, GTM strategy, and outbound infrastructure. Qualified meetings and measurable revenue." />
        <meta property="og:image" content="https://www.nlgconsulting.co/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Growth Systems for FinTech, PropTech & B2B | NLG Consulting" />
        <meta name="twitter:description" content="AI consulting, agentic workflows, RevOps, and outbound infrastructure for B2B companies." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase">
                AI Consulting · RevOps · Growth Systems
              </Badge>
              <h1 className="text-foreground leading-[1.1] max-w-4xl mx-auto">
                AI-Powered Growth Systems for{" "}
                <span className="text-gradient">FinTech, PropTech & B2B Companies</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We help founders and SMEs deploy AI consulting, agentic workflows, GTM structure, RevOps, outbound systems, and conversion assets that turn strategy into qualified meetings and measurable revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/book">
                    Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link to="/services">
                    Explore Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Systems Cluster */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-14">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">What We Build</p>
              <h2 className="mb-4">AI Systems, Revenue Infrastructure & Growth Operations</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From AI consulting and workflow automation to agentic systems and revenue operations — we deploy AI into real business processes that generate commercial results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusters.map((cluster, i) => (
                <Link to={cluster.link} key={i} className="group">
                  <Card className="h-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {cluster.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{cluster.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{cluster.description}</p>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        {cluster.cta} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why NLG — Operator Positioning */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-6">Operator-Led Execution, Not Theory</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Most companies know they need AI and better commercial systems — but struggle with where to start, what to prioritise, and how to execute without disrupting operations. We bridge the gap between strategy and measurable business performance.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                { title: "Business-First AI", desc: "Every engagement starts with your commercial objectives — not the technology. We deploy AI workflows, agents, and automation tied to pipeline, revenue, and operational efficiency." },
                { title: "Built by Operators", desc: "We've built and scaled companies across PropTech, FinTech, SaaS, and Media. This is hands-on operating experience applied to your growth challenges — not academic advisory." },
                { title: "Strategy Through Execution", desc: "From AI consulting to outbound infrastructure, CRM architecture to conversion websites — we handle the full lifecycle. Outsource your growth systems without building a team from scratch." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Systems CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Your External AI & Growth Operations Team</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              No in-house AI team? No structured RevOps? We operate as your external growth systems department — deploying AI workflows, building outbound infrastructure, and running revenue operations so your team stays focused on closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/outsourced-ai-implementation">
                  Explore Outsourced AI <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="text-base px-8">
                <Link to="/book">Book a Call</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Outbound, Web, Advisory, Ventures */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Beyond AI</p>
              <h2 className="mb-4">Outbound Systems, Conversion Assets & Strategic Advisory</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We also build and operate outbound infrastructure, revenue-ready websites, and strategic advisory for founders navigating growth, monetisation, and market positioning.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {existingServices.map((service, i) => (
                <Link to={service.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold mb-1">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-10">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Professional Network</p>
              <h2 className="mb-3">Operating Across Industries</h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-sm font-medium">91 verified reviews</span>
              </div>
            </div>
            
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 2500, stopOnInteraction: true })]}
              className="w-full mb-6"
            >
              <CarouselContent className="-ml-4">
                {logos.map((logo, i) => (
                  <CarouselItem key={i} className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="rounded-xl border bg-card p-6 flex items-center justify-center h-20 hover:shadow-sm transition-all">
                      <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" loading="lazy" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <p className="text-xs text-muted-foreground text-center">
              Logos represent companies where team members have professional experience.
            </p>
          </div>
        </section>

        {/* Client Impact */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="mb-4">Client Outcomes</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "NLG restructured our entire outbound architecture. We went from scattered initiatives to a system generating 20+ qualified meetings monthly.", name: "CEO", company: "Series A SaaS" },
                { quote: "The combination of AI workflows, conversion website, and SEO gave us a complete commercial engine — deployed in weeks, not months.", name: "Founder", company: "FinTech Platform" },
                { quote: "Their strategic advisory on GTM and revenue operations was instrumental in our European market entry. Execution-focused, not just frameworks.", name: "VP Sales", company: "PropTech Scale-up" }
              ].map((testimonial, i) => (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-5 text-sm leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-medium text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container-tight">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                <img src="/images/gregory-brenig.jpg" alt="Gregory Brenig — Founder of NLG Consulting" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Founded by</p>
                <h3 className="text-xl font-semibold mb-2">Gregory Brenig</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  15+ years building ventures and growth systems across PropTech, FinTech, and technology. Operator, author, and strategic advisor helping companies deploy AI-powered revenue infrastructure and move from scattered initiatives to structured commercial execution.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button asChild variant="outline" size="sm">
                    <Link to="/about">About Gregory <ArrowRight className="ml-2 w-3.5 h-3.5" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Build Your Growth System</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a strategy call to discuss your AI adoption, outbound architecture, revenue operations, or commercial performance challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/book">
                  <Calendar className="mr-2 w-4 h-4" /> Book a Strategy Call
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/contact">
                  <Phone className="mr-2 w-4 h-4" /> Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default Home;
