import { CreditCard, MessageSquare, Monitor, RefreshCw, Rocket } from "lucide-react";

const WebMethod = () => {
  const steps = [
    {
      icon: CreditCard,
      number: "1",
      title: "Paiement sécurisé de l'acompte",
      description: "Réglez 50 % en toute sécurité via Stripe pour démarrer votre projet.",
    },
    {
      icon: MessageSquare,
      number: "2",
      title: "Brief rapide (30 minutes)",
      description: "Échange pour comprendre vos besoins, votre activité et vos objectifs.",
    },
    {
      icon: Monitor,
      number: "3",
      title: "Première version sous quelques jours",
      description: "Nous vous présentons une première version fonctionnelle de votre site.",
    },
    {
      icon: RefreshCw,
      number: "4",
      title: "Ajustements",
      description: "2 séries de corrections incluses pour un résultat parfait.",
    },
    {
      icon: Rocket,
      number: "5",
      title: "Livraison finale",
      description: "Mise en ligne après paiement du solde. Code source fourni.",
    },
  ];

  return (
    <section id="methode" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Notre méthode
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un process simple, rapide et transparent pour votre site internet
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Number circle */}
                  <div className="relative z-10 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 bg-card border border-border rounded-xl p-5 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  } md:w-[calc(50%-3rem)]`}>
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebMethod;
