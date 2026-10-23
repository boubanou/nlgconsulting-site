// Loads src/entry-server.tsx through Vite's SSR pipeline (same aliases/plugins as the app)
// and renders a list of routes to HTML strings. Used by the build plugin and tests.
import { createServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

function installBrowserShims() {
  const g = globalThis as any;
  const memory = new Map<string, string>();
  const storage = {
    getItem: (k: string) => (memory.has(k) ? memory.get(k)! : null),
    setItem: (k: string, v: string) => void memory.set(k, String(v)),
    removeItem: (k: string) => void memory.delete(k),
    clear: () => memory.clear(),
    key: () => null,
    length: 0,
  };
  if (!g.localStorage) g.localStorage = storage;
  if (!g.sessionStorage) g.sessionStorage = storage;
}

export async function renderRoutes(urls: string[]): Promise<Map<string, string | Error>> {
  installBrowserShims();
  const root = process.cwd();
  const server = await createServer({
    configFile: false,
    root,
    logLevel: "error",
    appType: "custom",
    server: { middlewareMode: true, hmr: false, watch: null },
    plugins: [react()],
    resolve: { alias: { "@": path.resolve(root, "src") }, dedupe: ["react", "react-dom"] },
    ssr: { noExternal: ["react-helmet-async", "react-router-dom", "react-router"] },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  const results = new Map<string, string | Error>();
  try {
    const mod = await server.ssrLoadModule("/src/entry-server.tsx");
    for (const url of urls) {
      try {
        results.set(url, await mod.renderRoute(url));
      } catch (err) {
        results.set(url, err instanceof Error ? err : new Error(String(err)));
      }
    }
  } finally {
    await server.close();
  }
  return results;
}
