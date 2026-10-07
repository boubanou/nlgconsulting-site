export interface SeoRouteMeta {
  path: string;
  lang: "en" | "fr";
  cluster: "core" | "ai" | "sales" | "industry";
  title: string;
  description: string;
  canonical: string;
  h1: string;
  alternate: string;
}

export const BASE_URL = "https://www.nlgconsulting.co";

export const seoRoutes: SeoRouteMeta[] = [
  {
    "path": "/",
    "lang": "en",
    "cluster": "core",
    "title": "AI Automation & Consulting for Small Business | NLG",
    "description": "Done-for-you AI automation and consulting for small and growing businesses. Save time, improve operations and grow revenue — or talk to the NLG website and let it guide you.",
    "canonical": "https://www.nlgconsulting.co/",
    "h1": "Make AI Work for Your Business — Without Becoming an AI Expert",
    "alternate": "/fr"
  },
  {
    "path": "/fr",
    "lang": "fr",
    "cluster": "core",
    "title": "Automatisation IA & Conseil IA pour PME | NLG",
    "description": "Automatisation IA et conseil IA pour PME et entreprises en croissance. Gagnez du temps, améliorez vos opérations et vos revenus — ou parlez directement au site NLG.",
    "canonical": "https://www.nlgconsulting.co/fr",
    "h1": "Faites Travailler l'IA pour Votre Entreprise — Sans Devenir Expert en IA",
    "alternate": "/"
  },
  {
    "path": "/services",
    "lang": "en",
    "cluster": "core",
    "title": "AI Automation, Consulting & Growth Services | NLG",
    "description": "AI automation, AI consulting, sales systems and strategic execution for small and growing businesses. Start with the business outcome; NLG handles the technology and implementation.",
    "canonical": "https://www.nlgconsulting.co/services",
    "h1": "Start With What You Want to Improve — Not the Technology",
    "alternate": "/fr/services"
  },
  {
    "path": "/fr/services",
    "lang": "fr",
    "cluster": "core",
    "title": "Automatisation IA, Conseil IA & Croissance pour PME | NLG",
    "description": "Automatisation IA, conseil IA, systèmes commerciaux et exécution stratégique pour PME et entreprises en croissance. Partez de l’objectif business ; NLG gère la technologie.",
    "canonical": "https://www.nlgconsulting.co/fr/services",
    "h1": "Commencez par ce que Vous Voulez Améliorer — Pas par la Technologie",
    "alternate": "/services"
  },
  {
    "path": "/book",
    "lang": "en",
    "cluster": "core",
    "title": "Book an AI & Automation Strategy Call | NLG Consulting",
    "description": "A focused 15-minute conversation to identify where AI, automation and growth systems can save time, reduce costs, increase revenue or improve performance.",
    "canonical": "https://www.nlgconsulting.co/book",
    "h1": "Book a Strategy Call",
    "alternate": "/fr/rendez-vous"
  },
  {
    "path": "/fr/rendez-vous",
    "lang": "fr",
    "cluster": "core",
    "title": "Réserver un Appel IA & Automatisation | NLG Consulting",
    "description": "Une conversation de 15 minutes pour identifier où l'IA, l'automatisation et les systèmes de croissance peuvent faire gagner du temps, réduire les coûts, augmenter les revenus ou améliorer la performance.",
    "canonical": "https://www.nlgconsulting.co/fr/rendez-vous",
    "h1": "Réserver un Appel Stratégique",
    "alternate": "/book"
  },
  {
    "path": "/ai-consulting",
    "lang": "en",
    "cluster": "ai",
    "title": "AI Consulting for Small Business & B2B | NLG",
    "description": "AI consulting for small and growing businesses: identify high-value use cases, map workflows, build a practical AI roadmap and implement automation and AI agents.",
    "canonical": "https://www.nlgconsulting.co/ai-consulting",
    "h1": "AI Consulting for Business: Audit, Roadmap & Implementation",
    "alternate": "/fr/conseil-ia"
  },
  {
    "path": "/fr/conseil-ia",
    "lang": "fr",
    "cluster": "ai",
    "title": "Consultant IA pour PME & Entreprises | NLG",
    "description": "Conseil IA pour PME et entreprises en croissance : identifier les cas d’usage à forte valeur, auditer les processus, construire une roadmap et déployer automatisations et agents IA.",
    "canonical": "https://www.nlgconsulting.co/fr/conseil-ia",
    "h1": "Consultant IA pour Entreprises : Audit, Roadmap & Déploiement",
    "alternate": "/ai-consulting"
  },
  {
    "path": "/ai-automation",
    "lang": "en",
    "cluster": "ai",
    "title": "AI Automation Agency for Small Business & B2B | NLG",
    "description": "Done-for-you AI automation for small businesses and B2B teams. Automate CRM, sales, marketing, reporting and operations with practical workflows built around your existing tools.",
    "canonical": "https://www.nlgconsulting.co/ai-automation",
    "h1": "AI Automation for Business — Without the Technical Complexity",
    "alternate": "/fr/automation-ia"
  },
  {
    "path": "/fr/automation-ia",
    "lang": "fr",
    "cluster": "ai",
    "title": "Agence Automatisation IA pour PME & B2B | NLG",
    "description": "Automatisation IA clé en main pour PME et équipes B2B : CRM, ventes, marketing, reporting et opérations, avec des workflows construits autour de vos outils existants.",
    "canonical": "https://www.nlgconsulting.co/fr/automation-ia",
    "h1": "Automatisation IA pour Entreprises — Sans la Complexité Technique",
    "alternate": "/ai-automation"
  },
  {
    "path": "/ai-agents-for-business",
    "lang": "en",
    "cluster": "ai",
    "title": "AI Agents for Business | Agentic Workflows & Systems | NLG",
    "description": "AI agents for business: design multi-step agentic workflows for research, sales, content and operations with tool use, integrations and human oversight.",
    "canonical": "https://www.nlgconsulting.co/ai-agents-for-business",
    "h1": "AI Agents for Business Workflows & Operations",
    "alternate": "/fr/agents-ia-entreprise"
  },
  {
    "path": "/fr/agents-ia-entreprise",
    "lang": "fr",
    "cluster": "ai",
    "title": "Agents IA pour Entreprise | Workflows Agentiques | NLG",
    "description": "Agents IA pour entreprises : workflows agentiques multi-étapes pour recherche, ventes, contenu et opérations, avec intégrations, outils et supervision humaine.",
    "canonical": "https://www.nlgconsulting.co/fr/agents-ia-entreprise",
    "h1": "Agents IA pour Workflows & Opérations d'Entreprise",
    "alternate": "/ai-agents-for-business"
  },
  {
    "path": "/ai-sales-automation",
    "lang": "en",
    "cluster": "sales",
    "title": "AI Sales Automation | Prospecting, Outreach & CRM Workflows | NLG",
    "description": "AI sales automation for B2B: automate prospect research, data enrichment, personalised outreach, follow-up and CRM workflows while keeping human sales oversight.",
    "canonical": "https://www.nlgconsulting.co/ai-sales-automation",
    "h1": "AI Sales Automation for Prospecting, Outreach & CRM",
    "alternate": "/fr/automation-commerciale-ia"
  },
  {
    "path": "/fr/automation-commerciale-ia",
    "lang": "fr",
    "cluster": "sales",
    "title": "Automatisation Commerciale IA | Prospection, CRM & Relances | NLG",
    "description": "Automatisation commerciale IA B2B : recherche prospects, enrichissement, outreach personnalisé, relances et workflows CRM avec supervision de l’équipe commerciale.",
    "canonical": "https://www.nlgconsulting.co/fr/automation-commerciale-ia",
    "h1": "Automatisation Commerciale IA pour Prospection, Relances & CRM",
    "alternate": "/ai-sales-automation"
  },
  {
    "path": "/outsourced-ai-implementation",
    "lang": "en",
    "cluster": "ai",
    "title": "Outsourced AI Operations | Fractional AI Team | NLG",
    "description": "Your fractional AI operations team. We deploy AI workflows, build agentic systems, and manage AI infrastructure for FinTech, SaaS & B2B companies. No hiring required.",
    "canonical": "https://www.nlgconsulting.co/outsourced-ai-implementation",
    "h1": "Your Fractional AI Operations Team",
    "alternate": "/fr/implementation-ia-externalisee"
  },
  {
    "path": "/fr/implementation-ia-externalisee",
    "lang": "fr",
    "cluster": "ai",
    "title": "Opérations IA Externalisées | Équipe IA Fractionnelle | NLG",
    "description": "Votre équipe IA fractionnelle. Déploiement de workflows IA, systèmes agentiques et infrastructure IA pour FinTech, SaaS & entreprises B2B. Sans recrutement.",
    "canonical": "https://www.nlgconsulting.co/fr/implementation-ia-externalisee",
    "h1": "Votre Équipe IA Fractionnelle",
    "alternate": "/outsourced-ai-implementation"
  },
  {
    "path": "/fractional-ai-consultant",
    "lang": "en",
    "cluster": "ai",
    "title": "Fractional AI Consultant | Growth Architect | NLG",
    "description": "Fractional AI consultant for founders and growth teams. Senior AI strategy, workflow architecture and RevOps design at a fraction of the cost. Start in 1-2 weeks.",
    "canonical": "https://www.nlgconsulting.co/fractional-ai-consultant",
    "h1": "Fractional AI Consultant",
    "alternate": "/fr/consultant-ia-fractionnel"
  },
  {
    "path": "/fr/consultant-ia-fractionnel",
    "lang": "fr",
    "cluster": "ai",
    "title": "Consultant IA Fractionnel | Growth Architect | NLG",
    "description": "Consultant IA fractionnel pour fondateurs et équipes de croissance. Stratégie IA, architecture de workflows et RevOps à une fraction du coût. Démarrage sous 1-2 semaines.",
    "canonical": "https://www.nlgconsulting.co/fr/consultant-ia-fractionnel",
    "h1": "Consultant IA fractionnel",
    "alternate": "/fractional-ai-consultant"
  },
  {
    "path": "/outsourced-sdr",
    "lang": "en",
    "cluster": "sales",
    "title": "Outsourced SDR Team for B2B | Qualified Meetings | NLG",
    "description": "Outsourced SDR team for B2B companies. ICP definition, verified prospecting, multichannel outreach, qualification, CRM reporting and qualified meetings.",
    "canonical": "https://www.nlgconsulting.co/outsourced-sdr",
    "h1": "Outsourced SDR Team for B2B Prospecting & Qualified Meetings",
    "alternate": "/fr/sdr-externalise"
  },
  {
    "path": "/fr/sdr-externalise",
    "lang": "fr",
    "cluster": "sales",
    "title": "SDR Externalisé B2B | Prospection & RDV Qualifiés | NLG",
    "description": "SDR externalisé pour entreprises B2B : définition ICP, prospection multicanal, qualification, intégration CRM et rendez-vous qualifiés sans recruter en interne.",
    "canonical": "https://www.nlgconsulting.co/fr/sdr-externalise",
    "h1": "SDR Externalisé B2B : Prospection Structurée & Rendez-Vous Qualifiés",
    "alternate": "/outsourced-sdr"
  },
  {
    "path": "/b2b-lead-generation-agency",
    "lang": "en",
    "cluster": "sales",
    "title": "B2B Lead Generation Agency | Qualified Pipeline | NLG",
    "description": "B2B lead generation agency for SaaS, FinTech, PropTech and services. ICP research, prospect data, multichannel outreach, qualification, CRM tracking and pipeline.",
    "canonical": "https://www.nlgconsulting.co/b2b-lead-generation-agency",
    "h1": "B2B Lead Generation Agency for Qualified Pipeline",
    "alternate": "/fr/agence-lead-generation-b2b"
  },
  {
    "path": "/fr/agence-lead-generation-b2b",
    "lang": "fr",
    "cluster": "sales",
    "title": "Agence Lead Generation B2B | Prospection & Pipeline | NLG",
    "description": "Agence de lead generation B2B : définition ICP, data prospects, prospection multicanal, qualification, CRM et génération de pipeline pour SaaS, FinTech et PropTech.",
    "canonical": "https://www.nlgconsulting.co/fr/agence-lead-generation-b2b",
    "h1": "Agence de Lead Generation B2B : Prospection, Qualification & Pipeline",
    "alternate": "/b2b-lead-generation-agency"
  },
  {
    "path": "/appointment-setting",
    "lang": "en",
    "cluster": "sales",
    "title": "B2B Appointment Setting | Meeting Generation | NLG",
    "description": "Structured B2B appointment setting that books qualified meetings with decision-makers. Multichannel outreach, AI-assisted qualification, and calendar integration.",
    "canonical": "https://www.nlgconsulting.co/appointment-setting",
    "h1": "B2B Appointment Setting That Delivers Qualified Meetings",
    "alternate": "/fr/prise-de-rendez-vous-b2b"
  },
  {
    "path": "/fr/prise-de-rendez-vous-b2b",
    "lang": "fr",
    "cluster": "sales",
    "title": "Prise de Rendez-Vous B2B | Meetings Qualifiés | NLG",
    "description": "Système de prise de rendez-vous B2B. Qualification et booking de meetings avec décideurs via prospection multicanal structurée. FinTech, PropTech, SaaS et B2B.",
    "canonical": "https://www.nlgconsulting.co/fr/prise-de-rendez-vous-b2b",
    "h1": "Prise de Rendez-Vous B2B Structurée",
    "alternate": "/appointment-setting"
  },
  {
    "path": "/ai-lead-generation",
    "lang": "en",
    "cluster": "sales",
    "title": "AI Lead Generation That Books Meetings | NLG Consulting",
    "description": "AI-powered prospecting systems that generate qualified B2B meetings on autopilot. 3x pipeline at 50% lower cost. See how it works.",
    "canonical": "https://www.nlgconsulting.co/ai-lead-generation",
    "h1": "AI-Powered Prospecting That Books Qualified Meetings",
    "alternate": "/fr/generation-leads-ia"
  },
  {
    "path": "/fr/generation-leads-ia",
    "lang": "fr",
    "cluster": "sales",
    "title": "Génération de Leads IA pour le B2B | NLG Consulting",
    "description": "Systèmes de prospection IA qui génèrent des rendez-vous B2B qualifiés en automatique. 3x plus de pipeline à -50% du coût. Découvrez comment.",
    "canonical": "https://www.nlgconsulting.co/fr/generation-leads-ia",
    "h1": "Prospection IA qui génère des rendez-vous qualifiés",
    "alternate": "/ai-lead-generation"
  },
  {
    "path": "/ai-for-saas",
    "lang": "en",
    "cluster": "industry",
    "title": "AI Growth Systems for SaaS Companies | NLG Consulting",
    "description": "AI consulting, workflow automation and revenue operations for SaaS. Onboarding automation, churn prevention, pipeline systems and commercial performance.",
    "canonical": "https://www.nlgconsulting.co/ai-for-saas",
    "h1": "AI-Powered Growth Systems for SaaS Companies",
    "alternate": "/fr/ia-pour-saas"
  },
  {
    "path": "/fr/ia-pour-saas",
    "lang": "fr",
    "cluster": "industry",
    "title": "IA pour SaaS : RevOps & Croissance | NLG Consulting",
    "description": "Systèmes de croissance IA pour SaaS B2B. Pipeline, rétention, expansion revenue et automatisation opérationnelle. Infrastructure revenue par des opérateurs SaaS.",
    "canonical": "https://www.nlgconsulting.co/fr/ia-pour-saas",
    "h1": "Systèmes de croissance IA pour entreprises SaaS",
    "alternate": "/ai-for-saas"
  },
  {
    "path": "/ai-for-proptech",
    "lang": "en",
    "cluster": "industry",
    "title": "AI Consulting for PropTech | Automation & Revenue Systems | NLG",
    "description": "AI consulting for PropTech companies: automate lead qualification, investor outreach, market research, content and revenue workflows with operator-led implementation.",
    "canonical": "https://www.nlgconsulting.co/ai-for-proptech",
    "h1": "AI Consulting & Automation for PropTech Companies",
    "alternate": "/fr/ia-pour-proptech"
  },
  {
    "path": "/fr/ia-pour-proptech",
    "lang": "fr",
    "cluster": "industry",
    "title": "Conseil IA pour PropTech | Automatisation & Croissance | NLG",
    "description": "Conseil IA pour PropTech : automatisation de la qualification, prospection investisseurs, intelligence de marché, contenu et workflows revenue par des opérateurs PropTech.",
    "canonical": "https://www.nlgconsulting.co/fr/ia-pour-proptech",
    "h1": "Conseil IA & Automatisation pour entreprises PropTech",
    "alternate": "/ai-for-proptech"
  },
  {
    "path": "/ai-for-fintech",
    "lang": "en",
    "cluster": "industry",
    "title": "AI Growth Systems for FinTech | NLG Consulting",
    "description": "AI consulting, workflow automation and revenue operations for FinTech. Compliance automation, outbound systems, AI agents and commercial performance. Operator-led.",
    "canonical": "https://www.nlgconsulting.co/ai-for-fintech",
    "h1": "AI-Powered Growth Systems for FinTech Companies",
    "alternate": "/fr/ia-pour-fintech"
  },
  {
    "path": "/fr/ia-pour-fintech",
    "lang": "fr",
    "cluster": "industry",
    "title": "IA pour FinTech : Croissance & RevOps | NLG Consulting",
    "description": "Systèmes de croissance IA pour FinTech. Pipeline commercial, conformité automatisée, workflows KYC et infrastructure revenue. Par des opérateurs FinTech.",
    "canonical": "https://www.nlgconsulting.co/fr/ia-pour-fintech",
    "h1": "Systèmes de croissance IA pour entreprises FinTech",
    "alternate": "/ai-for-fintech"
  },
  {
    "path": "/about",
    "lang": "en",
    "cluster": "core",
    "title": "About NLG Consulting | AI Automation & Consulting Operators",
    "description": "Meet NLG Consulting and founder Gregory Brenig. Operator-led AI consulting, automation and growth execution for small businesses and growing B2B companies.",
    "canonical": "https://www.nlgconsulting.co/about",
    "h1": "AI Consulting & Execution, Built by Operators",
    "alternate": "/fr/a-propos"
  },
  {
    "path": "/fr/a-propos",
    "lang": "fr",
    "cluster": "core",
    "title": "À propos de NLG Consulting | Automatisation & Conseil IA",
    "description": "Découvrez NLG Consulting et son fondateur Gregory Brenig : conseil IA, automatisation et exécution business pour PME et entreprises B2B en croissance.",
    "canonical": "https://www.nlgconsulting.co/fr/a-propos",
    "h1": "Conseil IA & Architecture de Croissance, dirigé par un opérateur",
    "alternate": "/about"
  },
  {
    "path": "/advisory",
    "lang": "en",
    "cluster": "sales",
    "title": "Strategic Advisory | GTM & Growth Systems | NLG",
    "description": "Operator-led strategic advisory for founders and growing B2B companies: GTM, RevOps, commercial model, AI adoption and growth systems.",
    "canonical": "https://www.nlgconsulting.co/advisory",
    "h1": "Strategic Advisory for Founders Building Growth Systems",
    "alternate": "/fr/conseil"
  },
  {
    "path": "/fr/conseil",
    "lang": "fr",
    "cluster": "sales",
    "title": "Conseil Stratégique | GTM & Systèmes de Croissance | NLG",
    "description": "Conseil stratégique opérateur pour fondateurs et entreprises B2B : GTM, RevOps, modèle commercial, adoption IA et systèmes de croissance.",
    "canonical": "https://www.nlgconsulting.co/fr/conseil",
    "h1": "Conseil Stratégique pour Fondateurs et Entreprises en Croissance",
    "alternate": "/advisory"
  },
  {
    "path": "/sales",
    "lang": "en",
    "cluster": "sales",
    "title": "Outbound Systems & Revenue Infrastructure | NLG",
    "description": "AI-enhanced outbound systems for B2B: pipeline architecture, SDR operations, CRM discipline and qualified meeting generation.",
    "canonical": "https://www.nlgconsulting.co/sales",
    "h1": "AI-Enhanced Outbound Systems & Revenue Infrastructure",
    "alternate": "/fr/vente"
  },
  {
    "path": "/fr/vente",
    "lang": "fr",
    "cluster": "sales",
    "title": "Systèmes Outbound & Infrastructure Commerciale | NLG",
    "description": "Systèmes outbound augmentés par l’IA : pipeline multicanal, opérations SDR, CRM et génération de rendez-vous qualifiés pour entreprises B2B.",
    "canonical": "https://www.nlgconsulting.co/fr/vente",
    "h1": "Systèmes Outbound & Infrastructure Commerciale Augmentés par l'IA",
    "alternate": "/sales"
  },
  {
    "path": "/web",
    "lang": "en",
    "cluster": "core",
    "title": "Conversion Websites & SEO for B2B | NLG Studio",
    "description": "Revenue-ready B2B websites, landing pages, SEO and conversion systems designed as commercial assets and connected to your growth stack.",
    "canonical": "https://www.nlgconsulting.co/web",
    "h1": "Revenue-Ready Websites Built for Conversion",
    "alternate": "/fr/site-internet"
  },
  {
    "path": "/fr/site-internet",
    "lang": "fr",
    "cluster": "core",
    "title": "Sites Web B2B, SEO & Conversion | NLG Studio",
    "description": "Sites B2B, landing pages, SEO et systèmes de conversion conçus comme des actifs commerciaux connectés à votre croissance.",
    "canonical": "https://www.nlgconsulting.co/fr/site-internet",
    "h1": "Sites Web Pensés pour la Conversion et la Croissance",
    "alternate": "/web"
  },
  {
    "path": "/use-cases",
    "lang": "en",
    "cluster": "core",
    "title": "AI Automation & Growth Use Cases | NLG Consulting",
    "description": "Practical use cases for AI automation, outsourced SDR, B2B lead generation and sales process optimization for leadership teams.",
    "canonical": "https://www.nlgconsulting.co/use-cases",
    "h1": "AI Automation, Growth Systems & Strategic Use Cases",
    "alternate": "/fr/cas-usage"
  },
  {
    "path": "/fr/cas-usage",
    "lang": "fr",
    "cluster": "core",
    "title": "Automatisation IA & Cas d'Usage | NLG Consulting",
    "description": "Scénarios pratiques d’automatisation IA, suivi commercial, SDR externalisé et génération de leads B2B pour équipes dirigeantes.",
    "canonical": "https://www.nlgconsulting.co/fr/cas-usage",
    "h1": "Automatisation IA, Systèmes de Croissance & Cas d'Usage Stratégiques",
    "alternate": "/use-cases"
  },
  {
    "path": "/insights",
    "lang": "en",
    "cluster": "core",
    "title": "AI, Sales & B2B Growth Insights | NLG Consulting",
    "description": "Practical guides on AI automation, AI consulting, sales systems, GTM and B2B growth from NLG Consulting.",
    "canonical": "https://www.nlgconsulting.co/insights",
    "h1": "AI, Sales & B2B Growth Insights",
    "alternate": "/fr/ressources"
  },
  {
    "path": "/fr/ressources",
    "lang": "fr",
    "cluster": "core",
    "title": "Ressources IA, Sales & Growth B2B | NLG Consulting",
    "description": "Guides pratiques sur l’automatisation IA, le conseil IA, la vente, le GTM et la croissance B2B par NLG Consulting.",
    "canonical": "https://www.nlgconsulting.co/fr/ressources",
    "h1": "Ressources IA, Sales & Growth B2B",
    "alternate": "/insights"
  },
  {
    "path": "/ventures",
    "lang": "en",
    "cluster": "core",
    "title": "Venture Studio & Portfolio | NLG Consulting",
    "description": "Operator-built platforms across PropTech, FinTech and media. See how NLG builds and operates technology and revenue assets.",
    "canonical": "https://www.nlgconsulting.co/ventures",
    "h1": "Operator-Built Platforms & Revenue Assets",
    "alternate": "/fr/ventures"
  },
  {
    "path": "/fr/ventures",
    "lang": "fr",
    "cluster": "core",
    "title": "Venture Studio & Portefeuille | NLG Consulting",
    "description": "Plateformes construites et opérées par NLG dans la PropTech, FinTech et les médias. Découvrez notre approche opérateur.",
    "canonical": "https://www.nlgconsulting.co/fr/ventures",
    "h1": "Plateformes Construites & Actifs de Revenus",
    "alternate": "/ventures"
  },
  {
    "path": "/saas-monetization",
    "lang": "en",
    "cluster": "sales",
    "title": "SaaS Pricing & Monetization Consulting | NLG",
    "description": "SaaS pricing and monetization consulting for founders and growth teams: packaging, pricing logic, expansion revenue and commercial metrics.",
    "canonical": "https://www.nlgconsulting.co/saas-monetization",
    "h1": "SaaS Pricing & Monetization Strategy",
    "alternate": "/fr/monetisation-saas"
  },
  {
    "path": "/fr/monetisation-saas",
    "lang": "fr",
    "cluster": "sales",
    "title": "Pricing & Monétisation SaaS | NLG Consulting",
    "description": "Conseil en pricing et monétisation SaaS : packaging, logique tarifaire, expansion revenue et métriques commerciales pour équipes growth.",
    "canonical": "https://www.nlgconsulting.co/fr/monetisation-saas",
    "h1": "Pricing & Monétisation SaaS",
    "alternate": "/saas-monetization"
  },
  {
    "path": "/go-to-market",
    "lang": "en",
    "cluster": "sales",
    "title": "Go-To-Market Strategy for SaaS & Tech | NLG",
    "description": "Go-to-market strategy for SaaS and tech: market entry, positioning, pricing, channel design and execution planning.",
    "canonical": "https://www.nlgconsulting.co/go-to-market",
    "h1": "Go-To-Market Strategy for SaaS & Tech",
    "alternate": "/fr/strategie-go-to-market"
  },
  {
    "path": "/fr/strategie-go-to-market",
    "lang": "fr",
    "cluster": "sales",
    "title": "Stratégie Go-To-Market SaaS & Tech | NLG",
    "description": "Conseil go-to-market pour SaaS, FinTech et PropTech : entrée marché, positionnement, pricing, canaux et exécution.",
    "canonical": "https://www.nlgconsulting.co/fr/strategie-go-to-market",
    "h1": "Stratégie Go-To-Market & Exécution",
    "alternate": "/go-to-market"
  },
  {
    "path": "/proptech-consulting",
    "lang": "en",
    "cluster": "industry",
    "title": "PropTech Consulting & Platform Strategy | NLG",
    "description": "PropTech consulting for real estate technology, tokenization, marketplaces and fractional ownership — from operating model to commercial execution.",
    "canonical": "https://www.nlgconsulting.co/proptech-consulting",
    "h1": "PropTech Consulting by Operators Who Build Platforms",
    "alternate": "/fr/conseil-proptech"
  },
  {
    "path": "/fr/conseil-proptech",
    "lang": "fr",
    "cluster": "industry",
    "title": "Conseil PropTech & Plateformes Immobilières | NLG",
    "description": "Conseil PropTech pour tokenisation, marketplaces, immobilier fractionné et modèles de plateformes — de la stratégie à l’exécution.",
    "canonical": "https://www.nlgconsulting.co/fr/conseil-proptech",
    "h1": "Conseil PropTech par des opérateurs qui construisent des plateformes",
    "alternate": "/proptech-consulting"
  },
  {
    "path": "/marketing",
    "lang": "en",
    "cluster": "sales",
    "title": "Performance Marketing & PPC for Growth | NLG",
    "description": "Performance marketing and PPC across Google, Meta and LinkedIn, connected to landing pages, CRM measurement and commercial goals.",
    "canonical": "https://www.nlgconsulting.co/marketing",
    "h1": "Turn Your Marketing Budget Into Measurable Growth",
    "alternate": "/fr/marketing"
  },
  {
    "path": "/fr/marketing",
    "lang": "fr",
    "cluster": "sales",
    "title": "Marketing Performance & PPC | NLG Consulting",
    "description": "Marketing performance et PPC sur Google, Meta et LinkedIn, reliés aux landing pages, au CRM et aux objectifs commerciaux.",
    "canonical": "https://www.nlgconsulting.co/fr/marketing",
    "h1": "Transformez votre budget marketing en croissance mesurable",
    "alternate": "/marketing"
  },
  {
    "path": "/ai-marketing-automation",
    "lang": "en",
    "cluster": "ai",
    "title": "AI Marketing Automation & Content Systems | NLG",
    "description": "AI marketing automation for B2B: content operations, SEO workflows, social distribution and campaign infrastructure connected to business outcomes.",
    "canonical": "https://www.nlgconsulting.co/ai-marketing-automation",
    "h1": "AI-Powered Marketing & Content Systems",
    "alternate": "/fr/automation-marketing-ia"
  },
  {
    "path": "/fr/automation-marketing-ia",
    "lang": "fr",
    "cluster": "ai",
    "title": "Automatisation Marketing IA & Contenu | NLG",
    "description": "Automatisation marketing IA pour B2B : contenu, SEO, réseaux sociaux et workflows de campagnes reliés aux résultats business.",
    "canonical": "https://www.nlgconsulting.co/fr/automation-marketing-ia",
    "h1": "Systèmes Marketing & Contenu IA",
    "alternate": "/ai-marketing-automation"
  },
  {
    "path": "/prompt-engineering-consulting",
    "lang": "en",
    "cluster": "ai",
    "title": "Prompt Engineering Consulting & AI Workflows | NLG",
    "description": "Prompt engineering consulting for business teams: production prompts, evaluation, reusable AI workflows and operational integration.",
    "canonical": "https://www.nlgconsulting.co/prompt-engineering-consulting",
    "h1": "Prompt Engineering for Business Operations",
    "alternate": "/fr/conseil-prompt-engineering"
  },
  {
    "path": "/fr/conseil-prompt-engineering",
    "lang": "fr",
    "cluster": "ai",
    "title": "Conseil Prompt Engineering & Workflows IA | NLG",
    "description": "Conseil en prompt engineering pour équipes business : prompts de production, évaluation, workflows IA réutilisables et intégration opérationnelle.",
    "canonical": "https://www.nlgconsulting.co/fr/conseil-prompt-engineering",
    "h1": "Prompt Engineering pour Opérations Business",
    "alternate": "/prompt-engineering-consulting"
  },
  {
    "path": "/ai-for-real-estate",
    "lang": "en",
    "cluster": "industry",
    "title": "AI for Real Estate Operations & Growth | NLG",
    "description": "AI systems for real estate: lead and investor workflows, reporting, market intelligence and operational automation.",
    "canonical": "https://www.nlgconsulting.co/ai-for-real-estate",
    "h1": "AI-Powered Growth Systems for Real Estate",
    "alternate": "/fr/ia-pour-immobilier"
  },
  {
    "path": "/fr/ia-pour-immobilier",
    "lang": "fr",
    "cluster": "industry",
    "title": "IA pour l’Immobilier : Opérations & Croissance | NLG",
    "description": "Systèmes IA pour entreprises immobilières : pipeline, relations investisseurs, reporting, intelligence marché et automatisation opérationnelle.",
    "canonical": "https://www.nlgconsulting.co/fr/ia-pour-immobilier",
    "h1": "Systèmes IA pour l’immobilier",
    "alternate": "/ai-for-real-estate"
  },
  {
    "path": "/ai-for-consulting-firms",
    "lang": "en",
    "cluster": "industry",
    "title": "AI for Consulting Firms: Operations & Growth | NLG",
    "description": "AI systems for consulting firms: research, proposals, knowledge workflows, delivery support and structured business development.",
    "canonical": "https://www.nlgconsulting.co/ai-for-consulting-firms",
    "h1": "AI Operational Systems for Consulting Firms",
    "alternate": "/fr/ia-pour-cabinets-conseil"
  },
  {
    "path": "/fr/ia-pour-cabinets-conseil",
    "lang": "fr",
    "cluster": "industry",
    "title": "IA pour Cabinets de Conseil | NLG Consulting",
    "description": "Systèmes IA pour cabinets de conseil : recherche, propositions, knowledge workflows, production et business development structuré.",
    "canonical": "https://www.nlgconsulting.co/fr/ia-pour-cabinets-conseil",
    "h1": "Levier opérationnel IA pour cabinets de conseil",
    "alternate": "/ai-for-consulting-firms"
  },
  {
    "path": "/ai-for-agencies",
    "lang": "en",
    "cluster": "industry",
    "title": "AI for Agencies: Operations, Delivery & Margins | NLG",
    "description": "AI systems for marketing and creative agencies: content production, reporting, prospecting and operational workflows.",
    "canonical": "https://www.nlgconsulting.co/ai-for-agencies",
    "h1": "AI Operational Systems for Marketing & Creative Agencies",
    "alternate": "/fr/ia-pour-agences"
  },
  {
    "path": "/fr/ia-pour-agences",
    "lang": "fr",
    "cluster": "industry",
    "title": "IA pour Agences : Opérations & Marges | NLG",
    "description": "Systèmes IA pour agences marketing et créatives : production, reporting, prospection et automatisation opérationnelle.",
    "canonical": "https://www.nlgconsulting.co/fr/ia-pour-agences",
    "h1": "Levier opérationnel IA pour agences",
    "alternate": "/ai-for-agencies"
  },
  {
    "path": "/ai-for-b2b-services",
    "lang": "en",
    "cluster": "industry",
    "title": "AI for B2B Services: Growth & Operations | NLG",
    "description": "AI systems for B2B service companies: pipeline, content, reporting and operational automation connected to commercial performance.",
    "canonical": "https://www.nlgconsulting.co/ai-for-b2b-services",
    "h1": "AI-Powered Growth Systems for B2B Service Companies",
    "alternate": "/fr/ia-pour-services-b2b"
  },
  {
    "path": "/fr/ia-pour-services-b2b",
    "lang": "fr",
    "cluster": "industry",
    "title": "IA pour Services B2B : Croissance & Opérations | NLG",
    "description": "Systèmes IA pour services B2B : pipeline, contenu, reporting et automatisation opérationnelle reliés à la performance commerciale.",
    "canonical": "https://www.nlgconsulting.co/fr/ia-pour-services-b2b",
    "h1": "Infrastructure de croissance IA pour services B2B",
    "alternate": "/ai-for-b2b-services"
  },
  {
    "path": "/ai-training-for-teams",
    "lang": "en",
    "cluster": "ai",
    "title": "AI Training for Business Teams | NLG Consulting",
    "description": "Hands-on AI training for business teams covering prompt engineering, workflow automation, AI agents and practical operating use cases.",
    "canonical": "https://www.nlgconsulting.co/ai-training-for-teams",
    "h1": "AI Enablement for Business Teams",
    "alternate": "/fr/formation-ia-entreprise"
  },
  {
    "path": "/fr/formation-ia-entreprise",
    "lang": "fr",
    "cluster": "ai",
    "title": "Formation IA pour Équipes Business | NLG",
    "description": "Formation IA pratique pour équipes business : prompt engineering, workflows IA, automatisation, agents et exercices opérationnels.",
    "canonical": "https://www.nlgconsulting.co/fr/formation-ia-entreprise",
    "h1": "Formation IA pour équipes business",
    "alternate": "/ai-training-for-teams"
  },
  {
    "path": "/best-ai-tools-for-business",
    "lang": "en",
    "cluster": "ai",
    "title": "Best AI Tools for Business 2026 | NLG Guide",
    "description": "Practical guide to AI tools for business across automation, sales, research, content and operations, with criteria for choosing the right stack.",
    "canonical": "https://www.nlgconsulting.co/best-ai-tools-for-business",
    "h1": "Best AI Tools for Business Growth in 2026",
    "alternate": "/fr/meilleurs-outils-ia-entreprise"
  },
  {
    "path": "/fr/meilleurs-outils-ia-entreprise",
    "lang": "fr",
    "cluster": "ai",
    "title": "Meilleurs Outils IA pour Entreprise 2026 | NLG",
    "description": "Guide pratique des outils IA pour l’automatisation, la vente, la recherche, le contenu et les opérations, avec critères de sélection.",
    "canonical": "https://www.nlgconsulting.co/fr/meilleurs-outils-ia-entreprise",
    "h1": "Meilleurs outils IA pour la croissance business en 2026",
    "alternate": "/best-ai-tools-for-business"
  },
  {
    "path": "/how-to-automate-marketing-with-ai",
    "lang": "en",
    "cluster": "ai",
    "title": "How to Automate Marketing with AI | NLG Guide",
    "description": "How to build AI marketing workflows for content, SEO, email, lead handling and reporting while keeping business goals and human controls clear.",
    "canonical": "https://www.nlgconsulting.co/how-to-automate-marketing-with-ai",
    "h1": "How to Build AI-Powered Marketing Systems",
    "alternate": "/fr/automatiser-marketing-avec-ia"
  },
  {
    "path": "/fr/automatiser-marketing-avec-ia",
    "lang": "fr",
    "cluster": "ai",
    "title": "Automatiser le Marketing avec l’IA | Guide NLG",
    "description": "Construire des workflows marketing IA pour le contenu, SEO, email, leads et reporting tout en conservant objectifs et contrôles humains.",
    "canonical": "https://www.nlgconsulting.co/fr/automatiser-marketing-avec-ia",
    "h1": "Comment construire des systèmes marketing IA",
    "alternate": "/how-to-automate-marketing-with-ai"
  },
  {
    "path": "/go-to-market-consulting",
    "lang": "en",
    "cluster": "sales",
    "title": "GTM Strategy & Execution for SaaS & Tech | NLG",
    "description": "Go-to-market consulting for FinTech, PropTech and SaaS: market entry, positioning, pricing, channel strategy and execution.",
    "canonical": "https://www.nlgconsulting.co/go-to-market-consulting",
    "h1": "Go-To-Market Strategy & Execution",
    "alternate": "/fr/strategie-go-to-market"
  },
  {
    "path": "/website-in-72-hours",
    "lang": "en",
    "cluster": "core",
    "title": "Conversion Websites & SEO Assets | NLG Consulting",
    "description": "Revenue-ready websites and SEO authority assets for B2B companies, designed for conversion and structured for organic discovery.",
    "canonical": "https://www.nlgconsulting.co/website-in-72-hours",
    "h1": "Conversion Websites & SEO Authority Assets",
    "alternate": "/fr/site-web-en-72h"
  },
  {
    "path": "/fr/site-web-en-72h",
    "lang": "fr",
    "cluster": "core",
    "title": "Sites Web de Conversion & Actifs SEO | NLG",
    "description": "Sites web orientés revenus et actifs SEO pour entreprises B2B, conçus pour la conversion et structurés pour la découverte organique.",
    "canonical": "https://www.nlgconsulting.co/fr/site-web-en-72h",
    "h1": "Sites Web de Conversion & Actifs d'Autorité SEO",
    "alternate": "/website-in-72-hours"
  },
  {
    "path": "/proptech-lead-generation",
    "lang": "en",
    "cluster": "sales",
    "title": "PropTech Lead Generation & Pipeline | NLG",
    "description": "Lead generation for PropTech companies targeting real estate developers, property managers and investors through structured B2B outreach.",
    "canonical": "https://www.nlgconsulting.co/proptech-lead-generation",
    "h1": "PropTech Lead Generation for Real Estate Decision-Makers",
    "alternate": "/fr/agence-lead-generation-b2b"
  },
  {
    "path": "/fintech-lead-generation",
    "lang": "en",
    "cluster": "sales",
    "title": "FinTech Lead Generation & Pipeline | NLG",
    "description": "Lead generation for FinTech companies targeting CFOs, treasury teams and financial decision-makers through structured outreach and qualification.",
    "canonical": "https://www.nlgconsulting.co/fintech-lead-generation",
    "h1": "FinTech Lead Generation for Financial Decision-Makers",
    "alternate": "/fr/agence-lead-generation-b2b"
  },
  {
    "path": "/ai-sales-outreach",
    "lang": "en",
    "cluster": "sales",
    "title": "AI Sales Outreach & B2B Prospecting | NLG",
    "description": "AI-assisted B2B sales outreach for prospect research, targeting, sequencing and personalized messaging connected to pipeline operations.",
    "canonical": "https://www.nlgconsulting.co/ai-sales-outreach",
    "h1": "AI-Powered Sales Outreach for B2B",
    "alternate": "/fr/automation-commerciale-ia"
  }
];

export const seoRouteByPath = Object.fromEntries(seoRoutes.map((route) => [route.path, route]));
