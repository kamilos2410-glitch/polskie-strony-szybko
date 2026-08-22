// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Static export: skip the Nitro server build outside Lovable so TanStack Start
  // emits its own node preview server that the prerenderer can crawl.
  nitro: process.env["LOVABLE_NITRO_PRESET"] ? undefined : false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/demo/hydro-perfekt", prerender: { enabled: true } },
      { path: "/demo/autoserwis-kowalski", prerender: { enabled: true } },
      { path: "/demo/dachpol", prerender: { enabled: true } },
    ],
  },
});
