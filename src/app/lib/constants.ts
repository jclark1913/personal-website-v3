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
    path: "/assets/resume.pdf",
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
    description: "An AI-empowered web scraper for monitoring Syrian media.",
    image: "images/syria-daily-brief.png",
    tag: ["all", "fullstack"],
    demoUrl: null,
    repoUrl: "https://github.com/jclark1913/syria-daily-brief",
    pypiUrl: null,
    tech: ["Python", "Flask", "PostgreSQL", "React", "Typescript", "TailwindCSS", "Pandas", "BeautifulSoup", "OpenAI"]
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
    demoUrl: "http://jobhunter.justinclark.bio/",
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
    demoUrl: "https://sillybird.justinclark.bio/",
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
    demoUrl: "https://michigan-facts-ts.vercel.app/facts",
    repoUrl: "https://github.com/jclark1913/michigan-facts-ts",
    pypiUrl: null,
    tech: ["Typescript", "NextJS", "Vercel", "Python", "Prisma"]
  },
  {
    id: 5,
    title: "justinclark.bio",
    description: "The website you're on right now",
    image: "images/portfolio.png",
    tag: ["all", "other"],
    demoUrl: "https://justinclark.bio/",
    repoUrl: "https://github.com/jclark1913/personal-website-v3",
    pypiUrl: null,
    tech: ["Typescript", "React", "TailwindCSS", "Vercel", "NextJS"]
  }
];

export const PROJECT_BUTTONS = [
  {
    display: "All",
    tag: "all"
  },
  {
    display: "Full Stack",
    tag: "fullstack"
  },
  {
    display: "Tools & Other",
    tag: "other"
  }
];

export const HERO_BLURB = "I'm a software engineer, professional translator, and consultant with eight years of experience working in journalism and conflict analysis. I'm passionate about OSINT tools, solving neat problems and using tech as a force for good.";