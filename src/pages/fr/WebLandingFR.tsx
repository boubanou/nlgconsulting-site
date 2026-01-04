import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WebHeader from "@/components/web-landing/WebHeader";
import WebHero from "@/components/web-landing/WebHero";
import WebPositioning from "@/components/web-landing/WebPositioning";
import WebOffers from "@/components/web-landing/WebOffers";
import WebTrust from "@/components/web-landing/WebTrust";
import WebTestimonials from "@/components/web-landing/WebTestimonials";
import WebMethod from "@/components/web-landing/WebMethod";
import WebFAQ from "@/components/web-landing/WebFAQ";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const WebLandingFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Site Web en 72 Heures - NLG Studio",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Développement de site web professionnel livré en moins de 72 heures. Inclut design UX/UI, copywriting, optimisation SEO, intégration CRM et paiements Stripe.",
        "url": "https://nlgconsulting.co/fr/site-internet"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Site Internet", "item": "https://nlgconsulting.co/fr/site-internet" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Site Web Professionnel en 72 Heures | NLG Studio | À partir de 997€</title>
        <meta 
          name="description" 
          content="Lancez votre site web prêt à générer du revenu en moins de 72 heures. Package complet : design UX/UI, SEO, paiements Stripe, intégration CRM. Code source inclus. À partir de 997€." 
        />
        <meta 
          name="keywords" 
          content="création site web rapide, site internet 72 heures, site web entreprise, landing page design, site avec paiements, intégration Stripe, site web SEO, design web professionnel" 
        />
        <link rel="canonical" href="https://nlgconsulting.co/fr/site-internet" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/web" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/site-internet" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/web" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <MainNavbarFR />
        <main className="pt-20">
          {/* Hero FR */}
          <section className="py-20 md:py-32 px-4">
            <div className="container mx-auto max-w-6xl text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                🚀 Lancé en 72 heures
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Votre site web professionnel<br />
                <span className="text-gradient">en 72 heures</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Sites web prêts à convertir avec design UX, copywriting persuasif, SEO, CRM, paiements Stripe et workflows IA — livrés rapidement. À partir de 997€.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/fr/rendez-vous">
                    Réserver un appel découverte <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-base px-8"
                  onClick={() => document.querySelector("#offres")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Voir les offres
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                ✅ Code source inclus • ✅ Sans abonnement • ✅ 100% propriétaire
              </p>
            </div>
          </section>

          {/* SEO Content Section FR */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Pourquoi choisir NLG Studio pour votre site web ?</h2>
                <p>
                  Dans le paysage digital actuel, votre site web est souvent le premier point de contact avec vos clients potentiels. Un site lent, obsolète ou mal conçu vous coûte des leads et du chiffre d'affaires chaque jour. Les agences web traditionnelles prennent des semaines ou des mois pour livrer — et facturent des dizaines de milliers d'euros.
                </p>
                <p>
                  NLG Studio change la donne. Nous livrons des sites web professionnels, optimisés pour la conversion, en moins de 72 heures, pour une fraction du coût traditionnel. Chaque site inclut le design UX/UI, le copywriting persuasif, le SEO technique, l'intégration CRM et le traitement des paiements. Vous obtenez tout ce dont vous avez besoin pour commencer à générer du revenu immédiatement.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Ce qui est inclus dans chaque site web</h3>
                <p>
                  Nos packages sites web sont conçus pour vous donner une présence digitale complète et prête à générer du revenu :
                </p>
                <ul>
                  <li><strong>Design UX/UI sur mesure :</strong> Designs modernes et responsive qui s'affichent parfaitement sur desktop, tablette et mobile. Chaque design est optimisé pour la conversion.</li>
                  <li><strong>Copywriting de conversion :</strong> Textes persuasifs et optimisés SEO qui communiquent votre proposition de valeur et poussent à l'action.</li>
                  <li><strong>SEO technique :</strong> Des balises meta aux données structurées, votre site est construit pour la visibilité sur les moteurs de recherche.</li>
                  <li><strong>Intégration CRM :</strong> Connectez votre site à HubSpot, Salesforce, Pipedrive ou votre CRM de choix.</li>
                  <li><strong>Traitement des paiements :</strong> Intégration Stripe incluse pour produits, abonnements ou services.</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Notre processus en 72 heures</h3>
                <p>
                  La vitesse ne signifie pas couper les coins — cela signifie éliminer les inefficacités. Voici comment nous livrons en moins de 72 heures :
                </p>
                <p>
                  <strong>Jour 1 :</strong> Nous commençons par un appel découverte focalisé pour comprendre votre business, votre audience et vos objectifs. Vous fournissez les assets de marque et le contenu, et notre équipe design commence les wireframes.
                </p>
                <p>
                  <strong>Jour 2 :</strong> Développement du design et intégration du contenu. Nos copywriters affinent votre message pendant que les développeurs construisent l'infrastructure technique.
                </p>
                <p>
                  <strong>Jour 3 :</strong> Revue finale, tests et lancement. Nous déployons votre site avec SSL complet, connectons votre domaine et configurons toutes les intégrations.
                </p>
              </div>
            </div>
          </section>

          <WebOffers />
          
          {/* Mid-page CTA FR */}
          <section className="py-16 px-4 bg-primary text-primary-foreground">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Prêt à lancer votre site web ?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Arrêtez de perdre des leads avec un site obsolète. Lancez votre site prêt à convertir en moins de 72 heures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => document.querySelector("#offres")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Voir les offres <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link to="/fr/rendez-vous">Réserver un appel</Link>
                </Button>
              </div>
            </div>
          </section>

          <WebTrust />
          <WebTestimonials />
          
          {/* Additional SEO Content FR */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Pour qui est NLG Studio ?</h2>
                <p>
                  NLG Studio sert les entreprises qui ont besoin d'une présence web professionnelle sans le délai et le budget des agences traditionnelles. Nos clients incluent :
                </p>
                <ul>
                  <li><strong>Startups :</strong> Lancez votre site MVP rapidement pour commencer à valider et générer des leads.</li>
                  <li><strong>Consultants & Coachs :</strong> Prestataires de services qui ont besoin de crédibilité et de capacités de réservation.</li>
                  <li><strong>Entreprises SaaS :</strong> Sites marketing et landing pages pour lancements de produits.</li>
                  <li><strong>E-commerce :</strong> Pages produits et sites catalogue avec traitement des paiements.</li>
                  <li><strong>Services Professionnels :</strong> Cabinets d'avocats, comptables et agences qui ont besoin d'une présence digitale moderne.</li>
                </ul>
                <p>
                  Si vous avez besoin d'un site web qui convertit les visiteurs en clients — et que vous en avez besoin rapidement — NLG Studio est votre solution.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Propriété et transparence</h3>
                <p>
                  Contrairement à beaucoup d'agences web, nous croyons en la transparence totale et la propriété. Vous possédez 100% de votre code source — pas de plateformes propriétaires, pas de verrouillage, pas de dépendances cachées. Vous recevez un accès complet à tous les fichiers, pouvez héberger où vous voulez, et n'avez aucune obligation après livraison.
                </p>
              </div>
            </div>
          </section>

          <WebMethod />
          <WebFAQ />
        </main>
        <MainFooterFR />
      </div>
    </>
  );
};

export default WebLandingFR;
