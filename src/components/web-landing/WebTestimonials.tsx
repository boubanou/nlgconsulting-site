import { Star, Quote } from "lucide-react";

const WebTestimonials = () => {
  const testimonials = [
    {
      name: "Sophie M.",
      role: "Independent Consultant",
      content: "Website delivered very quickly, serious and efficient work. Simple and secure payment.",
      rating: 5,
      highlight: "Very fast",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Thomas R.",
      role: "SMB Director",
      content: "A professional and responsive team. The website was live in less than 48 hours.",
      rating: 5,
      highlight: "Under 48h",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Marie L.",
      role: "Development Coach",
      content: "Rarely seen such speed with this level of quality. Source code provided, everything is clear.",
      rating: 5,
      highlight: "Exceptional quality",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Pierre D.",
      role: "Entrepreneur",
      content: "Transparent process from start to finish. The website matches exactly my expectations.",
      rating: 5,
      highlight: "Transparent process",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section id="avis" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span>Verified Reviews</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Client Reviews
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            They trusted us for their professional website creation
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index} 
              className="relative bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
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
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-foreground mb-5 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <footer className="pt-4 border-t border-border flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={`Photo of ${testimonial.name}`}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary/20"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="flex items-center justify-center gap-2 mt-10 text-muted-foreground">
          <div className="flex -space-x-2">
            {testimonials.map((t, i) => (
              <img 
                key={i} 
                src={t.avatar} 
                alt=""
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
                loading="lazy"
              />
            ))}
          </div>
          <span className="text-sm ml-2">50+ satisfied clients</span>
        </div>
      </div>
    </section>
  );
};

export default WebTestimonials;