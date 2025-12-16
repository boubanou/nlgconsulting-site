import { Shield, Lock, CreditCard, FileText, Users, ClipboardCheck } from "lucide-react";

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

  return (
    <section id="securite" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Paiement en ligne 100 % sécurisé
            </h2>
            <p className="text-lg text-muted-foreground">
              Paiement sécurisé, équipe sérieuse, zéro risque
            </p>
          </div>

          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 md:p-8 mb-8">
            <ul className="space-y-4">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg viewBox="0 0 60 25" className="h-8 w-auto" fill="currentColor">
                <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 9.08c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-5.13L32.37 0v3.77h-4.13V.44zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.45-3.32.43zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4 4 0 0 1-4.38-4.1V9.22H9.4V5.57h1.82V2.55l4.13-.87v3.89h3.12v3.65h-3.12v4.29zm-8.26-5.28h-1.3V9.08c1.12 0 2.06-.1 2.06-.1l.4-3.48h3.12v3.58h2.13v3.43h-2.13v4.95c0 1.62.94 1.73 2.13 1.73v3.3c-4.44.2-6.41-1.66-6.41-5.03V9.23z"/>
              </svg>
              <span className="text-sm font-medium">Stripe</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5" />
              <span className="text-sm font-medium">SSL / HTTPS</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-medium">Carte bancaire sécurisée</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Paiement 100 % sécurisé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebTrust;
