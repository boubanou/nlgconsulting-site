
# Plan de Maillage Interne SEO - NLG Consulting

## Objectif
Optimiser le maillage interne pour :
- Distribuer le "link juice" (autorité SEO) vers les pages stratégiques
- Améliorer l'indexation et le crawl de toutes les pages
- Guider les visiteurs vers la conversion (booking)
- Renforcer la pertinence thématique entre les pages liées

---

## 1. AUDIT DU MAILLAGE ACTUEL

### 1.1 Points Forts Existants
| Element | Status |
|---------|--------|
| Navigation principale (Navbar) | Liens vers toutes les pages principales |
| Footer | Liens basiques vers services et legal |
| CTAs sur chaque page | Liens vers /book ou /fr/rendez-vous |
| Home - 4 Pillars | Liens vers /ventures, /web, /sales, /advisory |

### 1.2 Problèmes Identifiés
| Problème | Impact SEO |
|----------|-----------|
| Aucun lien contextuel entre pages services | Perte de pertinence thématique |
| Pages About/Contact sans liens vers services | Pas de distribution d'autorité |
| Page Sales ne lie pas vers Web/Advisory | Opportunités de cross-sell manquées |
| Page Advisory mentionne "NLG Studio" sans lien | Lien textuel non exploité |
| Ventures ne lie pas vers services | Perte de contexte commercial |
| Pas de section "Articles liés" ou "Services connexes" | Pas de maillage profond |
| Footer trop minimaliste | Opportunités de liens perdues |

---

## 2. STRATEGIE DE MAILLAGE INTERNE

### 2.1 Matrice des Liens Prioritaires

```text
+---------------+--------------------------------------------------+
| Page Source   | Liens à Ajouter                                  |
+---------------+--------------------------------------------------+
| Home          | Déjà bien maillée (4 pillars)                    |
+---------------+--------------------------------------------------+
| Sales         | → /web (complémentaire)                          |
|               | → /advisory (upsell)                             |
|               | → /about (crédibilité)                           |
|               | → /ventures (preuves)                            |
+---------------+--------------------------------------------------+
| Web           | → /sales (complémentaire)                        |
|               | → /advisory (stratégie)                          |
|               | → /about (crédibilité)                           |
+---------------+--------------------------------------------------+
| Advisory      | → /sales (exécution)                             |
|               | → /web (studio)                                  |
|               | → /ventures (portfolio)                          |
|               | → /about (expertise)                             |
+---------------+--------------------------------------------------+
| Ventures      | → /advisory (conseil)                            |
|               | → /sales (croissance)                            |
|               | → /web (technologie)                             |
+---------------+--------------------------------------------------+
| About         | → /sales (services)                              |
|               | → /web (studio)                                  |
|               | → /advisory (conseil)                            |
|               | → /ventures (portfolio)                          |
+---------------+--------------------------------------------------+
| Contact       | → /book (CTA prioritaire)                        |
|               | → /sales, /web, /advisory (services)             |
+---------------+--------------------------------------------------+
| Book          | → /sales, /web, /advisory (si pas sûr)           |
+---------------+--------------------------------------------------+
```

### 2.2 Types de Liens à Implémenter

1. **Liens contextuels dans le contenu**
   - Ancres textuelles naturelles dans les paragraphes SEO
   - Exemple: "Notre équipe SDR est formée selon notre méthodologie Advisory"

2. **Sections "Services Connexes"**
   - Cartes visuelles en bas de chaque page service
   - 2-3 services complémentaires avec CTA

3. **Breadcrumbs améliorés**
   - Déjà en JSON-LD, ajouter le rendu visuel

4. **Footer enrichi**
   - Ajouter toutes les pages dans un méga-footer
   - Liens de langues croisées (EN → FR, FR → EN)

---

## 3. IMPLEMENTATION PAR PAGE

### 3.1 Page Sales (EN + FR)
**Ajouter section "Services Connexes" avant le CTA final :**
- Carte 1: "Need a website to convert your leads?" → /web
- Carte 2: "Want strategic guidance on your GTM?" → /advisory
- Carte 3: "See how we build and scale ventures" → /ventures

**Ajouter lien contextuel dans le contenu SEO :**
- "Our methodology is refined through our [Advisory practice](/advisory) and real-world experience from our [venture portfolio](/ventures)."

### 3.2 Page Web/Studio (EN + FR)
**Ajouter section "Complete Your Growth Stack" :**
- Carte 1: "Drive traffic to your new website" → /sales
- Carte 2: "Get strategic guidance on positioning" → /advisory

**Lien contextuel :**
- "Combine your new website with our [SDR services](/sales) to generate qualified meetings immediately."

### 3.3 Page Advisory (EN + FR)
**Ajouter section "From Strategy to Execution" :**
- Carte 1: "Execute your sales strategy" → /sales
- Carte 2: "Launch your website fast" → /web
- Carte 3: "See our venture portfolio" → /ventures

**Lien contextuel existant à transformer :**
- Le texte mentionne déjà "NLG Studio delivers in 72 hours" → Ajouter lien

### 3.4 Page Ventures (EN + FR)
**Ajouter section "Work With Us" améliorée :**
- Carte 1: "Get our sales methodology" → /sales
- Carte 2: "Build with our studio" → /web
- Carte 3: "Get strategic advice" → /advisory

### 3.5 Page About (EN + FR)
**Ajouter section "Our Services" après les valeurs :**
- 3 cartes vers Sales, Web, Advisory
- Lien vers Ventures dans la section "Track Record"

### 3.6 Page Contact (EN + FR)
**Ajouter section "How Can We Help?" avant le formulaire :**
- 3 boutons/liens vers les services principaux
- Lien clair vers /book pour meeting immédiat

