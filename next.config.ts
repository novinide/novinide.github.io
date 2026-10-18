import type { NextConfig } from "next";

// ---------------------------------------------------------------------------
// Dual build modes:
//
// 1. Default (local dev / Node server / Docker):
//      output: "standalone"  →  `npm run build` + `npm start`
//
// 2. GitHub Pages (static hosting):
//      Enabled when DEPLOY_TARGET=pages (set by .github/workflows/deploy.yml)
//      or when running inside GitHub Actions. Produces a fully static site
//      in ./out via `npm run build:pages`.
//
// basePath:
//   Project sites are served from https://<user>.github.io/<repo>/ so Next.js
//   needs basePath = <repo>. User sites (https://<user>.github.io/) need no
//   basePath. The workflow passes NEXT_PUBLIC_BASE_PATH accordingly (empty
//   for user sites), so no manual configuration is required.
// ---------------------------------------------------------------------------

const isPagesExport =
  process.env.DEPLOY_TARGET === "pages" ||
  process.env.GITHUB_ACTIONS === "true";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/^\/+|\/+$/g, "");

const nextConfig: NextConfig = {
  ...(isPagesExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        ...(basePath ? { basePath: `/${basePath}` } : {}),
      }
    : {
        output: "standalone" as const,
      }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
