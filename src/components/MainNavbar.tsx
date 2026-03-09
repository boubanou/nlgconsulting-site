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
  aiAutomation: {
    title: "AI & Automation",
    links: [
      { label: "AI Consulting", to: "/ai-consulting" },
      { label: "AI Automation", to: "/ai-automation" },
      { label: "AI Agents", to: "/ai-agents-for-business" },
      { label: "AI Marketing Automation", to: "/ai-marketing-automation" },
      { label: "AI Sales Automation", to: "/ai-sales-automation" },
      { label: "Prompt Engineering", to: "/prompt-engineering-consulting" },
      { label: "Outsourced AI Implementation", to: "/outsourced-ai-implementation" },
    ],
  },
  salesGrowth: {
    title: "Sales & Growth",
    links: [
      { label: "Sales & BD", to: "/sales" },
      { label: "Outsourced SDR", to: "/outsourced-sdr" },
      { label: "Appointment Setting", to: "/appointment-setting" },
      { label: "Go-to-Market Consulting", to: "/go-to-market-consulting" },
      { label: "Lead Generation", to: "/ai-lead-generation" },
    ],
  },
  advisory: {
    title: "Advisory & Training",
    links: [
      { label: "Advisory", to: "/advisory" },
      { label: "AI Training for Teams", to: "/ai-training-for-teams" },
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
  { label: "Use Cases", to: "/use-cases" },
  { label: "Best AI Tools for Business", to: "/best-ai-tools-for-business" },
  { label: "How to Automate Marketing with AI", to: "/how-to-automate-marketing-with-ai" },
  { label: "Book", to: "/book" },
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
                        Industry Focus
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
                    <div className="w-[280px] p-6">
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
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-1 border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link to="/" className="block text-sm text-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block text-sm text-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
              About
            </Link>

            {/* Solutions Collapsible */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-sm text-foreground hover:text-primary transition-colors py-2 px-1">
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 pt-2 pb-1">
                  AI & Automation
                </p>
                {solutionsData.aiAutomation.links.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 pt-3 pb-1">
                  Sales & Growth
                </p>
                {solutionsData.salesGrowth.links.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 pt-3 pb-1">
                  Advisory & Training
                </p>
                {solutionsData.advisory.links.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link to="/services" className="block text-sm font-medium text-primary hover:text-primary/80 transition-colors py-2" onClick={() => setIsOpen(false)}>
                  View All Services →
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
                Resources
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

            <Link to="/contact" className="block text-sm text-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            {hasAccess && (
              <Link to="/admin" className="block text-sm text-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
                BackOffice
              </Link>
            )}

            <Link to={switchLanguageUrl} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-1" onClick={() => setIsOpen(false)}>
              🇫🇷 Français
            </Link>

            <div className="pt-3 border-t border-border mt-2">
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
