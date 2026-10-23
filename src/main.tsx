import { useEffect } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
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

// Pages prerendered at build time already contain the React markup: hydrate it in place
// (no duplicate content, no blank flash). Otherwise render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
