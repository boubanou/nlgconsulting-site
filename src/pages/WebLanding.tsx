import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WebHeader from "@/components/web-landing/WebHeader";
import WebHero from "@/components/web-landing/WebHero";
import WebPositioning from "@/components/web-landing/WebPositioning";
import WebOffers from "@/components/web-landing/WebOffers";
import WebTrust from "@/components/web-landing/WebTrust";
import WebTestimonials from "@/components/web-landing/WebTestimonials";
import WebMethod from "@/components/web-landing/WebMethod";
import WebFAQ from "@/components/web-landing/WebFAQ";
import WebFooter from "@/components/web-landing/WebFooter";

const WebLanding = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Website in 72 Hours - NLG Studio",
        "provider": { "@type": "Organization", "name": "NLG Consulting" },
        "description": "Professional website development delivered in under 72 hours. Includes UX/UI design, copywriting, SEO optimization, CRM integration, and Stripe payment processing.",
        "url": "https://nlgconsulting.co/web",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "749",
          "highPrice": "2499",
          "priceCurrency": "EUR",
          "offerCount": "3"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nlgconsulting.co" },
          { "@type": "ListItem", "position": 2, "name": "Web Studio", "item": "https://nlgconsulting.co/web" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the payment secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all payments are processed by Stripe, the world leader in online payments. Your banking data is encrypted according to PCI-DSS standards and is never stored on our servers. You automatically receive an invoice after each payment."
            }
          },
          {
            "@type": "Question",
            "name": "What happens after the deposit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Upon receiving your deposit, we contact you within 24 hours to schedule a 30-minute brief. Then, we begin creating your website. You receive a first version within a few days, followed by adjustments before final delivery."
            }
          },
          {
            "@type": "Question",
            "name": "Do I own the website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. After full payment, you become 100% owner of your website. We systematically provide you with the complete source code. You are free to host, modify, or transfer your site as you wish, without any technical dependency."
            }
          },
          {
            "@type": "Question",
            "name": "Is SEO included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our packages include an optimized SEO structure with unique meta titles and meta descriptions for each page, as well as Google indexing. The Intermediate Pack offers advanced SEO with additional features."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use my own domain name?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can use your own domain name. Domain and DNS setup is included in all our packages. If you don't have a domain yet, we can advise you on the best options."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Website in 72 Hours | From €749 | SEO + Stripe Included | NLG Studio</title>
        <meta 
          name="description" 
          content="Launch your conversion-ready website in 72 hours. UX design, SEO, Stripe payments, CRM integration. 100% code ownership. Starting at €749." 
        />
        <meta 
          name="keywords" 
          content="website 72 hours, fast website development, business website, landing page design, Stripe integration, SEO website, professional web design, startup website, conversion website" 
        />
        <link rel="canonical" href="https://nlgconsulting.co/web" />
        <link rel="alternate" hrefLang="en" href="https://nlgconsulting.co/web" />
        <link rel="alternate" hrefLang="fr" href="https://nlgconsulting.co/fr/site-internet" />
        <link rel="alternate" hrefLang="x-default" href="https://nlgconsulting.co/web" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nlgconsulting.co/web" />
        <meta property="og:title" content="Website in 72 Hours | From €749 | SEO + Stripe Included" />
        <meta property="og:description" content="Launch your conversion-ready website in 72 hours. UX design, SEO, Stripe payments, CRM integration. 100% code ownership. Starting at €749." />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website in 72 Hours | From €749 | SEO + Stripe Included" />
        <meta name="twitter:description" content="Launch your conversion-ready website in 72 hours. UX design, SEO, Stripe payments, CRM integration. 100% code ownership." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1762862777432-NLG logo (1)@0.5x.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <WebHeader />
        <main>
          <WebHero />
          
          {/* SEO Content Section */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Why Choose NLG Studio for Your Website?</h2>
                <p>
                  In today's digital landscape, your website is often the first touchpoint with potential customers. A slow, outdated, or poorly designed website costs you leads and revenue every single day. Traditional web agencies take weeks or months to deliver—and charge tens of thousands of dollars.
                </p>
                <p>
                  NLG Studio changes the equation. We deliver professional, conversion-optimized websites in under 72 hours, at a fraction of the traditional cost. Every website we build includes UX/UI design, persuasive copywriting, technical SEO, CRM integration, and payment processing. You get everything you need to start generating revenue immediately.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What's Included in Every Website</h3>
                <p>
                  Our website packages are designed to give you a complete, revenue-ready digital presence:
                </p>
                <ul>
                  <li><strong>Custom UX/UI Design:</strong> Modern, responsive designs that look great on desktop, tablet, and mobile. Every design is optimized for conversion with strategic CTA placement and user-friendly navigation.</li>
                  <li><strong>Conversion Copywriting:</strong> Persuasive, SEO-optimized copy that communicates your value proposition and drives action. Written by experienced copywriters who understand B2B messaging.</li>
                  <li><strong>Technical SEO:</strong> From meta tags to structured data, your website is built for search engine visibility. Fast loading speeds, mobile optimization, and clean code structure.</li>
                  <li><strong>CRM Integration:</strong> Connect your website to HubSpot, Salesforce, Pipedrive, or your CRM of choice. All leads flow directly into your sales pipeline.</li>
                  <li><strong>Payment Processing:</strong> Stripe integration included for products, subscriptions, or services. Start accepting payments immediately.</li>
                  <li><strong>Analytics & Tracking:</strong> Google Analytics 4, conversion tracking, and heatmaps to understand visitor behavior and optimize performance.</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Our 72-Hour Process</h3>
                <p>
                  Speed doesn't mean cutting corners—it means eliminating inefficiencies. Here's how we deliver in under 72 hours:
                </p>
                <p>
                  <strong>Day 1:</strong> We start with a focused discovery call to understand your business, audience, and goals. You provide brand assets and content, and our design team begins wireframing.
                </p>
                <p>
                  <strong>Day 2:</strong> Design development and content integration. Our copywriters refine your messaging while developers build out the technical infrastructure.
                </p>
                <p>
                  <strong>Day 3:</strong> Final review, testing, and launch. We deploy your website with full SSL security, connect your domain, and configure all integrations.
                </p>
              </div>
            </div>
          </section>

          <WebPositioning />
          <WebOffers />
          
          {/* Mid-page CTA */}
          <section className="py-16 px-4 bg-primary text-primary-foreground">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Launch Your Website?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Stop losing leads to an outdated website. Launch your revenue-ready site in under 72 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => document.querySelector("#offres")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Packages <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/book">Book a Call</Link>
                </Button>
              </div>
            </div>
          </section>

          <WebTrust />
          <WebTestimonials />
          
          {/* Additional SEO Content */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Who Is NLG Studio For?</h2>
                <p>
                  NLG Studio serves businesses that need professional web presence without the traditional agency timeline and budget. Our clients include:
                </p>
                <ul>
                  <li><strong>Startups:</strong> Launch your MVP website quickly to start validating and generating leads.</li>
                  <li><strong>Consultants & Coaches:</strong> Professional service providers who need credibility and booking capabilities.</li>
                  <li><strong>SaaS Companies:</strong> Marketing websites and landing pages for product launches.</li>
                  <li><strong>E-commerce:</strong> Product landing pages and catalog sites with payment processing.</li>
                  <li><strong>Professional Services:</strong> Law firms, accountants, and agencies needing modern digital presence.</li>
                </ul>
                <p>
                  If you need a website that converts visitors into customers—and you need it fast—NLG Studio is your solution.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Ownership and Transparency</h3>
                <p>
                  Unlike many web agencies, we believe in complete transparency and ownership. You own 100% of your source code—no proprietary platforms, no lock-in, no hidden dependencies. You receive full access to all files, can host anywhere you choose, and have no ongoing obligations after delivery.
                </p>
                <p>
                  Payment is handled securely through Stripe with full invoicing. There are no subscriptions or recurring fees unless you specifically choose our optional maintenance packages.
                </p>
              </div>
            </div>
          </section>

          <WebMethod />
          <WebFAQ />
        </main>
        <WebFooter />
      </div>
    </>
  );
};

export default WebLanding;
