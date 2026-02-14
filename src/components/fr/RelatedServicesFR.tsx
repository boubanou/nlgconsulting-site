import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Lightbulb, Rocket, Brain, DollarSign, Building2 } from "lucide-react";

type ServiceKey = "sales" | "web" | "advisory" | "ventures" | "marketing" | "ai-lead-generation" | "saas-monetization" | "go-to-market" | "proptech";

interface RelatedServicesFRProps {
  currentService: ServiceKey | "about" | "contact" | "book";
}

const services: Record<string, { title: string; description: string; icon: React.ReactNode; link: string; cta: string }> = {
  sales: { title: "Vente & BD", description: "15-30 rendez-vous B2B qualifiés par mois avec nos services SDR externalisés.", icon: <Target className="w-6 h-6" />, link: "/fr/vente", cta: "Découvrir les services SDR" },
  web: { title: "Studio Web", description: "Sites web professionnels optimisés conversion livrés en 72 heures.", icon: <Globe className="w-6 h-6" />, link: "/fr/site-internet", cta: "Lancer votre site" },
  advisory: { title: "Conseil Stratégique", description: "Accompagnement expert en go-to-market, monétisation et scaling.", icon: <Lightbulb className="w-6 h-6" />, link: "/fr/conseil", cta: "Obtenir des conseils" },
  ventures: { title: "Nos Ventures", description: "Plateformes PropTech, FinTech & Média que nous avons construites.", icon: <Rocket className="w-6 h-6" />, link: "/fr/ventures", cta: "Explorer le portfolio" },
  marketing: { title: "Marketing & PPC", description: "Campagnes PPC orientées ROI sur Google, Meta, LinkedIn et plus.", icon: <Target className="w-6 h-6" />, link: "/fr/marketing", cta: "Booster votre marketing" },
  "ai-lead-generation": { title: "Génération de Leads IA", description: "Prospection IA qui génère des rendez-vous qualifiés en automatique.", icon: <Brain className="w-6 h-6" />, link: "/fr/generation-leads-ia", cta: "Automatiser la prospection" },
  "saas-monetization": { title: "Monétisation SaaS", description: "Optimisez vos prix et votre modèle de revenus. ARPU +30-50%.", icon: <DollarSign className="w-6 h-6" />, link: "/fr/monetisation-saas", cta: "Optimiser vos prix" },
  "go-to-market": { title: "Stratégie Go-To-Market", description: "Lancez-vous sur de nouveaux marchés avec des frameworks éprouvés.", icon: <Globe className="w-6 h-6" />, link: "/fr/strategie-go-to-market", cta: "Planifier votre expansion" },
  proptech: { title: "Conseil PropTech", description: "Construisez et scalez vos plateformes immobilières technologiques.", icon: <Building2 className="w-6 h-6" />, link: "/fr/conseil-proptech", cta: "Construire votre plateforme" }
};

const RelatedServicesFR = ({ currentService }: RelatedServicesFRProps) => {
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
      case "sales": return "Complétez votre stack croissance";
      case "web": return "Accélérez vos résultats";
      case "advisory": return "De la stratégie à l'exécution";
      case "ventures": return "Travaillez avec nous";
      case "marketing": return "Accélérez votre croissance";
      case "ai-lead-generation": return "Amplifiez votre pipeline";
      case "saas-monetization": return "Maximisez vos revenus";
      case "go-to-market": return "Exécutez votre GTM";
      case "proptech": return "Construisez et scalez";
      case "about": return "Nos Services";
      case "contact": return "Comment pouvons-nous aider ?";
      case "book": return "Explorez nos services";
      default: return "Services connexes";
    }
  };

  const relatedServiceKeys = getRelatedServices();

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{getTitle()}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Découvrez comment nos services intégrés peuvent accélérer votre croissance.</p>
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

export default RelatedServicesFR;
