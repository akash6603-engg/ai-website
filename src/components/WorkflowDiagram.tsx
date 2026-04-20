// SVG workflow diagram component — n8n-style node canvas

type Node = {
  label: string;
  sublabel?: string;
  type: "trigger" | "ai" | "action" | "database" | "notify";
};

const typeStyles: Record<Node["type"], { bg: string; border: string; dot: string; text: string }> = {
  trigger:  { bg: "#fff7ed", border: "#f97316", dot: "#f97316", text: "#c2410c" },
  ai:       { bg: "#faf5ff", border: "#a855f7", dot: "#a855f7", text: "#7e22ce" },
  action:   { bg: "#eff6ff", border: "#3b82f6", dot: "#3b82f6", text: "#1d4ed8" },
  database: { bg: "#f0fdf4", border: "#22c55e", dot: "#22c55e", text: "#15803d" },
  notify:   { bg: "#fff1f2", border: "#f43f5e", dot: "#f43f5e", text: "#be123c" },
};

const NODE_W = 108;
const NODE_H = 52;
const GAP = 28;
const STEP = NODE_W + GAP;
const SVG_H = 90;

export default function WorkflowDiagram({ nodes }: { nodes: Node[] }) {
  const totalW = nodes.length * NODE_W + (nodes.length - 1) * GAP;
  const startX = 0;
  const nodeY = (SVG_H - NODE_H) / 2;

  return (
    <svg
      viewBox={`-8 0 ${totalW + 16} ${SVG_H}`}
      width="100%"
      height={SVG_H}
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      {nodes.map((node, i) => {
        const x = startX + i * STEP;
        const s = typeStyles[node.type];
        const centerX = x + NODE_W / 2;
        const centerY = nodeY + NODE_H / 2;
        const arrowStartX = x + NODE_W;
        const arrowEndX = x + NODE_W + GAP - 4;
        const arrowY = centerY;

        return (
          <g key={i}>
            {/* Arrow to next node */}
            {i < nodes.length - 1 && (
              <g>
                <line
                  x1={arrowStartX}
                  y1={arrowY}
                  x2={arrowEndX - 6}
                  y2={arrowY}
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <polygon
                  points={`${arrowEndX - 4},${arrowY - 4} ${arrowEndX + 2},${arrowY} ${arrowEndX - 4},${arrowY + 4}`}
                  fill="#94a3b8"
                />
              </g>
            )}

            {/* Node card */}
            <rect
              x={x}
              y={nodeY}
              width={NODE_W}
              height={NODE_H}
              rx={8}
              fill={s.bg}
              stroke={s.border}
              strokeWidth="1.5"
            />

            {/* Top indicator dot */}
            <circle cx={x + 10} cy={nodeY + 10} r={4} fill={s.dot} />

            {/* Label */}
            <text
              x={centerX}
              y={nodeY + 26}
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill={s.text}
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              {node.label}
            </text>

            {/* Sublabel */}
            {node.sublabel && (
              <text
                x={centerX}
                y={nodeY + 38}
                textAnchor="middle"
                fontSize="7.5"
                fill="#64748b"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              >
                {node.sublabel}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
