import { Award, Zap, Shield, Code, Sparkles, Palette, FileText, BarChart3, Settings } from "lucide-react";

const WebPositioning = () => {
  const highlights = [
    { icon: Zap, title: "72h Delivery", description: "Websites delivered in days", color: "from-yellow-500 to-orange-500" },
    { icon: Palette, title: "UX/UI Design", description: "Modern, high-performance interfaces", color: "from-purple-500 to-pink-500" },
    { icon: FileText, title: "Copywriting", description: "Conversion-optimized text", color: "from-blue-500 to-cyan-500" },
    { icon: Code, title: "Source Code Provided", description: "100% ownership", color: "from-emerald-500 to-teal-500" },
  ];

  const services = [
    "Professional UX/UI Design",
    "Conversion-focused copywriting",
    "Optimized SEO foundations",
    "CRM & automation integration",
    "Stripe, Calendly, forms",
    "Integrated AI workflows",
    "Analytics & tracking",
    "Technical support included",
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>NLG Studio</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Professional websites, ready to generate revenue
            </h2>
          </header>
          
          <article className="bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl p-6 md:p-10 mb-12 border border-border shadow-xl relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed relative z-10">
              <strong className="text-foreground text-lg md:text-xl">NLG Studio</strong> is the web division of NLG Consulting, 
              specialized in creating high commercial performance websites.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4 relative z-10">
              We deliver <span className="text-primary font-semibold">turnkey websites in under 72 hours</span>, 
              with UX/UI design, copywriting, SEO, CRM, automations, and integrated analytics.
            </p>
            
            {/* Services grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 relative z-10">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-6 relative z-10">
              <strong className="text-foreground">NLG retains 100% of the source code</strong> and provides it to you upon delivery. 
              No dependencies, no hidden subscriptions.
            </p>
          </article>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-4 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 min-h-[160px] md:min-h-[180px] flex flex-col justify-center"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebPositioning;