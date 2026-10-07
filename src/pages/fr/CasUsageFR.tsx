import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainNavbarFR from "@/components/fr/MainNavbarFR";
import MainFooterFR from "@/components/fr/MainFooterFR";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Layers, BarChart3, Settings, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.nlgconsulting.co/fr/cas-usage",
      "url": "https://www.nlgconsulting.co/fr/cas-usage",
      "name": "Automatisation IA & Cas d'Usage Stratégiques | NLG Consulting",
      "description": "Cas d'usage sélectionnés : automatisation IA, SDR externalisé, génération de leads B2B et optimisation des processus commerciaux pour équipes dirigeantes.",
      "inLanguage": "fr",
      "isPartOf": { "@id": "https://www.nlgconsulting.co/#website" },
      "publisher": { "@id": "https://www.nlgconsulting.co/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.nlgconsulting.co/#organization",
      "name": "NLG Consulting",
      "url": "https://www.nlgconsulting.co",
      "logo": "https://www.nlgconsulting.co/logo.svg"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.nlgconsulting.co/fr/" },
        { "@type": "ListItem", "position": 2, "name": "Cas d'usage", "item": "https://www.nlgconsulting.co/fr/cas-usage" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que le conseil en automatisation IA ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Le conseil en automatisation IA consiste à concevoir et déployer des systèmes intelligents qui réduisent les tâches manuelles, améliorent les flux de données et créent des processus commerciaux évolutifs — de la qualification des leads à la gestion du pipeline." }
        },
        {
          "@type": "Question",
          "name": "Comment le SDR externalisé soutient-il la croissance ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Le SDR externalisé fournit une capacité outbound dédiée sans les coûts d'un recrutement interne. Il accélère la génération de pipeline grâce à une prospection structurée, des séquences ciblées et des processus de qualification rigoureux." }
        },
        {
          "@type": "Question",
          "name": "Comment l'IA peut-elle automatiser le suivi commercial d'une société de conseil ?",
          "acceptedAnswer": { "@type": "Answer", "text": "L'IA peut résumer les rendez-vous, mettre à jour le CRM, créer les prochaines tâches, préparer des relances contextualisées, signaler les opportunités sans prochaine étape et produire des synthèses pipeline, tout en conservant une validation humaine sur les messages et décisions sensibles." }
        },
        {
          "@type": "Question",
          "name": "Quand une entreprise devrait-elle automatiser ses processus commerciaux ?",
          "acceptedAnswer": { "@type": "Answer", "text": "L'automatisation est pertinente lorsqu'elle peut améliorer la vitesse, la capacité, la régularité ou la visibilité commerciale — même si le processus actuel fonctionne déjà correctement." }
        },
        {
          "@type": "Question",
          "name": "Quels sont les avantages de combiner automatisation IA et vente outbound ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cette combinaison crée une cadence opérationnelle plus régulière — améliorant le scoring, la discipline de suivi, la personnalisation à l'échelle et la vélocité globale du pipeline." }
        },
        {
          "@type": "Question",
          "name": "Comment les équipes dirigeantes peuvent-elles évaluer la scalabilité de leurs systèmes de génération de leads ?",
          "acceptedAnswer": { "@type": "Answer", "text": "La scalabilité dépend de la reproductibilité des processus, de la qualité des données, de la couverture d'automatisation et de la capacité à maintenir les taux de conversion à mesure que le volume augmente." }
        }
      ]
    }
  ]
};

const useCases = [
  {
    icon: Settings,
    title: "Automatisation IA des Workflows pour une Entreprise SaaS B2B",
    context: "Une entreprise SaaS B2B européenne de 40 commerciaux gérait le routage des leads, les séquences de suivi et les mises à jour CRM via un ensemble de processus manuels et d'outils déconnectés.",
    challenge: "L'équipe commerciale consacrait un temps significatif aux tâches administratives — mises à jour de fiches, routage des leads entrants, déclenchement manuel des séquences. Cela réduisait le temps de vente et créait des incohérences dans les données de pipeline.",
    intervention: "Dans ce type de situation, NLG peut réaliser un audit des workflows, cartographié le processus commercial existant et conçu une couche d'automatisation intégrée connectant le CRM, le séquençage email et les systèmes de scoring.",
    execution: "L'intervention a inclus un scoring IA des leads, des règles de routage automatisé basées sur les critères ICP, et des séquences de suivi structurées déclenchées par le comportement des prospects.",
    outcomes: "L'équipe a constaté une réduction mesurable de la saisie manuelle, une amélioration des délais de réponse et une meilleure visibilité sur le pipeline pour le management.",
    relevance: "Pour les équipes dirigeantes gérant des organisations commerciales en croissance, l'automatisation IA des workflows crée la clarté opérationnelle nécessaire pour orienter la capacité commerciale vers la génération de revenus."
  },
  {
    icon: Target,
    title: "Structure SDR Externalisée pour une Entreprise PropTech",
    context: "Un opérateur PropTech international entrant sur de nouveaux marchés européens devait générer des rendez-vous qualifiés avec des promoteurs immobiliers et des investisseurs institutionnels — sans construire une équipe SDR interne.",
    challenge: "Recruter, former et gérer des SDR dans plusieurs géographies aurait nécessité des mois de montée en compétence et des coûts fixes significatifs. L'entreprise avait besoin d'une capacité outbound immédiate.",
    intervention: "Dans ce type de situation, NLG peut concevoir un programme outbound structuré ciblant des personas acheteurs spécifiques sur trois marchés européens, avec des cadres de messaging adaptés à chaque segment.",
    execution: "Le programme incluait la définition d'ICP, la constitution de listes, le séquençage multicanal (email et LinkedIn), l'A/B testing des angles de messaging et des revues hebdomadaires avec l'équipe dirigeante.",
    outcomes: "Le programme outbound a généré un flux régulier de rendez-vous qualifiés dès le premier mois. Le client a gagné en intelligence de marché et a pu affiner son positionnement.",
    relevance: "Pour les entreprises en expansion internationale, le SDR externalisé offre une approche structurée et maîtrisée de la génération de pipeline — sans les coûts et délais du recrutement interne."
  },
  {
    icon: BarChart3,
    title: "Système de Génération de Leads pour une Entreprise FinTech / Paiements",
    context: "Une plateforme FinTech en croissance opérant dans les paiements transfrontaliers devait systématiser ses efforts de génération de leads et réduire sa dépendance aux ventes portées par les fondateurs.",
    challenge: "La génération de leads était largement opportuniste — portée par des recommandations entrantes et les relations des fondateurs. Pas de pipeline structuré, peu de discipline CRM, pas de processus outbound reproductible.",
    intervention: "Dans ce type de situation, NLG peut construire un système de génération de leads combinant séquences outbound ciblées, optimisation du contenu inbound et automatisation CRM pour créer un pipeline structuré et mesurable.",
    execution: "L'intervention a inclus le développement de personas, l'analyse du positionnement concurrentiel, des campagnes outbound multicanal, l'implémentation du scoring et des tableaux de bord pour la direction.",
    outcomes: "L'entreprise est passée d'une génération de leads ad hoc à un système structuré avec une meilleure discipline de qualification, des étapes de pipeline plus claires et une précision de prévision améliorée.",
    relevance: "Les entreprises FinTech opérant sur des marchés concurrentiels bénéficient de systèmes de génération de leads structurés qui fournissent un flux régulier d'opportunités."
  },
  {
    icon: Layers,
    title: "Structuration Commerciale pour une Plateforme d'Investissement Immobilier",
    context: "Une société d'investissement immobilier gérant un portefeuille d'actifs résidentiels et commerciaux souhaitait professionnaliser ses relations investisseurs et son processus d'origination.",
    challenge: "La fonction commerciale manquait d'approche systématique pour l'engagement outbound. La communication investisseurs était incohérente et l'origination dépendait d'un réseau restreint de contacts personnels.",
    intervention: "Dans ce type de situation, NLG peut repenser le modèle opérationnel commercial — introduisant des séquences outbound structurées, un suivi CRM des transactions et un reporting automatisé pour le comité d'investissement.",
    execution: "Le projet incluait la segmentation investisseurs, la conception de cadences de communication, la configuration CRM, des workflows de suivi automatisé et des modèles de reporting trimestriel.",
    outcomes: "L'entreprise a amélioré sa cadence de communication investisseurs, réduit le temps de préparation des rapports et gagné en visibilité sur le pipeline d'origination.",
    relevance: "Pour les plateformes immobilières et d'investissement, la structuration commerciale crée la discipline opérationnelle nécessaire pour développer les relations investisseurs sans augmenter proportionnellement les effectifs."
  },
  {
    icon: Users,
    title: "Croissance Assistée par l'IA pour un Cabinet de Conseil Fondé par son Dirigeant",
    context: "Un cabinet de conseil fondé par son dirigeant, spécialisé en stratégie, souhaitait se développer au-delà de sa base de clients existante sans compromettre la qualité de service ni le positionnement de marque.",
    challenge: "La croissance était contrainte par le réseau personnel du fondateur. Pas de processus outbound, présence digitale limitée, pas d'approche structurée de qualification ou de développement commercial.",
    intervention: "Dans ce type de situation, NLG peut implémenter un système de croissance assisté par l'IA combinant inbound par le contenu, outbound ciblé et automatisation des workflows pour créer un moteur de développement commercial évolutif.",
    execution: "L'intervention a inclus l'affinement du positionnement, l'optimisation du site, la distribution de contenu assistée par l'IA, des séquences outbound LinkedIn, le scoring et un cadre de qualification structuré.",
    outcomes: "Le cabinet a établi un pipeline plus régulier d'opportunités qualifiées, réduit sa dépendance aux ventes portées par le fondateur et amélioré sa rigueur commerciale.",
    relevance: "Les cabinets fondés par leur dirigeant atteignent souvent un plafond de croissance lorsque l'activité commerciale dépend d'une seule personne. Les systèmes de croissance assistés par l'IA créent la structure nécessaire pour se développer durablement."
  }
];

