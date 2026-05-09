"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SERVICES } from "@/lib/config";

type ColorScheme = {
  color: string;
  pale: string;
  shadow: string;
  hex: string;
  hexLt: string;
};

const colorSchemes: Record<string, ColorScheme> = {
  canceleria: { color: "var(--blue)",  pale: "var(--blue-pale)",  shadow: "rgba(42,91,240,.13)",  hex: "#2A5BF0", hexLt: "#4A78FF" },
  fachadas:   { color: "var(--teal)",  pale: "var(--teal-pale)",  shadow: "rgba(11,191,171,.13)", hex: "#0BBFAB", hexLt: "#1DD4BF" },
  divisiones: { color: "var(--amber)", pale: "var(--amber-pale)", shadow: "rgba(245,158,11,.13)", hex: "#F59E0B", hexLt: "#FBBF24" },
  espejos:    { color: "var(--coral)", pale: "var(--coral-pale)", shadow: "rgba(255,85,51,.13)",  hex: "#FF5533", hexLt: "#FF7755" },
  barandales: { color: "var(--lime)",  pale: "var(--lime-pale)",  shadow: "rgba(122,197,32,.13)", hex: "#7AC520", hexLt: "#94D63A" },
  herrajes:   { color: "var(--blue)",  pale: "var(--blue-pale)",  shadow: "rgba(42,91,240,.3)",   hex: "#2A5BF0", hexLt: "#4A78FF" },
};

const icons: Record<string, React.ReactNode> = {
  canceleria: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2.5">
      <rect x="4" y="4" width="40" height="40" rx="3"/>
      <line x1="24" y1="4"  x2="24" y2="44"/>
      <line x1="4"  y1="24" x2="44" y2="24"/>
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/>
      <line x1="16" y1="4"  x2="16" y2="10"/>
      <line x1="32" y1="4"  x2="32" y2="10"/>
      <line x1="16" y1="38" x2="16" y2="44"/>
      <line x1="32" y1="38" x2="32" y2="44"/>
    </svg>
  ),
  fachadas: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2.5">
      <rect x="4" y="8" width="40" height="36" rx="2"/>
      <rect x="4" y="8" width="40" height="8" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="20" y1="16" x2="20" y2="44"/>
      <line x1="36" y1="16" x2="36" y2="44"/>
      <line x1="4"  y1="28" x2="44" y2="28"/>
      <line x1="4"  y1="38" x2="44" y2="38"/>
      <path d="M 4 6 L 8 2 L 40 2 L 44 6" strokeLinejoin="round"/>
    </svg>
  ),
  divisiones: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2.5">
      <rect x="6"  y="4" width="10" height="40" rx="2"/>
      <rect x="19" y="4" width="10" height="40" rx="2" fill="currentColor" fillOpacity=".12"/>
      <rect x="32" y="4" width="10" height="40" rx="2"/>
      <line x1="2" y1="20" x2="46" y2="20" strokeDasharray="3 3"/>
    </svg>
  ),
  espejos: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2.5">
      <path d="M 24 4 L 44 18 L 44 44 L 4 44 L 4 18 Z" strokeLinejoin="round"/>
      <path d="M 24 4 L 4 18 L 44 18 Z" fill="currentColor" fillOpacity=".12"/>
      <ellipse cx="24" cy="32" rx="8" ry="5" fill="currentColor" fillOpacity=".1"/>
      <line x1="24" y1="4" x2="24" y2="44" strokeDasharray="2 4"/>
    </svg>
  ),
  barandales: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2.5">
      <rect x="4" y="8" width="40" height="22" rx="2" fill="currentColor" fillOpacity=".08"/>
      <line x1="4"  y1="8" x2="4"  y2="40" strokeWidth="3" strokeLinecap="round"/>
      <line x1="44" y1="8" x2="44" y2="40" strokeWidth="3" strokeLinecap="round"/>
      <line x1="16" y1="8" x2="16" y2="40" strokeLinecap="round"/>
      <line x1="28" y1="8" x2="28" y2="40" strokeLinecap="round"/>
      <line x1="2"  y1="40" x2="46" y2="40" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  herrajes: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2.5">
      <rect x="8"  y="22" width="32" height="6" rx="3"/>
      <rect x="22" y="8"  width="6"  height="32" rx="3"/>
      <circle cx="25" cy="25" r="5" fill="currentColor" fillOpacity=".15"/>
      <circle cx="25" cy="25" r="2" fill="currentColor" stroke="none"/>
    </svg>
  ),
};

