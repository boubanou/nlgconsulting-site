

# SEO Technical Overhaul Plan — NLG Consulting

## Current State Summary

All pages use `nlgconsulting.co` (non-www) as canonical domain. The `index.html` has placeholder verification tags, `meta keywords`, `geo.region`, `geo.placename`, `meta language`, `msnbot`, and `yandex` tags that add no SEO value. Structured data exists on most pages but URLs are inconsistent (non-www). The site is hosted on Lovable/Vercel with SPA routing.

**Key issue**: The user wants `www.nlgconsulting.co` as canonical, but the site currently uses `nlgconsulting.co`. All canonicals, hreflangs, og:urls, structured data URLs, and sitemap URLs must be updated to `www.nlgconsulting.co`.

---

## Implementation Plan

### Phase 1: Domain Canonical + Head Cleanup

**`index.html`** — Clean the global `<head>`:
- Remove: `meta keywords`, `geo.region`, `geo.placename`, `meta language`, `msnbot`, `yandex`, placeholder verification codes (`google-site-verification`, `msvalidate.01`, `yandex-verification`)
- Update canonical to `https://www.nlgconsulting.co/`
- Update all og:url, og:image, hreflang, sitemap references to use `www.`
- Keep: charset, viewport, robots, theme-color, favicons, consent mode, GA4, preconnects

**`vercel.json`** — Add redirect from non-www to www:
```json
{ "source": "/:path(.*)", "has": [{"type": "host", "value": "nlgconsulting.co"}], "destination": "https://www.nlgconsulting.co/:path", "permanent": true }
```

### Phase 2: Sitewide URL Migration (non-www → www)

Update ALL canonical, hreflang, og:url, and structured data URLs across every page component to use `https://www.nlgconsulting.co/`. This affects ~25+ page files:

- `Home.tsx`, `AboutNLG.tsx`, `Sales.tsx`, `Advisory.tsx`, `WebLanding.tsx`, `Marketing.tsx`, `Services.tsx`, `AILeadGeneration.tsx`, `SaaSMonetization.tsx`, `GoToMarket.tsx`, `PropTechConsulting.tsx`, `Ventures.tsx`, `ContactPage.tsx`, `Book.tsx`, `PrivacyPolicy.tsx`
- All French mirrors: `HomeFR.tsx`, `AboutFR.tsx`, `SalesFR.tsx`, `AdvisoryFR.tsx`, `WebLandingFR.tsx`, `MarketingFR.tsx`, `ServicesFR.tsx`, `AILeadGenerationFR.tsx`, `SaaSMonetizationFR.tsx`, `GoToMarketFR.tsx`, `PropTechConsultingFR.tsx`, `VenturesFR.tsx`, `ContactFR.tsx`, `BookFR.tsx`, `PrivacyPolicyFR.tsx`

Also remove `meta keywords` from every page that has it.

### Phase 3: Title & Meta Description Rewrite

Optimized titles/metas for all core pages:

| Page | New Title | New Meta Description |
|------|-----------|---------------------|
| `/` | B2B Lead Generation Agency \| Outsourced SDR & GTM \| NLG Consulting | B2B lead generation for startups and service companies. Outsourced SDR, cold outreach, GTM advisory and websites in 72h. Book a free strategy call. |
| `/about` | About NLG Consulting \| B2B Growth Operator & Founder-Led Advisory | Meet Gregory Brenig and the NLG team. 15+ years building ventures, scaling sales teams, and advising SaaS & PropTech companies worldwide. |
| `/sales` | Outsourced SDR \| 15-30 Qualified B2B Meetings/Month \| NLG Consulting | Outsource your B2B sales development. LinkedIn, email, cold calling. 15-30 qualified meetings/month guaranteed. No hiring risk. Free audit. |
| `/web` | Website in 72 Hours \| High-Converting B2B Sites \| NLG Consulting | Get a revenue-ready website in 72 hours. Designed for conversion, optimized for SEO. From landing pages to full platforms. |
| `/advisory` | Strategic Business Advisory for SaaS & PropTech \| NLG Consulting | Operator-led strategic advisory for SaaS founders and PropTech operators. Revenue strategy, GTM, monetization, and international expansion. |
| `/marketing` | PPC & Marketing Campaigns \| ROI-Driven \| NLG Consulting | Full-stack PPC and marketing management. Google, Meta, LinkedIn Ads. Data-driven campaigns that generate leads and revenue. |
| `/services` | Revenue Acceleration Services for SaaS & PropTech \| NLG Consulting | End-to-end growth services: outsourced SDR, AI lead gen, SaaS monetization, GTM strategy, PropTech consulting. Book a strategy call. |
| `/contact` | Contact NLG Consulting \| Book a Free Strategy Call | Get in touch with NLG Consulting. Request a callback, send a message, or book a free 15-minute strategy call. |
| `/book` | Free Revenue Strategy Call \| NLG Consulting | Book a free 15-min strategy call with a B2B growth expert. Walk away with 3 actionable ideas. Limited slots available. |
| `/ventures` | Ventures & Portfolio \| NLG Consulting | Discover the platforms and brands built and operated by NLG Consulting across PropTech, FinTech, Media, and AI. |
| `/fr` | Agence Lead Generation B2B \| SDR Externalisé & GTM \| NLG Consulting | Génération de leads B2B pour startups et entreprises. SDR externalisé, prospection, conseil GTM et sites web en 72h. Réservez un appel. |

