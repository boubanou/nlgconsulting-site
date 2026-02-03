import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Building2, 
  Rocket, 
  Globe, 
  TrendingUp, 
  Users, 
  Zap,
  CheckCircle,
  Star,
  Calendar,
  Phone
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
        "url": "https://nlgconsulting.co",
        "logo": "https://nlgconsulting.co/logo.svg",
        "description": "N.L.G. Consulting is a global Business, Tech & Growth Group building, operating and scaling platforms, brands and sales systems worldwide.",
        "founder": {
          "@type": "Person",
          "name": "Gregory Brenig",
          "jobTitle": "Founder & CEO"
        },
        "areaServed": "Worldwide",
        "knowsAbout": ["PropTech", "FinTech", "AI & Automation", "Media", "Business Development", "Blockchain"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" }
        ]
      }
    ]
  };

  const pillars = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Ventures & Brands",
      description: "Building and operating PropTech, FinTech, and Media platforms globally.",
      link: "/ventures"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Studio",
      description: "Revenue-ready websites and automation systems delivered in 72 hours.",
      link: "/web"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sales & BD",
      description: "Outbound systems, SDR teams, and pipeline infrastructure for growth.",
      link: "/sales"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advisory",
      description: "Strategic guidance on go-to-market, scaling, and tech transformation.",
      link: "/advisory"
    }
  ];

  const ventures = [
    { name: "Block Tech", type: "PropTech / FinTech SaaS", logo: "/brands/blocktech.png" },
    { name: "Business Legend", type: "Media & Podcast", logo: "/brands/businesslegend.png" }
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
        <title>B2B Lead Generation Agency | 15-30 Meetings/Month Guaranteed | NLG Consulting</title>
        <meta 
          name="description" 
          content="Scale your B2B pipeline with 15-30 qualified meetings per month. Websites in 72h, SDR systems & strategic advisory. Trusted by 50+ startups. Book free call." 
        />
        <meta name="keywords" content="B2B lead generation, outsourced SDR, sales development, qualified meetings, website 72 hours, strategic advisory, PropTech, FinTech, AI consulting" />
        <link rel="canonical" href="https://nlgconsulting.co/" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/" />
        <meta property="og:title" content="B2B Lead Generation Agency | 15-30 Meetings/Month | NLG Consulting" />
        <meta property="og:description" content="Scale your B2B pipeline with 15-30 qualified meetings per month. Websites in 72h, SDR systems & strategic advisory. Trusted by 50+ startups." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B2B Lead Generation Agency | 15-30 Meetings/Month | NLG Consulting" />
        <meta name="twitter:description" content="Scale your B2B pipeline with 15-30 qualified meetings per month. Websites in 72h, SDR systems & strategic advisory." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Global Business, Tech & Growth Group
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Building, Operating & Scaling<br />
                <span className="text-gradient">Platforms Worldwide</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                PropTech • FinTech • Media • AI & Automation • Blockchain • Sales Systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/book">
                    Start Growing Your Pipeline <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link to="/web">
                    Get Your Website in 72 Hours <Rocket className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                ⏱️ Limited slots available — We onboard only 3 new clients per month
              </p>
            </div>
          </div>
        </section>

        {/* What We Do - 4 Pillars */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A full-stack business group covering ventures, technology, sales, and strategy.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <Link to={pillar.link} key={i}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {pillar.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground text-sm">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ventures Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ventures & Brands</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Platforms we've built, operate, and scale across multiple industries.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ventures.map((venture, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                      <img src={venture.logo} alt={venture.name} className="h-12 w-auto object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{venture.name}</h3>
                      <p className="text-muted-foreground text-sm">{venture.type}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/ventures">View All Ventures <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Studio CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Launch Your Website in 72 Hours
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Revenue-ready websites with UX design, conversion copywriting, SEO, CRM, Stripe payments, and AI workflows—delivered fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/web">
                  View Packages <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="text-base px-8">
                <Link to="/book">Book a Call</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sales & BD */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Sales & Business Development</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Outbound lead generation, multichannel SDR systems, and CRM pipeline infrastructure to scale your revenue.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Lead Generation", "Multichannel Outbound", "SDR Systems", "CRM Pipelines", "AI Calling"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/sales">Book a Sales Audit <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary">15-30</div>
                    <div className="text-sm text-muted-foreground">Meetings / Month</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Channels</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                {["Go-to-Market", "Monetization", "Tech Strategy", "Scaling"].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="p-4 text-center">
                      <span className="font-medium">{item}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory & Strategy</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Strategic guidance for business structuring, go-to-market, AI & blockchain strategy, and global scaling.
                </p>
                <Button asChild>
                  <Link to="/advisory">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
              <p className="text-lg text-muted-foreground">
                We've worked with teams from leading companies worldwide
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">91 verified reviews</span>
              </div>
            </div>
            
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
              className="w-full mb-8"
            >
              <CarouselContent className="-ml-4">
                {logos.map((logo, i) => (
                  <CarouselItem key={i} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="rounded-2xl border bg-white/50 dark:bg-white/5 p-8 flex items-center justify-center h-28 hover:shadow-lg transition-all">
                      <img src={logo.src} alt={logo.alt} className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <p className="text-sm text-muted-foreground text-center italic">
              Logos represent companies where team members or partners have professional experience.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "NLG transformed our outbound strategy. We went from 0 to 20 qualified meetings per month.", name: "Tech Startup CEO", company: "Series A SaaS" },
                { quote: "The website was delivered in 3 days with Stripe, Calendly, and SEO—all working perfectly.", name: "Agency Founder", company: "Digital Agency" },
                { quote: "Their strategic advice on go-to-market was invaluable for our European expansion.", name: "VP Sales", company: "FinTech Scale-up" }
              ].map((testimonial, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a 15-minute strategy call to discuss your growth challenges.
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
