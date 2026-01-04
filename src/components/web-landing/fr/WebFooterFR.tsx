import { Link } from "react-router-dom";
import { Shield, Lock, Zap, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebFooterFR = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Prêt à lancer votre site web générateur de revenus ?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Obtenez un site web professionnel, optimisé pour la conversion, en moins de 72 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="gap-2 shadow-xl"
              onClick={() => document.querySelector("#offres")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Zap className="w-4 h-4" />
              Payer maintenant
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              onClick={() => window.open("https://calendly.com/greg-nlgconsulting/15min", "_blank")}
            >
              <Phone className="w-4 h-4" />
              Réserver un appel
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <Link to="/fr" className="flex items-center gap-2 group">
                <img src="/logo.svg" alt="NLG Consulting" className="h-8 w-auto group-hover:scale-105 transition-transform" />
                <span className="font-bold text-foreground">NLG Studio</span>
              </Link>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1.5 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">Paiement Stripe</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 text-blue-600 px-3 py-1.5 rounded-full">
                  <Lock className="w-4 h-4" />
                  <span className="font-medium">SSL / HTTPS</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <Link to="/fr" className="hover:text-primary transition-colors">
                NLG Consulting
              </Link>
              <Link to="/fr/site-internet/conditions" className="hover:text-primary transition-colors">
                Conditions Générales
              </Link>
              <Link to="/fr/politique-de-confidentialite" className="hover:text-primary transition-colors">
                Politique de Confidentialité
              </Link>
              <Link to="/fr/a-propos" className="hover:text-primary transition-colors">
                À Propos
              </Link>
              <Link to="/fr/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            
            <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
              <p>© {new Date().getFullYear()} NLG Consulting. Tous droits réservés.</p>
              <p className="mt-2">
                NLG Studio – Création de sites web professionnels en 72h
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebFooterFR;
