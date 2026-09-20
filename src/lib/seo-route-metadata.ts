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
    "title": "AI-Powered Growth Systems for FinTech, PropTech & B2B | NLG Consulting",
    "description": "AI consulting, agentic workflows, RevOps, GTM strategy, and outbound infrastructure for FinTech, PropTech, SaaS & B2B companies. Qualified meetings and measurable revenue. Book a strategy call.",
    "canonical": "https://www.nlgconsulting.co/",
    "h1": "AI-Powered Growth Systems for FinTech, PropTech & B2B Companies",
    "alternate": "/fr"
  },
  {
    "path": "/fr",
    "lang": "fr",
    "cluster": "core",
    "title": "Systèmes de Croissance IA pour FinTech, PropTech & B2B | NLG Consulting",
    "description": "Conseil IA, workflows agentiques, RevOps, stratégie GTM et infrastructure outbound pour les entreprises FinTech, PropTech, SaaS & B2B. Rendez-vous qualifiés et revenus mesurables.",
    "canonical": "https://www.nlgconsulting.co/fr",
    "h1": "Systèmes de Croissance IA pour FinTech, PropTech & B2B",
    "alternate": "/"
  },
  {
    "path": "/ai-consulting",
    "lang": "en",
    "cluster": "ai",
    "title": "AI Consulting for Business | Agentic AI & Workflows | NLG",
    "description": "Operator-led AI consulting for FinTech, PropTech, SaaS & B2B. AI workflows, agentic systems, Claude Code automation, and operational AI tied to revenue and efficiency.",
    "canonical": "https://www.nlgconsulting.co/ai-consulting",
    "h1": "AI Consulting for Business Operations & Growth",
    "alternate": "/fr/conseil-ia"
  },
  {
    "path": "/fr/conseil-ia",
    "lang": "fr",
    "cluster": "ai",
    "title": "Conseil en IA | Workflows & Systèmes Agentiques | NLG",
    "description": "Conseil en IA opérationnel pour FinTech, PropTech, SaaS & B2B. Workflows IA, systèmes agentiques, automatisation Claude Code et IA opérationnelle liés au revenu et à l'efficacité.",
    "canonical": "https://www.nlgconsulting.co/fr/conseil-ia",
    "h1": "Conseil en IA pour les Opérations & la Croissance",
    "alternate": "/ai-consulting"
  },
  {
    "path": "/ai-automation",
    "lang": "en",
    "cluster": "ai",
    "title": "AI Workflow Automation | Business Process Automation | NLG",
    "description": "AI-powered workflow automation for sales, marketing, and operations. We design and deploy automation systems that reduce manual workload and improve output quality for B2B companies.",
    "canonical": "https://www.nlgconsulting.co/ai-automation",
    "h1": "AI Workflow Automation for Business Operations",
    "alternate": "/fr/automation-ia"
  },
  {
    "path": "/fr/automation-ia",
    "lang": "fr",
    "cluster": "ai",
    "title": "Automatisation IA des Workflows | Processus Business | NLG",
    "description": "Automatisation de workflows avec l'IA pour les ventes, le marketing et les opérations. Systèmes d'automatisation qui réduisent la charge manuelle et améliorent la qualité d'output pour les entreprises B2B.",
    "canonical": "https://www.nlgconsulting.co/fr/automation-ia",
    "h1": "Automatisation IA des Workflows Business",
    "alternate": "/ai-automation"
  },
  {
    "path": "/ai-agents-for-business",
    "lang": "en",
    "cluster": "ai",
    "title": "AI Agents for Business | Agentic AI Systems | NLG Consulting",
    "description": "Design and deploy agentic AI systems for sales, marketing, content, and operations. Claude Code workflows, multi-step AI agents, and human-in-the-loop automation for B2B companies.",
    "canonical": "https://www.nlgconsulting.co/ai-agents-for-business",
    "h1": "Agentic AI Systems for Business Operations",
    "alternate": "/fr/agents-ia-entreprise"
  },
  {
    "path": "/fr/agents-ia-entreprise",
    "lang": "fr",
    "cluster": "ai",
    "title": "Agents IA pour Entreprises | Systèmes Agentiques | NLG",
    "description": "Conception et déploiement de systèmes IA agentiques pour les ventes, le marketing, le contenu et les opérations. Workflows Claude Code, agents multi-étapes et automatisation human-in-the-loop.",
    "canonical": "https://www.nlgconsulting.co/fr/agents-ia-entreprise",
    "h1": "Systèmes IA Agentiques pour les Opérations Business",
    "alternate": "/ai-agents-for-business"
  },
  {
    "path": "/ai-sales-automation",
    "lang": "en",
    "cluster": "sales",
    "title": "AI Sales Automation | Pipeline & Revenue Systems | NLG",
    "description": "AI-powered sales automation for B2B pipeline generation. Automated prospecting, personalised outreach, multichannel sequences, and pipeline management for FinTech, PropTech & B2B.",
    "canonical": "https://www.nlgconsulting.co/ai-sales-automation",
    "h1": "AI-Powered Sales & Pipeline Automation",
    "alternate": "/fr/automation-commerciale-ia"
  },
  {
    "path": "/fr/automation-commerciale-ia",
    "lang": "fr",
    "cluster": "sales",
    "title": "Automatisation Commerciale IA | Pipeline & Revenus | NLG",
    "description": "Automatisation commerciale IA pour la génération de pipeline B2B. Prospection automatisée, outreach personnalisé, séquences multicanal et gestion de pipeline pour FinTech, PropTech & B2B.",
    "canonical": "https://www.nlgconsulting.co/fr/automation-commerciale-ia",
    "h1": "Automatisation Commerciale & Pipeline IA",
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
    "title": "Outsourced SDR | AI-Enhanced Sales Development | NLG",
    "description": "Outsourced SDR operations with AI-enhanced prospecting. Structured outbound execution, multichannel sequencing, and qualified meeting generation for B2B companies.",
    "canonical": "https://www.nlgconsulting.co/outsourced-sdr",
    "h1": "Outsourced SDR Operations With AI-Enhanced Prospecting",
    "alternate": "/fr/sdr-externalise"
  },
  {
    "path": "/fr/sdr-externalise",
    "lang": "fr",
    "cluster": "sales",
    "title": "SDR Externalisé | Prospection IA & Outbound | NLG",
    "description": "Opérations SDR externalisées avec prospection augmentée par l'IA. Exécution outbound structurée et génération de rendez-vous qualifiés pour entreprises B2B.",
    "canonical": "https://www.nlgconsulting.co/fr/sdr-externalise",
    "h1": "Opérations SDR Externalisées Avec Prospection Augmentée par l'IA",
    "alternate": "/outsourced-sdr"
  },
  {
    "path": "/b2b-lead-generation-agency",
    "lang": "en",
    "cluster": "sales",
    "title": "B2B Lead Generation Agency | Pipeline Systems | NLG",
    "description": "B2B lead generation systems combining AI-powered prospecting, outsourced SDR, and multichannel pipeline architecture. Qualified meetings, structured execution.",
    "canonical": "https://www.nlgconsulting.co/b2b-lead-generation-agency",
    "h1": "B2B Lead Generation Systems That Deliver Qualified Meetings",
    "alternate": "/fr/agence-lead-generation-b2b"
  },
  {
    "path": "/fr/agence-lead-generation-b2b",
    "lang": "fr",
    "cluster": "sales",
    "title": "Agence Lead Generation B2B | Systèmes Pipeline | NLG",
    "description": "Systèmes de lead generation B2B combinant prospection IA, SDR externalisé et architecture pipeline multicanal. Rendez-vous qualifiés et exécution structurée.",
    "canonical": "https://www.nlgconsulting.co/fr/agence-lead-generation-b2b",
    "h1": "Systèmes de Lead Generation B2B Qui Délivrent des Rendez-Vous Qualifiés",
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
    "title": "AI Growth Systems for PropTech | NLG Consulting",
    "description": "AI consulting, workflow automation and revenue operations for PropTech. Lead systems, investor outreach, market intelligence. Founder-led PropTech experience.",
    "canonical": "https://www.nlgconsulting.co/ai-for-proptech",
    "h1": "AI-Powered Growth Systems for PropTech Companies",
    "alternate": "/fr/ia-pour-proptech"
  },
  {
    "path": "/fr/ia-pour-proptech",
    "lang": "fr",
    "cluster": "industry",
    "title": "IA pour PropTech : Croissance & Opérations | NLG",
    "description": "Systèmes de croissance IA pour PropTech. Qualification de leads, prospection investisseurs, automatisation opérationnelle et pipeline commercial. Par des opérateurs PropTech.",
    "canonical": "https://www.nlgconsulting.co/fr/ia-pour-proptech",
    "h1": "Systèmes de croissance IA pour entreprises PropTech",
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
  }
];

export const seoRouteByPath = Object.fromEntries(seoRoutes.map((route) => [route.path, route]));
