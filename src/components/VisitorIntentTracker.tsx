import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { hasVisitorAnalyticsConsent, identifyVisitor, trackVisitorEvent } from '@/lib/visitorIntent';

function readSubmittedIdentity(form: HTMLFormElement) {
  const data = new FormData(form);
  const get = (...names: string[]) => {
    for (const name of names) {
      const value = data.get(name);
      if (typeof value === 'string' && value.trim()) return value.trim().slice(0, 300);
    }
    return undefined;
  };

  return {
    email: get('email', 'work_email', 'business_email'),
    name: get('name', 'full_name', 'fullname', 'first_name'),
    company: get('company', 'company_name', 'organization', 'organisation'),
    phone: get('phone', 'telephone', 'tel'),
  };
}

export const VisitorIntentTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (!hasVisitorAnalyticsConsent()) return;
    trackVisitorEvent('page_view', { pathname: location.pathname });
  }, [location.pathname]);

  useEffect(() => {
    const handleConsent = () => {
      if (hasVisitorAnalyticsConsent()) {
        trackVisitorEvent('page_view', { consent_activated: true });
      }
    };

    const handleSubmit = (event: SubmitEvent) => {
      if (!hasVisitorAnalyticsConsent()) return;
      const form = event.target instanceof HTMLFormElement ? event.target : null;
      if (!form) return;
      const identity = readSubmittedIdentity(form);
      const fields = Object.entries(identity).filter(([, value]) => value).map(([key]) => key);
      trackVisitorEvent('form_submit', { form_id: form.id || undefined, identity_fields: fields }, 20);
      if (identity.email || identity.phone) identifyVisitor(identity);
    };

    window.addEventListener('visitor-consent-change', handleConsent);
    document.addEventListener('submit', handleSubmit, true);
    return () => {
      window.removeEventListener('visitor-consent-change', handleConsent);
      document.removeEventListener('submit', handleSubmit, true);
    };
  }, []);

  return null;
};
