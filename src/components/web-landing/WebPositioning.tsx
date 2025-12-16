import { Award, Zap, Shield, Code } from "lucide-react";

const WebPositioning = () => {
  const highlights = [
    { icon: Zap, title: "Rapidité exceptionnelle", description: "Sites livrés en quelques jours, parfois 48h" },
    { icon: Award, title: "Expertise pointue", description: "Équipe spécialisée en développement web" },
    { icon: Shield, title: "Méthode rigoureuse", description: "Process cadré, sécurisé et transparent" },
    { icon: Code, title: "Code source fourni", description: "Vous êtes propriétaire à 100 %" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Création de site internet rapide et professionnelle
          </h2>
          
          <div className="bg-muted/30 rounded-2xl p-6 md:p-8 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">NLG Consulting</strong> fait partie des équipes les plus rapides et les plus pointues en France 
              pour la création de sites internet professionnels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Nous travaillons vite, très vite, mais toujours avec méthode, rigueur et exigence. 
              Chaque projet est cadré, sécurisé et livré dans les délais annoncés.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Nous sommes également <strong className="text-foreground">les seuls à fournir systématiquement le code source complet</strong> de votre site internet. 
              Vous êtes propriétaire à 100 %, sans dépendance technique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
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
