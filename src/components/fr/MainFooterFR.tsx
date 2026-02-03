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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/vente" className="text-muted-foreground hover:text-primary transition-colors">Vente & BD</Link></li>
              <li><Link to="/fr/site-internet" className="text-muted-foreground hover:text-primary transition-colors">Studio Web</Link></li>
              <li><Link to="/fr/conseil" className="text-muted-foreground hover:text-primary transition-colors">Conseil</Link></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/rendez-vous" className="text-muted-foreground hover:text-primary transition-colors">Prendre RDV</Link></li>
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
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/politique-confidentialite" className="text-muted-foreground hover:text-primary transition-colors">Confidentialité</Link></li>
              <li><Link to="/fr/site-internet/conditions" className="text-muted-foreground hover:text-primary transition-colors">CGV</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 NLG Consulting. Tous droits réservés.</p>
          <Link to="/" className="hover:text-primary transition-colors">
            🇬🇧 English version
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default MainFooterFR;
