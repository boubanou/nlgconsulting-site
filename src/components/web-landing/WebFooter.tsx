import { Link } from "react-router-dom";
import { Shield, Lock, Zap, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebFooter = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to launch your revenue-generating website?
          </h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a professional, conversion-optimized website in under 72 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="gap-2 shadow-xl"
              onClick={() => document.querySelector("#offres")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Zap className="w-4 h-4" />
              Pay now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              onClick={() => window.open("https://calendly.com/greg-nlgconsulting/15min", "_blank")}
            >
              <Phone className="w-4 h-4" />
              Book a call
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <Link to="/" className="flex items-center gap-2 group">
                <img src="/logo.svg" alt="NLG Consulting" className="h-8 w-auto group-hover:scale-105 transition-transform" />
                <span className="font-bold text-foreground">NLG Studio</span>
              </Link>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1.5 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">Stripe Payment</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 text-blue-600 px-3 py-1.5 rounded-full">
                  <Lock className="w-4 h-4" />
                  <span className="font-medium">SSL / HTTPS</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">
                NLG Consulting
              </Link>
              <Link to="/web/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            
            <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
              <p>© {new Date().getFullYear()} NLG Consulting. All rights reserved.</p>
              <p className="mt-2">
                NLG Studio – Professional website creation in 72h
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebFooter;