Plus equivalent rewrites for all FR pages.

### Phase 4: New High-Intent SEO Landing Pages (8 EN + 5 FR)

Create dedicated pages with unique content (~800-1200 words each):

**English:**
1. `/outsourced-sdr` — Outsourced SDR Services
2. `/b2b-lead-generation-agency` — B2B Lead Generation Agency
3. `/appointment-setting` — B2B Appointment Setting
4. `/go-to-market-consulting` — Go-To-Market Consulting
5. `/website-in-72-hours` — Website in 72 Hours
6. `/proptech-lead-generation` — PropTech Lead Generation
7. `/fintech-lead-generation` — FinTech Lead Generation
8. `/ai-sales-outreach` — AI Sales Outreach

**French:**
1. `/fr/sdr-externalise` — SDR Externalisé
2. `/fr/agence-lead-generation-b2b` — Agence Lead Generation B2B
3. `/fr/prise-de-rendez-vous-b2b` — Prise de Rendez-vous B2B
4. `/fr/strategie-go-to-market` — Stratégie Go-To-Market
5. `/fr/site-web-en-72h` — Site Web en 72h

Each page includes: H1, SEO intro, methodology, differentiators, FAQ (5 questions), CTA, internal links, JSON-LD (Service + FAQPage + BreadcrumbList), hreflang where equivalent exists.

### Phase 5: Structured Data Upgrade

- Upgrade Organization schema on Home to include `sameAs` (LinkedIn), `foundingDate`, `areaServed`
- Upgrade Person schema on About to include `knowsAbout`, `sameAs`
- Every new landing page gets `Service` + `FAQPage` + `BreadcrumbList` schemas
- All schema URLs use `www.nlgconsulting.co`

### Phase 6: Sitemap & Robots Update

**`sitemap.xml`**: Add all new pages with proper hreflang clusters, update all existing URLs to `www.nlgconsulting.co`.

**`robots.txt`**: Update sitemap URL to `https://www.nlgconsulting.co/sitemap.xml`. Keep blocking `/admin` and `/auth`.

### Phase 7: Internal Linking Enhancement

- Update `RelatedServices.tsx` and FR variant with new page types (outsourced-sdr, appointment-setting, etc.)
- Add new pages to `MainNavbar.tsx` services dropdown and `MainFooter.tsx` mega-footer
- Each new landing page links to 2-3 related service pages + `/book`

### Phase 8: App.tsx Routes

Add 13 new routes for the landing pages + lazy imports.

---

## Files Summary

**New files (13):**
- `src/pages/OutsourcedSDR.tsx`
- `src/pages/B2BLeadGenerationAgency.tsx`
- `src/pages/AppointmentSetting.tsx`
- `src/pages/GoToMarketConsulting.tsx`
- `src/pages/WebsiteIn72Hours.tsx`
- `src/pages/PropTechLeadGeneration.tsx`
- `src/pages/FinTechLeadGeneration.tsx`
- `src/pages/AISalesOutreach.tsx`
- `src/pages/fr/SDRExternaliseFR.tsx`
- `src/pages/fr/AgenceLeadGenerationFR.tsx`
- `src/pages/fr/PriseRendezVousFR.tsx`
- `src/pages/fr/StrategieGoToMarketFR.tsx`
- `src/pages/fr/SiteWebEn72hFR.tsx`

**Modified files (~30+):**
- `index.html` — head cleanup
- `vercel.json` — www redirect
- `public/sitemap.xml` — full rewrite
- `public/robots.txt` — update sitemap URL
- `src/App.tsx` — new routes
- `src/components/MainNavbar.tsx` + FR — footer links
- `src/components/MainFooter.tsx` + FR — mega-footer expansion
- `src/components/RelatedServices.tsx` + FR — new service types
- All 25+ existing page files — canonical/hreflang/og migration to www + title/meta rewrites + keywords removal

**Estimated scope**: Large but systematic. Most page edits are find-and-replace of `nlgconsulting.co` → `www.nlgconsulting.co` plus title/meta updates.

