import { Helmet } from "react-helmet-async";
import WebHeader from "@/components/web-landing/WebHeader";
import WebFooter from "@/components/web-landing/WebFooter";

const WebTerms = () => {
  return (
    <>
      <Helmet>
        <title>Conditions générales de vente | NLG Consulting</title>
        <meta 
          name="description" 
          content="Conditions générales de vente pour la création de sites internet par NLG Consulting. Délais, paiements, propriété du code source." 
        />
        <link rel="canonical" href="https://web.nlgconsulting.co/terms" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <WebHeader />
        <main className="pt-24 pb-16">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Conditions Générales de Vente
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Prestations proposées</h2>
                
                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Pack Starter – 749 €</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Site internet de 3 à 4 pages</li>
                  <li>Formulaire de contact intégré</li>
                  <li>Structure SEO optimisée</li>
                  <li>Meta title et meta description uniques par page</li>
                  <li>Indexation Google</li>
                  <li>Paramétrage du domaine et des DNS</li>
                  <li>Code source fourni à la livraison</li>
                </ul>
                
                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Pack Intermédiaire – 999 €</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Site internet complet avec blog</li>
                  <li>Intégration Calendly</li>
                  <li>Gestion simple du contenu</li>
                  <li>SEO avancé + meta tags</li>
                  <li>Indexation Google</li>
                  <li>Paramétrage domaine et DNS</li>
                  <li>Code source fourni à la livraison</li>
                </ul>
                
                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Pack Pro – Sur devis</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>E-commerce</li>
                  <li>Développement sur mesure</li>
                  <li>Applications et logiciels</li>
                  <li>Automatisations avancées</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Délais de livraison</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Pack Starter :</strong> 7 jours ouvrés maximum</li>
                  <li><strong>Pack Intermédiaire :</strong> 7 à 10 jours ouvrés</li>
                  <li><strong>Pack Pro :</strong> selon devis</li>
                </ul>
                <p className="mt-4">
                  Les délais commencent à compter de la réception de l'acompte et des éléments nécessaires au projet (textes, images, accès domaine).
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Corrections incluses</h2>
                <p>
                  Chaque prestation inclut <strong>2 séries de corrections</strong> après présentation de la première version. 
                  Les corrections supplémentaires seront facturées sur devis.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Modalités de paiement</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Acompte de 50 %</strong> exigé pour démarrer le projet</li>
                  <li><strong>Solde de 50 %</strong> exigible avant la mise en ligne finale du site</li>
                  <li>Paiement sécurisé par carte bancaire via Stripe</li>
                  <li>Facture automatique fournie après chaque paiement</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Politique de remboursement</h2>
                <p>
                  L'acompte n'est pas remboursable une fois le projet démarré. En cas d'annulation avant le début des travaux, 
                  un remboursement intégral de l'acompte sera effectué sous 7 jours ouvrés.
                </p>
                <p className="mt-4">
                  Si NLG Consulting ne peut pas livrer le projet dans les délais convenus (hors force majeure ou retard imputable au client), 
                  un remboursement total sera proposé.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Propriété du code source</h2>
                <p>
                  Le client devient <strong>propriétaire à 100 % du code source</strong> de son site internet après paiement intégral de la prestation. 
                  Le code source est fourni systématiquement à la livraison finale.
                </p>
                <p className="mt-4">
                  Le client est libre d'utiliser, modifier, héberger ou transférer son site comme il le souhaite, sans aucune dépendance technique envers NLG Consulting.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Responsabilités</h2>
                <p>
                  Le client est responsable de fournir les éléments nécessaires au projet (textes, images, logos) et de valider les différentes étapes. 
                  NLG Consulting s'engage à respecter les délais annoncés et à livrer un site conforme aux spécifications convenues.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact</h2>
                <p>
                  Pour toute question concernant ces conditions générales de vente, vous pouvez nous contacter via{" "}
                  <a 
                    href="https://nlgconsulting.co/contact" 
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    notre page contact
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </main>
        <WebFooter />
      </div>
    </>
  );
};

export default WebTerms;
