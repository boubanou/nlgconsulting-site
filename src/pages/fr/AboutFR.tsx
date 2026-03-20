import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Rocket, Target, Award, Building2, Linkedin, BookOpen, ExternalLink, TrendingUp, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import RelatedServicesFR from "@/components/fr/RelatedServicesFR";

const AboutFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "À propos de NLG Consulting",
        "description": "Systèmes de croissance IA, revenue operations et conseil stratégique pour FinTech, PropTech, SaaS et B2B.",
        "url": "https://www.nlgconsulting.co/fr/a-propos"
      },
      {
        "@type": "Person",
        "name": "Gregory Brenig",
        "jobTitle": "Fondateur & CEO",
        "worksFor": { "@type": "Organization", "name": "NLG Consulting" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "À propos", "item": "https://www.nlgconsulting.co/fr/a-propos" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>À propos de NLG Consulting | Conseil IA & Architecture de Croissance</title>
        <meta name="description" content="NLG Consulting construit des systèmes de croissance IA pour les entreprises FinTech, PropTech & B2B. Fondé par Gregory Brenig — opérateur, auteur et conseiller stratégique avec 15+ ans d'expérience." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/a-propos" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/about" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/a-propos" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/a-propos" />
        <meta property="og:title" content="À propos de NLG Consulting | Conseil IA & Architecture de Croissance" />
        <meta property="og:description" content="Systèmes de croissance IA pour FinTech, PropTech & B2B. Fondé par Gregory Brenig." />
        <meta property="og:image" content="https://www.nlgconsulting.co/images/gregory-brenig.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">À propos de NLG</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conseil IA & Architecture de Croissance, dirigé par un opérateur</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              NLG Consulting aide les entreprises FinTech, PropTech, SaaS et B2B à déployer des systèmes de croissance propulsés par l'IA, structurer les revenue operations et passer d'initiatives dispersées à une exécution commerciale mesurable.
            </p>
          </div>
        </section>

        {/* What NLG Does */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Pas un cabinet classique. Pas une agence générique.</h2>
              <p>
                NLG Consulting opère à l'intersection des systèmes IA, de l'exécution business et de l'architecture de croissance commerciale. Fondé en 2020 par Gregory Brenig, le cabinet combine <Link to="/fr/conseil-ia" className="text-primary hover:underline font-medium">conseil IA</Link>, <Link to="/fr/automation-ia" className="text-primary hover:underline font-medium">automatisation de workflows</Link>, <Link to="/fr/vente" className="text-primary hover:underline font-medium">infrastructure outbound</Link>, et <Link to="/fr/conseil" className="text-primary hover:underline font-medium">conseil stratégique</Link> en un modèle d'exécution unifié.
              </p>
              <p>
                Chaque engagement est structuré autour de résultats business : rendez-vous qualifiés, visibilité pipeline, performance commerciale et efficacité opérationnelle. Nous déployons l'IA là où elle crée un levier mesurable et construisons des systèmes qui se composent dans le temps.
              </p>
            </div>
          </div>
        </section>

        <RelatedServicesFR currentService="about" />

        {/* Founder */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/10 shadow-xl">
                  <img src="/images/gregory-brenig.jpg" alt="Gregory Brenig - Fondateur & CEO de NLG Consulting" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-3">
                <Badge variant="outline" className="mb-4">Fondateur</Badge>
                <h2 className="text-3xl font-bold mb-2">Gregory Brenig</h2>
                <p className="text-lg text-muted-foreground mb-6">Fondateur & CEO — Opérateur, auteur et architecte de croissance</p>
                <div className="space-y-4 text-muted-foreground">
                  <p>Gregory est un opérateur et architecte de croissance avec plus de 15 ans d'expérience internationale en FinTech, PropTech, IA et services B2B. Il a construit et scalé des ventures, des systèmes de revenus et des opérations commerciales en Europe, Amérique du Nord et Moyen-Orient.</p>
                  <p>Son approche combine conseil IA, automatisation de workflows, systèmes agentiques, revenue operations et conseil stratégique — pour aider les entreprises à structurer une croissance scalable et une exécution commerciale mesurable.</p>
                  <p>Auteur de "Level Up in Fractional Real Estate", Gregory apporte la même rigueur d'opérateur à chaque engagement NLG.</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  {["FinTech", "PropTech", "IA & Automatisation", "RevOps", "Auteur"].map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-8">
                  <Button asChild><Link to="/fr/rendez-vous">Réserver un appel <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  <Button asChild variant="outline">
                    <a href="https://www.linkedin.com/in/gregory-brenig-98007125/" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 w-4 h-4" /> LinkedIn</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <Award className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Principes opérationnels</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Clarté & responsabilité", desc: "Reporting transparent, feedback honnête et exécution structurée avec des résultats mesurables à chaque étape." },
                { title: "Performance commerciale", desc: "Chaque système est lié à des résultats business : pipeline, rendez-vous qualifiés, croissance de revenus et efficacité opérationnelle." },
                { title: "Exécution, pas théorie", desc: "Nous ne livrons pas des slides. Nous déployons des systèmes, opérons des infrastructures et construisons des actifs qui génèrent des résultats commerciaux." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-primary-foreground/10">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Discutons de votre architecture de croissance</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Réservez un appel stratégique pour discuter de votre adoption IA, revenue operations, structure outbound ou défis de performance commerciale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default AboutFR;
