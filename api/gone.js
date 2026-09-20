export default function handler(req, res) {
  res.status(410).setHeader("Content-Type", "text/html; charset=utf-8");
  res.send("<!doctype html><html><head><title>410 Gone</title><meta name=\"robots\" content=\"noindex\"></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>");
}
