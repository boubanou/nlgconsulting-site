import { Helmet } from "react-helmet-async";
import { CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import WebHeader from "@/components/web-landing/WebHeader";
import WebFooter from "@/components/web-landing/WebFooter";

const WebThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Merci pour votre paiement | NLG Consulting</title>
        <meta 
          name="description" 
          content="Votre paiement a été reçu. Notre équipe vous contactera sous 24 heures pour lancer votre projet de site internet." 
        />
        <link rel="canonical" href="https://web.nlgconsulting.co/thank-you" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <WebHeader />
        <main className="pt-24 pb-16">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Merci pour votre paiement
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Notre équipe vous contactera sous 24 heures pour lancer votre projet.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold text-foreground mb-3">Prochaines étapes</h2>
                <ul className="text-left text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    Vous recevrez un email de confirmation avec votre facture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    Un membre de notre équipe vous contactera sous 24h
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    Brief de 30 minutes pour définir votre projet
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    Première version de votre site sous quelques jours
                  </li>
                </ul>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Vous souhaitez planifier votre appel dès maintenant ?
              </p>
              
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open("https://calendly.com/greg-nlgconsulting/15min", "_blank")}
              >
                <Calendar className="w-5 h-5" />
                Planifier un appel
              </Button>
            </div>
          </div>
        </main>
        <WebFooter />
      </div>
    </>
  );
};

export default WebThankYou;
