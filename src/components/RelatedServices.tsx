import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Lightbulb, Rocket, Brain, DollarSign, Building2 } from "lucide-react";

type ServiceKey = "sales" | "web" | "advisory" | "ventures" | "marketing" | "ai-lead-generation" | "saas-monetization" | "go-to-market" | "proptech";

interface RelatedServicesProps {
  currentService: ServiceKey | "about" | "contact" | "book";
}

const services: Record<string, { title: string; description: string; icon: React.ReactNode; link: string; cta: string }> = {
  sales: { title: "Sales & BD", description: "15-30 qualified B2B meetings per month with our outsourced SDR services.", icon: <Target className="w-6 h-6" />, link: "/sales", cta: "Learn about SDR services" },
  web: { title: "Web Studio", description: "Professional, conversion-ready websites delivered in 72 hours.", icon: <Globe className="w-6 h-6" />, link: "/web", cta: "Launch your website" },
  advisory: { title: "Strategic Advisory", description: "Expert guidance on go-to-market, monetization, and scaling.", icon: <Lightbulb className="w-6 h-6" />, link: "/advisory", cta: "Get strategic advice" },
  ventures: { title: "Our Ventures", description: "PropTech, FinTech & Media platforms we've built and scaled.", icon: <Rocket className="w-6 h-6" />, link: "/ventures", cta: "Explore portfolio" },
  marketing: { title: "Marketing & PPC", description: "ROI-driven PPC campaigns across Google, Meta, LinkedIn & more.", icon: <Target className="w-6 h-6" />, link: "/marketing", cta: "Boost your marketing" },
  "ai-lead-generation": { title: "AI Lead Generation", description: "AI-powered prospecting that books qualified meetings on autopilot.", icon: <Brain className="w-6 h-6" />, link: "/ai-lead-generation", cta: "Automate prospecting" },
  "saas-monetization": { title: "SaaS Monetization", description: "Fix your pricing and revenue model to increase ARPU 30-50%.", icon: <DollarSign className="w-6 h-6" />, link: "/saas-monetization", cta: "Fix your pricing" },
  "go-to-market": { title: "Go-To-Market Strategy", description: "Launch in new markets without burning cash. Proven GTM frameworks.", icon: <Globe className="w-6 h-6" />, link: "/go-to-market", cta: "Plan your expansion" },
  proptech: { title: "PropTech Consulting", description: "Build and scale real estate technology platforms.", icon: <Building2 className="w-6 h-6" />, link: "/proptech-consulting", cta: "Build your platform" }
};

const RelatedServices = ({ currentService }: RelatedServicesProps) => {
  const getRelatedServices = (): string[] => {
    switch (currentService) {
      case "sales": return ["ai-lead-generation", "go-to-market", "marketing"];
      case "web": return ["sales", "marketing", "advisory"];
      case "advisory": return ["saas-monetization", "sales", "proptech"];
      case "ventures": return ["proptech", "sales", "advisory"];
      case "marketing": return ["sales", "go-to-market", "web"];
      case "ai-lead-generation": return ["sales", "go-to-market", "marketing"];
      case "saas-monetization": return ["advisory", "go-to-market", "proptech"];
      case "go-to-market": return ["sales", "marketing", "saas-monetization"];
      case "proptech": return ["saas-monetization", "ventures", "advisory"];
      case "about": return ["sales", "advisory", "proptech"];
      case "contact": return ["sales", "web", "advisory"];
      case "book": return ["sales", "ai-lead-generation", "advisory"];
      default: return ["sales", "advisory", "web"];
    }
  };

  const getTitle = () => {
    switch (currentService) {
      case "sales": return "Complete Your Growth Stack";
      case "web": return "Accelerate Your Results";
      case "advisory": return "From Strategy to Execution";
      case "ventures": return "Work With Us";
      case "marketing": return "Grow Even Faster";
      case "ai-lead-generation": return "Amplify Your Pipeline";
      case "saas-monetization": return "Maximize Your Revenue";
      case "go-to-market": return "Execute Your GTM";
      case "proptech": return "Build & Scale Faster";
      case "about": return "Our Services";
      case "contact": return "How Can We Help?";
      case "book": return "Explore Our Services";
      default: return "Related Services";
    }
  };

  const relatedServiceKeys = getRelatedServices();

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{getTitle()}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Discover how our integrated services can help you grow faster.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedServiceKeys.map((key) => {
            const service = services[key];
            if (!service) return null;
            return (
              <Card key={key} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={service.link}>{service.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
