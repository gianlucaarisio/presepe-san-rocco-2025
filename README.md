# template-ssr-react-ts

A minimal server-side rendered (SSR) React + Vite + TypeScript starter template. Provides a fast dev loop with Vite and a simple Node server entry for prerendering React on the server.

## Features

- Vite-powered dev server and build
- React + TypeScript
- Separate client & server entry points for SSR
- Minimal server wrapper for production preview
- Example routing and hydration

## Prerequisites

- Node.js 18+ (recommended)
- npm, yarn, or pnpm

## Quickstart

1. Install dependencies

   - npm: npm install
   - yarn: yarn
   - pnpm: pnpm install

2. Development (fast HMR)

   - npm run dev

3. Build for production

   - npm run build

4. Preview production build (starts the SSR server)
   - npm run preview

Note: Preview command runs the compiled server entry. Adjust the path in package.json if your server entry differs.

## Recommended package.json scripts

(Adjust names/paths to match the template)

- "dev": starts Vite dev server
- "build": builds client and SSR server bundles
- "preview": runs the production server from the built output
- "typecheck": runs TypeScript type checks
- "lint": runs linters

Example:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && vite build --ssr src/entry-server.tsx",
    "preview": "node dist/server/entry-server.js",
    "typecheck": "tsc --noEmit",
    "lint": "eslint . --ext .ts,.tsx"
  }
}
```

## Project structure (typical)

- src/
  - client/entry-client.tsx — client hydration entry
  - server/entry-server.tsx — SSR server entry
  - app/ — shared app code (routes, components)
  - index.html — Vite HTML template
- server.js / server.ts — lightweight production server (optional)
- vite.config.ts
- tsconfig.json
- package.json

## Environment

Common env vars:

- PORT — server listen port (default 3000)
- NODE_ENV — development|production

Keep secrets out of the repo and provide .env.example if needed.

## Deployment

- Build artifacts: client (dist/client) and server (dist/server or SSR bundle)
- Deploy Node server to any Node-compatible host (VPS, Docker, serverless with adaptation)
- For static hosting of pre-rendered pages, export static HTML during build (requires additional setup)

## Tips

- Use React Router or your preferred router that supports SSR patterns
- Ensure data fetching can run on the server (avoid browser-only APIs)
- Keep build targets and polyfills aligned with your deployment targets

## Contributing

PRs and issues welcome. Keep changes small and document breaking changes.

## License

Choose a license (e.g. MIT) and add LICENSE file.

This README is a concise starting point — adapt commands and paths to match the actual template implementation.
