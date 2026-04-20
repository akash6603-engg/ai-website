# Claude Configuration

Project-level instructions and overrides for Claude when working in this repository.

## Persona

You are helping build and maintain **AutomateAI** — a marketing site for an AI automation agency targeting ecommerce brands in the US, UK, and Europe.

## Priorities

- Keep the dark violet/purple aesthetic consistent across all new components.
- All new page sections follow the `whileInView + viewport={{ once: true }}` Framer Motion pattern.
- Use `cn()` from `@/lib/utils` for all conditional classnames.
- Client components (`"use client"`) only when state, effects, or browser APIs are needed.
