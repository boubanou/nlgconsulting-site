import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import CalendarEmbed from "@/components/CalendarEmbed";
import { CheckCircle, XCircle } from "lucide-react";

const BookFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Réserver un Appel Stratégique | NLG Consulting",
        "description": "Planifiez un appel stratégique de 15 minutes pour discuter de vos systèmes de croissance, automatisation IA, revenue operations et performance commerciale.",
        "url": "https://www.nlgconsulting.co/fr/rendez-vous"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Rendez-vous", "item": "https://www.nlgconsulting.co/fr/rendez-vous" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Réserver un Appel Stratégique | NLG Consulting</title>
        <meta name="description" content="Planifiez un appel stratégique de 15 minutes pour discuter de systèmes de croissance IA, revenue operations et performance commerciale pour votre entreprise." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/book" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/rendez-vous" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/book" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/rendez-vous" />
        <meta property="og:title" content="Réserver un Appel Stratégique | NLG Consulting" />
        <meta property="og:description" content="Appel stratégique de 15 minutes sur les systèmes de croissance IA, revenue operations et performance commerciale." />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Réserver un Appel Stratégique</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une conversation de 15 minutes centrée sur vos systèmes de croissance, votre structure commerciale et votre maturité IA — avec un opérateur qui a scalé des revenus dans la FinTech, PropTech et le B2B.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> Cet appel est pertinent si…
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Vous êtes fondateur, CEO ou dirigeant croissance d'une entreprise B2B, FinTech ou PropTech</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Vous devez structurer votre outbound, pipeline ou revenue operations</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Vous souhaitez déployer des workflows IA, agents ou automatisations dans vos opérations</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Vous cherchez un accompagnement d'exécution, pas seulement du conseil théorique</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border bg-card">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" /> Ce n'est pas adapté si…
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> Vous cherchez un développeur ou designer freelance</li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> Vous n'avez pas encore de produit ou de clients payants</li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> Vous recherchez du consulting gratuit ou du travail spéculatif</li>
                  <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> Vous avez besoin d'une agence pour de la sous-traitance</li>
                </ul>
              </div>
            </div>

            <CalendarEmbed />

            <p className="text-center text-muted-foreground text-sm mt-8">
              Préférez explorer d'abord ? Découvrez nos <Link to="/fr/services" className="text-primary hover:underline">services</Link>, <Link to="/fr/cas-usage" className="text-primary hover:underline">cas d'usage</Link>, <Link to="/fr/conseil-ia" className="text-primary hover:underline">consulting IA</Link>, ou <Link to="/fr/conseil" className="text-primary hover:underline">conseil stratégique</Link>.
            </p>
          </div>
        </main>

        <MainFooterFR />
      </div>
    </>
  );
};

export default BookFR;