const en = {
  meta: {
    description:
      "Erik Martín Garzón, software developer in Manresa · Barcelona. Front-end first, back-end when needed, AI where it helps.",
  },
  nav: {
    backToTop: "Back to top",
    main: "Main",
    experience: "Experience",
    work: "Work",
    contact: "Contact",
    language: "Language",
  },
  hero: {
    label: "Software developer · Manresa · Barcelona",
    buildPrefix: "I build",
    buildWords: ["interfaces", "mobile apps", "AI tools", "APIs"],
    tagline:
      "Front-end first, back-end when the feature needs it, and AI wherever it saves someone time.",
    cta: "See my work",
    status: "Open to remote & on-site roles",
    scroll: "Scroll",
  },
  manifesto: {
    aria: "About my work",
    label: "What I do",
    text: "I care about the part of software people actually touch. I turn ideas into fast, friendly interfaces, jump into the back-end when a feature needs it, and use AI to make the way my team works a little smarter every week.",
  },
  experience: {
    label: "Experience",
    title: ["Software developer,", "shipping since March 2025."],
    years: (n) => (n === 1 ? "1 year" : `${n} years`),
    months: (n) => (n === 1 ? "1 month" : `${n} months`),
    days: (n) => (n === 1 ? "1 day" : `${n} days`),
    counting: "and counting",
    roles: [
      {
        title: "Front-end development",
        text: "My main job: building the interfaces of our products, from the first component to the last pixel, and jumping into back-end work whenever a feature needs it.",
      },
      {
        title: "AI-powered processes",
        text: "I help the team work better with AI: spotting repetitive steps, automating them and bringing new tools into our day-to-day.",
      },
      {
        title: "Project management",
        text: "I also lead some projects: planning, keeping everyone aligned and making sure what we build is what was actually needed.",
      },
    ],
  },
  stack: {
    label: "Toolbox",
    title: "The stack I reach for",
    rows: [
      "React ✦ Vue.js ✦ TypeScript ✦ JavaScript ✦ ",
      "Node.js ✦ PHP ✦ PostgreSQL ✦ REST APIs ✦ Local AI ✦ ",
    ],
    groups: [
      { name: "Front-end", items: ["React", "Vue.js", "TypeScript", "JavaScript", "Bootstrap"] },
      { name: "Back-end", items: ["Node.js", "PHP", "REST APIs"] },
      { name: "Data", items: ["PostgreSQL", "pgAdmin"] },
      { name: "AI", items: ["Local models", "Process automation"] },
    ],
  },
  projects: {
    label: "Selected work",
    title: ["Three projects,", "coming out soon."],
    note: "They're not public yet, so here's what they do and how I built them. Keep scrolling →",
    status: "Private · coming soon",
    more: "More on GitHub",
    items: {
      vibra: {
        kicker: "Running club platform",
        summary:
          "Everything a social running club needs in one place: members, events, bookings and a blog where coaches share their training tips.",
        features: [
          "Desktop admin panel to run the club",
          "Mobile app for runners and quick coach tasks",
          "Events, bookings and member management",
        ],
        tags: ["Desktop app", "Mobile app", "Full stack"],
      },
      "ai-studio": {
        kicker: "One sentence → one video",
        summary:
          "A desktop app that takes an idea summed up in a single sentence and turns it into a script, dialogue and a fully rendered video, ready to publish on YouTube.",
        features: [
          "End-to-end automated pipeline",
          "Runs entirely on local AI models",
          "Export framed and ready for YouTube",
        ],
        tags: ["Desktop app", "Local AI", "Automation"],
      },
      consolat: {
        kicker: "Google Form → pirate game",
        summary:
          "A long Google Form that measures how ready an entrepreneurial project is, turned into an interactive pirate game: get your ship ready to set sail, just like your business. Built in Unity for the Xarxa d'Emprenedoria Universitària de Barcelona. I built the API behind it and integrated it into the Unity game.",
        features: [
          "API endpoints for answers, progress and stats",
          "API integration with the Unity project",
          "User account management",
          "PostgreSQL database designed with pgAdmin",
        ],
        tags: ["REST API", "PostgreSQL", "Unity"],
      },
    },
    vibraMock: {
      title: "Next runs",
      events: ["Long run", "Intervals", "Coach blog"],
      booked: "Booked ✓",
      join: "Join",
      read: "Read",
    },
    studioMock: {
      prompt: "“A sentence is all it takes…”",
      steps: ["Idea", "Script", "Dialogue", "Video", "Render"],
      badge: "● local models",
    },
    voyageMock: {
      ready: "Ready to set sail",
      effects: ["crew aboard", "cargo loaded", "sails raised", "course plotted"],
      done: "⚓ Anchors up!",
    },
  },
  contact: {
    aboutLabel: "Off the clock",
    about:
      "When I'm not shipping features, I'm probably trying a new AI model on my own machine or exploring Catalonia in search of the next good coffee.",
    label: "Contact",
    title: "Let's build something people remember.",
    location: "Manresa · Barcelona · Remote & on-site",
  },
};

export default en;
