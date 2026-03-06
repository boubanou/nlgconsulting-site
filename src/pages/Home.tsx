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
  Rocket,
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
        "description": "AI consulting, automation, and business growth systems for B2B companies. Strategy, implementation, and outsourced AI execution for founders and executives worldwide.",
        "founder": {
          "@type": "Person",
          "name": "Gregory Brenig",
          "jobTitle": "Founder & CEO",
          "sameAs": "https://www.linkedin.com/in/gregorybrenig/"
        },
        "foundingDate": "2020",
        "areaServed": ["Europe", "North America", "Middle East"],
        "sameAs": ["https://www.linkedin.com/company/nlg-consulting/"],
        "knowsAbout": ["AI Consulting", "AI Automation", "AI Agents", "B2B Lead Generation", "Prompt Engineering", "Go-To-Market Strategy", "Business Process Automation", "Outsourced AI Implementation"]
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
      description: "Strategic AI advisory for businesses navigating the transformation toward intelligent operations.",
      link: "/ai-consulting",
      cta: "Explore AI Consulting"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "AI Automation",
      description: "End-to-end workflow automation — from marketing and sales to operations and content.",
      link: "/ai-automation",
      cta: "Explore Automation"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Agents",
      description: "Custom AI agents that handle sales, marketing, content, and operations autonomously.",
      link: "/ai-agents-for-business",
      cta: "Explore AI Agents"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "AI Marketing",
      description: "Automated content creation, SEO, social media, and campaign management powered by AI.",
      link: "/ai-marketing-automation",
      cta: "Explore AI Marketing"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI Sales Systems",
      description: "AI-powered SDR, outbound, appointment setting, and pipeline automation for B2B growth.",
      link: "/ai-sales-automation",
      cta: "Explore AI Sales"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Prompt Engineering",
      description: "Expert consulting and training on prompt design, AI workflows, and team upskilling.",
      link: "/prompt-engineering-consulting",
      cta: "Explore Training"
    }
  ];

  const existingServices = [
    { icon: <Users className="w-5 h-5" />, title: "Sales & BD", description: "Outsourced SDR, multichannel outbound, and pipeline systems.", link: "/sales" },
    { icon: <Zap className="w-5 h-5" />, title: "Web Studio", description: "Revenue-ready websites delivered in 72 hours.", link: "/web" },
    { icon: <Target className="w-5 h-5" />, title: "Advisory", description: "Strategic guidance on GTM, monetization, and scaling.", link: "/advisory" },
    { icon: <Building2 className="w-5 h-5" />, title: "Ventures", description: "Platforms we build and operate across PropTech, FinTech, and Media.", link: "/ventures" },
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
        <title>AI Consulting & Automation for Business | NLG Consulting</title>
        <meta name="description" content="AI consulting, automation systems, and outsourced implementation for B2B companies. Strategy, AI agents, prompt engineering, and growth systems. Book a free call." />
        <link rel="canonical" href="https://www.nlgconsulting.co/" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/" />
        <meta property="og:title" content="AI Consulting & Automation for Business | NLG Consulting" />
        <meta property="og:description" content="AI consulting, automation systems, and outsourced implementation for B2B companies. Strategy, AI agents, prompt engineering, and growth systems." />
        <meta property="og:image" content="https://www.nlgconsulting.co/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Consulting & Automation for Business | NLG Consulting" />
        <meta name="twitter:description" content="AI consulting, automation systems, and outsourced implementation for B2B companies." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero — Premium, calm, strategic */}
        <section className="pt-32 md:pt-40 pb-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-8">
              <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase">
                AI Consulting · Automation · Implementation
              </Badge>
              <h1 className="text-foreground leading-[1.1] max-w-4xl mx-auto">
                We help businesses understand, deploy, and scale{" "}
                <span className="text-gradient">AI systems</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Strategic AI consulting, workflow automation, AI agents, and outsourced implementation — for founders, executives, and growth teams worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/book">
                    Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do — AI Cluster Navigation */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-14">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">What We Do</p>
              <h2 className="mb-4">AI-Powered Business Systems</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From strategy to execution — we help companies integrate AI into their marketing, sales, operations, and growth infrastructure.
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

        {/* Strategic Positioning Statement */}
        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-6">Why Companies Choose NLG</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Most businesses know they need AI — but struggle with where to start, what to prioritize, and how to implement without disrupting operations. We bridge the gap between AI strategy and real-world execution.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                { title: "Strategy First", desc: "We start with your business goals — not the technology. Every engagement begins with a clear roadmap tied to measurable outcomes." },
                { title: "Operator-Led", desc: "Our team has built and scaled companies. We bring operational experience from PropTech, FinTech, SaaS, and Media — not just theory." },
                { title: "Full Execution", desc: "From consulting to implementation, we handle the entire lifecycle. Outsource AI execution without hiring a full team." }
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

        {/* Outsourced AI Implementation CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Outsourced AI Implementation</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Don't have an in-house AI team? We act as your external AI department — deploying automation, building agents, and running systems so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/outsourced-ai-implementation">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/book">Book a Call</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Existing Services — Compact */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Also</p>
              <h2 className="mb-4">Sales, Studio & Advisory</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Beyond AI — we operate sales infrastructure, build websites, and provide strategic advisory.
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
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Trusted By</p>
              <h2 className="mb-3">Working With Industry Leaders</h2>
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

        {/* What Clients Value — Not fake testimonials */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="mb-4">What Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "NLG transformed our outbound strategy. We went from 0 to 20 qualified meetings per month.", name: "Tech Startup CEO", company: "Series A SaaS" },
                { quote: "The website was delivered in 3 days with Stripe, Calendly, and SEO—all working perfectly.", name: "Agency Founder", company: "Digital Agency" },
                { quote: "Their strategic advice on go-to-market was invaluable for our European expansion.", name: "VP Sales", company: "FinTech Scale-up" }
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

        {/* Founder Positioning — Brief */}
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
                  15+ years building ventures across PropTech, FinTech, and technology. Author, operator, and strategic advisor helping businesses deploy AI systems that drive measurable growth.
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
            <h2 className="mb-4">Ready to deploy AI in your business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a free 15-minute strategy call. We'll discuss your challenges and outline a clear AI roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/book">
                  <Calendar className="mr-2 w-4 h-4" /> Book a Call
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
