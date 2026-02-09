import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Lightbulb, Rocket } from "lucide-react";

interface RelatedServicesFRProps {
  currentService: "sales" | "web" | "advisory" | "ventures" | "about" | "contact" | "book" | "marketing";
}

const services = {
  sales: {
    title: "Vente & BD",
    description: "15-30 rendez-vous B2B qualifiés par mois avec nos services SDR externalisés.",
    icon: <Target className="w-6 h-6" />,
    link: "/fr/vente",
    cta: "Découvrir les services SDR"
  },
  web: {
    title: "Studio Web",
    description: "Sites web professionnels optimisés conversion livrés en 72 heures.",
    icon: <Globe className="w-6 h-6" />,
    link: "/fr/site-internet",
    cta: "Lancer votre site"
  },
  advisory: {
    title: "Conseil Stratégique",
    description: "Accompagnement expert en go-to-market, monétisation et scaling.",
    icon: <Lightbulb className="w-6 h-6" />,
    link: "/fr/conseil",
    cta: "Obtenir des conseils"
  },
  ventures: {
    title: "Nos Ventures",
    description: "Plateformes PropTech, FinTech & Média que nous avons construites.",
    icon: <Rocket className="w-6 h-6" />,
    link: "/fr/ventures",
    cta: "Explorer le portfolio"
  },
  marketing: {
    title: "Marketing & PPC",
    description: "Campagnes PPC orientées ROI sur Google, Meta, LinkedIn et plus.",
    icon: <Target className="w-6 h-6" />,
    link: "/fr/marketing",
    cta: "Booster votre marketing"
  }
};

const RelatedServicesFR = ({ currentService }: RelatedServicesFRProps) => {
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

  const getTitle = () => {
    switch (currentService) {
      case "sales":
        return "Complétez votre stack croissance";
      case "web":
        return "Accélérez vos résultats";
      case "advisory":
        return "De la stratégie à l'exécution";
      case "ventures":
        return "Travaillez avec nous";
      case "marketing":
        return "Accélérez votre croissance";
      case "about":
        return "Nos Services";
      case "contact":
        return "Comment pouvons-nous aider ?";
      case "book":
        return "Explorez nos services";
      default:
        return "Services connexes";
    }
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{getTitle()}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nos services intégrés peuvent accélérer votre croissance.
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

export default RelatedServicesFR;
