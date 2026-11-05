const es = {
  meta: {
    description:
      "Erik Martín Garzón, desarrollador de software en Manresa · Barcelona. Front-end primero, back-end cuando hace falta e IA donde ayuda.",
  },
  nav: {
    backToTop: "Volver arriba",
    main: "Principal",
    experience: "Experiencia",
    work: "Proyectos",
    contact: "Contacto",
    language: "Idioma",
  },
  hero: {
    label: "Desarrollador de software · Manresa · Barcelona",
    buildPrefix: "Construyo",
    buildWords: ["interfaces", "apps móviles", "herramientas de IA", "APIs"],
    tagline:
      "Front-end primero, back-end cuando la funcionalidad lo pide, e IA allí donde ahorra tiempo.",
    cta: "Ver mis proyectos",
    status: "Disponible en remoto y presencial",
    scroll: "Scroll",
  },
  manifesto: {
    aria: "Sobre mi trabajo",
    label: "Qué hago",
    text: "Me importa la parte del software que la gente toca. Convierto ideas en interfaces rápidas y amables, me meto en el back-end cuando una funcionalidad lo necesita y uso la IA para que mi equipo trabaje un poco mejor cada semana.",
  },
  experience: {
    label: "Experiencia",
    title: ["Desarrollador de software,", "en activo desde marzo de 2025."],
    years: (n) => (n === 1 ? "1 año" : `${n} años`),
    months: (n) => (n === 1 ? "1 mes" : `${n} meses`),
    days: (n) => (n === 1 ? "1 día" : `${n} días`),
    counting: "y sumando",
    roles: [
      {
        title: "Desarrollo front-end",
        text: "Mi trabajo principal: construir las interfaces de nuestros productos, del primer componente al último píxel, y meterme en el back-end cuando una funcionalidad lo necesita.",
      },
      {
        title: "Procesos con IA",
        text: "Ayudo al equipo a trabajar mejor con IA: detecto pasos repetitivos, los automatizo e incorporo nuevas herramientas a nuestro día a día.",
      },
      {
        title: "Gestión de proyectos",
        text: "También llevo algunos proyectos: planificación, mantener a todo el equipo alineado y asegurar que lo que construimos es lo que realmente se necesitaba.",
      },
    ],
  },
  stack: {
    label: "Herramientas",
    title: "El stack que uso a diario",
    rows: [
      "React ✦ Vue.js ✦ TypeScript ✦ JavaScript ✦ ",
      "Node.js ✦ PHP ✦ PostgreSQL ✦ APIs REST ✦ IA local ✦ ",
    ],
    groups: [
      { name: "Front-end", items: ["React", "Vue.js", "TypeScript", "JavaScript", "Bootstrap"] },
      { name: "Back-end", items: ["Node.js", "PHP", "APIs REST"] },
      { name: "Datos", items: ["PostgreSQL", "pgAdmin"] },
      { name: "IA", items: ["Modelos locales", "Automatización de procesos"] },
    ],
  },
  projects: {
    label: "Proyectos destacados",
    title: ["Tres proyectos,", "a punto de salir."],
    note: "Todavía no son públicos, así que te cuento qué hacen y cómo los construí. Sigue bajando →",
    status: "Privado · muy pronto",
    more: "Más en GitHub",
    items: {
      vibra: {
        kicker: "Plataforma para un club de running",
        summary:
          "Todo lo que necesita un club social de running en un solo lugar: socios, eventos, reservas y un blog donde los entrenadores comparten sus consejos.",
        features: [
          "Panel de gestión de escritorio para llevar el club",
          "App móvil para los corredores y gestiones rápidas de los entrenadores",
          "Gestión de eventos, reservas y socios",
        ],
        tags: ["App de escritorio", "App móvil", "Full stack"],
      },
      "ai-studio": {
        kicker: "Una frase → un vídeo",
        summary:
          "Una app de escritorio que coge una idea resumida en una sola frase y la convierte en guion, diálogo y un vídeo renderizado, listo para publicar en YouTube.",
        features: [
          "Pipeline automatizado de principio a fin",
          "Funciona íntegramente con modelos de IA locales",
          "Exporta encuadrado y listo para YouTube",
        ],
        tags: ["App de escritorio", "IA local", "Automatización"],
      },
      consolat: {
        kicker: "Google Form → juego pirata",
        summary:
          "Un Google Form muy largo que mide lo preparado que está un proyecto emprendedor, convertido en un juego pirata interactivo: prepara tu barco para zarpar, igual que tu negocio. Hecho en Unity para la Xarxa d'Emprenedoria Universitària de Barcelona. Construí la API y la integré en el juego de Unity.",
        features: [
          "Endpoints de la API para respuestas, progreso y estadísticas",
          "Integración de la API con el proyecto de Unity",
          "Gestión de cuentas de usuario",
          "Base de datos PostgreSQL diseñada con pgAdmin",
        ],
        tags: ["API REST", "PostgreSQL", "Unity"],
      },
    },
    vibraMock: {
      title: "Próximas salidas",
      events: ["Tirada larga", "Series", "Blog entrenadores"],
      booked: "Reservado ✓",
      join: "Apúntate",
      read: "Leer",
    },
    studioMock: {
      prompt: "“Basta con una frase…”",
      steps: ["Idea", "Guion", "Diálogo", "Vídeo", "Render"],
      badge: "● modelos locales",
    },
    voyageMock: {
      ready: "Listo para zarpar",
      effects: ["tripulación a bordo", "carga estibada", "velas izadas", "rumbo trazado"],
      done: "⚓ ¡Leven anclas!",
    },
  },
  contact: {
    aboutLabel: "Fuera del trabajo",
    about:
      "Cuando no estoy sacando funcionalidades, seguramente estoy probando un modelo de IA nuevo en mi ordenador o recorriendo Cataluña en busca del próximo buen café.",
    label: "Contacto",
    title: "Construyamos algo que la gente recuerde.",
    location: "Manresa · Barcelona · Remoto y presencial",
  },
};

export default es;
