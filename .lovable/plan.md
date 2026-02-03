

# SEO Audit Complet & Plan d'Optimisation pour NLG Consulting

## Objectif
- Atteindre 1000 impressions/jour avec un CTR de 20%
- Maximiser le trafic organique par langue (EN/FR) et par service
- Convertir les visiteurs en meetings bookés sur Calendly

---

## 1. AUDIT SEO TECHNIQUE - Problemes Identifies

### 1.1 Problemes index.html (CRITIQUE)
| Probleme | Impact | Solution |
|----------|--------|----------|
| hreflang `/en` n'existe pas | Confusion Google | Changer `/en` en `/` |
| Langues DE/ES/IT/NL/PT/PL inexistantes | Perte de crawl budget | Supprimer ces hreflang |
| Title en francais pour page root EN | Mauvais CTR anglophone | Separer title par langue via React |
| Verification Google non configuree | Pas de data GSC | A configurer par l'utilisateur |

### 1.2 Meta Tags Manquants
| Page | Probleme |
|------|----------|
| Toutes les pages | og:image manquant sur la plupart |
| Pages FR | Twitter cards manquantes |
| /book et /fr/rendez-vous | hreflang x-default manquant sur EN |

### 1.3 Sitemap - Corrections
- Date lastmod incorrecte (2026 devrait etre 2025)
- Pages /web/terms et /web/thank-you non incluses
- Priorite /book devrait etre 1.0 (page de conversion principale)

---

## 2. OPTIMISATION META TAGS PAR PAGE

### 2.1 Pages Anglaises (EN)

| Page | Title Actuel | Title Optimise | Meta Description Optimisee |
|------|--------------|----------------|---------------------------|
| / (Home) | NLG Consulting \| B2B Lead Generation... | B2B Lead Generation Agency \| 15-30 Meetings/Month \| NLG Consulting | Scale your B2B pipeline with 15-30 qualified meetings per month. Websites in 72h, SDR systems & strategic advisory. Trusted by 50+ startups. Book free call. |
| /sales | Outsourced B2B Sales Development... | Outsourced SDR Services \| 15-30 Qualified B2B Meetings/Month | Outsource your B2B sales development to NLG. Full SDR infrastructure: LinkedIn, email, cold calling. 15-30 qualified meetings guaranteed. Free sales audit. |
| /web | Professional Website in 72 Hours... | Website in 72 Hours \| From 749 EUR \| SEO + Stripe Included | Launch your conversion-ready website in 72 hours. UX design, SEO, Stripe payments, CRM integration. 100% code ownership. Starting at 749 EUR. |
| /advisory | Strategic Business Advisory... | Strategic Business Advisory \| Go-to-Market & AI Strategy | Expert advisory for founders: go-to-market, monetization, AI strategy, scaling. 15+ years experience. Book your free 15-min strategy call today. |
| /book | Book a Free Strategy Call... | Book Free Strategy Call \| 15-Min Consultation \| NLG Consulting | Schedule your free 15-minute strategy call. Discuss B2B lead generation, website development, or business advisory. Response within 24 hours. |
| /about | About Gregory Brenig... | Gregory Brenig \| Founder NLG Consulting \| PropTech & FinTech Expert | Meet Gregory Brenig, founder of NLG Consulting. 15+ years in PropTech, FinTech & AI. Author of "Level Up in Fractional Real Estate". Book a call. |
| /ventures | NLG Ventures Portfolio... | NLG Ventures \| PropTech, FinTech & Media Portfolio | Explore NLG's venture portfolio: Block Tech, FractionalPropertyHub, Business Legend. We build, operate & scale innovative platforms worldwide. |

### 2.2 Pages Francaises (FR)

