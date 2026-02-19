"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

// SVG dimensions
const W = 500;
const H = 500;

// Center hub
const CX = 250;
const CY = 250;
const CR = 40;

// Satellite config
const NR = 26;
const ORBIT_R = 155;
const NUM_NODES = 8;
const START_ANGLE = -Math.PI / 2;
const ANGLE_STEP = (2 * Math.PI) / NUM_NODES;

// Calculate satellite positions (clockwise from top)
// Order: DAN, SSM, MCA, TNI, GBN, FARDIS, AMN, PGBN
const satellites = Array.from({ length: NUM_NODES }, (_, i) => {
  const angle = START_ANGLE + i * ANGLE_STEP;
  return {
    x: Math.round(CX + ORBIT_R * Math.cos(angle)),
    y: Math.round(CY + ORBIT_R * Math.sin(angle)),
  };
});

// Line endpoints: center → each satellite (edge-to-edge)
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
      <motion.svg
        viewBox={`0 0 ${W} ${H}`}
        className="relative w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <defs>
          <radialGradient id="ecosystemGlow" cx="50%" cy="50%" r="45%">
            <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#B91C1C" stopOpacity="0" />
          </radialGradient>
          <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.12" />
          </filter>
          <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background radial glow */}
        <circle cx={CX} cy={CY} r="200" fill="url(#ecosystemGlow)" />

        {/* Decorative concentric rings */}
        {[80, 120, 160].map((r, i) => (
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

        {/* Connecting lines: center → satellites */}
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
                  pathLength: { duration: 0.6, delay: 0.5 + i * 0.07, ease },
                  opacity: { duration: 0.3, delay: 0.5 + i * 0.07 },
                },
              },
            }}
          />
        ))}

        {/* Traveling dots: center → satellites */}
        {lines.map((l, i) => (
          <motion.circle
            key={`travel-${i}`}
            r="3"
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
              delay: 2 + i * 0.45,
              repeatDelay: 2,
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
            fontSize="22"
            fontWeight="900"
            fontFamily="Inter, sans-serif"
            letterSpacing="1"
          >
            N
          </text>
        </motion.g>

        {/* Center pulse ring */}
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
                transition: { duration: 0.5, delay: 0.9 + i * 0.08, ease },
              },
            }}
            style={{ transformOrigin: `${s.x}px ${s.y}px` }}
          >
            <circle
              cx={s.x}
              cy={s.y}
              r={NR}
              fill="white"
              stroke="#B91C1C"
              strokeWidth="1.5"
              filter="url(#nodeShadow)"
            />
            <text
              x={s.x}
              y={s.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#B91C1C"
              fontSize={nodes[i].abbr.length > 3 ? "10" : "12"}
              fontWeight="700"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.5"
            >
              {nodes[i].abbr}
            </text>
            <rect
              x={s.x - 45}
              y={s.y + NR + 4}
              width="90"
              height="18"
              rx="4"
              fill="white"
              stroke="#e5e5e5"
              strokeWidth="0.5"
              filter="url(#nodeShadow)"
            />
            <text
              x={s.x}
              y={s.y + NR + 14}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#525252"
              fontSize="9"
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
