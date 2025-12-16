import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WebHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Nos offres", href: "#offres" },
    { label: "Notre méthode", href: "#methode" },
    { label: "Sécurité & confiance", href: "#securite" },
    { label: "Avis clients", href: "#avis" },
    { label: "FAQ", href: "#faq" },
    { label: "À propos", href: "https://nlgconsulting.co/about", external: true },
    { label: "Contact", href: "https://nlgconsulting.co/contact", external: true },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/web" className="flex items-center gap-2 group">
            <img src="/logo.svg" alt="NLG Consulting" className="h-8 w-auto group-hover:scale-105 transition-transform" />
            <span className="font-bold text-foreground hidden sm:inline">NLG Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-2 hover:bg-primary/5 hover:border-primary/50"
              onClick={() => window.open("https://calendly.com/greg-nlgconsulting/15min", "_blank")}
            >
              Prendre rendez-vous
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl gap-2"
              onClick={() => scrollToSection("#offres")}
            >
              <Zap className="w-4 h-4" />
              Valider l'acompte
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors py-3 px-4 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors py-3 px-4 rounded-lg text-left"
                  >
                    {link.label}
                  </button>
                )
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2 px-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    window.open("https://calendly.com/greg-nlgconsulting/15min", "_blank");
                    setMobileMenuOpen(false);
                  }}
                >
                  Prendre rendez-vous
                </Button>
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-primary/90 gap-2"
                  onClick={() => scrollToSection("#offres")}
                >
                  <Zap className="w-4 h-4" />
                  Valider l'acompte
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default WebHeader;
