# Code Examples

## Stat Card

```tsx
<div className="text-center p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5">
  <div className="text-4xl font-black text-violet-400 mb-2">68%</div>
  <div className="text-gray-400 text-sm">Reduction in support tickets</div>
</div>
```

## Feature Card with Icon

```tsx
import { Bot } from "lucide-react";

<div className="p-6 rounded-2xl border border-violet-500/20 bg-white/[0.02]">
  <div className="inline-flex p-3 rounded-xl bg-violet-500/10 mb-4">
    <Bot className="text-violet-400" size={22} />
  </div>
  <h3 className="text-white font-semibold text-lg mb-2">Feature Title</h3>
  <p className="text-gray-400 text-sm leading-relaxed">Description here.</p>
</div>
```

## Scroll-Animated Grid

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item, i) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
    >
      {/* card content */}
    </motion.div>
  ))}
</div>
```

## Badge / Pill Tag

```tsx
<span className="px-4 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-sm text-gray-300">
  Tag Label
</span>
```
