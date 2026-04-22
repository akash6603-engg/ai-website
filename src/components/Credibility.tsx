"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 40, suffix: "+", label: "Brands Served" },
  { value: 60, suffix: "+", label: "Automations Delivered" },
  { value: 3, suffix: "+", label: "Years of AI Experience" },
  { value: 4.9, suffix: "", label: "Average Client Rating" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: null, display: "US · UK · EU", label: "Primary Markets" },
];

function CountUp({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Credibility() {
  return (
    <section className="py-16 px-6 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-400 uppercase tracking-widest font-medium mb-10"
        >
          Our Track Record
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-black text-gray-900">
                {s.value !== null ? (
                  <CountUp
                    target={s.value}
                    suffix={s.suffix}
                    decimals={Number.isInteger(s.value) ? 0 : 1}
                  />
                ) : (
                  s.display
                )}
              </div>
              <div className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
