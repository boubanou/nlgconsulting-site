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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy & Legal Notice</h1>
            <p className="text-xl text-muted-foreground mb-2">NLG Consulting — Global Business, Tech & Growth Group</p>
            
            <p className="text-sm text-muted-foreground mb-8 border-b border-border pb-4">
              Effective Date: January 1, 2024 | Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="mb-8 text-muted-foreground">
              NLG Consulting ("we", "us", or "our") is committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy applies to all services offered through our website (nlgconsulting.co) and related platforms.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Company Information</h2>
              <div className="bg-muted/50 rounded-lg p-6 not-prose">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Legal Entity</p>
                    <p className="font-medium">NLG Consulting</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Founder & Publisher</p>
                    <p className="font-medium">Gregory Brenig</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Registered Address</p>
                    <p className="font-medium">Hahermon 21, Tel Aviv, Israel</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Contact Email</p>
                    <p className="font-medium">greg@nlgconsulting.co</p>
                  </div>
                </div>
              </div>
              <p className="mt-4">
                NLG Consulting is a global consulting firm specializing in B2B lead generation, sales development, strategic advisory, and digital solutions for businesses worldwide.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. Hosting & Infrastructure</h2>
              <p className="mb-4">Our website and services are hosted on secure, enterprise-grade infrastructure:</p>
              <ul>
                <li><strong>Website Hosting:</strong> Vercel Inc., San Francisco, California, USA</li>
                <li><strong>Database & Backend:</strong> Supabase (PostgreSQL), with data centers in the European Union</li>
                <li><strong>CDN & Edge Network:</strong> Global content delivery for optimal performance</li>
              </ul>
              <p className="mt-4">
                All data transfers between your browser and our servers are encrypted using TLS 1.3 (Transport Layer Security).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. Data Collection & Processing</h2>
              <p className="mb-4">We collect and process personal data only when necessary to provide our services. Here's what we collect and why:</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">3.1 Information You Provide</h3>
              <ul>
                <li><strong>Contact Forms:</strong> Name, email address, phone number, company name, and message content</li>
                <li><strong>Meeting Bookings:</strong> Name, email, preferred dates/times, and consultation topics</li>
                <li><strong>Newsletter Subscriptions:</strong> Email address and communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">3.2 Information Collected Automatically</h3>
              <ul>
                <li><strong>Device Information:</strong> Browser type, operating system, screen resolution</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns (anonymized)</li>
                <li><strong>IP Address:</strong> Used for security and approximate geolocation (country-level)</li>
              </ul>

              <h3 className="text-xl font-medium mt-6 mb-3">3.3 Legal Basis for Processing (GDPR)</h3>
              <p>We process your data based on:</p>
              <ul>
                <li><strong>Consent:</strong> When you submit forms or accept cookies</li>
                <li><strong>Contractual Necessity:</strong> To deliver services you've requested</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and communicate relevant information</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Data Protection & Security</h2>
              <p className="mb-4">
                NLG Consulting fully complies with the <strong>EU General Data Protection Regulation (GDPR - EU 2016/679)</strong> and applicable international data protection laws.
              </p>
              <p className="mb-4">We implement industry-standard security measures including:</p>
              <ul>
                <li>End-to-end encryption for all data transmissions</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication protocols</li>
                <li>Secure data backup and disaster recovery procedures</li>
                <li>Employee training on data protection best practices</li>
              </ul>
              <p className="mt-4 font-medium">
                We do not sell, rent, or share your personal data with third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights Under GDPR</h2>
              <p className="mb-4">As a data subject, you have the following rights regarding your personal information:</p>
              <div className="grid md:grid-cols-2 gap-4 not-prose">
                {[
                  { right: "Right of Access", desc: "Request a copy of your personal data" },
                  { right: "Right to Rectification", desc: "Correct inaccurate or incomplete data" },
                  { right: "Right to Erasure", desc: "Request deletion of your data ('Right to be Forgotten')" },
                  { right: "Right to Restrict Processing", desc: "Limit how we use your data" },
                  { right: "Right to Data Portability", desc: "Receive your data in a machine-readable format" },
                  { right: "Right to Object", desc: "Object to processing based on legitimate interest" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/30 rounded-lg p-4">
                    <p className="font-medium text-foreground">{item.right}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6">
                To exercise any of these rights, please contact our Data Protection Officer at: <strong>greg@nlgconsulting.co</strong>
              </p>
              <p className="mt-2">
                We will respond to your request within 30 days as required by GDPR.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies & Tracking Technologies</h2>
              <p className="mb-4">We use cookies and similar technologies to enhance your browsing experience:</p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality (no consent needed)</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant content and measure campaign effectiveness</li>
              </ul>

              <p className="mt-4 font-medium">
                No tracking or marketing cookies are enabled without your prior consent.
              </p>
              <p className="mt-2">
                You can manage your cookie preferences at any time through our cookie settings panel or your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
              <p className="mb-4">We use trusted third-party services to operate our business:</p>
              <ul>
                <li><strong>Calendly:</strong> For meeting scheduling and calendar integration</li>
                <li><strong>Google Analytics:</strong> For website analytics (with IP anonymization enabled)</li>
                <li><strong>Stripe:</strong> For secure payment processing</li>
                <li><strong>Email Service Providers:</strong> For transactional and marketing communications</li>
              </ul>
              <p className="mt-4">
                Each third-party service has its own privacy policy and data protection measures. We only work with partners who maintain GDPR compliance.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
              <p className="mb-4">We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:</p>
              <ul>
                <li><strong>Contact Inquiries:</strong> 3 years from last contact</li>
                <li><strong>Client Records:</strong> 7 years for legal and accounting purposes</li>
                <li><strong>Analytics Data:</strong> 26 months (anonymized)</li>
                <li><strong>Marketing Preferences:</strong> Until you unsubscribe or request deletion</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
              <p>
                As a global consulting firm, we may transfer data to countries outside the European Economic Area (EEA). When we do, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
              <p>
                NLG Consulting provides this website and its contents on an "as is" basis. While we strive to ensure accuracy and availability, we do not guarantee uninterrupted access, absence of errors, or the accuracy of all information. Use of our services is at your own discretion and risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law & Jurisdiction</h2>
              <p className="mb-4">
                This Privacy Policy is governed by and construed in accordance with:
              </p>
              <ul>
                <li>The laws of the European Union (including GDPR)</li>
                <li>The laws of the State of Israel</li>
              </ul>
              <p className="mt-4">
                Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts of Tel Aviv, Israel, unless otherwise required by applicable law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a new "Last Updated" date. We encourage you to review this page periodically.
              </p>
            </section>

            <section className="mb-10 bg-primary/5 rounded-lg p-6 not-prose">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Data Protection Officer:</strong> Gregory Brenig</p>
                <p><strong>Email:</strong> greg@nlgconsulting.co</p>
                <p><strong>Address:</strong> Hahermon 21, Tel Aviv, Israel</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                We aim to respond to all inquiries within 48 business hours.
              </p>
            </section>
          </article>
        </div>
      </main>

      <MainFooter />
    </>
  );
};

export default PrivacyPolicy;
