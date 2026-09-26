import { lazy, Suspense, useEffect, useState } from "react";

const GregoChatbotImpl = lazy(() => import("./GregoChatbotImpl"));

const GregoChatbot = () => {
  const [ready, setReady] = useState(false);

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

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <GregoChatbotImpl />
    </Suspense>
  );
};

export default GregoChatbot;
