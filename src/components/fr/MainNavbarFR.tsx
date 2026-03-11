import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useUserRole } from "@/hooks/useUserRole";
import { useLanguage } from "@/hooks/useLanguage";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const solutionsData = {
  aiAutomation: {
    title: "IA & Automatisation",
    links: [
      { label: "Conseil IA", to: "/fr/conseil-ia" },
      { label: "Automatisation IA", to: "/fr/automation-ia" },
      { label: "Agents IA", to: "/fr/agents-ia-entreprise" },
      { label: "Automation Marketing IA", to: "/fr/automation-marketing-ia" },
      { label: "Automation Commerciale IA", to: "/fr/automation-commerciale-ia" },
      { label: "Conseil Prompt Engineering", to: "/fr/conseil-prompt-engineering" },
      { label: "Implémentation IA Externalisée", to: "/fr/implementation-ia-externalisee" },
    ],
  },
  salesGrowth: {
    title: "Vente & Croissance",
    links: [
      { label: "Vente & BD", to: "/fr/vente" },
      { label: "SDR Externalisé", to: "/fr/sdr-externalise" },
      { label: "Prise de Rendez-vous", to: "/fr/prise-rendez-vous" },
      { label: "Conseil Go-to-Market", to: "/fr/go-to-market" },
      { label: "Génération de Leads IA", to: "/fr/generation-leads-ia" },
    ],
  },
  advisory: {
    title: "Conseil & Formation",
    links: [
      { label: "Advisory", to: "/fr/advisory" },
      { label: "Formation IA pour Équipes", to: "/fr/formation-ia-entreprise" },
      { label: "Consultant IA Fractionnel", to: "/fr/consultant-ia-fractionnel" },
    ],
  },
};

const industriesData = [
  { label: "SaaS", to: "/fr/ia-pour-saas" },
  { label: "FinTech", to: "/fr/ia-pour-fintech" },
  { label: "PropTech", to: "/fr/ia-pour-proptech" },
  { label: "Immobilier", to: "/fr/ia-pour-immobilier" },
  { label: "Cabinets de Conseil", to: "/fr/ia-pour-cabinets-conseil" },
  { label: "Agences", to: "/fr/ia-pour-agences" },
  { label: "Services B2B", to: "/fr/ia-pour-services-b2b" },
];

const resourcesData = [
  { label: "Cas d'Usage", to: "/fr/cas-usage" },
  { label: "Meilleurs Outils IA", to: "/fr/meilleurs-outils-ia-entreprise" },
  { label: "Automatiser le Marketing avec l'IA", to: "/fr/automatiser-marketing-avec-ia" },
  { label: "Livre", to: "/fr/rendez-vous" },
];

const MainNavbarFR = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hasAccess } = useUserRole();
  const { switchLanguageUrl } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/fr" className="flex items-center">
            <img src="/logo.svg" alt="NLG Consulting" className="h-7 sm:h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/fr/a-propos" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
              À propos
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                {/* Solutions */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[520px] p-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                            {solutionsData.aiAutomation.title}
                          </p>
                          <div className="space-y-1">
                            {solutionsData.aiAutomation.links.map((link) => (
                              <Link
                                key={link.to}
                                to={link.to}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                              {solutionsData.salesGrowth.title}
                            </p>
                            <div className="space-y-1">
                              {solutionsData.salesGrowth.links.map((link) => (
                                <Link
                                  key={link.to}
                                  to={link.to}
                                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                              {solutionsData.advisory.title}
                            </p>
                            <div className="space-y-1">
                              {solutionsData.advisory.links.map((link) => (
                                <Link
                                  key={link.to}
                                  to={link.to}
                                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-border">
                        <Link
                          to="/fr/services"
                          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          Voir tous les services →
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-4">
                        Focus Sectoriel
                      </p>
                      <div className="grid grid-cols-2 gap-1">
                        {industriesData.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Ressources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[320px] p-6">
                      <div className="space-y-1">
                        {resourcesData.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/fr/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
              Contact
            </Link>

            {hasAccess && (
              <Link to="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
                BackOffice
              </Link>
            )}

            <Link to={switchLanguageUrl} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 px-3 py-2">
              <Globe className="w-4 h-4" /> EN
            </Link>

            <Button asChild size="sm" className="ml-2">
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
          <div className="lg:hidden py-4 space-y-1 border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link to="/fr" className="block text-sm text-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
            <Link to="/fr/a-propos" className="block text-sm text-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
              À propos
            </Link>

            {/* Solutions Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm text-foreground hover:text-primary transition-colors py-2 px-1">
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 pt-2 pb-1">
                  IA & Automatisation
                </p>
                {solutionsData.aiAutomation.links.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 pt-3 pb-1">
                  Vente & Croissance
                </p>
                {solutionsData.salesGrowth.links.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 pt-3 pb-1">
                  Conseil & Formation
                </p>
                {solutionsData.advisory.links.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link to="/fr/services" className="block text-sm font-medium text-primary hover:text-primary/80 transition-colors py-2" onClick={() => setIsOpen(false)}>
                  Voir tous les services →
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Industries Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm text-foreground hover:text-primary transition-colors py-2 px-1">
                Industries
                <ChevronDown className="w-4 h-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-0.5">
                {industriesData.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Resources Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm text-foreground hover:text-primary transition-colors py-2 px-1">
                Ressources
                <ChevronDown className="w-4 h-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-0.5">
                {resourcesData.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Link to="/fr/contact" className="block text-sm text-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            {hasAccess && (
              <Link to="/admin" className="block text-sm text-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
                BackOffice
              </Link>
            )}

            <Link to={switchLanguageUrl} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
              🇬🇧 English
            </Link>

            <div className="pt-3 border-t border-border mt-2">
              <Button asChild className="w-full">
                <Link to="/fr/rendez-vous" onClick={() => setIsOpen(false)}>Réserver un appel</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavbarFR;
