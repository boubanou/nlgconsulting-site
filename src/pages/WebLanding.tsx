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
        <title>Création de site internet rapide et sécurisé | NLG Consulting</title>
        <meta 
          name="description" 
          content="Création de site internet professionnel en quelques jours. Paiement sécurisé Stripe, code source fourni, SEO inclus." 
        />
        <link rel="canonical" href="https://web.nlgconsulting.co/" />
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
