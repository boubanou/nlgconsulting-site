import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Bot, Users, Megaphone, TrendingUp, FileText, Settings, CheckCircle } from "lucide-react";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";

const AgentsIAFR = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Agents IA pour Entreprises — Systèmes IA Agentiques",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Conception et déploiement de systèmes IA agentiques pour les ventes, le marketing, le contenu et les opérations. Agents IA basés sur Claude, workflows multi-étapes et automatisation connectée aux opérations réelles.",
        "url": "https://www.nlgconsulting.co/fr/agents-ia-entreprise",
        "areaServed": "Worldwide",
        "serviceType": "AI Agents"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce qu'un agent IA pour les entreprises ?", "acceptedAnswer": { "@type": "Answer", "text": "Un agent IA est un système d'intelligence artificielle autonome capable de raisonner, planifier des workflows multi-étapes, utiliser des outils externes et exécuter des processus business complexes — de la prospection commerciale à la production de contenu — avec une supervision humaine aux points de décision clés." }},
          { "@type": "Question", "name": "Qu'est-ce que l'IA agentique ?", "acceptedAnswer": { "@type": "Answer", "text": "L'IA agentique désigne des systèmes IA conçus pour agir de manière autonome sur des tâches multi-étapes. Contrairement aux prompts simples ou chatbots, l'IA agentique peut décomposer des objectifs complexes, orchestrer des outils, gérer les exceptions et itérer." }},
          { "@type": "Question", "name": "Comment utilisez-vous Claude Code pour les agents IA ?", "acceptedAnswer": { "@type": "Answer", "text": "Claude Code permet de construire des agents IA sophistiqués capables d'écrire, réviser et exécuter du code de manière autonome. Nous l'utilisons pour créer des agents qui interagissent avec des APIs, traitent des données, génèrent du contenu et gèrent des workflows opérationnels." }},
          { "@type": "Question", "name": "Les agents IA sont-ils fiables pour un usage professionnel ?", "acceptedAnswer": { "@type": "Answer", "text": "Lorsqu'ils sont conçus avec des garde-fous, du monitoring et des points de contrôle humains, les agents IA délivrent des résultats constants. Nous construisons des agents avec des mécanismes de sécurité adaptés aux processus critiques." }}
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
        <title>Agents IA pour Entreprises | Systèmes Agentiques | NLG</title>
        <meta name="description" content="Conception et déploiement de systèmes IA agentiques pour les ventes, le marketing, le contenu et les opérations. Workflows Claude Code, agents multi-étapes et automatisation human-in-the-loop." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/agents-ia-entreprise" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/agents-ia-entreprise" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nlgconsulting.co/ai-agents-for-business" />
        <meta property="og:title" content="Agents IA pour Entreprises | Systèmes Agentiques | NLG" />
        <meta property="og:description" content="Systèmes IA agentiques pour les ventes, le marketing, le contenu et les opérations." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/agents-ia-entreprise" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />
      <main className="min-h-screen bg-background">
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container-tight text-center">
            <Badge variant="outline" className="px-4 py-2 text-xs tracking-wide uppercase mb-6">IA Agentique</Badge>
            <h1 className="mb-6">Systèmes IA Agentiques{" "}<span className="text-gradient">pour les Opérations Business</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Les agents IA vont au-delà de l'automatisation. Ils raisonnent, planifient, utilisent des outils et exécutent des processus business complexes — de la prospection commerciale et la production de contenu à la recherche et aux workflows opérationnels. Nous concevons et déployons des systèmes IA agentiques connectés à vos opérations réelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg"><Link to="/fr/rendez-vous">Discuter des agents IA pour votre entreprise <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/fr/cas-usage">Voir les cas d'usage</Link></Button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="mb-6">De l'automatisation à l'intelligence agentique</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>L'<Link to="/fr/automation-ia" className="text-primary hover:underline">automatisation de workflows</Link> classique suit des règles : si ceci se produit, faire cela. C'est puissant pour les tâches structurées et répétitives. Mais beaucoup de processus business nécessitent du jugement, de l'adaptation et un raisonnement multi-étapes — c'est là que l'IA agentique crée un changement de niveau.</p>
              <p>Les systèmes IA agentiques — construits sur des modèles comme Claude d'Anthropic et OpenAI — peuvent décomposer des objectifs complexes en étapes, utiliser des outils et APIs externes, gérer les exceptions et itérer jusqu'à la complétion. Pour les workflows de conformité FinTech, la recherche de marché PropTech, les séquences d'onboarding SaaS ou la prospection B2B, l'IA agentique gère ce que l'automatisation seule ne peut pas.</p>
              <p>Claude Code, en particulier, permet de construire des agents IA capables d'écrire, réviser et exécuter du code de manière autonome — ouvrant des possibilités pour le traitement de données, les intégrations API, la génération de rapports et les workflows opérationnels qui étaient auparavant manuels.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Agents IA par fonction business</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, title: "Agents Ventes & Prospection", desc: "Agents qui recherchent les prospects, enrichissent les données, rédigent des messages personnalisés, gèrent les séquences de relance et qualifient les leads — alimentant votre pipeline avec discipline." },
                { icon: <Megaphone className="w-5 h-5" />, title: "Agents Marketing & Contenu", desc: "Production de contenu, rédaction SEO, gestion des réseaux sociaux, orchestration de campagnes et analyse de performance — un output consistant avec votre ton de marque." },
                { icon: <FileText className="w-5 h-5" />, title: "Agents Recherche & Intelligence", desc: "Études de marché, analyse concurrentielle, synthèse de données et business intelligence — des agents IA qui traitent l'information à grande échelle et identifient des insights actionnables." },
                { icon: <Settings className="w-5 h-5" />, title: "Agents Opérations & Workflows", desc: "Traitement de documents, synchronisation de données, génération de rapports, gestion CRM et orchestration de workflows internes." },
                { icon: <Users className="w-5 h-5" />, title: "Agents Support Fondateur", desc: "Assistants exécutifs IA qui gèrent la recherche, la préparation de réunions, le tri d'emails, la gestion de tâches et l'analyse stratégique — multipliant la productivité du fondateur." },
                { icon: <Bot className="w-5 h-5" />, title: "Systèmes Agentiques Sur Mesure", desc: "Agents IA conçus pour votre industrie, vos workflows et vos exigences d'intégration spécifiques — de la conformité FinTech au deal flow PropTech." }
              ].map((item, i) => (
                <Card key={i} className="border border-border">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Comment nous concevons les systèmes agentiques</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Définition du cas d'usage & périmètre", desc: "Nous définissons ce que l'agent doit accomplir, quels inputs et outils il nécessite, quels outputs il produit, et où la supervision humaine est requise — ancré dans vos opérations réelles." },
                { step: "02", title: "Architecture & Sélection de modèle", desc: "Nous concevons le framework de raisonnement de l'agent — choix entre Claude, OpenAI ou architectures hybrides — et définissons les intégrations d'outils et contrôles qualité." },
                { step: "03", title: "Construction, Test & Affinage", desc: "Développement itératif avec des scénarios business réels. Chaque agent est testé sur les cas limites, affiné en précision et validé selon vos standards qualité." },
                { step: "04", title: "Déploiement avec Monitoring & Gouvernance", desc: "Mise en production avec monitoring temps réel, logging, points de contrôle humains et optimisation continue — garantissant fiabilité et valeur business." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                  <span className="text-2xl font-semibold text-primary/40">{item.step}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <h2 className="text-center mb-10">Agents IA vs Automatisation classique</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-4">Automatisation classique</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Suit des règles et déclencheurs prédéfinis</li>
                  <li>• Gère des tâches simples et linéaires</li>
                  <li>• Échoue sur les exceptions et cas limites</li>
                  <li>• Nécessite des mises à jour manuelles quand les processus changent</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
                <h3 className="font-semibold mb-4 text-primary">Systèmes IA Agentiques</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Raisonnent à travers des processus complexes multi-étapes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> S'adaptent aux inputs inattendus et cas limites</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Utilisent des outils, APIs et sources de données externes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> S'améliorent avec le temps grâce au feedback et au monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container-tight text-center">
            <h2 className="text-primary-foreground mb-4">Déployez l'IA agentique dans vos opérations</h2>
            <p className="text-lg opacity-90 mb-8">Réservez un appel pour évaluer quels agents IA peuvent améliorer vos workflows de vente, contenu, recherche ou opérations.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-center mb-10">Services connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Automatisation IA des workflows", desc: "Automatisation structurée pour les processus basés sur des règles.", link: "/fr/automation-ia" },
                { title: "Automatisation commerciale IA", desc: "Systèmes IA pour la prospection, l'outreach et le pipeline.", link: "/fr/automation-commerciale-ia" },
                { title: "Conseil en IA", desc: "Advisory stratégique en IA pour les opérations et la croissance.", link: "/fr/conseil-ia" }
              ].map((item, i) => (
                <Link to={item.link} key={i} className="group">
                  <Card className="h-full hover:border-primary/30 transition-all"><CardContent className="p-6"><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground text-sm mb-3">{item.desc}</p><span className="text-sm text-primary font-medium inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-3.5 h-3.5" /></span></CardContent></Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-tight">
            <h2 className="text-center mb-10">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Qu'est-ce qu'un agent IA pour les entreprises ?", a: "Un agent IA est un système autonome capable de raisonner, planifier des workflows multi-étapes, utiliser des outils externes et exécuter des processus business complexes — avec une supervision humaine aux points de décision clés." },
                { q: "Qu'est-ce que l'IA agentique ?", a: "L'IA agentique désigne des systèmes conçus pour agir de manière autonome sur des tâches multi-étapes. Contrairement aux prompts ou chatbots, elle peut décomposer des objectifs, orchestrer des outils, gérer les exceptions et itérer." },
                { q: "Comment utilisez-vous Claude Code ?", a: "Claude Code permet de construire des agents qui écrivent, révisent et exécutent du code de manière autonome. Nous l'utilisons pour créer des agents qui interagissent avec des APIs, traitent des données et gèrent des workflows opérationnels." },
                { q: "Les agents IA sont-ils fiables ?", a: "Lorsqu'ils sont conçus avec des garde-fous, du monitoring et des points de contrôle humains (human-in-the-loop), les agents IA délivrent des résultats constants et fiables." },
                { q: "Quelle différence entre agents IA et automatisation ?", a: "L'automatisation suit des règles prédéfinies. Les agents IA raisonnent, s'adaptent et gèrent des processus complexes. Les meilleurs systèmes combinent les deux : automatisation structurée et intelligence agentique." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}><AccordionTrigger className="text-left">{item.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight text-center">
            <h2 className="mb-4">Explorez les agents IA pour votre entreprise</h2>
            <p className="text-lg text-muted-foreground mb-8">Réservez un appel ciblé pour discuter de vos cas d'usage et évaluer où l'IA agentique crée le plus de levier.</p>
            <Button asChild size="lg"><Link to="/fr/rendez-vous">Réserver un appel stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
          </div>
        </section>
      </main>
      <MainFooterFR />
    </>
  );
};

export default AgentsIAFR;
