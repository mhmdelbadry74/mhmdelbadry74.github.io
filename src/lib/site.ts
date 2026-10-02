export const site = {
  name: "Mohamed Elbadry",
  shortName: "Elbadry",
  role: "Senior Backend Developer",
  location: "Nasr City, Cairo, Egypt",
  email: "m7mdelbadry72@gmail.com",
  phoneDisplay: "+20 10 1137 9206",
  phoneHref: "tel:+201011379206",
  whatsapp: "https://wa.me/201011379206",
  linkedin: "https://www.linkedin.com/in/mohamed-elbadry-4a38471b1",
  github: "https://github.com/mhmdelbadry74",
  githubHandle: "mhmdelbadry74",
  cvFile: "/Mohamed_Elbadry_Sr_Backend_Developer.pdf",
  portrait: "/portrait.jpg",
  nationality: "Egyptian",
  summary:
    "I design and ship PHP backends that other teams can actually depend on — REST APIs, SQL-heavy data layers, and third-party integrations that stay quiet in production. Eight years across product and agency teams in Egypt taught me to lead by coaching, set clear metrics, and keep delivery honest when the requirements move.",
  focus: [
    {
      index: "01",
      title: "REST APIs",
      body: "Contract-first services that move data cleanly between clients, servers, and partner systems.",
    },
    {
      index: "02",
      title: "PHP architecture",
      body: "Laravel, CakePHP, and CodeIgniter with SOLID, MVC/MVVM, and clean architecture habits.",
    },
    {
      index: "03",
      title: "Data & SQL",
      body: "MySQL, SQL Server, and SQLite — queries, transport, and Firebase when the product needs it.",
    },
    {
      index: "04",
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

export const projects = [
  {
    name: "server-health-monitor",
    blurb: "Shell tooling for watching server health. The public repo with the most stars on the profile.",
    stack: "Shell",
    stars: 28,
    href: "https://github.com/mhmdelbadry74/server-health-monitor",
  },
  {
    name: "Multi-Tenant",
    blurb: "PHP work around multi-tenant application structure — isolating data and config per tenant.",
    stack: "PHP",
    stars: 0,
    href: "https://github.com/mhmdelbadry74/Multi-Tenant",
  },
  {
    name: "datatable-laravel",
    blurb: "Laravel datatables — listing, filtering, and serving tabular data the way admin panels need it.",
    stack: "Laravel",
    stars: 0,
    href: "https://github.com/mhmdelbadry74/datatable-laravel",
  },
  {
    name: "business2code",
    blurb: "Digital products and software solutions. Public JavaScript repo, with GitHub Pages already on.",
    stack: "JavaScript",
    stars: 0,
    href: "https://github.com/mhmdelbadry74/business2code",
  },
  {
    name: "creativePhp",
    blurb: "PHP experiments and product code from the public GitHub profile.",
    stack: "PHP",
    stars: 0,
    href: "https://github.com/mhmdelbadry74/creativePhp",
  },
  {
    name: "lms",
    blurb: "Learning-management related frontend/backend work on the public profile.",
    stack: "JavaScript",
    stars: 0,
    href: "https://github.com/mhmdelbadry74/lms",
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
    title: "Data",
    items: ["MySQL", "SQLite", "SQL Server", "Firebase", "PostgreSQL"],
  },
  {
    title: "Ops & VCS",
    items: ["Git", "GitHub", "Azure DevOps", "Docker", "Linux", "Nginx"],
  },
  {
    title: "Patterns",
    items: ["Repository", "Unit of Work", "Singleton", "SignalR"],
  },
  {
    title: "UI kits",
    items: ["Syncfusion", "Telerik"],
  },
] as const;

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Excellent" },
] as const;

export const softSkills = [
  "Leadership",
  "Time management",
  "Communication",
  "Mentoring",
  "Presentation",
  "Adapting to new environments",
] as const;

export const interests = ["Reading", "Football", "Movies", "Music"] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
