const ca = {
  meta: {
    description:
      "Erik Martín Garzón, desenvolupador de software a Manresa · Barcelona. Front-end primer, back-end quan cal i IA allà on ajuda.",
  },
  nav: {
    backToTop: "Tornar a dalt",
    main: "Principal",
    experience: "Experiència",
    work: "Projectes",
    contact: "Contacte",
    language: "Idioma",
  },
  hero: {
    label: "Desenvolupador de software · Manresa · Barcelona",
    buildPrefix: "Construeixo",
    buildWords: ["interfícies", "apps mòbils", "eines d'IA", "APIs"],
    tagline:
      "Front-end primer, back-end quan la funcionalitat ho demana, i IA allà on estalvia temps.",
    cta: "Veure els meus projectes",
    status: "Disponible en remot i presencial",
    scroll: "Scroll",
  },
  manifesto: {
    aria: "Sobre la meva feina",
    label: "Què faig",
    text: "M'importa la part del software que la gent toca. Converteixo idees en interfícies ràpides i amables, entro al back-end quan una funcionalitat ho necessita i faig servir la IA perquè el meu equip treballi una mica millor cada setmana.",
  },
  experience: {
    label: "Experiència",
    title: ["Desenvolupador de software,", "en actiu des del març de 2025."],
    years: (n) => (n === 1 ? "1 any" : `${n} anys`),
    months: (n) => (n === 1 ? "1 mes" : `${n} mesos`),
    days: (n) => (n === 1 ? "1 dia" : `${n} dies`),
    counting: "i comptant",
    roles: [
      {
        title: "Desenvolupament front-end",
        text: "La meva feina principal: construir les interfícies dels nostres productes, del primer component a l'últim píxel, i entrar al back-end quan una funcionalitat ho necessita.",
      },
      {
        title: "Processos amb IA",
        text: "Ajudo l'equip a treballar millor amb IA: detecto passos repetitius, els automatitzo i incorporo noves eines al nostre dia a dia.",
      },
      {
        title: "Gestió de projectes",
        text: "També porto alguns projectes: planificació, mantenir tot l'equip alineat i assegurar que el que construïm és el que realment es necessitava.",
      },
    ],
  },
  stack: {
    label: "Eines",
    title: "L'stack que faig servir cada dia",
    rows: [
      "React ✦ Vue.js ✦ TypeScript ✦ JavaScript ✦ ",
      "Node.js ✦ PHP ✦ PostgreSQL ✦ APIs REST ✦ IA local ✦ ",
    ],
    groups: [
      { name: "Front-end", items: ["React", "Vue.js", "TypeScript", "JavaScript", "Bootstrap"] },
      { name: "Back-end", items: ["Node.js", "PHP", "APIs REST"] },
      { name: "Dades", items: ["PostgreSQL", "pgAdmin"] },
      { name: "IA", items: ["Models locals", "Automatització de processos"] },
    ],
  },
  projects: {
    label: "Projectes destacats",
    title: ["Tres projectes,", "a punt de sortir."],
    note: "Encara no són públics, així que t'explico què fan i com els vaig construir. Continua baixant →",
    status: "Privat · molt aviat",
    more: "Més a GitHub",
    items: {
      vibra: {
        kicker: "Plataforma per a un club de running",
        summary:
          "Tot el que necessita un club social de running en un sol lloc: socis, esdeveniments, reserves i un blog on els entrenadors comparteixen els seus consells.",
        features: [
          "Panell de gestió d'escriptori per portar el club",
          "App mòbil per als corredors i gestions ràpides dels entrenadors",
          "Gestió d'esdeveniments, reserves i socis",
        ],
        tags: ["App d'escriptori", "App mòbil", "Full stack"],
      },
      "ai-studio": {
        kicker: "Una frase → un vídeo",
        summary:
          "Una app d'escriptori que agafa una idea resumida en una sola frase i la converteix en guió, diàleg i un vídeo renderitzat, a punt per publicar a YouTube.",
        features: [
          "Pipeline automatitzat de principi a fi",
          "Funciona íntegrament amb models d'IA locals",
          "Exporta enquadrat i a punt per a YouTube",
        ],
        tags: ["App d'escriptori", "IA local", "Automatització"],
      },
      consolat: {
        kicker: "Google Form → joc pirata",
        summary:
          "Un Google Form molt llarg que mesura com de preparat està un projecte emprenedor, convertit en un joc pirata interactiu: prepara el teu vaixell per salpar, igual que el teu negoci. Fet amb Unity per a la Xarxa d'Emprenedoria Universitària de Barcelona. Vaig construir l'API i la vaig integrar al joc de Unity.",
        features: [
          "Endpoints de l'API per a respostes, progrés i estadístiques",
          "Integració de l'API amb el projecte de Unity",
          "Gestió de comptes d'usuari",
          "Base de dades PostgreSQL dissenyada amb pgAdmin",
        ],
        tags: ["API REST", "PostgreSQL", "Unity"],
      },
    },
    vibraMock: {
      title: "Properes sortides",
      events: ["Tirada llarga", "Sèries", "Blog entrenadors"],
      booked: "Reservat ✓",
      join: "Apunta't",
      read: "Llegir",
    },
    studioMock: {
      prompt: "“N'hi ha prou amb una frase…”",
      steps: ["Idea", "Guió", "Diàleg", "Vídeo", "Render"],
      badge: "● models locals",
    },
    voyageMock: {
      ready: "A punt per salpar",
      effects: ["tripulació a bord", "càrrega estibada", "veles hissades", "rumb traçat"],
      done: "⚓ Lleveu àncores!",
    },
  },
  contact: {
    aboutLabel: "Fora de la feina",
    about:
      "Quan no estic enllestint funcionalitats, segurament estic provant un model d'IA nou al meu ordinador o recorrent Catalunya a la recerca del proper bon cafè.",
    label: "Contacte",
    title: "Construïm alguna cosa que la gent recordi.",
    location: "Manresa · Barcelona · Remot i presencial",
  },
};

export default ca;
