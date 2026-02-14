import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useUserRole } from "@/hooks/useUserRole";
import { useLanguage } from "@/hooks/useLanguage";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hasAccess } = useUserRole();
  const { switchLanguageUrl } = useLanguage();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Ventures", to: "/ventures" },
    { label: "Studio", to: "/web" },
    { label: "Sales", to: "/sales" },
    { label: "Advisory", to: "/advisory" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
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
              <Globe className="w-4 h-4" /> FR
            </Link>
            <Button asChild size="sm">
              <Link to="/book">Book a Call</Link>
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
              🇫🇷 Français
            </Link>
            <Button asChild className="w-full">
              <Link to="/book" onClick={() => setIsOpen(false)}>Book a Call</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavbar;
