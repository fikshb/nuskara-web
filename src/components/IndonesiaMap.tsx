"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

interface LocationData {
  id: string;
  x: number;
  y: number;
  isHQ?: boolean;
}

const locationData: LocationData[] = [
  { id: "jkt", x: 27.6, y: 70.9, isHQ: true },
  { id: "wjv", x: 26.8, y: 73.7 },
  { id: "cjv", x: 33.4, y: 76.6 },
  { id: "riau", x: 20.3, y: 45.5 },
  { id: "ssm", x: 19.7, y: 55.4 },
  { id: "skl", x: 44.8, y: 51.9 },
  { id: "ekl", x: 48.1, y: 36.2 },
  { id: "nsl", x: 58.5, y: 31.9 },
  { id: "pap", x: 89.5, y: 56.7 },
];

// Set to true to enable click-to-get-coordinates mode
const DEBUG_MODE = false;

// Ripple timing: one dot ripples at a time, cycling through all
const RIPPLE_DURATION = 2.5;
const RIPPLE_STAGGER = 3;
const TOTAL_CYCLE = locationData.length * RIPPLE_STAGGER; // ~27s full rotation

function MapDot({
  loc,
  index,
  isActive,
  onHover,
  onLeave,
  name,
  hqLabel,
}: {
  loc: LocationData & { name: string };
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  name: string;
  hqLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const dotSize = loc.isHQ ? 16 : 12;
  const glowSize = loc.isHQ ? 36 : 24;
  const entranceDelay = 0.6 + index * 0.12;
  const rippleDelay = 2.5 + index * RIPPLE_STAGGER;

  return (
    <div
      ref={ref}
      className="absolute"
      style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Static soft glow (always visible after entrance, no animation) */}
      <motion.div
        className="absolute rounded-full bg-primary-700/15"
        style={{
          width: glowSize,
          height: glowSize,
          left: -glowSize / 2,
          top: -glowSize / 2,
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: entranceDelay }}
      />

      {/* Sequential ripple: one dot at a time, cycling through all locations */}
      {inView && (
        <motion.span
          className="absolute rounded-full border border-primary-700/50"
          style={{
            width: dotSize,
            height: dotSize,
            left: -dotSize / 2,
            top: -dotSize / 2,
          }}
          animate={{
            scale: [0, 2.8],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: RIPPLE_DURATION,
            repeat: Infinity,
            delay: rippleDelay,
            repeatDelay: TOTAL_CYCLE - RIPPLE_DURATION,
            ease: "easeOut",
          }}
        />
      )}

      {/* HQ pulsing ring */}
      {loc.isHQ && inView && (
        <>
          {/* Steady outer ring */}
          <div
            className="absolute rounded-full border-2 border-primary-700/25"
            style={{
              width: dotSize + 18,
              height: dotSize + 18,
              left: -(dotSize + 18) / 2,
              top: -(dotSize + 18) / 2,
            }}
          />
          {/* Pulsing ring */}
          <motion.div
            className="absolute rounded-full border-2 border-primary-700"
            style={{
              width: dotSize,
              height: dotSize,
              left: -dotSize / 2,
              top: -dotSize / 2,
            }}
            animate={{
              scale: [1, 2.8],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: entranceDelay + 0.5,
            }}
          />
        </>
      )}

      {/* Dot: simple fade-in (no y-drop, no jumping) */}
      <motion.div
        className={`relative rounded-full border-2 border-white shadow-lg cursor-pointer ${
          loc.isHQ ? "bg-primary-700" : "bg-primary-600"
        }`}
        style={{
          width: dotSize,
          height: dotSize,
          marginLeft: -dotSize / 2,
          marginTop: -dotSize / 2,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={
          inView
            ? { scale: isActive ? 1.3 : 1, opacity: 1 }
            : { scale: 0, opacity: 0 }
        }
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 15, delay: isActive ? 0 : entranceDelay },
          opacity: { duration: 0.5, delay: entranceDelay },
        }}
      />

      {/* HQ label */}
      {loc.isHQ && (
        <motion.div
          className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap"
          initial={{ opacity: 0, x: -8 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
          transition={{ delay: entranceDelay + 0.5, duration: 0.4 }}
        >
          <span className="px-2 py-1 bg-primary-700 text-white text-[10px] font-bold rounded shadow-lg tracking-wider">
            {hqLabel}
          </span>
        </motion.div>
      )}

      {/* Hover tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 4 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        transition={{ duration: 0.15 }}
      >
        <span className="px-3 py-1.5 bg-neutral-900/90 text-white text-xs font-semibold rounded-lg shadow-xl backdrop-blur-sm">
          {name}
        </span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-neutral-900/90" />
      </motion.div>
    </div>
  );
}

export default function IndonesiaMap() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState<string | null>(null);
  const [debugClicks, setDebugClicks] = useState<{ x: number; y: number }[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { once: true });

  const locations = locationData.map((loc, i) => ({
    ...loc,
    name: t.map.locations[i],
  }));

  const hq = locationData[0];

  const handleDebugClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!DEBUG_MODE) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const rounded = { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    setDebugClicks((prev) => [...prev, rounded]);
    console.log(`Clicked: x: ${rounded.x}, y: ${rounded.y}`);
  };

  return (
    <div
      ref={mapRef}
      className="relative w-full overflow-hidden rounded-xl"
      onClick={handleDebugClick}
    >
      <img
        src="/images/indonesia-map-transparent.webp"
        alt="Indonesia operational map"
        className="w-full h-auto block"
      />

      {/* Subtle connection lines from HQ to each location */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="mapDotGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines (base - always visible) */}
        {locationData.slice(1).map((loc, i) => (
          <motion.line
            key={`conn-${loc.id}`}
            x1={hq.x}
            y1={hq.y}
            x2={loc.x}
            y2={loc.y}
            stroke="#B91C1C"
            strokeWidth="0.3"
            initial={{ opacity: 0 }}
            animate={mapInView ? { opacity: 0.15 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.2 + i * 0.15 }}
          />
        ))}

        {/* Pulse wave: line lights up from HQ to location */}
        {locationData.slice(1).map((loc, i) => {
          const lineId = `pulse-line-${loc.id}`;
          const gradId = `pulse-grad-${loc.id}`;
          return (
            <g key={lineId}>
              <defs>
                <linearGradient id={gradId} x1={hq.x} y1={hq.y} x2={loc.x} y2={loc.y} gradientUnits="userSpaceOnUse">
                  <motion.stop
                    offset="0%"
                    stopColor="#B91C1C"
                    animate={mapInView ? { stopOpacity: [0, 0.8, 0.8, 0] } : { stopOpacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2.5 + i * 0.8, repeatDelay: 4, ease: "easeInOut" }}
                  />
                  <motion.stop
                    offset="50%"
                    stopColor="#EF4444"
                    animate={mapInView ? { stopOpacity: [0, 0.6, 0.6, 0] } : { stopOpacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2.8 + i * 0.8, repeatDelay: 4, ease: "easeInOut" }}
                  />
                  <motion.stop
                    offset="100%"
                    stopColor="#B91C1C"
                    animate={mapInView ? { stopOpacity: [0, 0.5, 0.5, 0] } : { stopOpacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity, delay: 3.1 + i * 0.8, repeatDelay: 4, ease: "easeInOut" }}
                  />
                </linearGradient>
              </defs>
              <line
                x1={hq.x}
                y1={hq.y}
                x2={loc.x}
                y2={loc.y}
                stroke={`url(#${gradId})`}
                strokeWidth="0.6"
              />
            </g>
          );
        })}
      </svg>

      {/* Debug tools */}
      {DEBUG_MODE && debugClicks.map((click, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white z-50 cursor-pointer hover:bg-red-500"
          title="Right-click to remove"
          style={{
            left: `${click.x}%`,
            top: `${click.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            setDebugClicks((prev) => prev.filter((_, idx) => idx !== i));
          }}
        />
      ))}
      {DEBUG_MODE && (
        <div className="absolute top-2 left-2 bg-black/80 text-white text-[10px] font-mono p-2 rounded z-50 max-h-48 overflow-auto">
          <div className="flex items-center justify-between gap-4 mb-1 border-b border-white/20 pb-1">
            <span className="font-bold">Debug</span>
            {debugClicks.length > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setDebugClicks([]); }}
                className="text-red-400 hover:text-red-300"
              >
                Reset All
              </button>
            )}
          </div>
          {debugClicks.length === 0 && <div className="text-white/40">Click on map...</div>}
          {debugClicks.map((c, i) => (
            <div key={i} className="flex justify-between gap-3">
              <span>{i + 1}. x: {c.x}, y: {c.y}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDebugClicks((prev) => prev.filter((_, idx) => idx !== i));
                }}
                className="text-red-400 hover:text-red-300"
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Dot overlays */}
      {locations.map((loc, i) => (
        <MapDot
          key={loc.id}
          loc={loc}
          index={i}
          isActive={hovered === loc.id}
          onHover={() => setHovered(loc.id)}
          onLeave={() => setHovered(null)}
          name={loc.name}
          hqLabel={t.map.hqLabel}
        />
      ))}
    </div>
  );
}
