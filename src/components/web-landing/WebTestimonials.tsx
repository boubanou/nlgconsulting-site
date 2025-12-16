import { Star } from "lucide-react";

const WebTestimonials = () => {
  const testimonials = [
    {
      name: "Sophie M.",
      role: "Consultante indépendante",
      content: "Site livré très rapidement, travail sérieux et efficace. Paiement simple et sécurisé.",
      rating: 5,
    },
    {
      name: "Thomas R.",
      role: "Dirigeant PME",
      content: "Une équipe professionnelle et réactive. Le site était en ligne en moins de 48h.",
      rating: 5,
    },
    {
      name: "Marie L.",
      role: "Coach en développement",
      content: "Rarement vu une telle rapidité avec un tel niveau de qualité. Code source fourni, tout est clair.",
      rating: 5,
    },
    {
      name: "Pierre D.",
      role: "Entrepreneur",
      content: "Process transparent du début à la fin. Le site correspond exactement à mes attentes.",
      rating: 5,
    },
  ];

  return (
    <section id="avis" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
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
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebTestimonials;
