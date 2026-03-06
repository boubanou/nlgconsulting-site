import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { CookieConsent } from "./components/CookieConsent";
import { LeadPopup } from "./components/LeadPopup";
import GregoChatbot from "./components/GregoChatbot";
import { LanguageRedirectHandler } from "./components/LanguageRedirectHandler";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const AboutNLG = lazy(() => import("./pages/AboutNLG"));
const Ventures = lazy(() => import("./pages/Ventures"));
const Sales = lazy(() => import("./pages/Sales"));
const Advisory = lazy(() => import("./pages/Advisory"));

// AI Cluster Hub Pages
const AIConsulting = lazy(() => import("./pages/AIConsulting"));
const AIAutomation = lazy(() => import("./pages/AIAutomation"));
const AIAgentsForBusiness = lazy(() => import("./pages/AIAgentsForBusiness"));
const AIMarketingAutomation = lazy(() => import("./pages/AIMarketingAutomation"));
const AISalesAutomationPage = lazy(() => import("./pages/AISalesAutomationPage"));
const PromptEngineeringConsulting = lazy(() => import("./pages/PromptEngineeringConsulting"));
const OutsourcedAIImplementation = lazy(() => import("./pages/OutsourcedAIImplementation"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Book = lazy(() => import("./pages/Book"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Auth = lazy(() => import("./pages/Auth"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminLeads = lazy(() => import("./pages/AdminLeads"));
const AdminMeetings = lazy(() => import("./pages/AdminMeetings"));
const AdminCallbacks = lazy(() => import("./pages/AdminCallbacks"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const AccessDenied = lazy(() => import("./pages/AccessDenied"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Service Pages
const Services = lazy(() => import("./pages/Services"));
const AILeadGeneration = lazy(() => import("./pages/AILeadGeneration"));
const SaaSMonetization = lazy(() => import("./pages/SaaSMonetization"));
const GoToMarket = lazy(() => import("./pages/GoToMarket"));
const PropTechConsulting = lazy(() => import("./pages/PropTechConsulting"));
const WebLanding = lazy(() => import("./pages/WebLanding"));
const WebTerms = lazy(() => import("./pages/WebTerms"));
const WebThankYou = lazy(() => import("./pages/WebThankYou"));
const Marketing = lazy(() => import("./pages/Marketing"));

// SEO Landing Pages - English
const OutsourcedSDR = lazy(() => import("./pages/OutsourcedSDR"));
const B2BLeadGenerationAgency = lazy(() => import("./pages/B2BLeadGenerationAgency"));
const AppointmentSetting = lazy(() => import("./pages/AppointmentSetting"));
const GoToMarketConsulting = lazy(() => import("./pages/GoToMarketConsulting"));
const WebsiteIn72Hours = lazy(() => import("./pages/WebsiteIn72Hours"));
const PropTechLeadGeneration = lazy(() => import("./pages/PropTechLeadGeneration"));
const FinTechLeadGeneration = lazy(() => import("./pages/FinTechLeadGeneration"));
const AISalesOutreach = lazy(() => import("./pages/AISalesOutreach"));

// SEO Landing Pages - French
const SDRExternaliseFR = lazy(() => import("./pages/fr/SDRExternaliseFR"));
const AgenceLeadGenerationFR = lazy(() => import("./pages/fr/AgenceLeadGenerationFR"));
const PriseRendezVousFR = lazy(() => import("./pages/fr/PriseRendezVousFR"));
const SiteWebEn72hFR = lazy(() => import("./pages/fr/SiteWebEn72hFR"));

// French Pages
const HomeFR = lazy(() => import("./pages/fr/HomeFR"));
const AboutFR = lazy(() => import("./pages/fr/AboutFR"));
const SalesFR = lazy(() => import("./pages/fr/SalesFR"));
const AdvisoryFR = lazy(() => import("./pages/fr/AdvisoryFR"));
const VenturesFR = lazy(() => import("./pages/fr/VenturesFR"));
const ContactFR = lazy(() => import("./pages/fr/ContactFR"));
const BookFR = lazy(() => import("./pages/fr/BookFR"));
const WebLandingFR = lazy(() => import("./pages/fr/WebLandingFR"));
const PrivacyPolicyFR = lazy(() => import("./pages/fr/PrivacyPolicyFR"));
const MarketingFR = lazy(() => import("./pages/fr/MarketingFR"));
const ServicesFR = lazy(() => import("./pages/fr/ServicesFR"));
const AILeadGenerationFR = lazy(() => import("./pages/fr/AILeadGenerationFR"));
const SaaSMonetizationFR = lazy(() => import("./pages/fr/SaaSMonetizationFR"));
const GoToMarketFR = lazy(() => import("./pages/fr/GoToMarketFR"));
const PropTechConsultingFR = lazy(() => import("./pages/fr/PropTechConsultingFR"));

// French AI Hub Pages
const ConseilIAFR = lazy(() => import("./pages/fr/ConseilIAFR"));
const AutomationIAFR = lazy(() => import("./pages/fr/AutomationIAFR"));
const AgentsIAFR = lazy(() => import("./pages/fr/AgentsIAFR"));
const AutomationMarketingIAFR = lazy(() => import("./pages/fr/AutomationMarketingIAFR"));
const AutomationCommercialeIAFR = lazy(() => import("./pages/fr/AutomationCommercialeIAFR"));
const ConseilPromptEngineeringFR = lazy(() => import("./pages/fr/ConseilPromptEngineeringFR"));
const ImplementationIAFR = lazy(() => import("./pages/fr/ImplementationIAFR"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
    },
  },
});

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <CookieConsent />
      <LeadPopup />
      <GregoChatbot />
      <ScrollToTop />
      <LanguageRedirectHandler />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutNLG />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<Book />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/leads" element={<AdminLeads />} />
          <Route path="/admin/meetings" element={<AdminMeetings />} />
          <Route path="/admin/callbacks" element={<AdminCallbacks />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          
          {/* Service Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/ai-lead-generation" element={<AILeadGeneration />} />
          <Route path="/saas-monetization" element={<SaaSMonetization />} />
          <Route path="/go-to-market" element={<GoToMarket />} />
          <Route path="/proptech-consulting" element={<PropTechConsulting />} />
          <Route path="/web" element={<WebLanding />} />
          <Route path="/web/terms" element={<WebTerms />} />
          <Route path="/web/thank-you" element={<WebThankYou />} />
          <Route path="/marketing" element={<Marketing />} />
          
          {/* French Pages */}
          <Route path="/fr" element={<HomeFR />} />
          <Route path="/fr/a-propos" element={<AboutFR />} />
          <Route path="/fr/vente" element={<SalesFR />} />
          <Route path="/fr/conseil" element={<AdvisoryFR />} />
          <Route path="/fr/ventures" element={<VenturesFR />} />
          <Route path="/fr/contact" element={<ContactFR />} />
          <Route path="/fr/rendez-vous" element={<BookFR />} />
          <Route path="/fr/site-internet" element={<WebLandingFR />} />
          <Route path="/fr/politique-confidentialite" element={<PrivacyPolicyFR />} />
          <Route path="/fr/marketing" element={<MarketingFR />} />
          <Route path="/fr/services" element={<ServicesFR />} />
          <Route path="/fr/generation-leads-ia" element={<AILeadGenerationFR />} />
          <Route path="/fr/monetisation-saas" element={<SaaSMonetizationFR />} />
          <Route path="/fr/strategie-go-to-market" element={<GoToMarketFR />} />
          <Route path="/fr/conseil-proptech" element={<PropTechConsultingFR />} />
          
          {/* French AI Hub Pages */}
          <Route path="/fr/conseil-ia" element={<ConseilIAFR />} />
          <Route path="/fr/automation-ia" element={<AutomationIAFR />} />
          <Route path="/fr/agents-ia-entreprise" element={<AgentsIAFR />} />
          <Route path="/fr/automation-marketing-ia" element={<AutomationMarketingIAFR />} />
          <Route path="/fr/automation-commerciale-ia" element={<AutomationCommercialeIAFR />} />
          <Route path="/fr/conseil-prompt-engineering" element={<ConseilPromptEngineeringFR />} />
          <Route path="/fr/implementation-ia-externalisee" element={<ImplementationIAFR />} />
          
          {/* AI Cluster Hub Pages */}
          <Route path="/ai-consulting" element={<AIConsulting />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/ai-agents-for-business" element={<AIAgentsForBusiness />} />
          <Route path="/ai-marketing-automation" element={<AIMarketingAutomation />} />
          <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
          <Route path="/prompt-engineering-consulting" element={<PromptEngineeringConsulting />} />
          <Route path="/outsourced-ai-implementation" element={<OutsourcedAIImplementation />} />

          {/* SEO Landing Pages - English */}
          <Route path="/outsourced-sdr" element={<OutsourcedSDR />} />
          <Route path="/b2b-lead-generation-agency" element={<B2BLeadGenerationAgency />} />
          <Route path="/appointment-setting" element={<AppointmentSetting />} />
          <Route path="/go-to-market-consulting" element={<GoToMarketConsulting />} />
          <Route path="/website-in-72-hours" element={<WebsiteIn72Hours />} />
          <Route path="/proptech-lead-generation" element={<PropTechLeadGeneration />} />
          <Route path="/fintech-lead-generation" element={<FinTechLeadGeneration />} />
          <Route path="/ai-sales-outreach" element={<AISalesOutreach />} />
          
          {/* SEO Landing Pages - French */}
          <Route path="/fr/sdr-externalise" element={<SDRExternaliseFR />} />
          <Route path="/fr/agence-lead-generation-b2b" element={<AgenceLeadGenerationFR />} />
          <Route path="/fr/prise-de-rendez-vous-b2b" element={<PriseRendezVousFR />} />
          <Route path="/fr/site-web-en-72h" element={<SiteWebEn72hFR />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
