import { Shield, Lock, Code, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebHero = () => {
  const reassurancePoints = [
    { icon: Shield, text: "Paiement sécurisé par Stripe" },
    { icon: Lock, text: "Connexion HTTPS & certificats SSL" },
    { icon: Code, text: "Code source du site fourni systématiquement" },
    { icon: CheckCircle, text: "Aucun abonnement, aucun engagement caché" },
    { icon: Zap, text: "Livraison rapide (souvent en moins de 7 jours, parfois 48h)" },
  ];

  const scrollToOffers = () => {
    const element = document.querySelector("#offres");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Votre site internet professionnel, rapide, sécurisé et clé en main
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Nous concevons des sites internet performants, optimisés pour Google, 
            pensés pour générer des clients, avec un paiement en ligne 100 % sécurisé.
          </p>

          {/* Reassurance Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {reassurancePoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-3 text-left"
              >
                <point.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{point.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8"
              onClick={scrollToOffers}
            >
              Valider l'acompte (50 % – paiement sécurisé)
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base px-8"
              onClick={() => window.open("https://calendly.com/greg-nlgconsulting/15min", "_blank")}
            >
              Prendre rendez-vous
            </Button>
          </div>

          {/* Micro-copy */}
          <p className="text-sm text-muted-foreground mt-4">
            Paiement sécurisé • Facture incluse • Code source fourni
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebHero;
