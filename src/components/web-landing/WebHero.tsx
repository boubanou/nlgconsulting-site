import { Shield, Lock, Code, Zap, CheckCircle, ArrowRight, Sparkles, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebHero = () => {
  const reassurancePoints = [
    { icon: Shield, text: "Paiement sécurisé par Stripe" },
    { icon: Lock, text: "Connexion HTTPS & SSL" },
    { icon: Code, text: "Code source fourni" },
    { icon: CheckCircle, text: "Aucun abonnement caché" },
    { icon: Zap, text: "Livraison en 48h à 7 jours" },
    { icon: Search, text: "SEO optimisé Google" },
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">rapide, sécurisé</span>{" "}
            et clé en main
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Nous concevons des sites internet performants, optimisés pour Google, 
            pensés pour générer des clients, avec un paiement en ligne 100 % sécurisé.
          </p>

          {/* Reassurance Points - 6 items in 2x3 grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-10 max-w-3xl mx-auto">
            {reassurancePoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 md:gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-3 md:p-4 text-left shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <point.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                <span className="text-xs md:text-sm text-foreground font-medium leading-tight">{point.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-8 h-auto min-h-[48px] py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group whitespace-normal text-center leading-snug"
              onClick={scrollToOffers}
            >
              <span className="flex items-center justify-center gap-2">
                Valider l'acompte (50 % – paiement sécurisé)
                <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </span>
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
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-primary" />
              Paiement sécurisé
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block" />
            <span>Facture incluse</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block" />
            <span>Code source fourni</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHero;