"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

// SVG viewBox
const W = 420;
const H = 500;

// Center hub
const CX = 210;
const CY = 240;
const CR = 44;

// Satellite node radius
const NR = 32;

// Diamond layout: top, right, bottom, left
const satellites = [
  { x: 210, y: 80 },
  { x: 370, y: 240 },
  { x: 210, y: 400 },
  { x: 50, y: 240 },
];

// Pre-calculate line endpoints (edge-to-edge, not center-to-center)
const lines = satellites.map((s) => {
  const dx = s.x - CX;
  const dy = s.y - CY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const nx = dx / dist;
  const ny = dy / dist;
  return {
    x1: CX + nx * (CR + 6),
    y1: CY + ny * (CR + 6),
    x2: s.x - nx * (NR + 6),
    y2: s.y - ny * (NR + 6),
  };
});

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number];

export default function MiningEcosystemGraphic() {
  const { t } = useTranslation();
  const nodes = t.addedValue.ecosystem.nodes;

  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Ecosystem diagram */}
      <motion.svg
        viewBox={`0 0 ${W} ${H}`}
        className="relative w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <defs>
          <radialGradient id="ecosystemGlow" cx="50%" cy="48%" r="45%">
            <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#B91C1C" stopOpacity="0" />
          </radialGradient>
          {/* Shadow filter for nodes */}
          <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.12" />
          </filter>
          {/* Glow filter for traveling dots */}
          <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background radial glow */}
        <circle cx={CX} cy={CY} r="180" fill="url(#ecosystemGlow)" />

        {/* Decorative concentric rings */}
        {[100, 140, 180].map((r, i) => (
          <motion.circle
            key={`ring-${r}`}
            cx={CX}
            cy={CY}
            r={r}
            fill="none"
            stroke="#B91C1C"
            strokeWidth="0.5"
            strokeDasharray="3 8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 0.12 + i * 0.03,
                transition: { duration: 1, delay: i * 0.1 },
              },
            }}
          />
        ))}

        {/* Connecting lines (animated draw) */}
        {lines.map((l, i) => (
          <motion.path
            key={`line-${i}`}
            d={`M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`}
            stroke="#B91C1C"
            strokeWidth="1.5"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 0.35,
                transition: {
                  pathLength: { duration: 0.7, delay: 0.5 + i * 0.1, ease },
                  opacity: { duration: 0.3, delay: 0.5 + i * 0.1 },
                },
              },
            }}
          />
        ))}

        {/* Traveling dots along lines (pulse outward from center) */}
        {lines.map((l, i) => (
          <motion.circle
            key={`travel-${i}`}
            r="3.5"
            fill="#B91C1C"
            filter="url(#dotGlow)"
            animate={{
              cx: [l.x1, l.x2],
              cy: [l.y1, l.y2],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2 + i * 0.7,
              repeatDelay: 1.5,
            }}
          />
        ))}

        {/* Center node */}
        <motion.g
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, delay: 0.2, ease },
            },
          }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          <circle cx={CX} cy={CY} r={CR} fill="#B91C1C" filter="url(#nodeShadow)" />
          <circle
            cx={CX}
            cy={CY}
            r={CR + 5}
            fill="none"
            stroke="#B91C1C"
            strokeWidth="1"
            opacity="0.3"
          />
          <text
            x={CX}
            y={CY + 1}
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
            fontSize="24"
            fontWeight="900"
            fontFamily="Inter, sans-serif"
            letterSpacing="1"
          >
            N
          </text>
        </motion.g>

        {/* Center pulse ring (continuous) */}
        <motion.circle
          cx={CX}
          cy={CY}
          r={CR}
          fill="none"
          stroke="#B91C1C"
          strokeWidth="1"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.6], opacity: [0.25, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.5,
          }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />

        {/* Satellite nodes */}
        {satellites.map((s, i) => (
          <motion.g
            key={`node-${i}`}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.9 + i * 0.12, ease },
              },
            }}
            style={{ transformOrigin: `${s.x}px ${s.y}px` }}
          >
            {/* Node circle */}
            <circle
              cx={s.x}
              cy={s.y}
              r={NR}
              fill="white"
              stroke="#B91C1C"
              strokeWidth="1.5"
              filter="url(#nodeShadow)"
            />

            {/* Abbreviation text */}
            <text
              x={s.x}
              y={s.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#B91C1C"
              fontSize="13"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.5"
            >
              {nodes[i].abbr}
            </text>

            {/* Label backdrop */}
            <rect
              x={s.x - 40}
              y={s.y + NR + 4}
              width="80"
              height="18"
              rx="4"
              fill="white"
              stroke="#e5e5e5"
              strokeWidth="0.5"
              filter="url(#nodeShadow)"
            />

            {/* Service label below node */}
            <text
              x={s.x}
              y={s.y + NR + 14}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#525252"
              fontSize="10"
              fontWeight="500"
              fontFamily="Inter, sans-serif"
            >
              {nodes[i].label}
            </text>
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
}
