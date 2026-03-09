

## Navigation Restructuration Plan — EN + FR

### Current State

The navbar has 7 flat links + language switch + CTA. With 30+ pages on the site, most content (industries, guides, use cases, training) is only accessible via the footer. This limits internal linking, SEO crawl paths, and user discovery.

### Proposed Navigation Architecture

Replace the flat link list with a **Radix NavigationMenu** using dropdown mega-menu panels for key sections. The result stays calm, minimal, and C-level appropriate — no flashy animations, just clean typographic panels that appear on hover.

```text
┌─────────────────────────────────────────────────────────────────────┐
│ [Logo]   About  Solutions▾  Industries▾  Resources▾  Contact  [FR] [Book a Call] │
└─────────────────────────────────────────────────────────────────────┘

Solutions▾ (mega-panel)
┌──────────────────────────────────────────────────────┐
│  AI & Automation          Sales & Growth             │
│  ─────────────            ──────────────             │
│  AI Consulting            Sales & BD                 │
│  AI Automation            Outsourced SDR             │
│  AI Agents                Appointment Setting        │
│  AI Marketing             Go-to-Market Consulting    │
│  AI Sales Automation      Lead Generation            │
│  Prompt Engineering                                  │
│  Outsourced AI            Advisory & Training        │
│                           ──────────────────         │
│                           Advisory                   │
│                           AI Training for Teams      │
│                           Fractional AI Consultant   │
│                                                      │
│  → View All Services                                 │
└──────────────────────────────────────────────────────┘

Industries▾ (mega-panel)
┌──────────────────────────────────────────────────────┐
│  SaaS    FinTech    PropTech    Real Estate           │
│  Consulting Firms    Agencies    B2B Services         │
└──────────────────────────────────────────────────────┘

Resources▾ (mega-panel)
┌──────────────────────────────────────────────────────┐
│  Use Cases                                           │
│  Best AI Tools for Business                          │
│  How to Automate Marketing with AI                   │
│  Book (Amazon)                                       │
└──────────────────────────────────────────────────────┘
```

FR version mirrors exactly with translated labels and `/fr/...` paths.

### Implementation Details

**Files to create:**
- None — we refactor existing navbar files

**Files to modify:**
1. `src/components/MainNavbar.tsx` — Replace flat links with `NavigationMenu` from `@radix-ui/react-navigation-menu` (already installed via shadcn). Add 3 dropdown triggers (Solutions, Industries, Resources) + 2 direct links (About, Contact). Mobile menu gets an accordion-based structure using the existing `Collapsible` component.

2. `src/components/fr/MainNavbarFR.tsx` — Identical structure, French labels and `/fr/` paths.

### Desktop Behavior
- Hover-triggered dropdown panels with clean 2-column grid layouts
- Subtle border, shadow, and `bg-popover` background — consistent with existing design tokens
- Each link uses `text-sm text-muted-foreground hover:text-foreground` for the calm consulting feel
- "View All Services" link at bottom of Solutions panel for extra internal linking
- No animations beyond the default Radix fade-in

### Mobile Behavior
- Hamburger menu stays as-is but sections become collapsible groups (using `Collapsible` / `CollapsibleTrigger` / `CollapsibleContent`)
- Each group (Solutions, Industries, Resources) expands to show sub-links
- Direct links (About, Contact) remain flat
- CTA button at bottom

### SEO & Internal Linking Gains
- Every page in the site becomes reachable within 2 clicks from any page
- Navbar links pass PageRank to all key hub pages on every page load
- Anchor text is keyword-rich but natural (e.g., "AI Consulting", "Outsourced SDR", "Go-to-Market Consulting")
- Crawler discovers all 30+ pages from the navigation alone, complementing the mega-footer

### UX Principles
- Maximum 3 dropdown triggers to avoid cognitive overload
- Panel content grouped by theme with subtle section headers
- Calm typography: `text-sm`, `font-medium` for headers, `text-muted-foreground` for links
- No icons in the dropdown — text only for executive clarity
- Generous padding (`p-6`) inside panels

