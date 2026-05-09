"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PROJECTS, CATEGORY_LABELS, type ProjectCategory } from "@/lib/config";

const filters: { value: ProjectCategory; label: string }[] = [
  { value: "all",        label: "Todos" },
  { value: "canceleria", label: "Cancelería" },
  { value: "fachadas",   label: "Fachadas" },
  { value: "divisiones", label: "Divisiones" },
  { value: "espejos",    label: "Espejos" },
];

const gridSpans = [
  "col-span-12 sm:col-span-7",
  "col-span-12 sm:col-span-5",
  "col-span-12 sm:col-span-4",
  "col-span-12 sm:col-span-4",
  "col-span-12 sm:col-span-4",
  "col-span-12 sm:col-span-6",
  "col-span-12 sm:col-span-6",
];

export default function Portfolio() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  const visible = PROJECTS.filter(p => active === "all" || p.category === active);

  return (
    <section id="trabajos" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-5 md:px-[72px]">

        {/* Header */}
        <div ref={titleRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[11px] font-bold tracking-[.2em] uppercase text-[var(--blue)] mb-3"
            >
              Galería
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(40px,5vw,70px)] leading-[.95] tracking-[.03em] text-[var(--text)]"
              style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif" }}
            >
              Nuestros <span className="text-[var(--blue)]">trabajos</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-[.09em] uppercase transition-all duration-200
                  ${active === f.value
                    ? "bg-[var(--blue)] text-white shadow-[0_4px_20px_rgba(29,58,240,.3)]"
                    : "bg-white border border-[rgba(29,58,240,.12)] text-[var(--muted)] hover:border-[var(--blue)] hover:text-[var(--blue)] hover:bg-[var(--blue-pale)]"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-3.5">
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((p, i) => {
              const isVisible = active === "all" || p.category === active;
              return (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, pointerEvents: "none" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className={`relative overflow-hidden rounded-[14px] aspect-[4/3] cursor-pointer group ${gridSpans[i]}`}
                  style={!isVisible ? { display: "none" } : {}}
                >
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,13,36,.9)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <motion.div
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-[10px] font-bold tracking-[.15em] uppercase text-[#D4FF00] mb-1">
                        {CATEGORY_LABELS[p.category] ?? p.category}
                      </p>
                      <h3
                        className="text-[22px] tracking-[.03em] text-white"
                        style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif" }}
                      >
                        {p.title}
                      </h3>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
