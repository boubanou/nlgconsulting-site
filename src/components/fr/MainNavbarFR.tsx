import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useUserRole } from "@/hooks/useUserRole";
import { useLanguage } from "@/hooks/useLanguage";

const MainNavbarFR = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hasAccess } = useUserRole();
  const { switchLanguageUrl } = useLanguage();

  const navLinks = [
    { label: "Accueil", to: "/fr" },
    { label: "À propos", to: "/fr/a-propos" },
    { label: "Ventures", to: "/fr/ventures" },
    { label: "Studio", to: "/fr/site-internet" },
    { label: "Vente", to: "/fr/vente" },
    { label: "Conseil", to: "/fr/conseil" },
    { label: "Contact", to: "/fr/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/fr" className="flex items-center">
            <img src="/logo.svg" alt="NLG Consulting" className="h-7 sm:h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            {hasAccess && (
              <Link to="/admin" className="text-sm text-foreground hover:text-primary transition-colors">
                BackOffice
              </Link>
            )}
            <Link to={switchLanguageUrl} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Globe className="w-4 h-4" /> EN
            </Link>
            <Button asChild size="sm">
              <Link to="/fr/rendez-vous">Réserver un appel</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            {hasAccess && (
              <Link to="/admin" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                BackOffice
              </Link>
            )}
            <Link to={switchLanguageUrl} className="block text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              🇬🇧 English
            </Link>
            <Button asChild className="w-full">
              <Link to="/fr/rendez-vous" onClick={() => setIsOpen(false)}>Réserver un appel</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavbarFR;
