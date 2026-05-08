"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG, waURL } from "@/lib/config";

type CardColor = {
  color: string;
  pale: string;
  glow: string;
};

const cards = [
  {
    icon: "🏆",
    num: CONFIG.projectsCount,
    title: "Proyectos terminados",
    desc: "Residenciales, comerciales e industriales en toda la región.",
    scheme: { color: "var(--blue)",  pale: "var(--blue-pale)",  glow: "rgba(42,91,240,.12)"  } as CardColor,
  },
  {
    icon: "📅",
    num: CONFIG.yearsExperience,
    title: "Años de experiencia",
    desc: "Conocemos cada tipo de aluminio, vidrio y condición climática.",
    scheme: { color: "var(--coral)", pale: "var(--coral-pale)", glow: "rgba(255,85,51,.12)"  } as CardColor,
  },
  {
    icon: "⚡",
    num: "24h",
    title: "Cotización rápida",
    desc: "Enviamos tu presupuesto en menos de 24 horas hábiles.",
    scheme: { color: "var(--teal)",  pale: "var(--teal-pale)",  glow: "rgba(11,191,171,.12)" } as CardColor,
  },
  {
    icon: "✅",
    num: "100%",
    title: "Garantía incluida",
    desc: "Materiales e instalación respaldados. Si algo falla, regresamos.",
    scheme: { color: "var(--lime)",  pale: "var(--lime-pale)",  glow: "rgba(122,197,32,.12)" } as CardColor,
  },
];

export default function WhyUs() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="diferenciadores" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Blobs de fondo */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%, var(--blue-pale) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 10% 80%, var(--coral-pale) 0%, transparent 45%)" }} />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-24 items-center">

          {/* Left */}
          <div ref={titleRef}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-[6px] mb-4 text-[11px] font-bold tracking-[.2em] uppercase"
              style={{ background: "var(--amber-pale)", color: "var(--amber)", border: "1px solid rgba(245,158,11,.28)" }}
            >
              Por qué elegirnos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(40px,5vw,70px)] leading-[.95] tracking-[.03em] text-[var(--text)] mb-5"
              style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif" }}
            >
              Más que<br />
              <span style={{ color: "var(--coral)" }}>instalación.</span><br />
              Experiencia.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[16px] text-[var(--muted)] leading-[1.65] mb-9"
            >
              En Benny Glass no solo instalamos vidrio — construimos confianza. Cada proyecto recibe el mismo cuidado, desde la primera medición hasta la limpieza final.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              href={waURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-[14px] text-white text-[13px] font-bold tracking-[.07em] uppercase rounded-xl active:scale-95 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, var(--blue) 0%, var(--blue-lt) 100%)",
                boxShadow: "0 8px 28px rgba(42,91,240,.3)",
              }}
            >
              Solicitar cotización
            </motion.a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {cards.map((card, i) => (
              <CardItem key={card.title} card={card} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function CardItem({ card, index }: { card: typeof cards[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scheme } = card;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -5 }}
      className="relative bg-white rounded-[22px] p-6 md:p-8 overflow-hidden group cursor-default transition-all duration-300"
      style={{
        border: `1px solid rgba(0,0,0,.07)`,
        boxShadow: `0 2px 20px rgba(0,0,0,.05)`,
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${scheme.glow}`; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 20px rgba(0,0,0,.05)`; }}
    >
      {/* Top color bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[4px] rounded-t-[22px] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"
        style={{ background: scheme.color }}
      />

      {/* Icon pill */}
      <div
        className="inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-4 text-[22px] transition-transform duration-300 group-hover:scale-110"
        style={{ background: scheme.pale }}
      >
        {card.icon}
      </div>

      <div
        className="text-[clamp(42px,4vw,60px)] leading-none mb-1.5"
        style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif", color: scheme.color }}
      >
        {card.num}
      </div>
      <div className="text-[14px] font-bold text-[var(--text)] mb-1.5">{card.title}</div>
      <p className="text-[13px] text-[var(--muted)] leading-[1.5]">{card.desc}</p>
    </motion.div>
  );
}
