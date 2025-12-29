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
  BookOpen,
  Award,
  Building2,
  Users
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
        "description": "Learn about NLG Consulting, a global Business, Tech & Growth Group.",
        "url": "https://nlgconsulting.co/about"
      },
      {
        "@type": "Person",
        "name": "Gregory Brenig",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "NLG Consulting" },
        "knowsAbout": ["Real Estate", "Finance", "Technology", "Business Development"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://nlgconsulting.co/about" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>About NLG Consulting | Global Business, Tech & Growth Group</title>
        <meta 
          name="description" 
          content="NLG Consulting is a global holding, studio, and operator building platforms, brands, and sales systems worldwide. Founded by Gregory Brenig." 
        />
        <link rel="canonical" href="https://nlgconsulting.co/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/about" />
        <meta property="og:title" content="About NLG Consulting" />
        <meta property="og:description" content="A global Business, Tech & Growth Group building, operating and scaling platforms worldwide." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              About NLG
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Global Business, Tech & Growth Group
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              N.L.G. Consulting is more than a consulting firm—it's a holding company, studio, and operator building, launching, and scaling platforms, brands, and sales systems across the globe.
            </p>
          </div>
        </section>

        {/* What is NLG */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is NLG?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We operate at the intersection of technology, business development, and strategic growth. Our portfolio spans PropTech, FinTech, Media, and AI-driven automation.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Unlike traditional agencies, we don't just advise—we build, operate, and scale. Every venture and service is designed for execution-first results.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link to="/ventures">Our Ventures <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Globe className="w-6 h-6" />, label: "Worldwide Operations" },
                  { icon: <Rocket className="w-6 h-6" />, label: "Execution-First" },
                  { icon: <Building2 className="w-6 h-6" />, label: "Multi-Industry" },
                  { icon: <Target className="w-6 h-6" />, label: "Results-Driven" }
                ].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 text-primary">
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

        {/* Founder Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                {/* Founder photo placeholder - replace src with actual image */}
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/10 shadow-xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-muted/80">
                    <Users className="w-20 h-20 text-primary/40 mb-4" />
                    <p className="text-sm font-medium text-muted-foreground">Founder photo (Gregory Brenig)</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">Replace with uploaded image</p>
                  </div>
                  {/* Uncomment and add src when photo is available:
                  <img 
                    src="/founder-gregory-brenig.jpg" 
                    alt="Gregory Brenig - Founder & CEO of NLG Consulting" 
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
              <div className="md:col-span-3">
                <Badge variant="outline" className="mb-4">Founder</Badge>
                <h2 className="text-3xl font-bold mb-2">Gregory Brenig</h2>
                <p className="text-lg text-muted-foreground mb-6">Founder & CEO</p>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Gregory brings an international background spanning real estate, finance, and technology. With experience across Europe, North America, and the Middle East, he has built and scaled ventures from the ground up.
                  </p>
                  <p>
                    A builder by nature, Gregory focuses on execution, discipline, and professionalism. His approach combines strategic thinking with hands-on operational expertise.
                  </p>
                  <p>
                    Beyond business, Gregory is an author and media figure, contributing thought leadership on entrepreneurship, PropTech, and the future of work.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Real Estate", "FinTech", "PropTech", "Author", "Media"].map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <Button asChild>
                    <Link to="/book">Book a Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <Award className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              "Execution beats theory. We don't just strategize—we build, launch, and scale. Every day."
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Discipline", desc: "Rigorous processes and consistent execution." },
                { title: "Speed", desc: "Move fast, learn faster, deliver on time." },
                { title: "Excellence", desc: "World-class standards in everything we do." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-primary-foreground/10">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Build Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need a website, sales infrastructure, or strategic guidance—we're ready to execute.
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
