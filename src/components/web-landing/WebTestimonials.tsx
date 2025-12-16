import { Star, Quote } from "lucide-react";

const WebTestimonials = () => {
  const testimonials = [
    {
      name: "Sophie M.",
      role: "Consultante indépendante",
      content: "Site livré très rapidement, travail sérieux et efficace. Paiement simple et sécurisé.",
      rating: 5,
      highlight: "Très rapidement",
    },
    {
      name: "Thomas R.",
      role: "Dirigeant PME",
      content: "Une équipe professionnelle et réactive. Le site était en ligne en moins de 48h.",
      rating: 5,
      highlight: "Moins de 48h",
    },
    {
      name: "Marie L.",
      role: "Coach en développement",
      content: "Rarement vu une telle rapidité avec un tel niveau de qualité. Code source fourni, tout est clair.",
      rating: 5,
      highlight: "Qualité exceptionnelle",
    },
    {
      name: "Pierre D.",
      role: "Entrepreneur",
      content: "Process transparent du début à la fin. Le site correspond exactement à mes attentes.",
      rating: 5,
      highlight: "Process transparent",
    },
  ];

  return (
    <section id="avis" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span>Avis vérifiés</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Avis clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Ils nous ont fait confiance pour la création de leur site internet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Highlight badge */}
              <div className="inline-flex items-center bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full mb-4">
                {testimonial.highlight}
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="flex items-center justify-center gap-2 mt-10 text-muted-foreground">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-bold">
                {["S", "T", "M", "P"][i]}
              </div>
            ))}
          </div>
          <span className="text-sm ml-2">+ de 50 clients satisfaits</span>
        </div>
      </div>
    </section>
  );
};

export default WebTestimonials;