function ServiceCard({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const scheme = colorSchemes[service.id] ?? colorSchemes.canceleria;
  const isWide = service.id === "herrajes";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className={`relative overflow-hidden rounded-[22px] p-6 md:p-9 transition-all duration-300 group
        ${service.featured
          ? "text-white"
          : "bg-white border border-[rgba(0,0,0,.07)] hover:-translate-y-1"
        }
        ${isWide ? "col-span-12" : ""}
      `}
      style={service.featured ? {
        background: `linear-gradient(135deg, ${scheme.hex} 0%, ${scheme.hexLt} 100%)`,
        border: `1px solid ${scheme.hex}`,
        boxShadow: `0 8px 40px ${scheme.shadow}`,
      } : {
        boxShadow: `0 2px 20px rgba(0,0,0,.05)`,
      }}
    >
      {/* Hover overlay para tarjetas normales */}
      {!service.featured && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[22px]"
          style={{ background: `linear-gradient(135deg, ${scheme.pale} 0%, transparent 70%)` }}
        />
      )}

      {/* Pill de color en tarjetas normales */}
      {!service.featured && (
        <div
          className="absolute top-0 left-8 h-[3px] w-12 rounded-b-full transition-all duration-300 group-hover:w-20"
          style={{ background: scheme.color }}
        />
      )}

      <div className={`relative z-10 ${isWide ? "flex items-center justify-between gap-8" : ""}`}>
        <div className={isWide ? "flex-1" : ""}>
          {/* Icon container con fondo de color */}
          <div
            className="w-14 h-14 mb-5 rounded-2xl flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110"
            style={service.featured
              ? { background: "rgba(255,255,255,.15)", color: "white" }
              : { background: scheme.pale, color: scheme.color }
            }
          >
            {icons[service.id]}
          </div>

          <h3
            className={`text-[clamp(20px,2.5vw,28px)] leading-[1.05] tracking-[.03em] mb-2
              ${service.featured ? "text-white" : "text-[var(--text)]"}`}
            style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif" }}
          >
            {service.name}
          </h3>
          <p className={`text-[14px] leading-[1.55] ${service.featured ? "text-white/75" : "text-[var(--muted)]"}`}>
            {service.desc}
          </p>
        </div>

        {isWide && (
          <div
            className="hidden md:flex w-16 h-16 flex-shrink-0 rounded-2xl items-center justify-center p-3"
            style={{ background: "rgba(255,255,255,.15)", color: "white" }}
          >
            {icons[service.id]}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="servicios" className="py-24 md:py-32" style={{ background: "#D6F5EF" }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-[72px]">

        <div ref={titleRef} className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-[6px] mb-4 text-[11px] font-bold tracking-[.2em] uppercase"
            style={{ background: "var(--teal-pale)", color: "var(--teal)", border: "1px solid rgba(11,191,171,.25)" }}
          >
            Lo que hacemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(40px,5vw,70px)] leading-[.95] tracking-[.03em] text-[var(--text)]"
            style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif" }}
          >
            Nuestros <span style={{ color: "var(--blue)" }}>servicios</span>
          </motion.h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-3.5">
          {SERVICES.map((service, i) => {
            const spans: Record<string, string> = {
              canceleria: "col-span-12 sm:col-span-6 lg:col-span-5",
              fachadas:   "col-span-12 sm:col-span-6 lg:col-span-7",
              divisiones: "col-span-12 sm:col-span-6 lg:col-span-4",
              espejos:    "col-span-12 sm:col-span-6 lg:col-span-4",
              barandales: "col-span-12 sm:col-span-6 lg:col-span-4",
              herrajes:   "col-span-12",
            };
            return (
              <div key={service.id} className={spans[service.id]}>
                <ServiceCard service={service} index={i} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
