import { lazy, Suspense, useEffect, useState } from "react";

const LeadPopupImpl = lazy(() =>
  import("./LeadPopupImpl").then((module) => ({ default: module.LeadPopup })),
);

export const LeadPopup = () => {
  const [ready, setReady] = useState(false);

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

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <LeadPopupImpl />
    </Suspense>
  );
};
