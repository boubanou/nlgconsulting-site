// Build-time only: renders a route to static HTML so crawlers and no-JS visitors
// receive the same content React shows. The tree mirrors main.tsx so the client can hydrate it.
import { renderToPipeableStream } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Writable } from "node:stream";
import "./content/register-commercial-insights";
import App from "./App";
import RootErrorBoundary from "./components/RootErrorBoundary";

// Mirrors <ReactReady /> in main.tsx so hydration sees the same tree shape.
const ReactReadyPlaceholder = () => null;

export function renderRoute(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    let failed: unknown = null;
    let settled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const finish = (error?: unknown) => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      if (error) reject(error);
      else resolve(html);
    };
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
      final(cb) {
        cb();
        finish(failed || undefined);
      },
    });
    const stream = renderToPipeableStream(
      <HelmetProvider context={{}}>
        <ReactReadyPlaceholder />
        <RootErrorBoundary>
          <App ssrLocation={url} />
        </RootErrorBoundary>
      </HelmetProvider>,
      {
        onAllReady() {
          stream.pipe(sink);
        },
        onShellError(err) {
          finish(err);
        },
        onError(err) {
          failed = err;
        },
      },
    );
    timer = setTimeout(() => {
      stream.abort();
      finish(new Error(`SSR timeout for ${url}`));
    }, 15000);
  });
}
