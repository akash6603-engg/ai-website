"use client";

import { motion } from "framer-motion";

const PATHS = {
  triggerToAi:  "M 110 130 L 180 130",
  aiToCrm:      "M 280 130 C 316 130 316 59 350 59",
  aiToEmail:    "M 280 130 L 350 130",
  aiToSlack:    "M 280 130 C 316 130 316 201 350 201",
};

const nodes = [
  { x: 10,  y: 111, w: 100, color: "#f97316", bg: "#fff7ed", label: "Webhook",  icon: "⚡", pulse: true },
  { x: 180, y: 111, w: 100, color: "#a855f7", bg: "#faf5ff", label: "GPT-4 AI", icon: "🧠", pulse: true },
  { x: 350, y: 40,  w: 120, color: "#3b82f6", bg: "#eff6ff", label: "CRM Update", icon: "📋", pulse: false },
  { x: 350, y: 111, w: 120, color: "#22c55e", bg: "#f0fdf4", label: "Send Email", icon: "✉️", pulse: false },
  { x: 350, y: 182, w: 120, color: "#f43f5e", bg: "#fff1f2", label: "Slack Alert", icon: "💬", pulse: false },
];

const edges = [
  { d: PATHS.triggerToAi, delay: 0 },
  { d: PATHS.aiToCrm,     delay: 0.4 },
  { d: PATHS.aiToEmail,   delay: 0.7 },
  { d: PATHS.aiToSlack,   delay: 1.0 },
];

const packets = [
  { path: PATHS.triggerToAi, dur: "1.6s", begin: "0s",    color: "#f97316" },
  { path: PATHS.aiToCrm,     dur: "1.8s", begin: "0.8s",  color: "#a855f7" },
  { path: PATHS.aiToEmail,   dur: "1.5s", begin: "1.1s",  color: "#a855f7" },
  { path: PATHS.aiToSlack,   dur: "1.9s", begin: "1.4s",  color: "#a855f7" },
];

export default function AIWorkflowAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[500px] select-none"
      aria-hidden="true"
    >
      {/* Live badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="text-xs text-gray-500 font-medium tracking-wide">Live automation running</span>
      </div>

      <svg
        viewBox="0 0 480 260"
        className="w-full h-auto drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes dash-flow {
            to { stroke-dashoffset: -24; }
          }
          .flow-path {
            stroke-dasharray: 6 4;
            animation: dash-flow 1s linear infinite;
          }
          .flow-path-slow {
            stroke-dasharray: 6 4;
            animation: dash-flow 1.4s linear infinite;
          }
        `}</style>

        {/* Base (static) edge lines */}
        {edges.map((e, i) => (
          <motion.path
            key={i}
            d={e.d}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + e.delay, ease: "easeOut" }}
          />
        ))}

        {/* Flowing dashes on top */}
        <path d={PATHS.triggerToAi} fill="none" stroke="#f97316" strokeWidth={2} className="flow-path" strokeOpacity={0.6} />
        <path d={PATHS.aiToCrm}    fill="none" stroke="#a855f7" strokeWidth={2} className="flow-path-slow" strokeOpacity={0.6} />
        <path d={PATHS.aiToEmail}  fill="none" stroke="#a855f7" strokeWidth={2} className="flow-path" strokeOpacity={0.6} />
        <path d={PATHS.aiToSlack}  fill="none" stroke="#a855f7" strokeWidth={2} className="flow-path-slow" strokeOpacity={0.6} />

        {/* Moving data packets */}
        {packets.map((p, i) => (
          <circle key={i} r={4} fill={p.color} opacity={0.9}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <animateMotion dur={p.dur} repeatCount="indefinite" begin={p.begin} path={p.path} calcMode="linear" />
          </circle>
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            {/* Pulsing halo for active nodes */}
            {n.pulse && (
              <motion.rect
                x={n.x - 4} y={n.y - 4}
                width={n.w + 8} height={46}
                rx={12}
                fill={n.color}
                fillOpacity={0.15}
                animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${n.x + n.w / 2}px ${n.y + 19}px` }}
              />
            )}

            {/* Card */}
            <motion.rect
              x={n.x} y={n.y}
              width={n.w} height={38}
              rx={8}
              fill={n.bg}
              stroke={n.color}
              strokeWidth={1.5}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ transformOrigin: `${n.x + n.w / 2}px ${n.y + 19}px` }}
            />

            {/* Icon */}
            <text
              x={n.x + 10} y={n.y + 24}
              fontSize={13}
              dominantBaseline="middle"
            >
              {n.icon}
            </text>

            {/* Label */}
            <text
              x={n.x + 28} y={n.y + 24}
              fontSize={10}
              fontWeight={600}
              fill={n.color}
              dominantBaseline="middle"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Status indicators */}
        {nodes.map((n, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={n.x + n.w - 8} cy={n.y + 8}
            r={3}
            fill={n.pulse ? "#22c55e" : "#94a3b8"}
            animate={n.pulse ? { opacity: [1, 0.3, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-4 grid grid-cols-3 gap-2"
      >
        {[
          { label: "Tasks/hr", value: "1,240" },
          { label: "Accuracy", value: "99.2%" },
          { label: "Saved", value: "48hrs" },
        ].map((s) => (
          <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-center">
            <div className="text-sm font-black text-gray-900">{s.value}</div>
            <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
