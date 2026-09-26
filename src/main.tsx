import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./content/register-commercial-insights";
import App from "./App.tsx";
import "./index.css";

// Static SEO content is present in the initial HTML for crawlers and removed before React mounts.
document.querySelector('[data-seo-prerender="true"]')?.remove();
document.querySelector('[data-commercial-insights="true"]')?.remove();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
