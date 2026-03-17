export type Experience = {
  company: string;
  title: string;
  location?: string;
  start: string;
  end: string;
  highlights?: string[];
};

export type Education = {
  school: string;
  program: string;
  start?: string;
  end?: string;
};

export const profile = {
  name: "Kaká Cordovil",
  role: "Consultant at Mind Source",
  location: "Porto Metropolitan Area",
  tagline: "Enterprise polish. Edgy curiosity. Built for momentum.",
  summary: [
    "Icamiaba in tech — a modern Amazon warrior: always listening, always discovering, always eager to share and grow together.",
    "I’m a web developer with a strong Java foundation, driven by an endless learning loop and a curiosity that spans far beyond technology.",
    "Rooted, urban, and pragmatic: I love shipping real things while continuously raising the bar.",
  ],
  links: {
    email: "kakacordovil@gmail.com",
    phone: "+351 912841752",
    phoneTel: "+351912841752",
    linkedin: "https://www.linkedin.com/in/kakacordovil",
    instagram: "https://www.instagram.com/error418.code/",
    github: "https://github.com/kakacordovil",
    portfolio: "#portfolio",
  },
  topSkills: ["Artificial Intelligence (AI)", "Communication", "Java"],
  languages: ["Portuguese (Native or Bilingual)", "English (Limited Working)"],
  certifications: ["Introduction to Programming Using JavaScript"],
  experience: [
    {
      company: "Mind Source",
      title: "Consultant",
      location: "Portugal",
      start: "Apr 2023",
      end: "Present",
    },
    {
      company: "Oryon",
      title: "UI/UX Developer",
      location: "Porto, Portugal",
      start: "Aug 2021",
      end: "Apr 2023",
    },
    {
      company: "RHmais",
      title: "Front Office Assistant",
      location: "Porto, Portugal",
      start: "Jul 2020",
      end: "Jul 2021",
    },
    {
      company: "ManpowerGroup Solutions",
      title: "Front office",
      location: "Porto, Porto, Portugal",
      start: "Oct 2017",
      end: "Feb 2020",
      highlights: [
        "Altice (MEO) Technician Care — ADSL and optical fiber customer support via call center (configuration and recovery).",
      ],
    },
    {
      company: "desblogada",
      title: "Unblogger",
      start: "Feb 2015",
      end: "Nov 2019",
      highlights: [
        "Entertainment blog & vlog: content creation, recording, video editing, and social media strategy.",
      ],
    },
    {
      company: "8 bar bistrô",
      title: "Marketing Manager",
      start: "Aug 2012",
      end: "Jul 2015",
      highlights: ["Marketing and social media management."],
    },
    {
      company: "Caixa de Criadores",
      title: "Fashion Producer",
      location: "Belém, Pará",
      start: "Jun 2012",
      end: "Jun 2012",
      highlights: [
        "Team leadership, style sequence organization, and look composition monitoring for runway sequence.",
      ],
    },
    {
      company: "Luminosidade",
      title: "Production Assistant (SPFW)",
      location: "São Paulo, Brazil",
      start: "Jun 2011",
      end: "2011",
      highlights: [
        "Supported São Paulo Fashion Week production: exhibition hall checks and guest reception.",
      ],
    },
    {
      company: "Revista Sopro",
      title: "Fashion Assistant",
      location: "Belém, Pará",
      start: "May 2010",
      end: "Nov 2010",
      highlights: ["Fashion production assistance, stylist support, and figuration."],
    },
  ] satisfies Experience[],
  education: [
    {
      school: "<Academia de Código_>",
      program: "Programming Academy",
      start: "2020",
      end: "2020",
    },
    {
      school: "Galileu",
      program: "Programming Academy (JAVA)",
      start: "2018",
      end: "2019",
    },
    {
      school: "Estratego",
      program: "MBA — Marketing, Promotion and Publicity",
      start: "2013",
      end: "2015",
    },
    {
      school: "Istituto Europeo di Design — IED São Paulo",
      program: "Extension — Fashion Production, Fashion Merchandising",
      start: "2010",
      end: "2010",
    },
    {
      school: "Universidade da Amazônia",
      program: "Bachelor of Fashion — Fashion/Apparel Design",
      start: "2008",
      end: "2010",
    },
  ] satisfies Education[],
};

