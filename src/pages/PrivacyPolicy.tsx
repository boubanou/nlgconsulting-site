import { Helmet } from "react-helmet-async";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy & Legal Notice | NLG Consulting",
    description: "Privacy policy, GDPR data protection and legal notice of NLG Consulting. Full compliance with European regulations.",
    url: "https://nlgconsulting.co/privacy-policy",
    inLanguage: "en",
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy & Legal Notice | NLG Consulting</title>
        <meta name="description" content="Privacy policy, GDPR data protection and legal notice of NLG Consulting. Full compliance with European regulations." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nlgconsulting.co/privacy-policy" />
        
        <meta property="og:title" content="Privacy Policy & Legal Notice | NLG Consulting" />
        <meta property="og:description" content="Privacy policy, GDPR data protection and legal notice of NLG Consulting. Full compliance with European regulations." />
        <meta property="og:url" content="https://nlgconsulting.co/privacy-policy" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <MainNavbar />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-accent/5">
        <div className="container max-w-4xl mx-auto px-4 pt-24 md:pt-32 pb-16">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8">Legal Notice and Privacy Policy</h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Publisher</h2>
              <p className="mb-4">This website is operated by NLG Consulting, a company specialized in B2B/B2C lead generation and digital marketing services.</p>
              <p className="mb-2"><strong>Address:</strong> Hahermon 21, Tel Aviv, Israel</p>
              <p className="mb-2"><strong>Email:</strong> greg@nlgconsulting.co</p>
              <p className="mb-4"><strong>Publisher:</strong> Gregory Brenig</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>
              <p>Hosted by Vercel Inc., San Francisco, USA.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Data protection</h2>
              <p className="mb-4">NLG Consulting complies with the EU General Data Protection Regulation (GDPR - EU 2016/679). All data collected (forms, cookies, analytics) are used solely for business purposes.</p>
              <p>No data is sold to third parties.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. User rights</h2>
              <p className="mb-4">You may request access, rectification, deletion or opposition by contacting: greg@nlgconsulting.co.</p>
              <p>NLG Consulting has a Data Protection Officer (DPO) reachable at this address.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
              <p className="mb-4">Cookies are used to measure website performance and improve services.</p>
              <p>No tracking is enabled without prior consent.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Liability</h2>
              <p>NLG Consulting provides this website and its contents 'as is' and does not guarantee uninterrupted access or absence of errors.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Applicable law</h2>
              <p>This policy is governed by the laws of the European Union and the State of Israel.</p>
            </section>
          </article>
        </div>
      </main>

      <MainFooter />
    </>
  );
};

export default PrivacyPolicy;
