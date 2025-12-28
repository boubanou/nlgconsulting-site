import { Helmet } from "react-helmet-async";
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
  return (
    <>
      <Helmet>
        <title>Website in 72h | NLG Studio by NLG Consulting</title>
        <meta 
          name="description" 
          content="Launch your revenue-ready website in under 72 hours. UX/UI, copywriting, SEO, CRM, automations, Stripe included. Secure payment, source code provided." 
        />
        <link rel="canonical" href="https://nlgconsulting.co/web" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <WebHeader />
        <main>
          <WebHero />
          <WebPositioning />
          <WebOffers />
          <WebTrust />
          <WebTestimonials />
          <WebMethod />
          <WebFAQ />
        </main>
        <WebFooter />
      </div>
    </>
  );
};

export default WebLanding;
