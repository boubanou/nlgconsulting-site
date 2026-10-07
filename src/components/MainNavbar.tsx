import { Link } from "react-router-dom";
import { Button } from "./ui/button";
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
} from "./ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const solutionsData = {
  aiSystems: {
    title: "Save Time & Automate",
    links: [
      { label: "Find AI Opportunities", to: "/ai-consulting" },
      { label: "AI Agents & Agentic Systems", to: "/ai-agents-for-business" },
      { label: "Automate Repetitive Work", to: "/ai-automation" },
      { label: "Outsourced AI Operations", to: "/outsourced-ai-implementation" },
      { label: "Prompt Engineering", to: "/prompt-engineering-consulting" },
    ],
  },
  growthRevOps: {
    title: "Increase Revenue & Growth",
    links: [
      { label: "Increase Leads & Sales", to: "/sales" },
      { label: "Outsourced SDR", to: "/outsourced-sdr" },
      { label: "AI Lead Generation", to: "/ai-lead-generation" },
      { label: "GTM Strategy & Execution", to: "/go-to-market-consulting" },
      { label: "AI Marketing Systems", to: "/ai-marketing-automation" },
      { label: "AI Sales Automation", to: "/ai-sales-automation" },
    ],
  },
  advisory: {
    title: "Optimise & Scale",
    links: [
      { label: "Optimise the Business", to: "/advisory" },
      { label: "AI Enablement for Teams", to: "/ai-training-for-teams" },
      { label: "Fractional AI Consultant", to: "/fractional-ai-consultant" },
    ],
  },
};

const industriesData = [
  { label: "SaaS", to: "/ai-for-saas" },
  { label: "FinTech", to: "/ai-for-fintech" },
  { label: "PropTech", to: "/ai-for-proptech" },
  { label: "Real Estate", to: "/ai-for-real-estate" },
  { label: "Consulting Firms", to: "/ai-for-consulting-firms" },
  { label: "Agencies", to: "/ai-for-agencies" },
  { label: "B2B Services", to: "/ai-for-b2b-services" },
];

const resourcesData = [
  { label: "Insights & Guides", to: "/insights" },
  { label: "Use Cases & Case Studies", to: "/use-cases" },
  { label: "Best AI Tools for Business", to: "/best-ai-tools-for-business" },
  { label: "AI Marketing Systems Guide", to: "/how-to-automate-marketing-with-ai" },
  { label: "Ventures & Studio", to: "/ventures" },
];

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hasAccess } = useUserRole();
  const { switchLanguageUrl } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="NLG Consulting" className="h-7 sm:h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
              About
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
                          to="/services"
                          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          View All Services →
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
                        Sector Focus
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
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-6">
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

            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
              Contact
            </Link>

            {hasAccess && (
              <Link to="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
                BackOffice
              </Link>
            )}

            <Link to={switchLanguageUrl} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 px-3 py-2">
              <Globe className="w-4 h-4" /> FR
            </Link>

            <Button asChild size="sm" className="ml-2">
              <Link to="/book">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden -mx-4 max-h-[calc(100dvh-4rem)] space-y-1 overflow-y-auto border-t border-border bg-background/95 px-4 pb-5 pt-3 shadow-xl backdrop-blur-xl">
            <Link to="/" className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
              About
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
                <Link to="/services" className="flex min-h-10 items-center rounded-lg px-2 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5 hover:text-primary/80" onClick={() => setIsOpen(false)}>
                  View All Services →
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
                Resources
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

            <Link to="/contact" className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            {hasAccess && (
              <Link to="/admin" className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
                BackOffice
              </Link>
            )}

            <Link to={switchLanguageUrl} className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary" onClick={() => setIsOpen(false)}>
              🇫🇷 Français
            </Link>

            <div className="mt-3 border-t border-border pt-4">
              <Button asChild className="w-full">
                <Link to="/book" onClick={() => setIsOpen(false)}>Book a Call</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavbar;