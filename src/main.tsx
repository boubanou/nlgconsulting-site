import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./content/register-commercial-insights";
import App from "./App.tsx";
import RootErrorBoundary from "./components/RootErrorBoundary";
import "./index.css";

// Hide any lightweight static fallback once React has committed (pages without build-time React markup).
const ReactReady = () => {
  useEffect(() => {
    document.querySelectorAll('[data-seo-prerender="true"], [data-commercial-insights="true"]')
      .forEach((node) => node.setAttribute("hidden", ""));
  }, []);

  return null;
};

const container = document.getElementById("root")!;
const tree = (
  <HelmetProvider>
    <ReactReady />
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </HelmetProvider>
);

// The build emits the actual page HTML for crawlers and no-JS visitors.
// Browser and server rendering environments are not yet identical for all
// interactive widgets, especially the French home page. Hydrating this markup
// leads to React 418/422/425 errors and a full client-render fallback.
// Mount React normally rather than attempting unsafe hydration: createRoot
// replaces the initial content on commit, and never leaves duplicate H1s.
createRoot(container).render(tree);
