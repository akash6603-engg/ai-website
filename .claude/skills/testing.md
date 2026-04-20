# Testing

## Current State

No test suite is configured yet. The build pipeline runs TypeScript type checking (`tsc --noEmit`) and ESLint as the only automated quality checks.

## Running Checks

```bash
# Type check
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run build

# Lint
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run lint
```

## When to Add Tests

Add tests when:
- A contact form API route is created (`app/api/contact/route.ts`)
- Any data-fetching or business logic is added
- A reusable utility beyond `cn()` is introduced

## Recommended Stack (when needed)

- **Unit/integration**: Vitest + React Testing Library
- **E2E**: Playwright (works well with Next.js static export)
