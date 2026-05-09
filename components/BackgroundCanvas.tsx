"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "inicio",          bg: "linear-gradient(160deg, #EEF2FF 0%, #FFFEF9 45%, #FFF0EC 100%)" },
  { id: "servicios",       bg: "linear-gradient(160deg, #E6FAF8 0%, #FFFFFF 40%, #FFFBEB 100%)" },
  { id: "trabajos",        bg: "linear-gradient(160deg, #FFFBEB 0%, #FFFEF9 45%, #EEF2FF 100%)" },
  { id: "diferenciadores", bg: "linear-gradient(160deg, #FFF0EC 0%, #FFFEF9 45%, #F3FAE8 100%)" },
];

export default function BackgroundCanvas() {
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      const center = window.scrollY + window.innerHeight / 2;
      let closest = "inicio";
      let minDist = Infinity;

      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const elCenter = el.offsetTop + el.offsetHeight / 2;
        const dist = Math.abs(center - elCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = id;
        }
      }
      setActiveId(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10" aria-hidden>
      {SECTIONS.map(({ id, bg }) => (
        <motion.div
          key={id}
          className="absolute inset-0"
          animate={{ opacity: activeId === id ? 1 : 0 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          style={{ background: bg }}
        />
      ))}
    </div>
  );
}
