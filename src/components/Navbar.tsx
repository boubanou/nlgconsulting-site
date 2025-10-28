import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useUserRole } from "@/hooks/useUserRole";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { hasAccess } = useUserRole();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt={t("brand.nlgConsulting")} className="h-7 sm:h-8 w-auto" loading="eager" decoding="async" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              {t("nav.services")}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>
            {hasAccess && (
              <Link to="/admin" className="text-foreground hover:text-primary transition-colors">
                BackOffice
              </Link>
            )}
            <LanguageSwitcher />
            <Button asChild>
              <Link to="/book">{t("nav.book")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/services"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            {hasAccess && (
              <Link
                to="/admin"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                BackOffice
              </Link>
            )}
            <Button asChild className="w-full">
              <Link to="/book" onClick={() => setIsOpen(false)}>
                {t("nav.book")}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
