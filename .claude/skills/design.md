# Design Skills & System

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0f` | Page background |
| Violet accent | `violet-400/500/600` | Primary CTA, icons, highlights |
| Purple gradient | `from-violet-400 via-purple-400 to-indigo-400` | Hero headline |
| Text primary | `white` | Headings |
| Text secondary | `gray-400` | Body copy |
| Text muted | `gray-500/600` | Labels, captions |
| Cards | `white/[0.02]` bg + `white/10` border | Default card surface |

## Section Label Pattern

Every section starts with a small uppercase label above the heading:

```tsx
<span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
  Label Text
</span>
```

## Card Pattern

```tsx
<div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
```

## Glow Effects

Background glows use absolute positioned divs with blur:

```tsx
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-700/20 rounded-full blur-[120px] -z-10" />
```

## Typography Scale

- Hero: `text-5xl md:text-7xl font-bold`
- Section headings: `text-4xl md:text-5xl font-bold`
- Card titles: `text-lg font-semibold`
- Body: `text-sm leading-relaxed text-gray-400`
