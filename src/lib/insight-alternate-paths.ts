// Lightweight route map only: keep article bodies out of the global navbar bundle.
// When new bilingual insights are added, update this map. The SEO build tests
// compare it with the canonical article source registry.
export const insightAlternatePaths: Readonly<Record<string, string>> = {
  "/fr/ressources/audit-ia-entreprise": "/insights/ai-audit-checklist",
  "/fr/ressources/audit-ia-pme": "/insights/ai-audit-for-smes",
  "/fr/ressources/automatisation-crm-ia": "/insights/crm-automation-with-ai",
  "/fr/ressources/automatisation-ia-pme": "/insights/ai-automation-for-small-business",
  "/fr/ressources/automatisation-relances-commerciales-ia": "/insights/automate-sales-follow-up-with-ai",
  "/fr/ressources/cas-usage-ia-fintech": "/insights/ai-use-cases-fintech",
  "/fr/ressources/cas-usage-ia-proptech": "/insights/ai-use-cases-proptech",
  "/fr/ressources/prix-automatisation-ia": "/insights/ai-automation-cost",
  "/fr/ressources/prix-consultant-ia": "/insights/ai-consulting-cost",
  "/fr/ressources/roi-automatisation-ia": "/insights/ai-automation-roi",
  "/fr/ressources/sdr-externalise-vs-interne": "/insights/outsourced-sdr-vs-in-house",
  "/fr/ressources/site-web-vocal-ia": "/insights/voice-ai-website-navigation",
  "/fr/ressources/strategie-lead-generation-b2b": "/insights/b2b-lead-generation-playbook",
  "/fr/ressources/tarif-sdr-externalise": "/insights/outsourced-sdr-cost",
  "/insights/ai-audit-checklist": "/fr/ressources/audit-ia-entreprise",
  "/insights/ai-audit-for-smes": "/fr/ressources/audit-ia-pme",
  "/insights/ai-automation-cost": "/fr/ressources/prix-automatisation-ia",
  "/insights/ai-automation-for-small-business": "/fr/ressources/automatisation-ia-pme",
  "/insights/ai-automation-roi": "/fr/ressources/roi-automatisation-ia",
  "/insights/ai-consulting-cost": "/fr/ressources/prix-consultant-ia",
  "/insights/ai-use-cases-fintech": "/fr/ressources/cas-usage-ia-fintech",
  "/insights/ai-use-cases-proptech": "/fr/ressources/cas-usage-ia-proptech",
  "/insights/automate-sales-follow-up-with-ai": "/fr/ressources/automatisation-relances-commerciales-ia",
  "/insights/b2b-lead-generation-playbook": "/fr/ressources/strategie-lead-generation-b2b",
  "/insights/crm-automation-with-ai": "/fr/ressources/automatisation-crm-ia",
  "/insights/outsourced-sdr-cost": "/fr/ressources/tarif-sdr-externalise",
  "/insights/outsourced-sdr-vs-in-house": "/fr/ressources/sdr-externalise-vs-interne",
  "/insights/voice-ai-website-navigation": "/fr/ressources/site-web-vocal-ia"
};