const interventionSteps = [
  { step: "01", title: "Audit & Découverte", description: "Nous évaluons votre infrastructure commerciale actuelle, vos outils, workflows et organisation pour identifier les contraintes et opportunités." },
  { step: "02", title: "Diagnostic & Stratégie", description: "Nous posons un diagnostic clair de ce qui doit évoluer — et concevons un plan stratégique aligné sur vos objectifs de croissance." },
  { step: "03", title: "Conception Système", description: "Nous architecturons les systèmes techniques et opérationnels nécessaires — de la configuration CRM aux workflows d'automatisation." },
  { step: "04", title: "Couche d'Automatisation", description: "Nous déployons l'automatisation IA sur le scoring, le routage, les séquences de suivi et le reporting pour réduire la charge manuelle." },
  { step: "05", title: "Exécution Outbound", description: "Le cas échéant, nous déployons des programmes outbound structurés avec un messaging ciblé, un séquençage multicanal et un suivi des performances." },
  { step: "06", title: "Itération & Gouvernance", description: "Nous affinons les systèmes sur la base des données de performance et établissons des cadences de reporting pour la direction." }
];

const faqs = [
  {
    question: "Comment l'IA peut-elle automatiser le suivi commercial d'une société de conseil ?",
    answer: "Elle peut résumer les rendez-vous, créer les prochaines tâches, mettre à jour le CRM, préparer les relances à partir du contexte, signaler les opportunités sans next step et produire des synthèses pipeline. Les messages et décisions sensibles peuvent rester soumis à validation humaine."
  },
  {
    question: "Qu'est-ce que le conseil en automatisation IA ?",
    answer: "Le conseil en automatisation IA consiste à concevoir et déployer des systèmes intelligents qui réduisent les tâches manuelles, améliorent les flux de données et créent des processus commerciaux évolutifs — de la qualification des leads à la gestion du pipeline."
  },
  {
    question: "Comment le SDR externalisé soutient-il la croissance ?",
    answer: "Le SDR externalisé fournit une capacité outbound dédiée sans les coûts d'un recrutement interne. Il accélère la génération de pipeline grâce à une prospection structurée, des séquences ciblées et des processus de qualification rigoureux."
  },
  {
    question: "Quand une entreprise devrait-elle automatiser ses processus commerciaux ?",
    answer: "L'automatisation devient pertinente dès qu'elle peut améliorer la vitesse, la capacité, la régularité, la conversion ou la visibilité commerciale. Un processus n'a pas besoin d'être défaillant pour mériter d'être optimisé."
  },
  {
    question: "Quels sont les avantages de combiner automatisation IA et vente outbound ?",
    answer: "Cette combinaison crée une cadence opérationnelle plus régulière — améliorant le scoring, la discipline de suivi, la personnalisation à l'échelle et la vélocité globale du pipeline."
  },
  {
    question: "Comment évaluer la scalabilité des systèmes de génération de leads ?",
    answer: "La scalabilité dépend de la reproductibilité des processus, de la qualité des données, de la couverture d'automatisation et de la capacité à maintenir les taux de conversion à mesure que le volume augmente. Un audit structuré permet d'identifier les points de blocage."
  }
];

