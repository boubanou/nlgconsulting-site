import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./content/register-commercial-insights";
import App from "./App.tsx";
import RootErrorBoundary from "./components/RootErrorBoundary";
import "./index.css";

// Keep static prerender content visible until React has successfully committed once.
// This prevents a blank page if the main bundle fails before React mounts.
const ReactReady = () => {
  useEffect(() => {
    document.querySelectorAll('[data-seo-prerender="true"], [data-commercial-insights="true"]')
      .forEach((node) => node.setAttribute("hidden", ""));
  }, []);

  return null;
};

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ReactReady />
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </HelmetProvider>
);
