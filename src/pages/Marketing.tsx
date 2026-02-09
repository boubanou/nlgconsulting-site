import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  CheckCircle,
  AlertTriangle,
  LineChart,
  Megaphone,
  Search,
  Monitor,
  Users,
  Globe,
  ShieldCheck,
  Eye,
  Layers,
  Phone,
} from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";
import RelatedServices from "@/components/RelatedServices";

const Marketing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Marketing PPC & Campagnes Digitales",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "PPC campaign management and digital marketing services focused on ROI. Google Ads, Meta Ads, LinkedIn Ads, multi-channel campaigns.",
        "url": "https://nlgconsulting.co/marketing",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Marketing & PPC", "item": "https://nlgconsulting.co/marketing" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long before PPC campaigns generate ROI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most clients see measurable results within 2-4 weeks. By month 2, campaigns are optimized for maximum ROI with continuous A/B testing and budget reallocation."
            }
          },
          {
            "@type": "Question",
            "name": "Which advertising platforms do you manage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We manage Google Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, TikTok Ads, Bing Ads, display networks, and retargeting campaigns across all major platforms."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with e-commerce and B2B companies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we work with all types of businesses: e-commerce, SaaS, B2B, B2C, local services, and international companies. Our approach is tailored to each business model."
            }
          },
          {
            "@type": "Question",
            "name": "What makes NLG different from other marketing agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on business outcomes, not vanity metrics. Full transparency on results, data-driven optimization, and we act as an extension of your team — not a disconnected agency."
            }
          },
          {
            "@type": "Question",
            "name": "Can I outsource my entire marketing to NLG?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We handle everything from strategy to execution: campaign creation, budget management, performance analysis, landing page optimization, and continuous improvement."
            }
          }
        ]
      }
    ]
  };

  const painPoints = [
    { icon: <AlertTriangle className="w-5 h-5" />, text: "Marketing budgets wasted on underperforming campaigns" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "PPC campaigns that generate clicks but no conversions" },
    { icon: <Users className="w-5 h-5" />, text: "Too many agencies, too few results" },
    { icon: <Eye className="w-5 h-5" />, text: "No clear visibility on ROI and performance" },
    { icon: <Layers className="w-5 h-5" />, text: "Lack of a unified multi-channel strategy" },
  ];

  const solutions = [
    { icon: <Target className="w-6 h-6" />, title: "Marketing Strategy", description: "Custom strategy aligned with your business goals, ICP, and market positioning." },
    { icon: <Megaphone className="w-6 h-6" />, title: "Campaign Creation & Structure", description: "Ad groups, creatives, audience targeting, and A/B testing frameworks built for conversion." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Budget Management & Allocation", description: "Smart budget distribution across channels to maximize ROAS and minimize waste." },
    { icon: <LineChart className="w-6 h-6" />, title: "Continuous Optimization", description: "Weekly performance analysis, bid adjustments, and creative refreshes for sustained growth." },
    { icon: <Search className="w-6 h-6" />, title: "Conversion & ROI Analysis", description: "End-to-end tracking from click to revenue. Attribution models that show real business impact." },
    { icon: <Monitor className="w-6 h-6" />, title: "Funnel Optimization", description: "Landing pages, messaging, and offers refined to convert more visitors into customers." },
  ];

  const channels = [
    "Google Ads", "Meta Ads (Facebook / Instagram)", "LinkedIn Ads",
    "TikTok Ads", "Bing Ads", "Retargeting",
    "Display Networks", "Multi-Channel Campaigns"
  ];

  const businessTypes = [
    "E-commerce / E-shop", "SaaS", "Professional Services",
    "B2B & B2C", "Local & International", "Scale-ups & Enterprise"
  ];

  const whyNLG = [
    { icon: <TrendingUp className="w-5 h-5" />, title: "Business vision before marketing", description: "We start with your revenue goals, not platform features." },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Data-driven, not ego-driven", description: "Every decision is backed by metrics, not assumptions." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Full transparency on results", description: "Real-time dashboards and weekly reports — no hidden metrics." },
    { icon: <Users className="w-5 h-5" />, title: "Extension of your team", description: "We don't replace your teams. We reinforce them." },
    { icon: <Zap className="w-5 h-5" />, title: "Custom approach, always", description: "No cookie-cutter playbooks. Every strategy is tailored to your business." },
    { icon: <Globe className="w-5 h-5" />, title: "Short-term or long-term", description: "One-off projects or ongoing partnerships — your choice." },
  ];

  const results = [
    { metric: "2-4x", label: "Average ROAS" },
    { metric: "8+", label: "Channels Managed" },
    { metric: "-40%", label: "Cost Per Acquisition" },
    { metric: "72h", label: "Campaign Launch" },
  ];

  return (
    <>
      <Helmet>
        <title>PPC Marketing & ROI-Driven Digital Campaigns | NLG Consulting</title>
        <meta
          name="description"
          content="PPC campaign management & multi-channel digital marketing. ROI-focused performance for e-commerce, B2B, B2C. Google Ads, Meta, LinkedIn. Book a strategy call."
        />
        <meta name="keywords" content="PPC campaign management, digital marketing performance, PPC agency, e-commerce marketing, Google Ads campaigns, marketing outsourcing, multi-channel marketing, ROI marketing strategy" />
        <link rel="canonical" href="https://nlgconsulting.co/marketing" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/marketing" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/marketing" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/marketing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/marketing" />
        <meta property="og:title" content="PPC Marketing & ROI-Driven Digital Campaigns | NLG" />
        <meta property="og:description" content="ROI-focused PPC campaign management. Google Ads, Meta, LinkedIn. Multi-channel digital marketing for e-commerce, B2B, B2C." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <MainNavbar />

        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm mb-6">
              Marketing & PPC
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Your Marketing Budget Into Measurable Growth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We design, manage, and optimize your marketing campaigns & PPC to generate qualified leads, sales, and ROI — regardless of your industry or channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/book">
                  Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/contact">
                  <Phone className="mr-2 w-4 h-4" /> Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Sound Familiar?</h2>
            <div className="space-y-4">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 text-destructive">
                    {point.icon}
                  </div>
                  <p className="text-foreground font-medium">{point.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              If any of these resonate, you don't need more tools — you need a partner who understands performance marketing at the business level.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance-Driven Marketing, Not Just Clicks</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We manage your entire paid marketing stack — from strategy to execution and continuous optimization.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((item, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Band */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{item.metric}</div>
                  <div className="text-sm opacity-80 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channels & Business Types */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Every Channel. Every Business.</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-primary" /> Advertising Channels
                </h3>
                <div className="flex flex-wrap gap-3">
                  {channels.map((ch, i) => (
                    <Badge key={i} variant="secondary" className="px-4 py-2 text-sm">
                      {ch}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" /> Business Types
                </h3>
                <div className="flex flex-wrap gap-3">
                  {businessTypes.map((bt, i) => (
                    <Badge key={i} variant="outline" className="px-4 py-2 text-sm">
                      {bt}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why NLG */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Outsource Your Marketing to NLG Consulting</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We don't replace your teams. We reinforce them.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyNLG.map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Block — ~1500 words */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">PPC Campaign Management & Digital Marketing: A Complete Guide</h2>

              <p>
                In today's competitive digital landscape, businesses of all sizes rely on pay-per-click advertising and digital marketing to generate leads, drive sales, and build brand awareness. Whether you run an e-commerce store, a SaaS platform, a B2B services company, or a local business, the principles of effective PPC campaign management remain the same: understand your audience, craft compelling messages, allocate budgets intelligently, and optimize relentlessly.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Why PPC Advertising Matters for Business Growth</h3>
              <p>
                PPC advertising offers something that organic marketing cannot: immediacy. While SEO and content marketing are essential long-term strategies, paid campaigns can put your offer in front of qualified buyers within hours of launch. Google Ads alone processes over 8.5 billion searches per day, and Meta's advertising platform reaches over 3 billion monthly active users.
              </p>
              <p>
                But the opportunity comes with risk. Without proper <strong>PPC campaign management</strong>, businesses waste thousands of euros on irrelevant clicks, poorly structured ad groups, and landing pages that don't convert. The difference between a profitable campaign and a money pit often comes down to expertise and methodology.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Core Elements of High-Performance PPC Campaigns</h3>
              <p>
                Effective <strong>digital marketing performance</strong> starts with a solid foundation. At NLG Consulting, our approach covers every element of the campaign lifecycle:
              </p>
              <ul>
                <li><strong>Audience Research & Segmentation:</strong> We analyze your market to identify high-intent buyer segments. Demographics, psychographics, behavioral signals, and lookalike audiences are mapped to create precise targeting profiles.</li>
                <li><strong>Keyword Strategy (Search Campaigns):</strong> For Google Ads and Bing Ads, keyword research is the backbone. We identify commercial-intent keywords, negative keywords to filter waste, and long-tail opportunities with lower competition and higher conversion rates.</li>
                <li><strong>Ad Creative & Copywriting:</strong> Ads compete for attention in milliseconds. Our team creates high-converting ad copy with clear value propositions, compelling CTAs, and A/B test variations to find winning combinations.</li>
                <li><strong>Landing Page Optimization:</strong> Traffic is only half the equation. Landing pages must align with ad messaging, load fast, and guide visitors toward a clear conversion action — whether that's a purchase, a form fill, or a call booking.</li>
                <li><strong>Bid Strategy & Budget Allocation:</strong> We use a combination of manual and automated bidding strategies to maximize return on ad spend (ROAS). Budgets are dynamically allocated based on channel performance and business priorities.</li>
                <li><strong>Conversion Tracking & Attribution:</strong> Accurate tracking is non-negotiable. We implement end-to-end conversion tracking across platforms, including offline conversions, phone calls, and multi-touch attribution models.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Google Ads Campaigns: Search, Shopping & Display</h3>
              <p>
                Google Ads remains the most powerful platform for capturing demand. Our <strong>Google Ads campaign management</strong> covers:
              </p>
              <ul>
                <li><strong>Search Campaigns:</strong> Target users actively searching for your products or services. We structure campaigns with tight ad groups, relevant keywords, and compelling ad extensions.</li>
                <li><strong>Shopping Campaigns:</strong> Essential for <strong>e-commerce marketing</strong>. We optimize product feeds, bidding strategies, and ROAS targets to drive profitable revenue from Google Shopping and Performance Max campaigns.</li>
                <li><strong>Display & YouTube:</strong> Build awareness and retarget past visitors with display ads and video campaigns across Google's massive network of partner sites.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Meta Ads: Facebook & Instagram Advertising</h3>
              <p>
                Meta's advertising ecosystem offers unparalleled audience targeting capabilities. From interest-based targeting to custom audiences built from your CRM data, Meta Ads can reach virtually any audience segment. We manage:
              </p>
              <ul>
                <li>Awareness campaigns for brand building</li>
                <li>Consideration campaigns for traffic and engagement</li>
                <li>Conversion campaigns for direct sales and lead generation</li>
                <li>Dynamic retargeting for e-commerce product catalogs</li>
                <li>Lookalike audiences to scale winning segments</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">LinkedIn Ads: B2B Lead Generation at Scale</h3>
              <p>
                For B2B companies, LinkedIn Ads provides unmatched professional targeting. We leverage LinkedIn's unique data — job titles, company sizes, industries, seniority levels — to reach decision-makers directly. Sponsored Content, Message Ads, and Lead Gen Forms are configured for maximum qualified lead volume at controlled cost per acquisition.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Multi-Channel Marketing Strategy: Why It Matters</h3>
              <p>
                The most successful marketing strategies don't rely on a single channel. <strong>Multi-channel marketing</strong> creates multiple touchpoints across the buyer's journey. A prospect might first discover your brand through a Google search, see a retargeting ad on Instagram, receive a personalized LinkedIn message, and finally convert after watching a YouTube case study.
              </p>
              <p>
                At NLG Consulting, we orchestrate campaigns across all channels with unified messaging and shared data. This approach increases conversion rates, reduces customer acquisition costs, and builds stronger brand recall.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Marketing Outsourcing: When and Why to Partner with an Agency</h3>
              <p>
                <strong>Marketing outsourcing</strong> makes sense when you need expertise, speed, and accountability without the overhead of building an in-house team. Common scenarios include:
              </p>
              <ul>
                <li>You're launching a new product and need campaigns live quickly</li>
                <li>Your in-house team is strong on brand but weak on paid media</li>
                <li>You're scaling internationally and need multi-market campaigns</li>
                <li>You want transparent, data-driven management with clear KPIs</li>
                <li>You need someone accountable for performance, not just execution</li>
              </ul>
              <p>
                NLG Consulting acts as a seamless extension of your team. We bring the expertise of a <strong>PPC agency</strong> with the strategic depth of a consultancy. Our clients include e-commerce brands, SaaS companies, B2B service providers, and scale-ups across Europe, the Middle East, and Africa.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Measuring Success: ROI-Focused Marketing</h3>
              <p>
                We believe in radical transparency. Every campaign comes with real-time dashboards tracking the metrics that matter: cost per lead, cost per acquisition, return on ad spend, customer lifetime value, and contribution to pipeline. We don't hide behind vanity metrics like impressions or clicks — we focus on business outcomes.
              </p>
              <p>
                Our <strong>ROI marketing strategy</strong> typically delivers:
              </p>
              <ul>
                <li>2-4x average return on ad spend across channels</li>
                <li>30-50% reduction in cost per acquisition within 90 days</li>
                <li>Significant improvements in lead quality and sales velocity</li>
              </ul>

              <p className="mt-8">
                Our marketing methodology integrates with our <Link to="/sales" className="text-primary hover:underline font-medium">B2B sales development</Link> services and is informed by our <Link to="/advisory" className="text-primary hover:underline font-medium">strategic advisory</Link> practice. Combine paid marketing with our <Link to="/web" className="text-primary hover:underline font-medium">web studio</Link> for high-converting landing pages delivered in 72 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <RelatedServices currentService="marketing" />

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Want to Know If Your Campaigns Can Be More Profitable?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's talk about it. No obligation, no fluff — just a strategic conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base px-8">
                <Link to="/book">Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default Marketing;
