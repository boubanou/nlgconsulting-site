// One-shot production build.
// Some browser-oriented modules imported during SSR create idle timers which can
// keep the Node event loop alive long after Vite has completed. Once Vite's
// awaited build() resolves, all output files and plugin hooks are finished.
import { build } from "vite";

try {
  await build();
  // Exit explicitly so background auth/analytics timers do not add minutes
  // to the CI and deployment build wall clock time.
  process.exit(0);
} catch (error) {
  console.error("[nlg-build] Vite build failed:", error);
  process.exit(1);
}
