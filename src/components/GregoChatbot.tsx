import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GregoChatbotImpl = lazy(() => import("./GregoChatbotImpl"));

const GregoChatbot = () => {
  const [ready, setReady] = useState(false);
  const location = useLocation();
  const isVoiceHomepage = location.pathname === "/" || location.pathname === "/fr";

  useEffect(() => {
    const activate = () => setReady(true);
    const timer = window.setTimeout(activate, 3000);

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
      <GregoChatbotImpl />
    </Suspense>
  );
};

export default GregoChatbot;
