export const CONFIG = {
  businessName:    "Benny Glass",
  tagline:         "Claridad en cada detalle",
  whatsappNumber:  "524432685089",
  whatsappMessage: "Hola Benny! Me interesa una cotización 🪟",
  city:            "Morelia, Michoacán",
  projectsCount:   "150+",
  yearsExperience: "8+",
  email:           "contacto@bennyglass.mx",
} as const;

export function waURL(message = CONFIG.whatsappMessage) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const SERVICES = [
  {
    id: "canceleria",
    name: "Cancelería de aluminio",
    desc: "Ventanas y puertas a medida con perfiles de aluminio de alta resistencia. Acabados natural, blanco o bronce.",
    featured: false,
  },
  {
    id: "fachadas",
    name: "Fachadas de cristal",
    desc: "Envolventes de vidrio templado para fachadas comerciales e industriales. Diseño moderno, máxima luminosidad.",
    featured: true,
  },
  {
    id: "divisiones",
    name: "Divisiones",
    desc: "Para oficinas o baños. Vidrio templado con herrajes de acero inoxidable.",
    featured: false,
  },
  {
    id: "espejos",
    name: "Espejos decorativos",
    desc: "Espejos biselados, plateados y de colores para espacios residenciales y comerciales.",
    featured: false,
  },
  {
    id: "barandales",
    name: "Barandales de vidrio",
    desc: "Vidrio templado de seguridad con pinzas y postes de acero inoxidable.",
    featured: false,
  },
  {
    id: "herrajes",
    name: "Tapajuntas & herrajes",
    desc: "Tapajuntas de aluminio, sellados con silicón estructural, y herrajes premium. El detalle que hace la diferencia.",
    featured: false,
  },
] as const;

export const PROJECTS = [
  { id: 1, title: "Fachada corporativa",    category: "fachadas",   src: "https://picsum.photos/seed/bgg1/900/680" },
  { id: 2, title: "Ventanas residenciales", category: "canceleria", src: "https://picsum.photos/seed/bgg2/700/520" },
  { id: 3, title: "División de oficina",    category: "divisiones", src: "https://picsum.photos/seed/bgg3/600/450" },
  { id: 4, title: "Cancelería comercial",   category: "canceleria", src: "https://picsum.photos/seed/bgg4/600/450" },
  { id: 5, title: "Espejo de baño",         category: "espejos",    src: "https://picsum.photos/seed/bgg5/600/450" },
  { id: 6, title: "Fachada residencial",    category: "fachadas",   src: "https://picsum.photos/seed/bgg6/800/600" },
  { id: 7, title: "Barandal de vidrio",     category: "divisiones", src: "https://picsum.photos/seed/bgg7/800/600" },
] as const;

export type ProjectCategory = "all" | "canceleria" | "fachadas" | "divisiones" | "espejos";

export const CATEGORY_LABELS: Record<string, string> = {
  canceleria: "Cancelería",
  fachadas:   "Fachadas",
  divisiones: "Divisiones",
  espejos:    "Espejos",
};
