"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { waURL } from "@/lib/config";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function CtaWhatsapp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden bg-[#D4FF00]">
      {/* Big background text */}
      <div
        className="absolute right-8 bottom-0 pointer-events-none select-none leading-none text-[rgba(8,13,36,.06)]"
        style={{
          fontFamily: "'Bebas Neue','Arial Black',sans-serif",
          fontSize: "clamp(80px,13vw,200px)",
          letterSpacing: ".04em",
        }}
      >
        HABLEMOS
      </div>

      <div ref={ref} className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-[72px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[11px] font-bold tracking-[.2em] uppercase text-[rgba(8,13,36,.45)] mb-4"
            >
              Contacto directo
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(42px,6vw,88px)] leading-[.9] tracking-[.03em] text-[#080D24] mb-5"
              style={{ fontFamily: "'Bebas Neue','Arial Black',sans-serif" }}
            >
              ¿Tienes un<br />proyecto en<br />mente?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(14px,1.7vw,17px)] text-[rgba(8,13,36,.6)] leading-[1.65] max-w-[480px]"
            >
              Cuéntanos tu idea y te damos una cotización sin compromiso. Respondemos en menos de 24 horas.
            </motion.p>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col items-center gap-4 flex-shrink-0"
          >
            <motion.a
              href={waURL()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-4 bg-[#080D24] text-[#D4FF00] px-10 py-5 rounded-[14px] text-[clamp(14px,1.7vw,18px)] font-extrabold tracking-[.05em] uppercase shadow-[0_8px_40px_rgba(8,13,36,.2)] hover:bg-[#128C7E] hover:text-white transition-colors duration-300"
            >
              <WhatsAppIcon />
              Escríbenos por WhatsApp
            </motion.a>
            <span className="text-[13px] font-medium text-[rgba(8,13,36,.45)] text-center">
              Sin costo · Sin compromiso · Respuesta en 24 h
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
