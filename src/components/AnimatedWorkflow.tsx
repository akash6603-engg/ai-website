"use client";

import { motion } from "framer-motion";

export type WorkflowNode = {
  label: string;
  sublabel: string;
  type: "trigger" | "ai" | "action" | "database" | "notify";
};

const TYPE = {
  trigger:  { bg: "#fff7ed", border: "#f97316", dot: "#f97316", text: "#c2410c", glow: "rgba(249,115,22,0.18)" },
  ai:       { bg: "#faf5ff", border: "#a855f7", dot: "#a855f7", text: "#7e22ce", glow: "rgba(168,85,247,0.18)" },
  action:   { bg: "#eff6ff", border: "#3b82f6", dot: "#3b82f6", text: "#1d4ed8", glow: "rgba(59,130,246,0.18)" },
  database: { bg: "#f0fdf4", border: "#22c55e", dot: "#22c55e", text: "#15803d", glow: "rgba(34,197,94,0.18)"  },
  notify:   { bg: "#fff1f2", border: "#f43f5e", dot: "#f43f5e", text: "#be123c", glow: "rgba(244,63,94,0.18)"  },
};

const NW = 108;
const NH = 58;
const GAP = 22;
const STEP = NW + GAP;
const SH = 100;

export default function AnimatedWorkflow({ nodes, uid }: { nodes: WorkflowNode[]; uid: string }) {
  const totalW = nodes.length * NW + (nodes.length - 1) * GAP;
  const ny = (SH - NH) / 2;
  const my = ny + NH / 2;

  const css = `
    @keyframes aw-flow-${uid} {
      to { stroke-dashoffset: -18; }
    }
    @keyframes aw-pulse-${uid} {
      0%,100% { opacity:0.7; r:3.5px; }
      50%      { opacity:0.2; r:6px;  }
    }
    .aw-flow-${uid}  { animation: aw-flow-${uid} 0.9s linear infinite; }
    .aw-pulse-${uid} { animation: aw-pulse-${uid} 2.2s ease-in-out infinite; }
  `;

  return (
    <svg
      viewBox={`-4 -4 ${totalW + 8} ${SH + 8}`}
      width="100%"
      height={SH + 8}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{css}</style>
        {nodes.map((n, i) => {
          const s = TYPE[n.type];
          return (
            <radialGradient key={i} id={`glow-${uid}-${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={s.glow} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          );
        })}
      </defs>

      {nodes.map((node, i) => {
        const x = i * STEP;
        const s = TYPE[node.type];
        const cx = x + NW / 2;
        const as = x + NW + 2;
        const ae = x + NW + GAP - 5;
        const pktPath = `M ${as} ${my} L ${ae + 5} ${my}`;
        const delay = `${i * 0.55}s`;

        return (
          <g key={i}>
            {i < nodes.length - 1 && (
              <g>
                {/* Flowing dashed connector */}
                <line
                  x1={as} y1={my} x2={ae - 2} y2={my}
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeDasharray="5 3"
                  className={`aw-flow-${uid}`}
                />
                {/* Arrowhead */}
                <polygon
                  points={`${ae - 2},${my - 4} ${ae + 4},${my} ${ae - 2},${my + 4}`}
                  fill="#94a3b8"
                />
                {/* Animated data packet */}
                <circle r="3" fill={TYPE[nodes[i + 1].type].dot} opacity="0.85">
                  <animateMotion
                    dur="1.7s"
                    begin={delay}
                    repeatCount="indefinite"
                    path={pktPath}
                  />
                </circle>
              </g>
            )}

            {/* Node entrance animation wrapper */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.13, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Ambient glow behind node */}
              <ellipse
                cx={x + NW / 2}
                cy={ny + NH / 2}
                rx={NW / 2 + 6}
                ry={NH / 2 + 4}
                fill={`url(#glow-${uid}-${i})`}
              />

              {/* Card */}
              <rect
                x={x} y={ny}
                width={NW} height={NH}
                rx={10}
                fill={s.bg}
                stroke={s.border}
                strokeWidth="1.5"
              />

              {/* Pulsing dot (ring) */}
              <circle
                cx={x + 12} cy={ny + 12}
                r="4"
                fill={s.dot}
                opacity="0.35"
                className={`aw-pulse-${uid}`}
              />
              {/* Solid dot */}
              <circle cx={x + 12} cy={ny + 12} r="3.5" fill={s.dot} />

              {/* Label */}
              <text
                x={cx} y={ny + 31}
                textAnchor="middle"
                fontSize="9.5"
                fontWeight="700"
                fill={s.text}
                fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
              >
                {node.label}
              </text>

              {/* Sublabel */}
              <text
                x={cx} y={ny + 44}
                textAnchor="middle"
                fontSize="7.5"
                fill="#64748b"
                fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
              >
                {node.sublabel}
              </text>
            </motion.g>
          </g>
        );
      })}
    </svg>
  );
}
