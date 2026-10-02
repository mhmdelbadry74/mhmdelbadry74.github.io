export const site = {
  name: "Mohamed Elbadry",
  shortName: "M. Elbadry",
  role: "Senior Backend Developer",
  location: "Nasr City, Cairo, Egypt",
  email: "m7mdelbadry72@gmail.com",
  phoneDisplay: "+20 10 1137 9206",
  phoneHref: "tel:+201011379206",
  whatsapp: "https://wa.me/201011379206",
  linkedin: "https://www.linkedin.com/in/mohamed-elbadry-4a38471b1",
  cvFile: "/Mohamed_Elbadry_Sr_Backend_Developer.pdf",
  nationality: "Egyptian",
  summary:
    "I design and ship PHP backends that other teams can actually depend on — REST APIs, SQL-heavy data layers, and third-party integrations that stay quiet in production. Eight years across product and agency teams in Egypt taught me to lead by coaching, set clear metrics, and keep delivery honest when the requirements move.",
  focus: [
    {
      title: "REST APIs",
      body: "Contract-first services that move data cleanly between clients, servers, and partner systems.",
    },
    {
      title: "PHP architecture",
      body: "Laravel, CakePHP, and CodeIgniter with SOLID, MVC/MVVM, and clean architecture habits.",
    },
    {
      title: "Data & SQL",
      body: "MySQL, SQL Server, and SQLite — queries, transport, and Firebase when the product needs it.",
    },
    {
      title: "Team leadership",
      body: "Coaching, onboarding, performance metrics, and cross-team coordination without slowing the build.",
    },
  ],
} as const;

export const experience = [
  {
    role: "Senior Backend Developer",
    company: "Promxa",
    location: "Cairo, Egypt",
    period: "Jan 2024 — Present",
    current: true,
    highlights: [
      "Lead backend delivery with regular coaching, feedback, and skill development for the team.",
      "Set clear performance metrics so progress against targets is visible, not guessed.",
      "Onboard new engineers on procedures, quality bars, and how we ship.",
      "Work with other department leads to streamline workflows and keep projects coordinated.",
      "Protect delivery quality and timelines so customer-facing work stays on standard.",
    ],
  },
  {
    role: "Senior Backend Developer",
    company: "AAIT",
    location: "Mansoura, Egypt",
    period: "Dec 2022 — Dec 2023",
    current: false,
    highlights: [
      "Built REST APIs for reliable data exchange between clients and servers in a distributed setup.",
      "Integrated third-party APIs from external applications into web platforms.",
      "Wrote API consumers and data clients so frontend and partner systems could talk without glue-code chaos.",
      "Tuned SQL queries and data transport for the paths that actually mattered.",
      "Took part in sprint planning, daily stand-ups, and backlog grooming with concrete timeline input.",
    ],
  },
  {
    role: "Senior Backend Developer",
    company: "Tqniat",
    location: "Cairo, Egypt",
    period: "Feb 2022 — Nov 2022",
    current: false,
    highlights: [
      "Shipped REST APIs used by web clients in a distributed environment.",
      "Wired third-party APIs into product surfaces and kept the contracts tidy.",
      "Owned SQL work and data transport for feature delivery.",
      "Kept frontend–backend integration explicit so the UI never had to guess at the payload.",
      "Contributed in Agile ceremonies — planning, stand-ups, and grooming.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Fourth Pyramid",
    location: "Mansoura, Egypt",
    period: "Aug 2021 — Feb 2022",
    current: false,
    highlights: [
      "Developed REST APIs for client–server data exchange.",
      "Integrated external APIs into web platforms.",
      "Built API clients and managed SQL queries for day-to-day product work.",
      "Worked in sprints with planning, stand-ups, and backlog grooming.",
    ],
  },
  {
    role: "Backend Developer",
    company: "ipda3 Tech",
    location: "Mansoura, Egypt",
    period: "Sep 2020 — Aug 2021",
    current: false,
    highlights: [
      "Delivered REST APIs and JSON contracts for web platforms.",
      "Integrated third-party services and consumed partner APIs.",
      "Handled SQL queries, data transport, and frontend–backend wiring.",
      "Worked inside an Agile cadence with the rest of the delivery team.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Brand Up",
    location: "Mansoura, Egypt",
    period: "Oct 2018 — Feb 2020",
    current: false,
    highlights: [
      "Started as a backend engineer building REST APIs for agency and product work.",
      "Integrated third-party APIs and wrote clients that consumed them.",
      "Managed SQL queries and the data path between UI and server.",
      "Learned to ship inside sprint planning, stand-ups, and grooming.",
    ],
  },
] as const;

export const education = {
  school: "Misr Higher Institute for Engineering and Technology (MET)",
  degree: "Computer Science",
  location: "Mansoura, Egypt",
  period: "Aug 2018 — Oct 2023",
  notes: [
    { label: "Accumulative grade", value: "Good" },
    { label: "Project grade", value: "Excellent" },
  ],
} as const;

export const skillGroups = [
  {
    title: "Backend",
    level: 4,
    items: [
      "PHP",
      "Laravel",
      "CakePHP",
      "CodeIgniter",
      "PDO",
      "OpenCart",
      "REST APIs",
      "JSON",
      "Clean Architecture",
      "MVC / MVVM",
      "SOLID",
      "OOP",
    ],
  },
  {
    title: "Frontend",
    level: 4,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "Vue.js",
      "Nuxt.js",
    ],
  },
  {
    title: "UI frameworks",
    level: 4,
    items: ["Syncfusion", "Telerik"],
  },
  {
    title: "Data",
    level: 4,
    items: ["MySQL", "SQLite", "SQL Server", "Firebase"],
  },
  {
    title: "Patterns",
    level: 4,
    items: ["Repository", "Unit of Work", "Singleton", "SignalR"],
  },
  {
    title: "Version control",
    level: 4,
    items: ["Git", "GitHub", "Azure DevOps"],
  },
] as const;

export const languages = [
  { name: "Arabic", level: "Native", score: 5 },
  { name: "English", level: "Excellent", score: 4 },
] as const;

export const softSkills = [
  "Leadership",
  "Time management",
  "Communication",
  "Mentoring",
  "Presentation",
  "Adapting to new environments",
] as const;

export const interests = [
  "Reading",
  "Football",
  "Movies",
  "Music",
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
