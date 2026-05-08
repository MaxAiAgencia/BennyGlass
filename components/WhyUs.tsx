"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG, waURL } from "@/lib/config";

const cards = [
  { icon: "🏆", num: CONFIG.projectsCount,   title: "Proyectos terminados",  desc: "Residenciales, comerciales e industriales en toda la región." },
  { icon: "📅", num: CONFIG.yearsExperience, title: "Años de experiencia",   desc: "Conocemos cada tipo de aluminio, vidrio y condición climática." },
  { icon: "⚡", num: "24h",                  title: "Cotización rápida",      desc: "Enviamos tu presupuesto en menos de 24 horas hábiles." },
  { icon: "✅", num: "100%",                 title: "Garantía incluida",      desc: "Materiales e instalación respaldados. Si algo falla, regresamos." },
];

export default function WhyUs() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="diferenciadores" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%,var(--blue-pale) 0%,transparent 60%)" }} />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-24 items-center">

          {/* Left */}
          <div ref={titleRef}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[11px] font-bold tracking-[.2em] uppercase text-[var(--blue)] mb-3"
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
              <span className="text-[var(--blue)]">instalación.</span><br />
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
              className="inline-flex items-center gap-2 px-7 py-[14px] bg-[var(--blue)] text-white text-[13px] font-bold tracking-[.07em] uppercase rounded-md hover:bg-[var(--blue-lt)] hover:shadow-[0_8px_30px_rgba(29,58,240,.35)] active:scale-95 transition-all duration-200"
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -5 }}
      className="relative bg-white border border-[rgba(29,58,240,.1)] rounded-[22px] p-6 md:p-8 overflow-hidden group shadow-[0_2px_20px_rgba(29,58,240,.06)] hover:border-[rgba(29,58,240,.3)] hover:shadow-[0_8px_40px_rgba(29,58,240,.12)] transition-all duration-300 cursor-default"
    >
      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--blue)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />

      <span className="text-[28px] mb-4 block leading-none">{card.icon}</span>
      <div
        className="text-[clamp(42px,4vw,60px)] text-[var(--blue)] leading-none mb-1.5"
        style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif" }}
      >
        {card.num}
      </div>
      <div className="text-[14px] font-bold text-[var(--text)] mb-1.5">{card.title}</div>
      <p className="text-[13px] text-[var(--muted)] leading-[1.5]">{card.desc}</p>
    </motion.div>
  );
}
