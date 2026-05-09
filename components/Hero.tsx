"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CONFIG, waURL } from "@/lib/config";

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 40 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
});

const stats = [
  { value: CONFIG.projectsCount,   label: "Proyectos",    color: "#7BB3FF" },
  { value: CONFIG.yearsExperience, label: "Años de exp.", color: "#FF8A70" },
  { value: "24h",                  label: "Cotización",   color: "#3DD8C5" },
  { value: "100%",                 label: "Garantizado",  color: "#D4FF00" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-[72px] flex items-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/herobg.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Overlay: oscuro a la izquierda, deja respirar a la derecha */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,8,25,0.88) 0%, rgba(5,8,25,0.72) 45%, rgba(5,8,25,0.35) 75%, rgba(5,8,25,0.15) 100%)",
        }}
      />
      {/* Overlay inferior para los stats */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(5,8,25,0.6) 0%, transparent 100%)" }}
      />

      {/* CSS keyframes */}
      <style>{`
        @keyframes blobPulse   { 0%,100%{opacity:.8} 50%{opacity:1} }
        @keyframes mascotFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
      `}</style>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 md:px-[72px] py-16">
        <div className="max-w-[640px]">

          {/* Badge */}
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full px-4 py-[7px] mb-7"
            style={{
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.22)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full bg-[#D4FF00]"
              style={{ animation: "blobPulse 2s ease-in-out infinite" }}
            />
            <span className="text-[11px] font-bold tracking-[.13em] uppercase text-white/90">
              Profesionales en cristales y aluminios
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="mb-7 leading-[.92] tracking-[.03em]"
            style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif" }}
          >
            <span className="block text-[clamp(56px,8.5vw,118px)] text-white">TU ESPACIO.</span>
            <span
              className="block text-[clamp(56px,8.5vw,118px)]"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.7)", color: "transparent" }}
            >
              TRANSFORMADO
            </span>
            <span
              className="block text-[clamp(56px,8.5vw,118px)]"
              style={{ color: "#D4FF00" }}
            >
              EN VIDRIO.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-[clamp(15px,1.8vw,18px)] leading-[1.65] max-w-[500px] mb-11"
            style={{ color: "rgba(255,255,255,.75)" }}
          >
            Instalación profesional de cristales y aluminios en{" "}
            <strong className="text-white font-bold">{CONFIG.city}</strong>.
            Cancelería, fachadas, divisiones y más.{" "}
            <strong style={{ color: "#D4FF00", fontWeight: 700 }}>Calidad garantizada.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-14">
            <a
              href="#trabajos"
              className="inline-flex items-center gap-2 px-8 py-[17px] text-[14px] font-bold tracking-[.07em] uppercase rounded-xl transition-all duration-200 active:scale-95"
              style={{
                background: "rgba(255,255,255,.12)",
                border: "1.5px solid rgba(255,255,255,.35)",
                color: "white",
                backdropFilter: "blur(8px)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Ver trabajos
            </a>
            <a
              href={waURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-[17px] text-[14px] font-bold tracking-[.07em] uppercase rounded-xl text-white transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, var(--coral) 0%, var(--coral-lt) 100%)",
                boxShadow: "0 8px 28px rgba(255,85,51,.4)",
              }}
            >
              <WhatsAppIcon />
              Pedir cotización
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap gap-8 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,.15)" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span
                  className="text-[clamp(30px,4vw,48px)] leading-none"
                  style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif", color: s.color }}
                >
                  {s.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[.1em] text-white/50">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
