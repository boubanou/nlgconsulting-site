// Build-time only: renders a route to static HTML so crawlers and no-JS visitors
// receive the same content React shows. The client (main.tsx) replaces it with createRoot.
import { Suspense } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Writable } from "node:stream";
import "./content/register-commercial-insights";
import { AppRoutes } from "./App";

export function renderRoute(url: string): Promise<string> {
  const queryClient = new QueryClient();
  return new Promise((resolve, reject) => {
    let html = "";
    let failed: unknown = null;
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
      final(cb) {
        cb();
        if (failed) reject(failed);
        else resolve(html);
      },
    });
    const stream = renderToPipeableStream(
      <HelmetProvider context={{}}>
        <QueryClientProvider client={queryClient}>
          <StaticRouter location={url}>
            <Suspense fallback={null}>
              <AppRoutes />
            </Suspense>
          </StaticRouter>
        </QueryClientProvider>
      </HelmetProvider>,
      {
        onAllReady() {
          stream.pipe(sink);
        },
        onShellError(err) {
          reject(err);
        },
        onError(err) {
          failed = err;
        },
      },
    );
    setTimeout(() => {
      stream.abort();
      reject(new Error(`SSR timeout for ${url}`));
    }, 15000);
  });
}
