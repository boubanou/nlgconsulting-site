import { lazy, Suspense, useEffect, useState } from "react";

const LeadPopup = lazy(() =>
  import("./LeadPopup").then((module) => ({ default: module.LeadPopup })),
);
const GregoChatbot = lazy(() => import("./GregoChatbot"));

const DeferredEngagement = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    let idleId: number | undefined;

    const activate = () => setReady(true);

    window.addEventListener("pointerdown", activate, { once: true, passive: true });
    window.addEventListener("keydown", activate, { once: true });

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(activate, { timeout: 2500 });
    } else {
      timer = window.setTimeout(activate, 2000);
    }

    return () => {
      window.removeEventListener("pointerdown", activate);
      window.removeEventListener("keydown", activate);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <LeadPopup />
      <GregoChatbot />
    </Suspense>
  );
};

export default DeferredEngagement;
