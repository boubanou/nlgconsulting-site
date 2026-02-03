import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Target, 
  Phone, 
  Mail, 
  Linkedin, 
  BarChart3,
  Users,
  Zap,
  CheckCircle
} from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const SalesFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Développement Commercial B2B Externalisé",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Génération de leads outbound, systèmes SDR multicanaux et infrastructure pipeline CRM.",
        "url": "https://nlgconsulting.co/fr/vente"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Vente & BD", "item": "https://nlgconsulting.co/fr/vente" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Combien de rendez-vous qualifiés puis-je espérer par mois ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nos clients reçoivent généralement 15-30 rendez-vous B2B qualifiés par mois. Cela dépend de votre marché cible, ICP et secteur, mais nous garantissons une livraison constante dans cette fourchette."
            }
          },
          {
            "@type": "Question",
            "name": "Combien de temps faut-il pour voir des résultats ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La plupart des clients voient leurs premiers rendez-vous qualifiés dans les 2-3 semaines suivant l'onboarding. Aux mois 2-3, votre moteur outbound est optimisé et livre 15-25 rendez-vous mensuels."
            }
          },
          {
            "@type": "Question",
            "name": "Quels canaux utilisez-vous pour la prospection ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nous déployons une prospection multicanale coordonnée incluant LinkedIn, séquences email et cold calling. Cela maximise les points de contact et les taux de réponse."
            }
          },
          {
            "@type": "Question",
            "name": "Intégrez-vous notre CRM ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, toutes les activités sont enregistrées directement dans votre CRM (HubSpot, Salesforce, Pipedrive, etc.) pour une visibilité complète et un transfert fluide à votre équipe commerciale."
            }
          },
          {
            "@type": "Question",
            "name": "Combien coûte l'externalisation SDR par rapport à l'interne ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Construire une équipe SDR interne coûte plus de 80 000€ par an par SDR (salaire, outils, formation, management). Notre solution externalisée délivre de meilleurs résultats à une fraction du coût sans temps de montée en compétence."
            }
          }
        ]
      }
    ]
  };

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Génération de Leads",
      description: "Prospection ciblée pour identifier et qualifier des leads à haute valeur pour votre équipe commerciale."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Outbound Multicanal",
      description: "Campagnes coordonnées sur email, LinkedIn et téléphone pour maximiser les points de contact."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Systèmes SDR",
      description: "Infrastructure SDR complète incluant recrutement, formation, scripts et suivi de performance."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Pipelines CRM",
      description: "Conception de pipeline et optimisation CRM pour visibilité, prévisions et conversion."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "IA Calling",
      description: "Systèmes d'appels assistés par IA pour scaler la prospection sans augmenter les effectifs."
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "Prospection LinkedIn",
      description: "Prospection LinkedIn stratégique et engagement pour la génération de leads B2B."
    }
  ];

  const results = [
    { metric: "15-30", label: "RDV qualifiés / mois" },
    { metric: "3+", label: "Canaux outbound" },
    { metric: "2x", label: "Croissance pipeline" },
    { metric: "24h", label: "Temps de réponse" }
  ];

  return (
    <>
      <Helmet>
        <title>Externalisation SDR | 15-30 RDV B2B Qualifiés/Mois Garantis | NLG</title>
        <meta 
          name="description" 
          content="Externalisez votre prospection B2B. Infrastructure SDR complète: LinkedIn, email, cold calling. 15-30 RDV qualifiés garantis. Audit commercial gratuit." 
        />
        <meta name="keywords" content="SDR externalisé, externalisation prospection, génération de leads B2B, prospection commerciale, prise de rendez-vous, agence leads, LinkedIn outreach" />
        <link rel="canonical" href="https://nlgconsulting.co/fr/vente" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/sales" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/vente" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/sales" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/fr/vente" />
        <meta property="og:title" content="Externalisation SDR | 15-30 RDV B2B Qualifiés/Mois | NLG" />
        <meta property="og:description" content="Externalisez votre prospection B2B. Infrastructure SDR complète: LinkedIn, email, cold calling. 15-30 RDV qualifiés garantis." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Externalisation SDR | 15-30 RDV B2B Qualifiés/Mois | NLG" />
        <meta name="twitter:description" content="Externalisez votre prospection B2B. Infrastructure SDR complète: LinkedIn, email, cold calling. 15-30 RDV qualifiés garantis." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbarFR />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Vente & BD
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Développement Commercial B2B Externalisé avec des Résultats Garantis
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Génération de leads outbound, systèmes SDR multicanaux et infrastructure pipeline CRM pour générer des rendez-vous qualifiés en continu. 15-30 RDV par mois, garantis.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/fr/rendez-vous">
                Audit commercial gratuit <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi les entreprises B2B externalisent leur développement commercial chez NLG</h2>
              <p>
                Construire une équipe de développement commercial interne est coûteux, chronophage et risqué. Entre le recrutement, la formation, les outils et le management, le coût moyen d'un SDR dépasse 80 000€ par an. Et c'est sans compter les 3 à 6 mois de montée en compétence et le taux de turnover de 35%.
              </p>
              <p>
                Le développement commercial externalisé de NLG Consulting élimine ces risques tout en délivrant des résultats constants. Nos équipes SDR formées commencent à générer des rendez-vous qualifiés dans les 2-3 semaines suivant l'onboarding. Vous payez pour les résultats, pas pour les frais fixes.
              </p>
              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Le Package Infrastructure Commerciale Complet</h3>
              <p>
                Nous ne fournissons pas seulement des personnes au téléphone. Notre service de développement commercial inclut tout ce dont vous avez besoin pour construire un moteur de revenus prévisible :
              </p>
              <ul>
                <li><strong>Définition du Profil Client Idéal (ICP) :</strong> Nous travaillons avec vous pour définir exactement qui sont vos meilleurs clients.</li>
                <li><strong>Construction de Listes de Prospects :</strong> Notre équipe de recherche construit des listes de contacts vérifiées.</li>
                <li><strong>Séquences Multicanales :</strong> Nous déployons une prospection coordonnée sur LinkedIn, email et téléphone.</li>
                <li><strong>Intégration CRM :</strong> Toutes les activités sont enregistrées dans votre CRM.</li>
                <li><strong>Analytics de Performance :</strong> Rapports hebdomadaires sur l'activité, les taux de réponse et les rendez-vous pris.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-80 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nous délivrons</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Infrastructure commerciale de bout en bout pour remplir votre pipeline d'opportunités qualifiées.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche</h2>
            </div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Découverte & Définition ICP", desc: "Nous analysons votre marché, définissons votre profil client idéal et construisons les listes cibles." },
                { step: "2", title: "Configuration des Campagnes", desc: "Séquences multicanales créées sur email, LinkedIn et téléphone avec messages personnalisés." },
                { step: "3", title: "Exécution Outbound", desc: "Notre équipe SDR exécute la prospection quotidienne, gère les réponses et qualifie les leads." },
                { step: "4", title: "Transfert des Rendez-vous", desc: "Les rendez-vous qualifiés sont réservés directement dans votre calendrier avec contexte complet." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Prêt à remplir votre pipeline ?</h2>
            <p className="text-lg opacity-90 mb-8">
              Réservez un audit commercial de 15 minutes pour discuter de votre stratégie outbound et vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/fr/rendez-vous">Audit commercial gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
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

export default SalesFR;
