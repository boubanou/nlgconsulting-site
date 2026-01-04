import { Check, Calendar, ExternalLink, Sparkles, Zap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebOffersFR = () => {
  const offers = [
    {
      name: "Pack Starter",
      price: "749€",
      originalPrice: "1 099€",
      deposit: "50%",
      deliveryTime: "7 jours ouvrés",
      features: [
        "Site web 3-4 pages",
        "Formulaire de contact intégré",
        "Structure SEO optimisée",
        "Meta title & description",
        "Indexation Google",
        "Configuration domaine & DNS",
        "Code source fourni",
      ],
      cta: "Payer l'acompte – Pack Starter",
      link: "https://payment.fractionalpropertyhub.com/b/3cI7sMcTrdbOgDWeI31ck03",
      popular: false,
      gradient: "from-slate-500 to-slate-600",
    },
    {
      name: "Pack Intermédiaire",
      price: "999€",
      originalPrice: "1 499€",
      deposit: "50%",
      deliveryTime: "7-10 jours ouvrés",
      features: [
        "Site complet avec blog",
        "Intégration Calendly",
        "Gestion de contenu simple",
        "SEO avancé + balises meta",
        "Indexation Google",
        "Configuration domaine & DNS",
        "Code source fourni",
      ],
      cta: "Payer l'acompte – Pack Intermédiaire",
      link: "https://payment.fractionalpropertyhub.com/b/14AaEY06FdbObjCgQb1ck04",
      popular: true,
      gradient: "from-primary to-primary/80",
    },
    {
      name: "Pack Pro",
      price: "Sur devis",
      originalPrice: null,
      deposit: null,
      deliveryTime: "Selon le projet",
      features: [
        "E-commerce complet",
        "Développement sur mesure",
        "Applications web & logiciels",
        "Automatisations avancées",
        "Intégrations API tierces",
        "Support technique dédié",
      ],
      description: "Pour les projets complexes nécessitant une approche personnalisée. Discutons de vos besoins spécifiques lors d'un appel découverte gratuit.",
      cta: "Réserver un appel",
      link: "https://calendly.com/greg-nlgconsulting/15min",
      popular: false,
      isCustom: true,
      gradient: "from-secondary to-secondary/80",
    },
  ];

  return (
    <section id="offres" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 text-secondary" />
            <span>Offres Exclusives</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sites web haute performance, optimisés pour Google
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez l'offre adaptée à vos besoins. Paiement sécurisé, livraison rapide, code source fourni.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className={`relative bg-card border rounded-2xl p-5 md:p-6 lg:p-8 transition-all duration-500 hover:shadow-2xl group flex flex-col ${
                offer.popular 
                  ? "border-primary shadow-xl shadow-primary/10 md:scale-105 z-20" 
                  : "border-border hover:border-primary/30 hover:-translate-y-2 z-10"
              }`}
            >
              {/* Popular badge - Fixed z-index and positioning */}
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-bold px-5 py-2 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <Sparkles className="w-4 h-4" />
                  Populaire
                </div>
              )}

              {/* Header gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${offer.gradient}`} />

              <div className="text-center mb-5 md:mb-6 pt-2">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{offer.name}</h3>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className={`text-3xl md:text-4xl font-bold ${offer.popular ? "text-primary" : "text-foreground"}`}>
                    {offer.price}
                  </span>
                  {offer.originalPrice && (
                    <span className="text-base md:text-lg text-muted-foreground line-through">{offer.originalPrice}</span>
                  )}
                </div>
                
                {offer.originalPrice && (
                  <div className="inline-flex items-center bg-green-500/10 text-green-600 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    Économisez {parseInt(offer.originalPrice.replace(/[^0-9]/g, '')) - parseInt(offer.price.replace(/[^0-9]/g, ''))}€
                  </div>
                )}
                
                {offer.deposit && (
                  <p className="text-sm text-muted-foreground">Acompte : {offer.deposit}</p>
                )}
                
                <p className="text-sm text-primary font-medium mt-2 flex items-center justify-center gap-1">
                  <Zap className="w-4 h-4" />
                  Livraison : {offer.deliveryTime}
                </p>
              </div>

              {/* Custom description for Pack Pro */}
              {offer.description && (
                <p className="text-sm text-muted-foreground text-center mb-4 px-2 leading-relaxed">
                  {offer.description}
                </p>
              )}

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 md:gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      offer.popular ? "bg-primary/10" : "bg-muted"
                    }`}>
                      <Check className={`w-3 h-3 ${offer.popular ? "text-primary" : "text-foreground"}`} />
                    </div>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button 
                  className={`w-full gap-2 transition-all duration-300 h-auto min-h-[44px] py-3 px-4 whitespace-normal leading-snug ${
                    offer.popular 
                      ? "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl" 
                      : ""
                  }`}
                  variant={offer.popular ? "default" : "outline"}
                  size="lg"
                  onClick={() => window.open(offer.link, "_blank")}
                >
                  {offer.isCustom ? <Calendar className="w-4 h-4 flex-shrink-0" /> : <ExternalLink className="w-4 h-4 flex-shrink-0" />}
                  <span className="text-sm md:text-base text-center">{offer.cta}</span>
                </Button>

                {!offer.isCustom && (
                  <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-green-500" />
                    Paiement sécurisé
                    <span className="w-1 h-1 rounded-full bg-green-500" />
                    Facture incluse
                  </p>
                )}

                {offer.isCustom && (
                  <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-2">
                    <Briefcase className="w-3 h-3" />
                    Appel découverte gratuit de 15 min
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebOffersFR;
