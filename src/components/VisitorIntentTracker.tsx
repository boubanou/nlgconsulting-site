import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { hasVisitorAnalyticsConsent, trackVisitorEvent } from '@/lib/visitorIntent';

export const VisitorIntentTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (!hasVisitorAnalyticsConsent()) return;
    trackVisitorEvent('page_view', {
      pathname: location.pathname,
      search: location.search,
    });
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleConsent = () => {
      if (hasVisitorAnalyticsConsent()) {
        trackVisitorEvent('page_view', { consent_activated: true });
      }
    };
    window.addEventListener('visitor-consent-change', handleConsent);
    return () => window.removeEventListener('visitor-consent-change', handleConsent);
  }, []);

  return null;
};
