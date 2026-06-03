export type PageLink = { label: string; href: string };
export type FaqItem = { question: string; answer: string };
export type SeoPageContent = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  primaryCta: string;
  secondaryCta?: string;
  intent: "comercial" | "servicio" | "informativo";
  canonicalPath: string;
  keywords: string[];
  supportLinks: PageLink[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: FaqItem[];
  noindex?: boolean;
};
export const siteUrl = "https://ingerack.cl";
const contacto = { label: "Solicitar cotización", href: "/#contacto" };
export const commercialPages: Record<string, SeoPageContent> = {
  "rack-industrial": {
    slug: "rack-industrial",
    canonicalPath: "/rack-industrial/",
    title: "Rack Industrial en Chile | Racks para Bodegas Ingerack",
    description: "Cotiza racks industriales para bodegas en Chile. Diseño, fabricación y montaje a medida para pallets, carga pesada y operación logística.",
    h1: "Rack industrial para bodegas: diseño, fabricación y montaje en Chile",
    eyebrow: "Racks industriales para bodegas",
    lead: "Diseñamos racks industriales para bodegas según carga, flujo operativo, altura disponible, pasillos y proyección de crecimiento. Cotiza una solución técnica para almacenar más con seguridad.",
    primaryCta: "Cotizar rack industrial",
    secondaryCta: "Ver criterios de diseño",
    intent: "comercial",
    keywords: ["rack industrial", "racks industriales", "rack para bodegas", "racks para bodegas", "rack bodega industrial", "fabricación de racks"],
    supportLinks: [{ label: "Ver rack selectivo", href: "/productos/rack-selectivo/" }, { label: "Racks para pallets", href: "/blog/racks-para-pallets-medidas-capacidad-seguridad/" }, { label: "Guía para elegir racks", href: "/blog/como-elegir-racks-para-bodegas/" }, contacto],
    sections: [
      { heading: "Cuándo conviene implementar racks industriales", body: "Un rack industrial es recomendable cuando la bodega necesita ordenar inventario, aumentar posiciones de almacenamiento, mejorar acceso a productos o preparar una operación con mayor rotación.", bullets: ["Bodegas con pallets, carga pesada o SKU de distintas dimensiones.", "Operaciones con picking, reposición, despacho frecuente o crecimiento proyectado.", "Empresas que requieren diseño, fabricación y montaje de racks con criterio técnico."] },
      { heading: "Diseño según carga, espacio y operación", body: "El diseño considera peso por nivel, altura útil, tipo de pallet, equipo de manipulación, ancho de pasillos, zonas de carga y continuidad del proceso logístico.", bullets: ["Cálculo de capacidad por nivel y configuración de módulos.", "Aprovechamiento de altura disponible sin comprometer seguridad.", "Definición de accesos para grúa, transpaleta, picking o reposición."] },
      { heading: "Fabricación y montaje de racks para bodegas", body: "Ingerack acompaña el proyecto desde el levantamiento técnico hasta la instalación, priorizando seguridad estructural, uso eficiente del espacio y facilidad de operación diaria." },
    ],
    faqs: [{ question: "¿Qué datos se necesitan para cotizar un rack industrial?", answer: "Medidas del espacio, tipo de carga, peso por pallet o nivel, altura disponible, cantidad de posiciones y si la operación usa pallets, picking manual o ambos." }, { question: "¿Ingerack fabrica e instala racks industriales?", answer: "Sí. Ingerack diseña, fabrica y monta soluciones de rack para bodegas industriales en Chile." }, { question: "¿El rack industrial sirve para carga pesada?", answer: "Sí, siempre que se calcule según peso real, distribución de carga, altura, anclajes y condiciones de operación." }],
  },
  "productos/rack-selectivo": {
    slug: "productos/rack-selectivo",
    canonicalPath: "/productos/rack-selectivo/",
    title: "Rack Selectivo para Pallets y Bodegas | Ingerack",
    description: "Rack selectivo para pallets y bodegas industriales en Chile. Acceso directo, diseño a medida, fabricación y montaje especializado.",
    h1: "Rack selectivo para pallets, bodegas y carga industrial",
    eyebrow: "Rack selectivo para pallets",
    lead: "El rack selectivo permite acceso directo a cada pallet o posición de almacenamiento. Es una solución flexible para bodegas con alta variedad de productos y operación logística dinámica.",
    primaryCta: "Cotizar rack selectivo",
    secondaryCta: "Revisar ventajas",
    intent: "comercial",
    keywords: ["rack selectivo", "rack selectivo para pallets", "rack selectivo chile", "rack pallet", "racks para bodegas", "racks industriales"],
    supportLinks: [{ label: "Comparar selectivo vs dinámico", href: "/blog/rack-selectivo-vs-rack-dinamico/" }, { label: "Ver rack industrial", href: "/rack-industrial/" }, { label: "Racks para pallets", href: "/blog/racks-para-pallets-medidas-capacidad-seguridad/" }, contacto],
    sections: [{ heading: "Ventajas del rack selectivo", body: "Permite acceso directo, reorganización flexible y compatibilidad con pallets de distintas dimensiones o diferentes alturas de almacenamiento.", bullets: ["Ideal para bodegas con muchos SKU y rotación variable.", "Facilita inventario, reposición y preparación de pedidos.", "Permite crecer por módulos según capacidad requerida."] }, { heading: "Diseño seguro para pallets y carga pesada", body: "La configuración debe considerar capacidad de carga, tipo de pallet, equipo de manipulación, pasillos, altura útil y frecuencia de movimiento para evitar sobredimensionar o subdimensionar la estructura." }, { heading: "Cuándo elegir rack selectivo", body: "Conviene cuando la prioridad es acceder rápido a cada posición de almacenamiento, mantener flexibilidad operativa y ordenar la bodega sin depender de sistemas de alta densidad." }],
    faqs: [{ question: "¿Cuándo elegir rack selectivo?", answer: "Cuando se requiere acceso directo a muchos SKU, rotación variable y una solución flexible para pallets o carga industrial." }, { question: "¿El rack selectivo sirve para carga pesada?", answer: "Sí, si se calcula según carga real, dimensiones de pallet, altura, pasillos y condiciones de operación." }, { question: "¿Se puede fabricar a medida?", answer: "Sí. La configuración se adapta a medidas del espacio, cantidad de posiciones, carga y flujo de la bodega." }],
  },
  "rack-de-almacenaje": {
    slug: "rack-de-almacenaje",
    canonicalPath: "/rack-de-almacenaje/",
    title: "Rack de almacenaje para bodegas | Soluciones industriales",
    description: "Racks de almacenaje para ordenar, aumentar capacidad y mejorar operación en bodegas industriales. Evalúa tu espacio con Ingerack.",
    h1: "Rack de almacenaje para optimizar bodegas industriales",
    eyebrow: "Optimización de almacenamiento",
    lead: "Un rack de almacenaje bien diseñado mejora uso del espacio, reduce desorden operativo y facilita recepción, picking y despacho.",
    primaryCta: "Solicitar evaluación de almacenaje",
    intent: "comercial",
    keywords: ["rack de almacenaje", "rack almacenamiento", "racks de almacenamiento"],
    supportLinks: [{ label: "Racks para bodegas", href: "/rack-industrial/" }, { label: "Layout de bodega", href: "/layout-de-bodega/" }, contacto],
    sections: [{ heading: "Objetivo de un sistema de almacenaje", body: "Equilibrar capacidad, acceso, seguridad y costos según peso, volumen, rotación y forma de manipulación." }, { heading: "Criterios para elegir", body: "Altura, pasillos, zonas de carga, crecimiento esperado y necesidades de mantenimiento." }],
    faqs: [{ question: "¿Es lo mismo que rack industrial?", answer: "Rack de almacenaje es general; rack industrial suele referirse a soluciones robustas para bodegas, pallets y carga pesada." }, { question: "¿Se diseña a medida?", answer: "Sí, según espacio, carga y operación." }],
  },
  "layout-de-bodega": {
    slug: "layout-de-bodega",
    canonicalPath: "/layout-de-bodega/",
    title: "Layout de bodega | Diseño para optimizar espacio y racks",
    description: "Diseño de layout de bodega para mejorar capacidad, pasillos, flujo operativo y ubicación de racks industriales. Solicita asesoría técnica.",
    h1: "Layout de bodega para mejorar capacidad, flujo y seguridad",
    eyebrow: "Optimización operacional",
    lead: "El layout define cómo se usan los metros disponibles y evita pasillos ineficientes, zonas saturadas y racks mal ubicados.",
    primaryCta: "Solicitar diseño de layout",
    intent: "servicio",
    keywords: ["layout de bodega", "diseño de bodega industrial", "optimización de bodegas"],
    supportLinks: [{ label: "Rack industrial", href: "/rack-industrial/" }, { label: "Racks de almacenaje", href: "/rack-de-almacenaje/" }, contacto],
    sections: [{ heading: "Qué considera un layout eficiente", body: "Ubicación de racks, pasillos, recepción, despacho, seguridad, altura útil y flujo de personas/equipos." }, { heading: "Impacto en costos", body: "Puede aumentar capacidad sin ampliar infraestructura y reducir movimientos innecesarios." }],
    faqs: [{ question: "¿Se define antes de comprar racks?", answer: "Sí, permite elegir el tipo de rack y configuración correcta." }, { question: "¿Sirve para bodegas pequeñas?", answer: "Sí, especialmente para aprovechar altura y ordenar productos." }],
  },
  "mantenimiento-de-racks": {
    slug: "mantenimiento-de-racks",
    canonicalPath: "/mantenimiento-de-racks/",
    title: "Mantenimiento de racks industriales | Inspección y seguridad",
    description: "Servicio de mantenimiento e inspección de racks industriales. Revisión de daños, seguridad, anclajes y estructura para bodegas en Chile.",
    h1: "Mantenimiento e inspección de racks industriales",
    eyebrow: "Servicio técnico B2B",
    lead: "El mantenimiento detecta deformaciones, golpes, anclajes deficientes y riesgos para continuidad operacional y seguridad.",
    primaryCta: "Agendar revisión de racks",
    intent: "servicio",
    keywords: ["mantenimiento de racks industriales", "inspección de racks", "seguridad en racks"],
    supportLinks: [{ label: "Servicios para racks", href: "/servicios-para-racks-industriales/" }, { label: "Guía de inspección", href: "/blog/mantenimiento-inspeccion-racks-industriales/" }, contacto],
    sections: [{ heading: "Qué se revisa", body: "Verticales, largueros, uniones, anclajes, protecciones, deformaciones, impactos y condiciones de uso." }, { heading: "Cuándo solicitar mantenimiento", body: "Después de golpes, cambios de carga, modificaciones de layout o como control preventivo anual." }],
    faqs: [{ question: "¿Cada cuánto revisar?", answer: "Depende de la operación, pero una revisión preventiva anual suele ser recomendable." }, { question: "¿Se reparan racks dañados?", answer: "Depende del daño; la inspección define si reparar, reforzar o reemplazar." }],
  },
  "servicios-para-racks-industriales": {
    slug: "servicios-para-racks-industriales",
    canonicalPath: "/servicios-para-racks-industriales/",
    title: "Servicios para racks industriales | Diseño, montaje y mantenimiento",
    description: "Servicios para racks industriales: diseño, fabricación, montaje, optimización de bodegas, inspección y mantenimiento. Cotiza con Ingerack.",
    h1: "Servicios para racks industriales y bodegas",
    eyebrow: "Diseño, montaje y mantenimiento",
    lead: "Ingerack acompaña proyectos de racks desde la evaluación del espacio hasta fabricación, montaje, mantenimiento y optimización.",
    primaryCta: "Solicitar servicio para racks",
    intent: "servicio",
    keywords: ["servicios racks industriales", "montaje de racks", "fabricación de racks", "mantenimiento de racks"],
    supportLinks: [{ label: "Rack industrial", href: "/rack-industrial/" }, { label: "Mantenimiento", href: "/mantenimiento-de-racks/" }, contacto],
    sections: [{ heading: "Servicios principales", body: "Diseño y optimización de bodegas, fabricación, montaje, inspección y mantenimiento.", bullets: ["Diseño de racks y layout.", "Fabricación de racks industriales.", "Montaje, inspección y mantenimiento."] }, { heading: "Orientación B2B", body: "Consideramos capacidad, crecimiento, tiempos de operación, seguridad y continuidad del negocio." }],
    faqs: [{ question: "¿Realizan montaje?", answer: "Sí, con diseño, fabricación, transporte, montaje y recomendaciones." }, { question: "¿Revisan racks instalados?", answer: "Sí, con inspección o mantenimiento para evaluar estado y seguridad." }],
  },
};
export const blogPages: Record<string, SeoPageContent> = {
  "como-elegir-racks-para-bodegas": {
    slug: "blog/como-elegir-racks-para-bodegas",
    canonicalPath: "/blog/como-elegir-racks-para-bodegas/",
    title: "Cómo elegir racks para bodegas según carga, espacio y operación",
    description: "Guía para elegir racks para bodegas según carga, altura, operación y flujo logístico. Incluye criterios para cotizar con foco B2B.",
    h1: "Cómo elegir racks para bodegas según carga, espacio y operación",
    eyebrow: "Borrador SEO junio · noindex",
    lead: "Elegir racks para bodegas no depende solo del precio: considera carga, espacio, altura, operación y seguridad.",
    primaryCta: "Solicitar asesoría para diseñar racks para bodega",
    intent: "informativo",
    noindex: true,
    keywords: ["cómo elegir racks para bodegas", "racks para bodegas", "rack bodega industrial"],
    supportLinks: [{ label: "Rack industrial", href: "/rack-industrial/" }, { label: "Rack selectivo", href: "/productos/rack-selectivo/" }, contacto],
    sections: [{ heading: "1. Define carga y producto", body: "Peso por nivel, dimensiones y uso de pallets determinan la estructura requerida." }, { heading: "2. Revisa altura y pasillos", body: "Altura disponible, pasillos y equipos definen si conviene selectivo, dinámico, drive in o cantilever." }, { heading: "3. Evalúa la operación", body: "Alta rotación exige acceso; baja rotación puede priorizar densidad." }],
    faqs: [{ question: "¿Cuál es el mejor rack?", answer: "Depende de carga, espacio y operación; para muchos SKU suele convenir rack selectivo." }, { question: "¿Cuándo pedir asesoría?", answer: "Antes de comprar o fabricar, especialmente con carga pesada o pallets." }],
  },
  "rack-selectivo-vs-rack-dinamico": {
    slug: "blog/rack-selectivo-vs-rack-dinamico",
    canonicalPath: "/blog/rack-selectivo-vs-rack-dinamico/",
    title: "Rack selectivo vs rack dinámico: cuál conviene para tu bodega",
    description: "Comparativa entre rack selectivo y rack dinámico para bodegas industriales. Conoce ventajas, usos y criterios para cotizar.",
    h1: "Rack selectivo vs rack dinámico: cuál conviene para tu bodega",
    eyebrow: "Borrador SEO junio · noindex",
    lead: "Ambos sistemas resuelven necesidades distintas según rotación, variedad de productos, espacio y preparación de pedidos.",
    primaryCta: "Cotizar sistema de rack según flujo de operación",
    intent: "informativo",
    noindex: true,
    keywords: ["rack selectivo vs rack dinámico", "tipos de racks industriales", "rack selectivo", "rack dinámico"],
    supportLinks: [{ label: "Rack selectivo", href: "/productos/rack-selectivo/" }, { label: "Rack industrial", href: "/rack-industrial/" }, contacto],
    sections: [{ heading: "Selectivo: acceso y flexibilidad", body: "Útil para muchos SKU y reorganización rápida." }, { heading: "Dinámico: flujo y rotación", body: "Conviene en operación FIFO o alto volumen." }, { heading: "Cómo decidir", body: "Acceso directo: selectivo. Flujo y densidad: evaluar dinámico." }],
    faqs: [{ question: "¿El dinámico siempre es mejor?", answer: "No, depende de SKU, flujo y objetivo operativo." }, { question: "¿Se pueden combinar?", answer: "Sí, por zonas o familias de productos." }],
  },
  "racks-para-pallets-medidas-capacidad-seguridad": {
    slug: "blog/racks-para-pallets-medidas-capacidad-seguridad",
    canonicalPath: "/blog/racks-para-pallets-medidas-capacidad-seguridad/",
    title: "Racks para pallets: medidas, capacidad y criterios de seguridad",
    description: "Guía de racks para pallets: medidas, capacidad, carga pesada y seguridad para bodegas industriales. Solicita evaluación técnica.",
    h1: "Racks para pallets: medidas, capacidad y criterios de seguridad",
    eyebrow: "Borrador SEO junio · noindex",
    lead: "Los racks para pallets deben dimensionarse según carga real, tipo de pallet, altura de almacenamiento y seguridad operacional.",
    primaryCta: "Solicitar evaluación técnica para pallets y carga pesada",
    intent: "informativo",
    noindex: true,
    keywords: ["racks para pallets medidas", "rack para pallets", "capacidad de racks"],
    supportLinks: [{ label: "Rack industrial", href: "/rack-industrial/" }, { label: "Rack selectivo", href: "/productos/rack-selectivo/" }, contacto],
    sections: [{ heading: "Medidas y configuración", body: "Dependen del pallet, altura, equipos y posiciones necesarias." }, { heading: "Capacidad de carga", body: "Se calcula por peso, distribución, niveles y componentes." }, { heading: "Seguridad", body: "Revisar anclajes, protecciones, estabilidad y mantenimiento." }],
    faqs: [{ question: "¿Qué información se requiere?", answer: "Dimensiones, peso, altura, posiciones, equipo y flujo." }, { question: "¿Pueden ser a medida?", answer: "Sí, según carga, espacio y operación." }],
  },
  "mantenimiento-inspeccion-racks-industriales": {
    slug: "blog/mantenimiento-inspeccion-racks-industriales",
    canonicalPath: "/blog/mantenimiento-inspeccion-racks-industriales/",
    title: "Mantenimiento e inspección de racks industriales: qué revisar",
    description: "Checklist de mantenimiento e inspección de racks industriales: seguridad, anclajes, golpes, deformaciones y frecuencia de revisión.",
    h1: "Mantenimiento e inspección de racks industriales: qué revisar y cuándo hacerlo",
    eyebrow: "Borrador SEO junio · noindex",
    lead: "La inspección preventiva ayuda a detectar riesgos antes de que afecten seguridad, operación o continuidad de la bodega.",
    primaryCta: "Agendar revisión o mantenimiento de racks industriales",
    intent: "informativo",
    noindex: true,
    keywords: ["mantenimiento de racks industriales", "inspección de racks", "seguridad en racks"],
    supportLinks: [{ label: "Mantenimiento de racks", href: "/mantenimiento-de-racks/" }, { label: "Servicios para racks", href: "/servicios-para-racks-industriales/" }, contacto],
    sections: [{ heading: "Qué revisar", body: "Golpes, deformaciones, corrosión, largueros, verticales, uniones, protecciones y anclajes." }, { heading: "Frecuencia", body: "Depende del uso; una revisión preventiva anual es una buena práctica." }, { heading: "Daño visible", body: "Registrar el hallazgo y solicitar evaluación técnica antes de seguir operando con carga." }],
    faqs: [{ question: "¿Evita accidentes?", answer: "Ayuda a detectar condiciones de riesgo y prevenir fallas." }, { question: "¿Inspeccionar racks nuevos?", answer: "Sí, después del montaje y al cambiar la carga o distribución." }],
  },
};
export const allSeoPages = { ...commercialPages, ...blogPages };
export function absoluteUrl(path: string) { return `${siteUrl}${path}`; }
export function pageJsonLd(page: SeoPageContent) {
  return [{ "@context": "https://schema.org", "@type": page.noindex ? "BlogPosting" : "Service", headline: page.h1, description: page.description, url: absoluteUrl(page.canonicalPath), publisher: { "@type": "Organization", name: "Ingerack", url: siteUrl } }, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }];
}
