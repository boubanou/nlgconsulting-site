import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { CookieConsent } from "./components/CookieConsent";
import { LeadPopup } from "./components/LeadPopup";
import GregoChatbot from "./components/GregoChatbot";

// Lazy load pages for code splitting and better performance
const Home = lazy(() => import("./pages/Home"));
const AboutNLG = lazy(() => import("./pages/AboutNLG"));
const Ventures = lazy(() => import("./pages/Ventures"));
const Sales = lazy(() => import("./pages/Sales"));
const Advisory = lazy(() => import("./pages/Advisory"));
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

// Web Landing Pages (Studio)
const WebLanding = lazy(() => import("./pages/WebLanding"));
const WebTerms = lazy(() => import("./pages/WebTerms"));
const WebThankYou = lazy(() => import("./pages/WebThankYou"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Loading fallback component
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
          
          {/* Web Landing Pages (web.nlgconsulting.co) */}
          <Route path="/web" element={<WebLanding />} />
          <Route path="/web/terms" element={<WebTerms />} />
          <Route path="/web/thank-you" element={<WebThankYou />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