### 3.7 Pages Book (EN + FR)
**Ajouter texte sous le calendrier :**
- "Not sure which service? Explore [Sales](/sales), [Web Studio](/web), or [Advisory](/advisory)"

---

## 4. FOOTER ENRICHI

### 4.1 Structure Proposée

```text
+------------------+------------------+------------------+------------------+
| Company          | Services         | Resources        | Legal            |
+------------------+------------------+------------------+------------------+
| Home             | Sales & BD       | Blog (futur)     | Privacy Policy   |
| About NLG        | Studio (Web)     | Case Studies     | Terms            |
| Ventures         | Advisory         | Book (Amazon)    | Cookie Policy    |
| Contact          |                  | FAQ              |                  |
+------------------+------------------+------------------+------------------+
| Book a Call (CTA principal centré)                                        |
+------------------+------------------+------------------+------------------+
| Language: EN | FR                   | © 2025 NLG Consulting              |
+------------------+------------------+------------------+------------------+
```

---

## 5. COMPOSANT REUTILISABLE

### 5.1 Créer un composant RelatedServices
Un composant React réutilisable pour afficher les services connexes :

**Props :**
- `currentService`: string (sales | web | advisory | ventures)
- `language`: "en" | "fr"

**Logique :**
- Exclut le service actuel
- Affiche 2-3 services complémentaires avec icônes et CTA

---

## 6. FICHIERS A MODIFIER

### Phase 1 : Composants Réutilisables
1. `src/components/RelatedServices.tsx` - Nouveau composant
2. `src/components/fr/RelatedServicesFR.tsx` - Version FR
3. `src/components/MainFooter.tsx` - Footer enrichi EN
4. `src/components/fr/MainFooterFR.tsx` - Footer enrichi FR

### Phase 2 : Pages Services (EN)
5. `src/pages/Sales.tsx` - Section + liens contextuels
6. `src/pages/WebLanding.tsx` - Section + liens contextuels
7. `src/pages/Advisory.tsx` - Section + liens contextuels
8. `src/pages/Ventures.tsx` - Section améliorée

### Phase 3 : Pages Services (FR)
9. `src/pages/fr/SalesFR.tsx` - Section + liens contextuels
10. `src/pages/fr/WebLandingFR.tsx` - Section + liens contextuels
11. `src/pages/fr/AdvisoryFR.tsx` - Section + liens contextuels
12. `src/pages/fr/VenturesFR.tsx` - Section améliorée

### Phase 4 : Pages Secondaires
13. `src/pages/About.tsx` - Section services
14. `src/pages/fr/AboutFR.tsx` - Section services FR
15. `src/pages/Contact.tsx` - Liens services + Navbar correcte
16. `src/pages/fr/ContactFR.tsx` - Liens services FR
17. `src/pages/Book.tsx` - Liens exploration
18. `src/pages/fr/BookFR.tsx` - Liens exploration FR

---

## 7. ANCRES OPTIMISEES POUR LE MAILLAGE

| Service | Ancre EN | Ancre FR |
|---------|----------|----------|
| Sales | "B2B sales development", "SDR services", "lead generation" | "développement commercial B2B", "services SDR", "génération de leads" |
| Web | "website in 72 hours", "web studio", "fast website development" | "site web en 72h", "studio web", "création site rapide" |
| Advisory | "strategic advisory", "business consulting", "GTM strategy" | "conseil stratégique", "consulting business", "stratégie GTM" |
| Ventures | "venture portfolio", "our platforms" | "portefeuille ventures", "nos plateformes" |
| Book | "book a call", "schedule a meeting", "free consultation" | "réserver un appel", "prendre rendez-vous", "consultation gratuite" |

---

## 8. IMPACT SEO ATTENDU

| Métrique | Avant | Après (3 mois) |
|----------|-------|----------------|
| Pages avec liens contextuels | 2/14 | 14/14 |
| Liens internes moyens par page | 4-6 | 10-15 |
| Profondeur de crawl max | 2 clics | 2 clics (maintenu) |
| Distribution PageRank | Concentrée (Home) | Distribuée |
| Taux de rebond estimé | 60-70% | 50-60% |
| Pages/session | 1.5 | 2.5-3.0 |

---

## 9. RECAPITULATIF DES MODIFICATIONS

| # | Fichier | Type | Priorité |
|---|---------|------|----------|
| 1 | src/components/RelatedServices.tsx | Créer | Haute |
| 2 | src/components/fr/RelatedServicesFR.tsx | Créer | Haute |
| 3 | src/components/MainFooter.tsx | Modifier | Haute |
| 4 | src/components/fr/MainFooterFR.tsx | Modifier | Haute |
| 5 | src/pages/Sales.tsx | Modifier | Haute |
| 6 | src/pages/fr/SalesFR.tsx | Modifier | Haute |
| 7 | src/pages/WebLanding.tsx | Modifier | Haute |
| 8 | src/pages/fr/WebLandingFR.tsx | Modifier | Haute |
| 9 | src/pages/Advisory.tsx | Modifier | Haute |
| 10 | src/pages/fr/AdvisoryFR.tsx | Modifier | Haute |
| 11 | src/pages/Ventures.tsx | Modifier | Moyenne |
| 12 | src/pages/fr/VenturesFR.tsx | Modifier | Moyenne |
| 13 | src/pages/About.tsx | Modifier | Moyenne |
| 14 | src/pages/fr/AboutFR.tsx | Modifier | Moyenne |
| 15 | src/pages/Contact.tsx | Modifier | Moyenne |
| 16 | src/pages/fr/ContactFR.tsx | Modifier | Moyenne |
| 17 | src/pages/Book.tsx | Modifier | Basse |
| 18 | src/pages/fr/BookFR.tsx | Modifier | Basse |

**Temps estimé d'implémentation : 45-60 minutes**
