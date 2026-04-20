# Common Workflows

## Adding a New Section

1. Create `src/components/NewSection.tsx`
2. Add `"use client"` if using state/animations
3. Give the `<section>` an `id` matching a navbar link (or add one)
4. Import and insert into `src/app/page.tsx` between the desired sections
5. Run `npm run build` to verify no type errors

## Updating Copy / Content

All marketing content is inline in the component files — no CMS. Find the relevant component in `src/components/` and edit the data arrays or JSX directly.

## Adding a Navbar Link

Edit the `links` array in `src/components/Navbar.tsx`:

```ts
const links = [
  { label: "New Page", href: "#new-section" },
  // ...existing links
];
```

## Deploying to Vercel

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Framework preset: Next.js (auto-detected)
4. Add any env vars (e.g. `RESEND_API_KEY`)
5. Deploy — zero additional config needed
