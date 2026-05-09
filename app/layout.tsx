import type { Metadata } from "next";
import "./globals.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";

export const metadata: Metadata = {
  title: "Benny Glass — Claridad en cada detalle",
  description: "Instalación profesional de cristales y aluminios en Morelia, Michoacán. Cancelería, fachadas, divisiones, espejos y más.",
  openGraph: {
    title: "Benny Glass — Claridad en cada detalle",
    description: "Instalación profesional de cristales y aluminios en Morelia, Michoacán.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-full antialiased overflow-x-hidden">
        <BackgroundCanvas />
        {children}
      </body>
    </html>
  );
}
