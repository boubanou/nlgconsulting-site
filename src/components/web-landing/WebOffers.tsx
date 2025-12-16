import { Check, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebOffers = () => {
  const offers = [
    {
      name: "Pack Starter",
      price: "749 €",
      originalPrice: "1099 €",
      deposit: "50 %",
      deliveryTime: "7 jours ouvrés",
      features: [
        "Site internet 3 à 4 pages",
        "Formulaire de contact intégré",
        "Structure SEO optimisée",
        "Meta title et meta description uniques par page",
        "Indexation Google",
        "Paramétrage du domaine et des DNS",
        "Code source fourni à la livraison",
      ],
      cta: "Valider l'acompte – Pack Starter",
      link: "https://payment.fractionalpropertyhub.com/b/3cI7sMcTrdbOgDWeI31ck03",
      popular: false,
    },
    {
      name: "Pack Intermédiaire",
      price: "999 €",
      originalPrice: "1499 €",
      deposit: "50 %",
      deliveryTime: "7 à 10 jours ouvrés",
      features: [
        "Site internet complet avec blog",
        "Intégration Calendly",
        "Gestion simple du contenu",
        "SEO avancé + meta tags",
        "Indexation Google",
        "Paramétrage domaine et DNS",
        "Code source fourni à la livraison",
      ],
      cta: "Valider l'acompte – Pack Intermédiaire",
      link: "https://payment.fractionalpropertyhub.com/b/14AaEY06FdbObjCgQb1ck04",
      popular: true,
    },
    {
      name: "Pack Pro",
      price: "Sur devis",
      originalPrice: null,
      deposit: null,
      deliveryTime: "Selon projet",
      features: [
        "E-commerce",
        "Développement sur mesure",
        "Applications et logiciels",
        "Automatisations avancées",
      ],
      cta: "Prendre rendez-vous",
      link: "https://calendly.com/greg-nlgconsulting/15min",
      popular: false,
      isCustom: true,
    },
  ];

  return (
    <section id="offres" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Des sites performants, optimisés pour Google
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez l'offre adaptée à vos besoins. Paiement sécurisé, livraison rapide, code source fourni.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className={`relative bg-card border rounded-2xl p-6 ${
                offer.popular 
                  ? "border-primary shadow-lg scale-105" 
                  : "border-border"
              }`}
            >
              {offer.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Populaire
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{offer.name}</h3>
                
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-3xl font-bold text-foreground">{offer.price}</span>
                  {offer.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">{offer.originalPrice}</span>
                  )}
                </div>
                
                {offer.deposit && (
                  <p className="text-sm text-muted-foreground">Acompte : {offer.deposit}</p>
                )}
                
                <p className="text-sm text-primary font-medium mt-2">
                  Délai : {offer.deliveryTime}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full gap-2 ${offer.popular ? "" : "variant-outline"}`}
                variant={offer.popular ? "default" : "outline"}
                onClick={() => window.open(offer.link, "_blank")}
              >
                {offer.isCustom ? <Calendar className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                {offer.cta}
              </Button>

              {!offer.isCustom && (
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Paiement sécurisé • Facture incluse
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebOffers;
