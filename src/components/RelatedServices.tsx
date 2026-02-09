import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Lightbulb, Rocket } from "lucide-react";

interface RelatedServicesProps {
  currentService: "sales" | "web" | "advisory" | "ventures" | "about" | "contact" | "book" | "marketing";
}

const services = {
  sales: {
    title: "Sales & BD",
    description: "15-30 qualified B2B meetings per month with our outsourced SDR services.",
    icon: <Target className="w-6 h-6" />,
    link: "/sales",
    cta: "Learn about SDR services"
  },
  web: {
    title: "Web Studio",
    description: "Professional, conversion-ready websites delivered in 72 hours.",
    icon: <Globe className="w-6 h-6" />,
    link: "/web",
    cta: "Launch your website"
  },
  advisory: {
    title: "Strategic Advisory",
    description: "Expert guidance on go-to-market, monetization, and scaling.",
    icon: <Lightbulb className="w-6 h-6" />,
    link: "/advisory",
    cta: "Get strategic advice"
  },
  ventures: {
    title: "Our Ventures",
    description: "PropTech, FinTech & Media platforms we've built and scaled.",
    icon: <Rocket className="w-6 h-6" />,
    link: "/ventures",
    cta: "Explore portfolio"
  },
  marketing: {
    title: "Marketing & PPC",
    description: "ROI-driven PPC campaigns across Google, Meta, LinkedIn & more.",
    icon: <Target className="w-6 h-6" />,
    link: "/marketing",
    cta: "Boost your marketing"
  }
};

const RelatedServices = ({ currentService }: RelatedServicesProps) => {
  // Define which services to show based on current page
  const getRelatedServices = () => {
    switch (currentService) {
      case "sales":
        return ["marketing", "web", "advisory"];
      case "web":
        return ["sales", "marketing", "advisory"];
      case "advisory":
        return ["sales", "marketing", "web"];
      case "ventures":
        return ["sales", "marketing", "web"];
      case "marketing":
        return ["sales", "web", "advisory"];
      case "about":
        return ["sales", "marketing", "web"];
      case "contact":
        return ["sales", "marketing", "web"];
      case "book":
        return ["sales", "marketing", "web"];
      default:
        return ["sales", "marketing", "web"];
    }
  };

  const relatedServiceKeys = getRelatedServices();

  // Title based on current page
  const getTitle = () => {
    switch (currentService) {
      case "sales":
        return "Complete Your Growth Stack";
      case "web":
        return "Accelerate Your Results";
      case "advisory":
        return "From Strategy to Execution";
      case "ventures":
        return "Work With Us";
      case "marketing":
        return "Grow Even Faster";
      case "about":
        return "Our Services";
      case "contact":
        return "How Can We Help?";
      case "book":
        return "Explore Our Services";
      default:
        return "Related Services";
    }
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{getTitle()}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our integrated services can help you grow faster.
          </p>
        </div>
        <div className={`grid gap-6 ${relatedServiceKeys.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'}`}>
          {relatedServiceKeys.map((key) => {
            const service = services[key as keyof typeof services];
            return (
              <Card key={key} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={service.link}>
                      {service.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
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
