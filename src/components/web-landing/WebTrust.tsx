import { Shield, Lock, CreditCard, FileText, Users, ClipboardCheck, CheckCircle } from "lucide-react";

const WebTrust = () => {
  const trustPoints = [
    { icon: CreditCard, text: "Paiement traité exclusivement par Stripe (leader mondial du paiement en ligne)" },
    { icon: Lock, text: "Données bancaires cryptées (normes PCI-DSS)" },
    { icon: Shield, text: "Connexion sécurisée HTTPS / SSL" },
    { icon: Shield, text: "Aucune donnée bancaire stockée sur nos serveurs" },
    { icon: FileText, text: "Facture automatique fournie après paiement" },
    { icon: Users, text: "Entreprise identifiable et joignable à tout moment" },
    { icon: ClipboardCheck, text: "Process clair : acompte pour démarrer, solde à la livraison" },
  ];

  const badges = [
    { icon: CreditCard, label: "Stripe", sublabel: "Paiement sécurisé" },
    { icon: Lock, label: "SSL / HTTPS", sublabel: "Connexion cryptée" },
    { icon: Shield, label: "PCI-DSS", sublabel: "Norme bancaire" },
    { icon: CheckCircle, label: "100%", sublabel: "Sécurisé" },
  ];

  return (
    <section id="securite" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              <span>Sécurité maximale</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Paiement en ligne 100 % sécurisé
            </h2>
            <p className="text-lg text-muted-foreground">
              Paiement sécurisé, équipe sérieuse, zéro risque
            </p>
          </div>

          <div className="bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl p-6 md:p-10 mb-8 border border-border shadow-xl">
            <ul className="space-y-4">
              {trustPoints.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <point.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium pt-2">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">{badge.label}</p>
                <p className="text-xs text-muted-foreground">{badge.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebTrust;