| Page | Title Optimise | Meta Description Optimisee |
|------|----------------|---------------------------|
| /fr | Generation de Leads B2B \| 15-30 RDV Qualifies/Mois \| NLG Consulting | Developpez votre pipeline B2B avec 15-30 RDV qualifies par mois. Sites web en 72h, equipes SDR et conseil strategique. Plus de 50 startups accompagnees. |
| /fr/vente | Externalisation SDR \| 15-30 RDV B2B Qualifies/Mois \| NLG | Externalisez votre prospection B2B. Infrastructure SDR complete: LinkedIn, email, cold calling. 15-30 RDV qualifies garantis. Audit commercial gratuit. |
| /fr/site-internet | Creation Site Web 72h \| Des 749 EUR \| SEO + Stripe Inclus | Lancez votre site web optimise conversion en 72h. Design UX, SEO, paiements Stripe, CRM. 100% proprietaire du code. A partir de 749 EUR. |
| /fr/conseil | Conseil Strategique \| Go-to-Market & Strategie IA \| NLG | Conseil expert pour dirigeants: go-to-market, monetisation, strategie IA, scaling. 15+ ans d'experience. Reservez votre appel strategique gratuit. |
| /fr/rendez-vous | Reserver un Appel Gratuit \| Consultation 15 Min \| NLG Consulting | Planifiez votre appel strategique gratuit de 15 minutes. Generation de leads, creation de sites web ou conseil. Reponse sous 24h. |
| /fr/a-propos | Gregory Brenig \| Fondateur NLG Consulting \| Expert PropTech & FinTech | Decouvrez Gregory Brenig, fondateur de NLG Consulting. 15+ ans en PropTech, FinTech & IA. Auteur de "Level Up in Fractional Real Estate". |
| /fr/ventures | Portefeuille NLG Ventures \| PropTech, FinTech & Media | Explorez le portefeuille NLG: Block Tech, FractionalPropertyHub, Business Legend. Nous construisons et developpons des plateformes innovantes. |

---

## 3. OPTIMISATIONS SEO TECHNIQUES

### 3.1 Corrections index.html

```text
AVANT:
<link rel="alternate" hreflang="en" href="https://nlgconsulting.co/en" />
<link rel="alternate" hreflang="de" href="https://nlgconsulting.co/de" />
... (langues inexistantes)

APRES:
<link rel="alternate" hreflang="en" href="https://nlgconsulting.co/" />
<link rel="alternate" hreflang="fr" href="https://nlgconsulting.co/fr" />
<link rel="alternate" hreflang="x-default" href="https://nlgconsulting.co/" />
```

### 3.2 Ajout og:image sur toutes les pages
Chaque page doit avoir:
- `og:image` avec image de preview sociale
- `twitter:image` identique
- Dimensions: 1200x630px

### 3.3 Amelioration du sitemap.xml
- Ajouter pages manquantes (/web/terms, /web/thank-you)
- Corriger lastmod
- Augmenter priorite de /book et /fr/rendez-vous a 1.0

---

## 4. OPTIMISATION DU CONTENU POUR CTR 20%

### 4.1 Power Words pour Titles (EN)
- "Free" - Book **Free** Strategy Call
- "Guaranteed" - 15-30 Meetings **Guaranteed**
- Numbers - **72 Hours**, **749 EUR**, **15+ Years**
- Urgency - "Limited Slots", "This Week"

### 4.2 Power Words pour Titles (FR)
- "Gratuit" - Appel Strategique **Gratuit**
- "Garanti" - RDV **Garantis**
- Chiffres - **72 Heures**, **749 EUR**, **15+ Ans**
- Urgence - "Places Limitees", "Cette Semaine"

### 4.3 Schema.org Enrichi
Ajouter pour chaque service:
- `@type: Service` avec `offers` et `priceSpecification`
- `@type: FAQPage` sur les pages avec FAQ
- `@type: Review` / `@type: AggregateRating` pour les temoignages

---

## 5. ALGORITHME DE CONVERSION OPTIMISE

### 5.1 GREGO Chatbot - Ameliorations
- Reduire le seuil d'activation de 25 a 20 points
- Ajouter des messages specifiques par page visitee
- Integrer le numero de telephone dans les messages FR
- Ajouter CTA direct Calendly plus agressif apres 3 messages

### 5.2 Lead Popup - Optimisation
- Reduire le delai de 30s a 20s pour les pages high-intent (/book, /sales, /web)
- Ajouter une variante FR avec proposition de rappel telephonique
- Exit-intent popup sur desktop

### 5.3 CTA Strategy par Page

| Page | CTA Principal | CTA Secondaire |
|------|--------------|----------------|
| Home | "Book Strategy Call" | "Get Website in 72h" |
| Sales | "Free Sales Audit" | "Book a Call" |
| Web | "Pay Now (Stripe)" | "Book a Call" |
| Advisory | "Book Strategy Call" | "Contact Us" |
| Book | Calendly embed | - |

