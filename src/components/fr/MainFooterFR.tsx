import { Link } from "react-router-dom";

const MainFooterFR = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="NLG Consulting" className="h-6 w-auto mb-4 opacity-90" />
            <p className="text-sm text-muted-foreground">
              Groupe mondial Business, Tech & Croissance
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/a-propos" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/fr/ventures" className="text-muted-foreground hover:text-primary transition-colors">Ventures</Link></li>
              <li><Link to="/fr/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/site-internet" className="text-muted-foreground hover:text-primary transition-colors">Studio</Link></li>
              <li><Link to="/fr/vente" className="text-muted-foreground hover:text-primary transition-colors">Vente & BD</Link></li>
              <li><Link to="/fr/conseil" className="text-muted-foreground hover:text-primary transition-colors">Conseil</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fr/politique-confidentialite" className="text-muted-foreground hover:text-primary transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/fr/rendez-vous" className="text-muted-foreground hover:text-primary transition-colors">Prendre rendez-vous</Link></li>
            </ul>
          </div>
        </div>
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
