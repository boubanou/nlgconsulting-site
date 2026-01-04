import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Globe, 
  Rocket, 
  Target, 
  Award,
  Building2,
  Linkedin
} from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AboutFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "À propos de NLG Consulting",
        "description": "Découvrez NLG Consulting, un groupe mondial Business, Tech & Croissance.",
        "url": "https://nlgconsulting.co/fr/a-propos"
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
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "À propos", "item": "https://nlgconsulting.co/fr/a-propos" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>À propos de NLG Consulting | Groupe mondial Business, Tech & Croissance</title>
        <meta 
          name="description" 
          content="NLG Consulting est un groupe mondial construit sur l'exécution. Ventures, sites web en 72h, développement commercial et conseil stratégique. Fondé par Gregory Brenig." 
        />
        <meta name="keywords" content="NLG Consulting, Gregory Brenig, conseil stratégique, PropTech, FinTech, génération de leads, création de sites web" />
        <link rel="canonical" href="https://nlgconsulting.co/fr/a-propos" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/about" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/a-propos" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              À propos de NLG
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Un Groupe mondial Business, Tech & Croissance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              N.L.G. Consulting est bien plus qu'un cabinet de conseil — c'est une holding, un studio et un opérateur qui construit, lance et scale des plateformes, marques et systèmes de vente dans le monde entier.
            </p>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Qui sommes-nous : L'histoire de NLG Consulting</h2>
              <p>
                Fondé en 2020, NLG Consulting est né d'un constat simple : la plupart des entreprises peinent à passer de la stratégie à l'exécution. Les cabinets de conseil traditionnels livrent de belles présentations qui prennent la poussière. Nous avons voulu faire les choses différemment.
              </p>
              <p>
                NLG signifie "Next Level Growth" — un engagement que nous prenons envers chaque client et chaque venture. Nous ne sommes pas seulement des consultants ; nous sommes des bâtisseurs, des opérateurs et des investisseurs qui s'impliquent personnellement.
              </p>
              <p>
                Ce qui nous distingue, c'est notre philosophie d'exécution d'abord. Nous ne conseillons pas seulement — nous implémentons. Que ce soit pour construire une infrastructure commerciale complète, lancer un site web prêt à générer du revenu en 72 heures, ou fournir un accompagnement stratégique pour scaler votre entreprise.
              </p>
            </div>
          </div>
        </section>

        {/* What is NLG */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Qu'est-ce que NLG ?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nous opérons à l'intersection de la technologie, du développement commercial et de la croissance stratégique. Notre portefeuille couvre PropTech, FinTech, Média et automatisation IA.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Contrairement aux agences traditionnelles, nous ne conseillons pas seulement — nous construisons, opérons et scalons. Chaque venture et service est conçu pour des résultats d'exécution.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link to="/fr/ventures">Nos Ventures <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Globe className="w-6 h-6" />, label: "Opérations mondiales" },
                  { icon: <Rocket className="w-6 h-6" />, label: "Exécution d'abord" },
                  { icon: <Building2 className="w-6 h-6" />, label: "Multi-industries" },
                  { icon: <Target className="w-6 h-6" />, label: "Orienté résultats" }
                ].map((item, i) => (
                  <Card key={i}>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 text-primary">
                        {item.icon}
                      </div>
                      <span className="font-medium text-sm">{item.label}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/10 shadow-xl">
                  <img 
                    src="/images/gregory-brenig.jpg" 
                    alt="Gregory Brenig - Fondateur & CEO de NLG Consulting" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <Badge variant="outline" className="mb-4">Fondateur</Badge>
                <h2 className="text-3xl font-bold mb-2">Gregory Brenig</h2>
                <p className="text-lg text-muted-foreground mb-6">Fondateur & CEO</p>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Gregory apporte un parcours international couvrant l'immobilier, la finance et la technologie. Avec une expérience en Europe, Amérique du Nord et Moyen-Orient, il a construit et développé des ventures depuis zéro.
                  </p>
                  <p>
                    Bâtisseur dans l'âme, Gregory se concentre sur l'exécution, la discipline et le professionnalisme. Son approche combine réflexion stratégique et expertise opérationnelle concrète.
                  </p>
                  <p>
                    Au-delà du business, Gregory est auteur et figure médiatique, contribuant au leadership éclairé sur l'entrepreneuriat, la PropTech et le futur du travail.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Immobilier", "FinTech", "PropTech", "Auteur", "Média"].map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <Button asChild>
                    <Link to="/fr/rendez-vous">Réserver un appel <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://www.linkedin.com/in/gregory-brenig-98007125/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                    </a>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre Philosophie
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              "L'exécution bat la théorie. Nous ne strategisons pas seulement — nous construisons, lançons et scalons. Chaque jour."
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Discipline", desc: "Processus rigoureux et exécution constante." },
                { title: "Vitesse", desc: "Avancer vite, apprendre plus vite, livrer à temps." },
                { title: "Excellence", desc: "Standards world-class dans tout ce que nous faisons." }
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
            <h2 className="text-3xl font-bold mb-4">Construisons ensemble</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Que vous ayez besoin d'un site web, d'une infrastructure commerciale ou d'un accompagnement stratégique — nous sommes prêts à exécuter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/fr/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>

        <MainFooterFR />
      </div>
    </>
  );
};

export default AboutFR;
