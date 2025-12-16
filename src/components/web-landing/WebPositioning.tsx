import { Award, Zap, Shield, Code, Sparkles } from "lucide-react";

const WebPositioning = () => {
  const highlights = [
    { icon: Zap, title: "Rapidité exceptionnelle", description: "Sites livrés en quelques jours, parfois 48h", color: "from-yellow-500 to-orange-500" },
    { icon: Award, title: "Expertise pointue", description: "Équipe spécialisée en développement web", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Méthode rigoureuse", description: "Process cadré, sécurisé et transparent", color: "from-blue-500 to-cyan-500" },
    { icon: Code, title: "Code source fourni", description: "Vous êtes propriétaire à 100 %", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Pourquoi nous choisir</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Création de site internet rapide et professionnelle
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl p-6 md:p-10 mb-12 border border-border shadow-xl relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
            
            <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
              <strong className="text-foreground text-xl">NLG Consulting</strong> fait partie des équipes les plus rapides et les plus pointues en France 
              pour la création de sites internet professionnels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4 relative z-10">
              Nous travaillons vite, <span className="text-primary font-semibold">très vite</span>, mais toujours avec méthode, rigueur et exigence. 
              Chaque projet est cadré, sécurisé et livré dans les délais annoncés.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4 relative z-10">
              Nous sommes également <strong className="text-foreground">les seuls à fournir systématiquement le code source complet</strong> de votre site internet. 
              Vous êtes propriétaire à 100 %, sans dépendance technique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebPositioning;
