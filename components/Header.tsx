"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { waURL } from "@/lib/config";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos",  label: "Trabajos" },
  { href: "#contacto",  label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 h-[72px] flex items-center justify-between px-5 md:px-[72px] transition-all duration-300
          ${scrolled
            ? "bg-[#F4F8FF]/95 backdrop-blur-2xl shadow-[0_2px_24px_rgba(29,58,240,.1)] border-b border-[rgba(29,58,240,.12)]"
            : "bg-[#F4F8FF]/85 backdrop-blur-xl border-b border-[rgba(29,58,240,.08)]"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-[44px] h-[44px] flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Benny Glass logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-[22px] tracking-[.1em] text-[var(--text)] group-hover:text-[var(--blue)] transition-colors duration-200"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
            >
              BENNY GLASS
            </span>
            <span className="text-[9px] font-bold tracking-[.15em] uppercase text-[var(--blue)]">
              Claridad en cada detalle
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          <ul className="flex gap-7">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-[12px] font-bold tracking-[.09em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200 group/link"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--blue)] group-hover/link:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--blue)] text-white text-[13px] font-bold tracking-[.07em] uppercase rounded-md hover:bg-[var(--blue-lt)] hover:shadow-[0_8px_30px_rgba(29,58,240,.35)] active:scale-95 transition-all duration-200"
          >
            Cotiza ahora
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-[2px] bg-[var(--text)] rounded transition-transform duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[var(--text)] rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-[var(--text)] rounded transition-transform duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[72px] inset-x-0 z-40 bg-[#F4F8FF]/97 backdrop-blur-2xl border-b border-[var(--border)] px-5 pb-8"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="flex py-4 text-[14px] font-bold tracking-[.09em] uppercase text-[var(--muted)] border-b border-[var(--border)] hover:text-[var(--text)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waURL()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-5 flex justify-center w-full py-4 bg-[var(--blue)] text-white text-[14px] font-bold tracking-[.07em] uppercase rounded-md"
            >
              Cotiza ahora
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
