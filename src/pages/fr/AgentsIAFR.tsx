import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Bot, Users, Megaphone, TrendingUp, FileText, Settings, CheckCircle, Brain } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AgentsIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Agents IA pour Entreprises",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Conception et déploiement d'agents IA autonomes pour les ventes, le marketing, le contenu et les opérations. Des systèmes intelligents qui travaillent pour vous 24/7.",
        "url": "https://www.nlgconsulting.co/fr/agents-ia-entreprise",
        "areaServed": "Worldwide",
        "serviceType": "AI Agents"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce qu'un agent IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Un agent IA est un système d'intelligence artificielle autonome capable de planifier, exécuter des tâches multi-étapes, utiliser des outils et prendre des décisions avec un minimum de supervision humaine." }},
          { "@type": "Question", "name": "Quelle est la différence entre un agent IA et un chatbot ?", "acceptedAnswer": { "@type": "Answer", "text": "Un chatbot répond à des questions prédéfinies. Un agent IA peut raisonner, s'adapter, exécuter des workflows complexes, interagir avec plusieurs outils et gérer des processus métier de bout en bout." }},
          { "@type": "Question", "name": "Les agents IA sont-ils fiables pour un usage professionnel ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, lorsqu'ils sont conçus avec des garde-fous, un monitoring adapté et des points de contrôle humains. Nous construisons des agents avec des mécanismes de sécurité appropriés aux processus critiques." }},
          { "@type": "Question", "name": "Quelles tâches un agent IA peut-il gérer ?", "acceptedAnswer": { "@type": "Answer", "text": "Prospection commerciale, création de contenu, support client, recherche de données, gestion de campagnes marketing, traitement de documents et workflows opérationnels." }}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr" },
          { "@type": "ListItem", "position": 2, "name": "Agents IA", "item": "https://www.nlgconsulting.co/fr/agents-ia-entreprise" }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Agents IA pour Entreprises | Ventes, Marketing & Opérations | NLG Consulting</title>
        <meta name="description" content="Déployez des agents IA autonomes dans votre entreprise. Automatisez les ventes, le marketing, le contenu et les opérations avec des systèmes intelligents conçus sur mesure." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/agents-ia-entreprise" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/agents-ia-entreprise" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <meta property="og:title" content="Agents IA pour Entreprises | NLG Consulting" />
        <meta property="og:description" content="Déployez des agents IA autonomes pour vos ventes, marketing et opérations." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/agents-ia-entreprise" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">Agents IA</Badge>
            <h1 className="mb-6">Agents IA{" "}<span className="text-gradient">pour Entreprises</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les agents IA vont au-delà de l'automatisation classique. Ce sont des systèmes intelligents capables de raisonner, de prendre des décisions et d'exécuter des tâches complexes en autonomie — 24h/24, 7j/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Explorer les agents IA <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/contact">Nous contacter</Link></Button>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-4">Agents IA par département</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Chaque département de votre entreprise peut bénéficier d'agents IA spécialisés qui travaillent en continu.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: TrendingUp, title: "Agents IA pour les ventes", desc: "Prospection automatisée, recherche de prospects, rédaction de messages personnalisés, suivi des relances et qualification de leads — le tout piloté par l'IA.", link: "/fr/automation-commerciale-ia" },
                { icon: Megaphone, title: "Agents IA pour le marketing", desc: "Création de contenu, planification éditoriale, rédaction d'articles SEO, posts LinkedIn, newsletters et gestion de campagnes — automatisés et intelligents.", link: "/fr/automation-marketing-ia" },
                { icon: FileText, title: "Agents IA pour le contenu", desc: "Rédaction, reformulation, traduction, optimisation SEO, création de visuels et publication multi-canal — un département contenu autonome.", link: "/fr/automation-marketing-ia" },
                { icon: Settings, title: "Agents IA pour les opérations", desc: "Traitement de documents, onboarding, reporting, synchronisation de données, gestion de workflows — vos opérations tournent en automatique.", link: "/fr/automation-ia" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <item.icon className="w-8 h-8 mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How We Build */}
        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Comment nous construisons vos agents IA</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Analyse du cas d'usage", desc: "Nous comprenons votre processus métier spécifique, identifions les tâches automatisables et définissons les objectifs de l'agent." },
                { step: "02", title: "Architecture & Design", desc: "Nous concevons l'architecture de l'agent — modèle IA, outils, intégrations, garde-fous et points de contrôle humains." },
                { step: "03", title: "Construction & Itération", desc: "Développement itératif avec tests rigoureux. L'agent est affiné jusqu'à atteindre les standards de qualité et de fiabilité requis." },
                { step: "04", title: "Déploiement & Monitoring", desc: "Mise en production avec monitoring en temps réel, alertes et optimisation continue basée sur les résultats." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Difference */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Agents IA vs Automatisation classique</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-4">Automatisation classique</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Suit des règles prédéfinies</li>
                  <li>• Gère des tâches simples et linéaires</li>
                  <li>• Échoue face aux exceptions</li>
                  <li>• Nécessite une maintenance régulière</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
                <h3 className="font-semibold mb-4 text-primary">Agents IA</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Raisonnent et s'adaptent aux situations</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Gèrent des processus multi-étapes complexes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Gèrent les exceptions intelligemment</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Apprennent et s'améliorent avec le temps</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Déployez des agents IA dans votre entreprise</h2>
            <p className="text-lg opacity-90 mb-8">Réservez une consultation pour explorer quels agents IA pourraient transformer vos opérations.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver une consultation <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        {/* Related */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Automatisation IA", desc: "Automatisation de workflows pour les processus structurés.", link: "/fr/automation-ia" },
                { title: "Automatisation commerciale IA", desc: "Agents IA spécialisés pour la prospection et les ventes.", link: "/fr/automation-commerciale-ia" },
                { title: "Implémentation IA externalisée", desc: "Nous opérons vos systèmes IA en tant que département externe.", link: "/fr/implementation-ia-externalisee" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce qu'un agent IA ?", a: "Un agent IA est un système d'intelligence artificielle autonome capable de planifier, exécuter des tâches multi-étapes, utiliser des outils et prendre des décisions avec un minimum de supervision humaine. Contrairement aux chatbots, les agents peuvent gérer des processus métier complexes." },
                { q: "Quelle est la différence entre un agent IA et un chatbot ?", a: "Un chatbot répond à des questions dans un cadre limité. Un agent IA peut raisonner, s'adapter, exécuter des workflows complexes, interagir avec plusieurs outils et systèmes, et gérer des processus métier de bout en bout." },
                { q: "Les agents IA sont-ils fiables pour un usage professionnel ?", a: "Oui, lorsqu'ils sont conçus avec des garde-fous, un monitoring adapté et des points de contrôle humains (human-in-the-loop). Nous construisons des agents avec des mécanismes de sécurité appropriés aux processus critiques." },
                { q: "Quelles tâches un agent IA peut-il gérer ?", a: "Prospection et outreach commercial, création et publication de contenu, support client et gestion de tickets, recherche de données, gestion de campagnes marketing, traitement de documents et workflows opérationnels." },
                { q: "Comment construisez-vous des agents IA sur mesure ?", a: "Nous commençons par comprendre votre cas d'usage spécifique, puis concevons l'architecture de l'agent, sélectionnons le modèle IA approprié, définissons les outils et intégrations, mettons en place les garde-fous et itérons jusqu'à atteindre les standards de qualité requis." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Prêt à déployer vos agents IA ?</h2>
            <p className="text-lg text-muted-foreground mb-8">Discutons de vos besoins lors d'un appel découverte gratuit.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un appel gratuit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AgentsIAFR;
