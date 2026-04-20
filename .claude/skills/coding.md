# Coding Skills & Conventions

## Component Pattern

All section components follow this structure:

```tsx
"use client";
import { motion } from "framer-motion";

export default function SectionName() {
  return (
    <section id="section-id" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* content */}
        </motion.div>
      </div>
    </section>
  );
}
```

## Classname Utility

Always use `cn()` for conditional or merged classnames:

```ts
import { cn } from "@/lib/utils";
className={cn("base-classes", condition && "conditional-class")}
```

## TypeScript Notes

- Framer Motion `ease` must be typed as `Easing` — use `import { type Easing } from "framer-motion"` and assign before use.
- All form event handlers need explicit `React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>` types.

## Node / npm on Windows

Always prefix npm commands in bash:
```bash
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd <command>
```
