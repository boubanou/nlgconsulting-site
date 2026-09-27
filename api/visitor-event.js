const ALLOWED_ORIGINS = new Set([
  'https://www.nlgconsulting.co',
  'https://nlgconsulting.co',
  'https://www.block-tech.co',
  'https://block-tech.co',
  'https://www.fractionalpropertyhub.com',
  'https://fractionalpropertyhub.com',
]);

function setCors(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  setCors(req, res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.has(origin)) return res.status(403).json({ error: 'origin_not_allowed' });

  const payload = req.body || {};
  const allowedSites = new Set(['nlg', 'blocktech', 'fph']);
  if (!payload.visitor_id || !payload.session_id || !allowedSites.has(payload.site)) {
    return res.status(400).json({ error: 'invalid_payload' });
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!supabaseUrl || !supabaseKey) return res.status(503).json({ error: 'analytics_backend_not_configured' });

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/ingest_visitor_event`, {
      method: 'POST',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ payload }),
    });
    if (!response.ok) {
      const detail = await response.text();
      console.error('visitor-event ingest failed', response.status, detail);
      return res.status(502).json({ error: 'ingest_failed' });
    }
    return res.status(204).end();
  } catch (error) {
    console.error('visitor-event endpoint error', error);
    return res.status(500).json({ error: 'internal_error' });
  }
}