const CasUsageFR = () => {
  return (
    <>
      <Helmet>
        <title>Automatisation IA & Cas d'Usage Stratégiques | NLG Consulting</title>
        <meta name="description" content="Cas d'usage sélectionnés pour l'automatisation IA, le SDR externalisé, la génération de leads B2B et l'optimisation des processus commerciaux. Exemples stratégiques pour équipes dirigeantes." />
        <link rel="canonical" href="https://www.nlgconsulting.co/fr/cas-usage" />
        <link rel="alternate" hrefLang="en" href="https://www.nlgconsulting.co/use-cases" />
        <link rel="alternate" hrefLang="fr" href="https://www.nlgconsulting.co/fr/cas-usage" />
        <meta property="og:title" content="Automatisation IA & Cas d'Usage Stratégiques | NLG Consulting" />
        <meta property="og:description" content="Cas d'usage sélectionnés : automatisation IA, SDR externalisé, génération de leads B2B et optimisation commerciale pour équipes dirigeantes." />
        <meta property="og:url" content="https://www.nlgconsulting.co/fr/cas-usage" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automatisation IA & Cas d'Usage Stratégiques | NLG Consulting" />
        <meta name="twitter:description" content="Cas d'usage sélectionnés : automatisation IA, SDR externalisé, génération de leads B2B et optimisation commerciale pour équipes dirigeantes." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <MainNavbarFR />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
              Automatisation IA, Systèmes de Croissance & Cas d'Usage Stratégiques
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Scénarios pratiques pour comprendre comment l'IA, l'automatisation et les systèmes commerciaux peuvent améliorer le suivi, la capacité et la croissance d'une entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <Link to="/fr/rendez-vous">Réserver un Appel Stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <a href="#use-cases" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
                Explorer les Cas d'Usage
              </a>
            </div>
          </div>
        </section>

        {/* Executive Introduction */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Comment l’IA peut automatiser le suivi commercial d’une société de conseil</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Pour une société de conseil, l’IA peut automatiser une grande partie du suivi sans remplacer la relation commerciale : résumer un rendez-vous, créer les tâches et prochaines étapes, mettre à jour le CRM, préparer une relance contextualisée, détecter les opportunités sans action et produire une synthèse pipeline pour la direction. Les messages importants et les décisions commerciales restent sous contrôle humain.
              </p>
              <p>
                NLG Consulting aide les entreprises à identifier les points de levier puis à construire des systèmes concrets en combinant <Link to="/fr/conseil-ia" className="text-primary hover:underline">conseil IA</Link>, <Link to="/fr/automation-commerciale-ia" className="text-primary hover:underline">automatisation commerciale</Link>, conception de workflows, <Link to="/fr/sdr-externalise" className="text-primary hover:underline">SDR externalisé</Link> et <Link to="/fr/agence-lead-generation-b2b" className="text-primary hover:underline">génération de leads B2B</Link>.
              </p>
              <p>
                L’objectif n’est pas d’automatiser pour automatiser : il est d’améliorer la vitesse, la capacité, la qualité du suivi, la conversion ou la visibilité managériale avec des contrôles adaptés.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">Cas d'Usage Sélectionnés</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Les scénarios ci-dessous sont illustratifs : ils montrent comment nous structurons les problèmes et les solutions, sans présenter des résultats clients non documentés comme des études de cas.
            </p>

            <div className="space-y-12">
              {useCases.map((uc, i) => (
                <article key={i} className="border border-border rounded-lg p-6 md:p-8 bg-card">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-2.5 rounded-md bg-primary/5 text-primary shrink-0">
                      <uc.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">{uc.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-5 text-sm text-muted-foreground leading-relaxed">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Contexte</h4>
                      <p>{uc.context}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Défi</h4>
                      <p>{uc.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Intervention Stratégique</h4>
                      <p>{uc.intervention}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Couche d'Exécution</h4>
                      <p>{uc.execution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Résultats Indicatifs</h4>
                      <p>{uc.outcomes}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1.5 text-xs uppercase tracking-wider">Pertinence Stratégique</h4>
                      <p>{uc.relevance}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How We Intervene */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">Notre Mode d'Intervention</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Notre logique de conseil suit une approche structurée — du diagnostic à l'exécution et à la gouvernance continue.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {interventionSteps.map((step) => (
                <div key={step.step} className="p-6 rounded-lg border border-border bg-card">
                  <span className="text-xs font-mono text-primary/60 mb-2 block">{step.step}</span>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EEAT / first-party methodology */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Une approche opérateur : processus, contrôle et mesure</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                Notre méthode part du fonctionnement réel de l’entreprise : déclencheurs, données, étapes, exceptions, responsabilités et résultat attendu. Nous évaluons ensuite où l’IA peut créer un levier mesurable sans introduire une complexité supérieure au bénéfice.
              </p>
              <p>
                Chaque automatisation doit avoir un propriétaire, un modèle de contrôle et une métrique : temps de cycle, délai de réponse, tâches évitées, capacité créée, progression pipeline ou qualité du suivi. Consultez notre <Link to="/fr/ressources/audit-ia-pme" className="text-primary hover:underline">guide d’audit IA pour PME</Link> et notre <Link to="/fr/ressources/automatisation-ia-pme" className="text-primary hover:underline">guide d’automatisation IA pour PME</Link>.
              </p>
              <p>
                NLG combine conseil et exécution. L’objectif est de transformer une opportunité identifiée en workflow exploitable, puis d’étendre uniquement ce qui crée une valeur démontrée.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">Questions Fréquentes</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left text-foreground font-medium py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Discutons de Votre Structure de Croissance</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Si vous réévaluez votre modèle outbound, votre stack d'automatisation ou votre rythme opérationnel commercial, nous pouvons identifier où la structure et le levier peuvent être améliorés.
            </p>
            <Button asChild size="lg">
              <Link to="/fr/rendez-vous">Réserver un Appel Stratégique <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <MainFooterFR />
    </>
  );
};

export default CasUsageFR;
