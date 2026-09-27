const ENDPOINT = '/api/visitor-event';
const SITE = 'nlg';
const VISITOR_KEY = 'nlg_visitor_id_v1';
const SESSION_KEY = 'nlg_session_id_v1';
const FIRST_TOUCH_KEY = 'nlg_first_touch_v1';
const CONSENT_KEY = 'nlgconsent-v2';

export type VisitorIdentity = {
  email?: string;
  name?: string;
  company?: string;
  phone?: string;
};

type FirstTouch = {
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
};

const uuid = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export function hasVisitorAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const value = JSON.parse(raw);
    return value?.analytics === true;
  } catch {
    return false;
  }
}

function getVisitorId() {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = uuid();
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

function getSessionId() {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = uuid();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function getFirstTouch(): FirstTouch {
  const existing = localStorage.getItem(FIRST_TOUCH_KEY);
  if (existing) {
    try { return JSON.parse(existing); } catch { /* regenerate */ }
  }
  const params = new URLSearchParams(window.location.search);
  const value: FirstTouch = {
    referrer: document.referrer || '',
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
  };
  localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(value));
  return value;
}

export function scorePath(path: string): number {
  if (/\/(contact|book|rendez-vous)$/.test(path)) return 25;
  if (/automation-(crm|relances-commerciales)|crm-automation|automate-sales-follow-up/.test(path)) return 12;
  if (/audit-ia-pme|ai-audit-for-smes|prix-automatisation-ia|ai-automation-cost/.test(path)) return 10;
  if (/ai-automation|automation-ia|ai-sales-automation|automation-commerciale-ia/.test(path)) return 8;
  if (/outsourced-sdr|sdr-externalise|lead-generation|generation-leads/.test(path)) return 7;
  if (/services|conseil-ia|ai-consulting|marketing|sales|vente/.test(path)) return 5;
  if (/insights|ressources/.test(path)) return 3;
  return 1;
}

export async function trackVisitorEvent(eventName: string, properties: Record<string, unknown> = {}, scoreDelta?: number) {
  if (typeof window === 'undefined' || !hasVisitorAnalyticsConsent()) return;
  const first = getFirstTouch();
  const payload = {
    visitor_id: getVisitorId(),
    session_id: getSessionId(),
    site: SITE,
    event_name: eventName,
    path: window.location.pathname + window.location.search,
    page_title: document.title,
    referrer: document.referrer || first.referrer,
    ...first,
    score_delta: scoreDelta ?? (eventName === 'page_view' ? scorePath(window.location.pathname) : 0),
    user_agent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    properties,
  };

  try {
    await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: 'omit',
    });
  } catch {
    // Analytics must never affect the user experience.
  }
}

export function identifyVisitor(identity: VisitorIdentity) {
  return trackVisitorEvent('identify', {}, 15).then(async () => {
    if (!hasVisitorAnalyticsConsent()) return;
    const first = getFirstTouch();
    const payload = {
      visitor_id: getVisitorId(),
      session_id: getSessionId(),
      site: SITE,
      event_name: 'identity_update',
      path: window.location.pathname,
      page_title: document.title,
      referrer: document.referrer || first.referrer,
      ...first,
      score_delta: 0,
      ...identity,
      properties: {},
    };
    try {
      await fetch(ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload), keepalive: true, credentials: 'omit'
      });
    } catch { /* no-op */ }
  });
}
