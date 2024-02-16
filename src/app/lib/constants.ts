export const NAV_LINKS = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Resume",
    path: "/",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Software Engineer",
    institution: "Rootwise, LLC",
    date: "2024 - Present",
    info: "Remote",
  },
  {
    title: "Software Consultant",
    institution: "ETANA Syria",
    date: "2023 - Present",
    info: "Remote",
  },
  {
    title: "Open Source Contributor",
    institution: "Bellingcat",
    date: "2023 - Present",
    info: "Remote",
  },
  {
    title: "Software Developer Intern",
    institution: "Rithm School",
    date: "2023",
    info: "Remote",
  },
  {
    title: "Senior Analyst",
    institution: "ETANA Syria",
    date: "2019 - 2023",
    info: "Amman, Jordan",
  },
  {
    title: "Journalist & Translator",
    institution: "Syria Direct / Freelance",
    date: "2016 - 2019",
    info: "Amman, Jordan",
  },
  {
    title: "Arabic Interpreter",
    institution: "Health Point Foundation",
    date: "2015",
    info: "Mytilini, Greece",
  }
];

export const EDUCATION = [
  {
    title: "Full Stack Software Development",
    institution: "Rithm School",
    date: "2023",
    info: "Remote",
  },
  {
    title: "Arabic Language (BA)",
    institution: "Western Michigan University",
    date: "2013-2016",
    info: "Kalamazoo, MI",
  },
  {
    title: "Arabic Language",
    institution: "Qasid Institute",
    date: "2015-2016",
    info: "Amman, Jordan",
  },
  {
    title: "Arabic Language",
    institution: "Bethlehem University",
    date: "2015",
    info: "Bethlehem, Palestine",
  }
];

// export const VOLUNTEERING = [
//   {
//     title: "Open Source Contributor",
//     institution: "Bellingcat",
//     date: "2023 - Present",
//     info: "Remote",
//   },
//   {
//     title: "Arabic Interpreter",
//     institution: "Health Point Foundation",
//     date: "2015",
//     info: "Mytilini, Greece",
//   }
// ];

export const ABOUT_TAB_DATA = [
  {
    title: "Experience",
    id: "work",
    content: WORK_EXPERIENCE
  },
  {
    title: "Education",
    id: "education",
    content: EDUCATION
  }
  // {
  //   title: "Volunteering",
  //   id: "volunteering",
  //   content: VOLUNTEERING
  // }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Syria Daily Brief",
    description: "A web scraper that monitors Syrian media and sends a daily email with the top headlines.",
    image: "images/syria-daily-brief.png",
    tag: ["all", "fullstack"],
    demoUrl: "https://syria-daily-brief.herokuapp.com/",
    repoUrl: "https://github.com/jclark1913/syria-daily-brief",
    pypiUrl: null,
    tech: ["Python", "Flask", "PostgreSQL", "React", "TypeScript", "TailwindCSS", "Pandas", "BeautifulSoup"]
  },
  {
    id: 2,
    title: "Wayback Google Analytics",
    description: "A tool for identifying disinformation networks using the Wayback Machine and Google Analytics.",
    image: "images/wayback-google-analytics.png",
    tag: ["all", "other"],
    demoUrl: "https://www.bellingcat.com/resources/2024/01/09/using-the-wayback-machine-and-google-analytics-to-uncover-disinformation-networks/",
    repoUrl: "https://github.com/bellingcat/wayback-google-analytics",
    pypiUrl: "https://pypi.org/project/wayback-google-analytics/",
    tech: ["Python", "Asyncio", "BeautifulSoup", "Pandas"]
  },
  {
    id: 3,
    title: "JobHunter",
    description: "A full stack job board app",
    image: "images/jobhunter.png",
    tag: ["all", "fullstack"],
    demoUrl: "https://jobhunter-app.herokuapp.com/",
    repoUrl: "https://github.com/jclark1913/jobhunter",
    pypiUrl: null,
    tech: ["Express", "Javascript", "PostgreSQL", "React"]
  },
  {
    id: 4,
    title: "Silly Bird",
    description: "A full stack clone of another, somehow sillier bird app",
    image: "images/silly-bird.png",
    tag: ["all", "fullstack"],
    demoUrl: "https://silly-bird.herokuapp.com/",
    repoUrl: "https://github.com/jclark1913/silly-bird",
    pypiUrl: null,
    tech: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "JQuery", "Bootstrap"]
  },
  {
    id: 5,
    title: "Michigan Facts",
    description: "A discord chatbot and serverless API that nobody asked for",
    image: "images/michigan-facts.jpeg",
    tag: ["all", "other"],
    demoUrl: null,
    repoUrl: "https://github.com/jclark1913/michigan-facts-ts",
    pypiUrl: null,
    tech: ["Typescript", "NextJS", "Vercel", "Python", "Prisma"]
  }
];

export const PROJECT_BUTTONS = [
  {
    display: "All",
    tag: "all"
  },
  {
    display: "Full Stack Apps",
    tag: "fullstack"
  },
  {
    display: "Tools & Other Projects",
    tag: "other"
  }
];