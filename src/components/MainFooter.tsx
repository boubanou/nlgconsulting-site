import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="NLG Consulting" className="h-6 w-auto mb-4 opacity-90" />
            <p className="text-sm text-muted-foreground">
              Global Business, Tech & Growth Group
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About NLG</Link></li>
              <li><Link to="/ventures" className="text-muted-foreground hover:text-primary transition-colors">Ventures</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/web" className="text-muted-foreground hover:text-primary transition-colors">Studio</Link></li>
              <li><Link to="/sales" className="text-muted-foreground hover:text-primary transition-colors">Sales & BD</Link></li>
              <li><Link to="/advisory" className="text-muted-foreground hover:text-primary transition-colors">Advisory</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/book" className="text-muted-foreground hover:text-primary transition-colors">Book a Call</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 NLG Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