---

## 6. FICHIERS A MODIFIER

### Fichiers prioritaires:
1. `index.html` - Corriger hreflang, verifier metas
2. `public/sitemap.xml` - Corriger dates, ajouter pages, priorites
3. `src/pages/Home.tsx` - Optimiser title/description
4. `src/pages/fr/HomeFR.tsx` - Optimiser title/description FR
5. `src/pages/Sales.tsx` - Ajouter og:image, schema FAQPage
6. `src/pages/fr/SalesFR.tsx` - Ajouter og:image, schema FAQPage
7. `src/pages/WebLanding.tsx` - Ajouter schema priceSpecification
8. `src/pages/fr/WebLandingFR.tsx` - Ajouter schema priceSpecification
9. `src/pages/Book.tsx` - Priorite SEO maximale
10. `src/pages/fr/BookFR.tsx` - Priorite SEO maximale
11. `src/components/GregoChatbot.tsx` - Optimiser seuils
12. `src/hooks/useVisitorScoring.ts` - Ajuster scoring
13. `src/components/LeadPopup.tsx` - Delai par page
14. Toutes les autres pages (About, Advisory, Ventures, Contact, Privacy)

---

## 7. IMPLEMENTATION TECHNIQUE

### Phase 1: Corrections Critiques (Priorite Haute)
1. Corriger `index.html` - supprimer hreflang langues inexistantes
2. Mettre a jour `sitemap.xml`
3. Ajouter og:image sur toutes les pages

### Phase 2: Optimisation Titles/Descriptions
4. Optimiser les 14 pages principales (7 EN + 7 FR)
5. Ajouter schema FAQPage aux pages avec FAQ

### Phase 3: Conversion Optimization
6. Optimiser GREGO chatbot scoring et messages
7. Optimiser LeadPopup timing
8. Ajouter exit-intent detection

### Phase 4: Schema Enrichi
9. Ajouter `@type: Service` avec prix
10. Ajouter `@type: AggregateRating` avec reviews
11. Ajouter `@type: LocalBusiness` (optionnel)

---

## 8. TABLEAU RECAPITULATIF SEO

| Page | URL EN | URL FR | Priority | Target Keywords EN | Target Keywords FR |
|------|--------|--------|----------|-------------------|-------------------|
| Home | / | /fr | 1.0 | B2B lead generation, qualified meetings | generation leads B2B, RDV qualifies |
| Sales | /sales | /fr/vente | 0.95 | outsourced SDR, sales development | SDR externalise, prospection B2B |
| Web | /web | /fr/site-internet | 0.95 | website 72 hours, fast web development | site web 72h, creation site rapide |
| Advisory | /advisory | /fr/conseil | 0.85 | business advisory, strategy consultant | conseil strategique, consultant business |
| Book | /book | /fr/rendez-vous | 1.0 | book strategy call, free consultation | reserver appel, consultation gratuite |
| About | /about | /fr/a-propos | 0.8 | Gregory Brenig, NLG founder | Gregory Brenig, fondateur NLG |
| Ventures | /ventures | /fr/ventures | 0.8 | PropTech ventures, startup portfolio | ventures PropTech, portefeuille |
| Contact | /contact | /fr/contact | 0.8 | contact NLG, get in touch | contacter NLG, prendre contact |

---

## 9. KPIs ATTENDUS

| Metrique | Actuel (estime) | Objectif 3 mois | Objectif 6 mois |
|----------|-----------------|-----------------|-----------------|
| Impressions/jour | 50-100 | 300-500 | 1000+ |
| CTR moyen | 2-5% | 10-15% | 15-20% |
| Clics organiques/jour | 2-5 | 30-75 | 150-200 |
| Meetings bookes/semaine | 2-3 | 8-12 | 20-30 |
| Taux conversion visiteur->meeting | 0.5% | 2% | 3% |

---

## 10. PROCHAINES ETAPES

Une fois approuve, je procederai a:
1. Modification de tous les fichiers listes
2. Optimisation de chaque meta title et description
3. Ajout des og:image manquants
4. Correction du sitemap et robots.txt
5. Optimisation de GREGO et du LeadPopup
6. Ajout des schemas enrichis

Le temps estime d'implementation est de 45-60 minutes pour l'ensemble des modifications.

