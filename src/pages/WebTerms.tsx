import { Helmet } from "react-helmet-async";
import WebHeader from "@/components/web-landing/WebHeader";
import WebFooter from "@/components/web-landing/WebFooter";

const WebTerms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | NLG Consulting</title>
        <meta 
          name="description" 
          content="Terms and conditions for website creation services by NLG Consulting. Delivery times, payments, source code ownership." 
        />
        <link rel="canonical" href="https://web.nlgconsulting.co/terms" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <WebHeader />
        <main className="pt-24 pb-16">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Terms and Conditions
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Services Offered</h2>
                
                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Starter Pack – €749</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>3-4 page website</li>
                  <li>Integrated contact form</li>
                  <li>Optimized SEO structure</li>
                  <li>Unique meta title and meta description per page</li>
                  <li>Google indexing</li>
                  <li>Domain and DNS setup</li>
                  <li>Source code provided upon delivery</li>
                </ul>
                
                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Intermediate Pack – €999</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complete website with blog</li>
                  <li>Calendly integration</li>
                  <li>Simple content management</li>
                  <li>Advanced SEO + meta tags</li>
                  <li>Google indexing</li>
                  <li>Domain and DNS setup</li>
                  <li>Source code provided upon delivery</li>
                </ul>
                
                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Pro Pack – Custom Quote</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>E-commerce</li>
                  <li>Custom development</li>
                  <li>Applications and software</li>
                  <li>Advanced automations</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Delivery Times</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Starter Pack:</strong> 7 business days maximum</li>
                  <li><strong>Intermediate Pack:</strong> 7-10 business days</li>
                  <li><strong>Pro Pack:</strong> according to quote</li>
                </ul>
                <p className="mt-4">
                  Delivery times begin from receipt of the deposit and all necessary project materials (text, images, domain access).
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Included Revisions</h2>
                <p>
                  Each service includes <strong>2 rounds of revisions</strong> after presentation of the first version. 
                  Additional revisions will be quoted separately.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>50% deposit</strong> required to start the project</li>
                  <li><strong>50% balance</strong> due before final website launch</li>
                  <li>Secure credit card payment via Stripe</li>
                  <li>Automatic invoice provided after each payment</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Refund Policy</h2>
                <p>
                  The deposit is non-refundable once the project has started. In case of cancellation before work begins, 
                  a full refund of the deposit will be processed within 7 business days.
                </p>
                <p className="mt-4">
                  If NLG Consulting cannot deliver the project within the agreed timeframe (excluding force majeure or client-caused delays), 
                  a full refund will be offered.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Source Code Ownership</h2>
                <p>
                  The client becomes <strong>100% owner of the source code</strong> of their website after full payment. 
                  The source code is systematically provided upon final delivery.
                </p>
                <p className="mt-4">
                  The client is free to use, modify, host, or transfer their website as they wish, without any technical dependency on NLG Consulting.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Responsibilities</h2>
                <p>
                  The client is responsible for providing the necessary project materials (text, images, logos) and for approving the various stages. 
                  NLG Consulting commits to meeting announced deadlines and delivering a website that meets agreed specifications.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact</h2>
                <p>
                  For any questions regarding these terms and conditions, you can contact us via{" "}
                  <a 
                    href="https://nlgconsulting.co/contact" 
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    our contact page
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </main>
        <WebFooter />
      </div>
    </>
  );
};

export default WebTerms;
