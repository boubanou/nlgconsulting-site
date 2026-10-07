import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LeadPopupImpl = lazy(() =>
  import("./LeadPopupImpl").then((module) => ({ default: module.LeadPopup })),
);

export const LeadPopup = () => {
  const [ready, setReady] = useState(false);
  const location = useLocation();
  const isVoiceHomepage = location.pathname === "/" || location.pathname === "/fr";

  useEffect(() => {
    const activate = () => setReady(true);
    const timer = window.setTimeout(activate, 2500);

    window.addEventListener("pointerdown", activate, { once: true, passive: true });
    window.addEventListener("keydown", activate, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", activate);
      window.removeEventListener("keydown", activate);
    };
  }, []);

  if (!ready || isVoiceHomepage) return null;

  return (
    <Suspense fallback={null}>
      <LeadPopupImpl />
    </Suspense>
  );
};
