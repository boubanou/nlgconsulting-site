import { Shield, Lock, Code, Zap, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
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
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Sites livrés en moins de 7 jours</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Votre site internet professionnel,{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-primary/70">rapide, sécurisé</span>{" "}
            et clé en main
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Nous concevons des sites internet performants, optimisés pour Google, 
            pensés pour générer des clients, avec un paiement en ligne 100 % sécurisé.
          </p>

          {/* Reassurance Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {reassurancePoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-left shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <point.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-sm text-foreground font-medium">{point.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
              onClick={scrollToOffers}
            >
              Valider l'acompte (50 % – paiement sécurisé)
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
              onClick={() => window.open("https://calendly.com/greg-nlgconsulting/15min", "_blank")}
            >
              Prendre rendez-vous
            </Button>
          </div>

          {/* Micro-copy */}
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-primary" />
              Paiement sécurisé
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Facture incluse</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Code source fourni</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHero;
