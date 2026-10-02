# Climbit — React assignment website

Climbit is a Vite + React presentation site for the high-altitude safety assignment.

## Run locally

```bash
npm install
npm run dev
```

If dependencies are already installed but Vite or Tailwind cannot be resolved, reset the install:

```bash
rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `/` — overview + problem story
- `/how-it-works` — risk engine, contextual scoring, agentic flow and data flywheel
- `/business` — B2B2C model, persona, competitive landscape and moats
- `/journey` — interactive trek journey, risk states and governance
- `/appendix` — project development, AI use and reflection

The site is React/Vite only. There is no Next.js and no Three.js/WebGL dependency in the application code.
