import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MainFooter = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      {/* CTA Banner */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to accelerate your growth?</h3>
          <p className="text-primary-foreground/80 mb-4 max-w-xl mx-auto text-sm">
            Book a free 15-minute strategy call to discuss your goals.
          </p>
          <Button asChild variant="secondary" size="sm">
            <Link to="/book">
              Book a Call <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <img src="/logo.svg" alt="NLG Consulting" className="h-6 w-auto mb-4 opacity-90" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Global Business, Tech & Growth Group
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About NLG</Link></li>
              <li><Link to="/ventures" className="text-muted-foreground hover:text-primary transition-colors">Ventures</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sales" className="text-muted-foreground hover:text-primary transition-colors">Sales & BD</Link></li>
              <li><Link to="/web" className="text-muted-foreground hover:text-primary transition-colors">Web Studio</Link></li>
              <li><Link to="/advisory" className="text-muted-foreground hover:text-primary transition-colors">Advisory</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/book" className="text-muted-foreground hover:text-primary transition-colors">Book a Call</Link></li>
              <li>
                <a 
                  href="https://a.co/d/3wU4Qgc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Book (Amazon)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/web/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 NLG Consulting. All rights reserved.</p>
          <Link to="/fr" className="hover:text-primary transition-colors">
            🇫🇷 Version française
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
