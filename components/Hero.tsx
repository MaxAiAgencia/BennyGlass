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
  { value: CONFIG.projectsCount,   label: "Proyectos",    color: "var(--blue)" },
  { value: CONFIG.yearsExperience, label: "Años de exp.", color: "var(--coral)" },
  { value: "24h",                  label: "Cotización",   color: "var(--teal)" },
  { value: "100%",                 label: "Garantizado",  color: "var(--lime)" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-[72px] flex items-center"
    >
      {/* Capa decorativa contenida — overflow-hidden solo aquí */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Subtle warm dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(42,91,240,.18) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Blob coral */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(255,85,51,.13) 0%,transparent 68%)", filter: "blur(80px)", animation: "blobPulse 8s ease-in-out infinite" }} />
      {/* Blob teal */}
      <div className="absolute top-[40%] -right-10 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(11,191,171,.11) 0%,transparent 70%)", filter: "blur(70px)", animation: "blobPulse 10s ease-in-out infinite 1.5s" }} />
      {/* Blob blue */}
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(42,91,240,.1) 0%,transparent 70%)", filter: "blur(90px)", animation: "blobPulse 9s ease-in-out infinite 3s" }} />
      {/* Blob amber small */}
      <div className="absolute top-[15%] left-[8%] w-[220px] h-[220px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(245,158,11,.1) 0%,transparent 70%)", filter: "blur(50px)", animation: "blobPulse 12s ease-in-out infinite 0.8s" }} />

      {/* Floating window frames — ahora con colores */}
      {[
        { cls: "w-[148px] h-[186px] top-[12%] right-[7%]", delay: "0s",  border: "rgba(255,85,51,.2)",   bg: "rgba(255,85,51,.03)"  },
        { cls: "w-[84px]  h-[110px] top-[66%] right-[3%]", delay: "-4s", border: "rgba(11,191,171,.2)",  bg: "rgba(11,191,171,.03)" },
        { cls: "w-[60px]  h-[80px]  top-[18%] left-[3%] opacity-60", delay: "-8s", border: "rgba(245,158,11,.25)", bg: "rgba(245,158,11,.04)" },
      ].map((f, i) => (
        <div
          key={i}
          className={`absolute rounded-sm pointer-events-none ${f.cls}`}
          style={{
            border: `1px solid ${f.border}`,
            background: f.bg,
            animation: `wfDrift 14s ease-in-out infinite ${f.delay}`,
          }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: f.border }} />
          <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: f.border }} />
        </div>
      ))}

      </div>{/* fin capa decorativa */}

      {/* CSS keyframes */}
      <style>{`
        @keyframes gridScroll { to { transform: translate(36px,36px); } }
        @keyframes blobPulse  { 0%,100%{transform:scale(1);opacity:.8} 50%{transform:scale(1.14);opacity:1} }
        @keyframes wfDrift    { 0%,100%{transform:translateY(0) rotate(0)} 33%{transform:translateY(-18px) rotate(.4deg)} 66%{transform:translateY(11px) rotate(-.3deg)} }
        @keyframes mascotFloat{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
      `}</style>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 md:px-[72px] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-center">

          {/* Text */}
          <div>
            {/* Badge — coral cálido */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full px-4 py-[7px] mb-7"
              style={{ background: "var(--coral-pale)", border: "1px solid rgba(255,85,51,.28)" }}>
              <span className="w-[7px] h-[7px] rounded-full" style={{ background: "var(--coral)", animation: "blobPulse 2s ease-in-out infinite" }} />
              <span className="text-[11px] font-bold tracking-[.13em] uppercase" style={{ color: "var(--coral)" }}>
                Profesionales en cristales y aluminios
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="mb-7 leading-[.92] tracking-[.03em]"
              style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif" }}
            >
              <span className="block text-[clamp(56px,8.5vw,118px)] text-[var(--text)]">TU ESPACIO.</span>
              <span className="block text-[clamp(56px,8.5vw,118px)]" style={{ WebkitTextStroke: "2px var(--text)", color: "transparent" }}>TRANSFORMADO</span>
              <span className="block text-[clamp(56px,8.5vw,118px)] text-[var(--blue)]">EN VIDRIO.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p {...fadeUp(0.2)} className="text-[clamp(15px,1.8vw,18px)] text-[var(--muted)] leading-[1.65] max-w-[520px] mb-11">
              Instalación profesional de cristales y aluminios en{" "}
              <strong className="text-[var(--text)] font-bold">{CONFIG.city}</strong>.
              Cancelería, fachadas, divisiones y más.{" "}
              <strong style={{ color: "var(--coral)", fontWeight: 700 }}>Calidad garantizada.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-14">
              <a
                href="#trabajos"
                className="inline-flex items-center gap-2 px-8 py-[17px] text-[14px] font-bold tracking-[.07em] uppercase rounded-xl transition-all duration-200 active:scale-95"
                style={{
                  border: "2px solid rgba(42,91,240,.25)",
                  color: "var(--text)",
                  background: "transparent",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)"; (e.currentTarget as HTMLElement).style.color = "var(--blue)"; (e.currentTarget as HTMLElement).style.background = "var(--blue-pale)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,91,240,.25)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Ver trabajos
              </a>
              <a
                href={waURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-[17px] text-[14px] font-bold tracking-[.07em] uppercase rounded-xl text-white transition-all duration-200 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, var(--coral) 0%, var(--coral-lt) 100%)",
                  boxShadow: "0 8px 28px rgba(255,85,51,.35)",
                }}
              >
                <WhatsAppIcon />
                Pedir cotización
              </a>
            </motion.div>

            {/* Stats — cada uno con su color */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-8 pt-10"
              style={{ borderTop: "1px solid rgba(42,91,240,.1)" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span
                    className="text-[clamp(30px,4vw,48px)] leading-none"
                    style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif", color: s.color }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[.1em] text-[var(--muted)]">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div
              className="relative w-full max-w-[340px] aspect-square"
              style={{
                filter: "drop-shadow(0 20px 56px rgba(255,85,51,.2)) drop-shadow(0 8px 24px rgba(42,91,240,.15))",
                animation: "mascotFloat 4.5s ease-in-out infinite",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Benny Glass"
                fill
                className="object-contain"
                priority
              />
            </div>
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
