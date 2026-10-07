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
  aiSystems: {
    title: "Gagner du Temps & Automatiser",
    links: [
      { label: "Identifier les Opportunités IA", to: "/fr/conseil-ia" },
      { label: "Agents IA & Systèmes Agentiques", to: "/fr/agents-ia-entreprise" },
      { label: "Automatiser le Travail Répétitif", to: "/fr/automation-ia" },
      { label: "Opérations IA Externalisées", to: "/fr/implementation-ia-externalisee" },
      { label: "Prompt Engineering", to: "/fr/conseil-prompt-engineering" },
    ],
  },
  growthRevOps: {
    title: "Augmenter Revenus & Croissance",
    links: [
      { label: "Augmenter Leads & Ventes", to: "/fr/vente" },
      { label: "SDR Externalisé", to: "/fr/sdr-externalise" },
      { label: "Génération de Leads IA", to: "/fr/generation-leads-ia" },
      { label: "Stratégie GTM & Exécution", to: "/fr/strategie-go-to-market" },
      { label: "Systèmes Marketing IA", to: "/fr/automation-marketing-ia" },
      { label: "Automation Commerciale IA", to: "/fr/automation-commerciale-ia" },
    ],
  },
  advisory: {
    title: "Optimiser & Scaler",
    links: [
      { label: "Optimiser l'Entreprise", to: "/fr/conseil" },
      { label: "Enablement IA Équipes", to: "/fr/formation-ia-entreprise" },
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
  { label: "Guides & Ressources", to: "/fr/ressources" },
  { label: "Cas d'Usage & Études de Cas", to: "/fr/cas-usage" },
  { label: "Meilleurs Outils IA Business", to: "/fr/meilleurs-outils-ia-entreprise" },
  { label: "Guide Systèmes Marketing IA", to: "/fr/automatiser-marketing-avec-ia" },
  { label: "Ventures & Studio", to: "/fr/ventures" },
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
                    <div className="w-[540px] p-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                            {solutionsData.aiSystems.title}
                          </p>
                          <div className="space-y-1">
                            {solutionsData.aiSystems.links.map((link) => (
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
                              {solutionsData.growthRevOps.title}
                            </p>
                            <div className="space-y-1">
                              {solutionsData.growthRevOps.links.map((link) => (
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
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden -mx-4 max-h-[calc(100dvh-4rem)] space-y-1 overflow-y-auto border-t border-border bg-background/95 px-4 pb-5 pt-3 shadow-xl backdrop-blur-xl">
            <Link to="/fr" className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
            <Link to="/fr/a-propos" className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
              À propos
            </Link>

            {/* Solutions Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex min-h-11 w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary">
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 pt-2 pb-1">
                  {solutionsData.aiSystems.title}
                </p>
                {solutionsData.aiSystems.links.map((link) => (
                  <Link key={link.to} to={link.to} className="flex min-h-10 items-center rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 pt-3 pb-1">
                  {solutionsData.growthRevOps.title}
                </p>
                {solutionsData.growthRevOps.links.map((link) => (
                  <Link key={link.to} to={link.to} className="flex min-h-10 items-center rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 pt-3 pb-1">
                  {solutionsData.advisory.title}
                </p>
                {solutionsData.advisory.links.map((link) => (
                  <Link key={link.to} to={link.to} className="flex min-h-10 items-center rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link to="/fr/services" className="flex min-h-10 items-center rounded-lg px-2 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5 hover:text-primary/80" onClick={() => setIsOpen(false)}>
                  Voir tous les services →
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Industries Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex min-h-11 w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary">
                Industries
                <ChevronDown className="w-4 h-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-0.5">
                {industriesData.map((link) => (
                  <Link key={link.to} to={link.to} className="flex min-h-10 items-center rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Resources Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex min-h-11 w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary">
                Ressources
                <ChevronDown className="w-4 h-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-0.5">
                {resourcesData.map((link) => (
                  <Link key={link.to} to={link.to} className="flex min-h-10 items-center rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Link to="/fr/contact" className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            {hasAccess && (
              <Link to="/admin" className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
                BackOffice
              </Link>
            )}

            <Link to={switchLanguageUrl} className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
              🇬🇧 English
            </Link>

            <div className="mt-3 border-t border-border pt-4">
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