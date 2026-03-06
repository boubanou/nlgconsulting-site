import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MainFooterFR = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      {/* CTA Banner */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Prêt à accélérer votre croissance ?</h3>
          <p className="text-primary-foreground/80 mb-4 max-w-xl mx-auto text-sm">
            Réservez un appel stratégique gratuit de 15 minutes pour discuter de vos objectifs.
          </p>
          <Button asChild variant="secondary" size="sm">
            <Link to="/fr/rendez-vous">
              Réserver un appel <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/fr">
              <img src="/logo.svg" alt="NLG Consulting" className="h-6 w-auto mb-4 opacity-90" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Groupe mondial Business, Tech & Croissance
            </p>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/fr/a-propos" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/fr/ventures" className="text-muted-foreground hover:text-primary transition-colors">Ventures</Link></li>
              <li><Link to="/fr/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* IA & Automatisation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">IA & Automatisation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/conseil-ia" className="text-muted-foreground hover:text-primary transition-colors">Conseil IA</Link></li>
              <li><Link to="/fr/automation-ia" className="text-muted-foreground hover:text-primary transition-colors">Automatisation IA</Link></li>
              <li><Link to="/fr/agents-ia-entreprise" className="text-muted-foreground hover:text-primary transition-colors">Agents IA</Link></li>
              <li><Link to="/fr/automation-marketing-ia" className="text-muted-foreground hover:text-primary transition-colors">Marketing IA</Link></li>
              <li><Link to="/fr/automation-commerciale-ia" className="text-muted-foreground hover:text-primary transition-colors">Ventes IA</Link></li>
              <li><Link to="/fr/conseil-prompt-engineering" className="text-muted-foreground hover:text-primary transition-colors">Prompt Engineering</Link></li>
              <li><Link to="/fr/implementation-ia-externalisee" className="text-muted-foreground hover:text-primary transition-colors">IA Externalisée</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/ia-pour-saas" className="text-muted-foreground hover:text-primary transition-colors">IA pour SaaS</Link></li>
              <li><Link to="/fr/ia-pour-fintech" className="text-muted-foreground hover:text-primary transition-colors">IA pour FinTech</Link></li>
              <li><Link to="/fr/ia-pour-proptech" className="text-muted-foreground hover:text-primary transition-colors">IA pour PropTech</Link></li>
              <li><Link to="/fr/ia-pour-immobilier" className="text-muted-foreground hover:text-primary transition-colors">IA pour Immobilier</Link></li>
              <li><Link to="/fr/ia-pour-cabinets-conseil" className="text-muted-foreground hover:text-primary transition-colors">IA pour Conseil</Link></li>
              <li><Link to="/fr/ia-pour-agences" className="text-muted-foreground hover:text-primary transition-colors">IA pour Agences</Link></li>
              <li><Link to="/fr/ia-pour-services-b2b" className="text-muted-foreground hover:text-primary transition-colors">IA pour Services B2B</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/services" className="text-muted-foreground hover:text-primary transition-colors">Tous les services</Link></li>
              <li><Link to="/fr/vente" className="text-muted-foreground hover:text-primary transition-colors">Vente & BD</Link></li>
              <li><Link to="/fr/site-internet" className="text-muted-foreground hover:text-primary transition-colors">Studio Web</Link></li>
              <li><Link to="/fr/conseil" className="text-muted-foreground hover:text-primary transition-colors">Conseil</Link></li>
              <li><Link to="/fr/marketing" className="text-muted-foreground hover:text-primary transition-colors">Marketing</Link></li>
              <li><Link to="/fr/sdr-externalise" className="text-muted-foreground hover:text-primary transition-colors">SDR Externalisé</Link></li>
              <li><Link to="/fr/formation-ia-entreprise" className="text-muted-foreground hover:text-primary transition-colors">Formation IA</Link></li>
              <li><Link to="/fr/consultant-ia-fractionnel" className="text-muted-foreground hover:text-primary transition-colors">Consultant IA fractionnel</Link></li>
            </ul>
          </div>

          {/* Ressources & Légal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/rendez-vous" className="text-muted-foreground hover:text-primary transition-colors">Prendre RDV</Link></li>
              <li><Link to="/fr/meilleurs-outils-ia-entreprise" className="text-muted-foreground hover:text-primary transition-colors">Meilleurs outils IA</Link></li>
              <li><Link to="/fr/automatiser-marketing-avec-ia" className="text-muted-foreground hover:text-primary transition-colors">Automatiser le marketing</Link></li>
              <li>
                <a 
                  href="https://a.co/d/dih3FYN" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Livre (Amazon)
                </a>
              </li>
            </ul>
            <h4 className="font-semibold mb-4 mt-6 text-sm">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/politique-confidentialite" className="text-muted-foreground hover:text-primary transition-colors">Confidentialité</Link></li>
              <li><Link to="/web/terms" className="text-muted-foreground hover:text-primary transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 NLG Consulting. Tous droits réservés.</p>
          <Link to="/" className="hover:text-primary transition-colors">
            🇬🇧 English version
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default MainFooterFR;
