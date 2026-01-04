import { CreditCard, MessageSquare, Monitor, RefreshCw, Rocket, ArrowRight } from "lucide-react";

const WebMethodFR = () => {
  const steps = [
    {
      icon: CreditCard,
      number: "1",
      title: "Paiement de l'acompte",
      description: "Payez 50% de manière sécurisée via Stripe pour démarrer votre projet.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageSquare,
      number: "2",
      title: "Brief rapide (30 minutes)",
      description: "Discussion pour comprendre vos besoins, votre activité et vos objectifs.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Monitor,
      number: "3",
      title: "Première version en quelques jours",
      description: "Nous vous présentons une première version fonctionnelle de votre site.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: RefreshCw,
      number: "4",
      title: "Ajustements",
      description: "2 tours de révisions inclus pour un résultat parfait.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Rocket,
      number: "5",
      title: "Livraison finale",
      description: "Mise en ligne après paiement du solde. Code source fourni.",
      color: "from-primary to-primary/80",
    },
  ];

  return (
    <section id="methode" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            <span>Processus Simple</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Notre processus en 5 étapes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stratégie → Design & Développement → Lancement
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 via-orange-500 to-primary rounded-full" />
              
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="relative group">
                    {/* Number circle */}
                    <div className={`relative z-10 w-16 h-16 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="mt-6 text-center">
                      <div className={`w-10 h-10 mx-auto mb-3 bg-gradient-to-br ${step.color} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                        <step.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-2">{step.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-4">
                {/* Line connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-16 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
                )}
                
                {/* Number circle */}
                <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center font-bold text-lg text-white shadow-lg flex-shrink-0`}>
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
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

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.querySelector("#offres")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            Commencer maintenant
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebMethodFR;
