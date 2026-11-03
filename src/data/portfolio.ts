export const profile = {
  name: 'Roberto Abata',
  email: 'robercarl94@gmail.com',
  location: 'Guayaquil, Ecuador',
  timezone: 'America/Guayaquil',
  roles: ['Full Stack Developer.', 'Backend & APIs.', 'Apps móviles.', 'Tiempo real.'],
  summary:
    'Ingeniero de software con más de 5 años construyendo plataformas web y móviles. Especializado en arquitectura backend, APIs, integración de sistemas y tiempo real con Node.js, React, TypeScript y PostgreSQL.',
  links: {
    cv: '/cv/Roberto_Abata_CV.pdf',
    github: 'https://github.com/abato0',
    linkedin: 'https://www.linkedin.com/in/roberto-a-4071b4274',
  },
};

export const stackMarquee = [
  'TypeScript', 'React', 'Next.js', 'React Native', 'Node.js', 'GraphQL',
  'WebSockets', 'PostgreSQL', 'PostGIS', 'MongoDB', 'Redux', 'Tailwind CSS',
];

export const stats = [
  { value: '5+', label: 'años desarrollando software', countTo: 5 },
  { value: 'Web + Móvil', label: 'React · React Native · Node.js' },
  { value: 'Tiempo real', label: 'WebSockets y datos geoespaciales' },
];

export const combinia = {
  name: 'Combinia',
  tagline:
    'Tu armario, con inteligencia artificial. App móvil para digitalizar tus prendas, generar atuendos con IA sobre tu propia foto y planificar qué ponerte cada día de la semana.',
  features: [
    'Atuendos generados y recomendados por IA',
    'Armario digital con color, material y formalidad de cada prenda',
    'Planificador semanal según tu rutina',
    'Perfil de tallas y estilo, y panel de administración',
  ],
  stack: ['Kotlin', 'Android', 'IA generativa'], // ← confirma tu stack real
  storeUrl: 'https://github.com/Abato0/combinia-releases/releases/tag/v1.0.0',
  covers: [
    { src: '/mockups/portada-1-atuendos.webp', alt: 'Combinia: inicio, detalle de atuendo generado por IA y armario' },
    { src: '/mockups/portada-2-crear.webp', alt: 'Combinia: crear atuendo, fotos de modelo y detalle de prenda' },
    { src: '/mockups/portada-3-perfil-admin.webp', alt: 'Combinia: perfil, administración y planificador semanal' },
  ],
};

export const tourScreens = [
  { cmd: '> inicio', label: 'Inicio', src: '/mockups/01-inicio-mockup.webp',
    caption: 'Acceso rápido para crear un atuendo nuevo y ver tus looks guardados.' },
  { cmd: '> armario', label: 'Mi armario', src: '/mockups/02-prendas-mockup.webp',
    caption: 'Armario digital: prendas por categoría, búsqueda por nombre o color y prendas generadas por IA.' },
  { cmd: '> atuendo --ia', label: 'Detalle de atuendo', src: '/mockups/04-detalle-atuendo-mockup.webp',
    caption: 'Look recomendado por IA con descripción, estilo, ocasión, clima, valoración y sus prendas.' },
  { cmd: '> crear', label: 'Crear atuendo', src: '/mockups/05-crear-mockup.webp',
    caption: 'Elige prendas y genera la imagen del atuendo con IA sobre tu foto principal.' },
  { cmd: '> fotos-modelo', label: 'Fotos de modelo', src: '/mockups/06-fotos-modelo-mockup.webp',
    caption: 'Sube una foto de cuerpo completo: el fondo se quita automáticamente.' },
  { cmd: '> mi-semana', label: 'Planifica tu semana', src: '/mockups/08-planificar-semana-mockup.webp',
    caption: 'Define qué haces cada día y arma los atuendos de toda la semana.' },
  { cmd: '> configuracion', label: 'Configuración', src: '/mockups/11-configuracion-mockup.webp',
    caption: 'Tallas, ajuste preferido, estilos, colores y presupuesto por prenda.' },
  { cmd: '> admin', label: 'Administración', src: '/mockups/12-administracion-mockup.webp',
    caption: 'Gestión de usuarios, roles, estados y límites de uso por cuenta.' },
];

export const gallery = [
  ['01-inicio-mockup', 'Inicio'], ['02-prendas-mockup', 'Mi armario'],
  ['03-detalle-prenda-mockup', 'Detalle de prenda'], ['04-detalle-atuendo-mockup', 'Detalle de atuendo'],
  ['05-crear-mockup', 'Crear atuendo'], ['06-fotos-modelo-mockup', 'Mis fotos de modelo'],
  ['07-mi-semana-mockup', 'Mi semana'], ['08-planificar-semana-mockup', 'Planifica tu semana'],
  ['09-perfil-mockup', 'Perfil'], ['10-mis-atuendos-mockup', 'Mis atuendos'],
  ['11-configuracion-mockup', 'Configuración'], ['12-administracion-mockup', 'Administración'],
  ['13-favoritos-mockup', 'Favoritos'],
].map(([file, alt]) => ({ src: `/mockups/${file}.webp`, alt }));

// Proyectos de empresa: sin capturas, solo descripción técnica
export const projects = [
  { name: 'OSINT-360', cmd: 'osint-360', kind: 'plataforma web', client: 'Cajamarca Protective Services',
    tags: 'Node.js · PostGIS · WebSockets',
    description: 'Plataforma de inteligencia geoespacial: análisis y visualización de grandes volúmenes de datos geográficos con mapas interactivos y actualización en tiempo real.' },
  { name: 'Transforma', cmd: 'transforma', kind: 'web + móvil', client: 'Cajamarca Protective Services',
    tags: 'React Native · React · Node.js',
    description: 'Plataforma social web y móvil con comunicación en tiempo real, app en React Native y servicios backend en Node.js.' },
  { name: 'CajamarcaConmigo', cmd: 'cajamarca-conmigo', kind: 'app móvil', client: 'Cajamarca Protective Services',
    tags: 'React Native · APIs REST',
    description: 'Aplicación móvil corporativa con integración de APIs.' },
];

export const experience = [
  { period: 'ago 2023 — actual', current: true,
    title: 'Desarrollador de Software · Cajamarca Protective Services',
    description: 'Plataformas digitales y apps móviles. Proyecto Transforma (React Native + React + Node.js en tiempo real) y CajamarcaConmigo.' },
  { period: 'jul 2025 — oct 2025',
    title: 'Desarrollador Freelance · LogicalEC',
    description: 'Migración de plataforma de Node.js 13.4 a Node.js 24, refactor de servicios e integración de chatbot con chat por voz.' },
  { period: 'feb 2021 — ago 2023',
    title: 'Desarrollador de Software · Viamatica',
    description: 'Plataformas comerciales y sistemas empresariales (Ecuasuiza, Lotto, SellOut), módulos POS y facturación electrónica. Inicio como pasante.' },
];

export const stackGroups = [
  { title: 'FRONTEND', items: ['React', 'Next.js', 'Redux', 'Tailwind CSS'] },
  { title: 'MÓVIL', items: ['React Native'] },
  { title: 'BACKEND', items: ['Node.js', 'GraphQL', 'APIs REST', 'WebSockets'] },
  { title: 'DATOS · LENGUAJES', items: ['PostgreSQL / PostGIS', 'MongoDB', 'TypeScript', 'JavaScript'] },
];
