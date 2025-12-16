import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WebHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/web" className="flex items-center gap-2">
            <img src="/logo.svg" alt="NLG Consulting" className="h-8 w-auto" />
            <span className="font-semibold text-foreground hidden sm:inline">NLG Consulting</span>
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
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
              onClick={() => window.open("https://calendly.com/greg-nlgconsulting/15min", "_blank")}
            >
              Prendre rendez-vous
            </Button>
            <Button 
              size="sm"
              onClick={() => scrollToSection("#offres")}
            >
              Valider l'acompte
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                  >
                    {link.label}
                  </button>
                )
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    window.open("https://calendly.com/greg-nlgconsulting/15min", "_blank");
                    setMobileMenuOpen(false);
                  }}
                >
                  Prendre rendez-vous
                </Button>
                <Button 
                  size="sm"
                  onClick={() => scrollToSection("#offres")}
                >
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
