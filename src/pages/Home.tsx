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
  Target,
  Mic
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import BusinessValueEngine from "@/components/BusinessValueEngine";
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
        "description": "Done-for-you AI automation and consulting for small and growing businesses. NLG identifies where AI can improve operations, save time and grow revenue, then implements the systems.",
        "founder": {
          "@type": "Person",
          "name": "Gregory Brenig",
          "jobTitle": "Founder & CEO",
          "sameAs": "https://www.linkedin.com/in/gregorybrenig/"
        },
        "foundingDate": "2020",
        "areaServed": ["Europe", "North America", "Middle East"],
        "sameAs": ["https://www.linkedin.com/company/nlg-consulting/"],
        "knowsAbout": ["AI Consulting", "AI Automation", "Workflow Automation", "AI Agents", "Small Business AI", "Business Process Automation", "Revenue Growth", "Sales Automation", "Revenue Operations", "B2B Lead Generation", "GTM Strategy", "Operational Efficiency"]
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
      icon: <Workflow className="w-6 h-6" />,
      title: "Save Time & Automate Work",
      description: "Remove repetitive work, simplify day-to-day operations, and connect the tools you already use. We identify what is worth automating and build it for you.",
      link: "/ai-automation",
      cta: "See Automation Solutions"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increase Revenue & Conversion",
      description: "Use AI and structured growth systems to improve prospecting, follow-up, lead qualification, conversion, and commercial performance.",
      link: "/sales",
      cta: "Explore Revenue Systems"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Optimise & Scale the Business",
      description: "Improve processes, margins, decision-making and growth without adding unnecessary complexity or proportional headcount.",
      link: "/advisory",
      cta: "Explore Strategic Advisory"
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
        <title>AI Automation & Consulting for Small Businesses | NLG Consulting</title>
        <meta name="description" content="Done-for-you AI automation and consulting for small and growing businesses. Save time, improve operations and grow revenue — or talk to the NLG website and let it guide you." />
        <link rel="canonical" href="https://www.nlgconsulting.co/" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/" />
        <meta property="og:title" content="AI Automation & Consulting for Small Businesses | NLG Consulting" />
        <meta property="og:description" content="Tell us what your business needs — or talk directly to the website. NLG builds AI automation, workflows and growth systems around real business outcomes." />
        <meta property="og:image" content="https://www.nlgconsulting.co/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation & Consulting for Small Businesses | NLG Consulting" />
        <meta name="twitter:description" content="Done-for-you AI automation and consulting — plus an NLG website you can talk to for instant guidance." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="hero-tech-grid relative overflow-hidden px-4 pb-16 pt-28 sm:pt-32 md:pb-20 md:pt-40">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-primary/[0.035] to-transparent" aria-hidden="true" />
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div className="min-w-0 text-center lg:text-left">
                <Badge variant="outline" className="max-w-full px-3 py-2 text-[10px] tracking-[0.12em] sm:px-4 sm:text-xs sm:tracking-wide uppercase">
                  AI & Automation · Growth · Business Performance
                </Badge>
                <h1 className="mt-6 text-foreground leading-[1.06] sm:mt-7">
                  Make AI Work for Your Business —{" "}
                  <span className="text-gradient">Without Becoming an AI Expert</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl lg:mx-0">
                  Tell us how your business works and where you want to go. We identify where AI, automation and modern growth systems can save time, reduce costs, increase revenue or improve performance — then we implement it for you.
                </p>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
                  Built for small businesses, independent professionals and growing companies — with specialist expertise in FinTech, PropTech, SaaS and B2B.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Button asChild size="lg" className="w-full text-sm sm:w-auto sm:text-base">
                    <button type="button" onClick={() => window.dispatchEvent(new Event("nlg:open-voice-guide"))}>
                      Talk to the Website <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full text-sm sm:w-auto sm:text-base">
                    <Link to="/book">Book a Strategy Call</Link>
                  </Button>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm lg:justify-start">
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-secondary" /> Business-first</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-secondary" /> Built for you</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-secondary" /> Measurable outcomes</span>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[520px] lg:max-w-none">
                <BusinessValueEngine lang="en" />
              </div>
            </div>
          </div>
        </section>

        {/* Voice-first differentiator — visible content for people and search engines */}
        <section className="border-y border-border/70 bg-background px-4 py-12 sm:py-14">
          <div className="container mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">A Website You Can Talk To</p>
              <h2 className="mb-3 text-2xl font-semibold md:text-3xl">Don’t search the site. Tell it what you need.</h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Describe your business and what you want to improve using your voice. NLG interprets the request and guides you directly to the most relevant AI consulting, automation, sales or growth page. Prefer not to speak? Type instead.
              </p>
            </div>
            <Button type="button" variant="outline" className="w-full md:w-auto" onClick={() => window.dispatchEvent(new Event("nlg:open-voice-guide"))}>
              <Mic className="mr-2 h-4 w-4" /> Talk to the Website
            </Button>
          </div>
        </section>

        {/* AI Systems Cluster */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-14">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">Start With the Business Outcome</p>
              <h2 className="mb-4">What Do You Want to Improve?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You do not need to choose an AI tool or understand the technical stack. Start with the outcome you want — we determine where technology creates the most value.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusters.map((cluster, i) => (
                <Link to={cluster.link} key={i} className="group">
                  <Card className="h-full border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
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
            <h2 className="mb-6">You Shouldn't Have to Understand AI to Benefit From It</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
              When you need to get somewhere, you buy a car — you do not spend weeks learning how to build the engine. AI and automation should work the same way.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Do not lose days researching tools, watching tutorials and trying to connect complex systems yourself. You focus on your business. We identify the opportunities, choose the right technology, build the system and make it useful.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                { title: "Business Value First", desc: "We start with time, cost, revenue, margin and performance — not with a fashionable AI tool. Technology is selected only when it creates measurable value." },
                { title: "Built for Non-Technical Teams", desc: "You explain how your business works. We translate that into practical automation and AI systems without requiring you to learn the technical complexity." },
                { title: "From Opportunity to Implementation", desc: "We do not stop at recommendations. We design, build, connect and launch the systems — then help you measure what they improve." }
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

        {/* Automation Sprint CTA */}
        <section className="relative overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:py-20">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_28%),radial-gradient(circle_at_80%_70%,hsl(var(--secondary))_0,transparent_24%)]" aria-hidden="true" />
          <div className="container-tight relative text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] opacity-80 sm:text-sm">A Simple First Step</p>
            <h2 className="mb-4 text-primary-foreground">Start With One Real Workflow</h2>
            <p className="mx-auto mb-4 max-w-2xl text-base opacity-90 sm:text-lg">
              Our AI Automation Sprint is designed for one clearly defined workflow. We map the process, choose the right tools, build a working first version where access allows, and document the path to production.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-sm opacity-80">
              No long commitment. No need to become an AI specialist first. Start small, measure the value, then expand only if it makes sense.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" variant="secondary" className="w-full text-sm sm:w-auto sm:text-base">
                <Link to="/ai-automation">
                  Explore the Automation Sprint <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="w-full text-sm sm:w-auto sm:text-base">
                <Link to="/book">Discuss Your Workflow</Link>
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
            <h2 className="mb-4">Where Could AI Create More Value in Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              You do not need a broken process to benefit from AI. We can help you find opportunities to save time, improve margins, generate more revenue, strengthen customer experience or simply operate better.
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
