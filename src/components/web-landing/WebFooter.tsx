import { Link } from "react-router-dom";
import { Shield, Lock } from "lucide-react";

const WebFooter = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="NLG Consulting" className="h-8 w-auto" />
              <span className="font-semibold text-foreground">NLG Consulting</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                <span>SSL / HTTPS</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
            <Link to="/web/terms" className="hover:text-foreground transition-colors">
              Conditions générales de vente
            </Link>
            <a 
              href="https://nlgconsulting.co/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Politique de confidentialité
            </a>
            <a 
              href="https://nlgconsulting.co/about" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              À propos
            </a>
            <a 
              href="https://nlgconsulting.co/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} NLG Consulting. Tous droits réservés.</p>
            <p className="mt-2">
              Création de sites internet professionnels – France, Belgique, Suisse, Canada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebFooter;
