export const profile = {
  name: "Kalyan",
  brand: "KALYAN",
  fullName: "Kalyan Bavisetti",
  role: "Fullstack Developer",
  experience: "4+ years of experience",
  tagline: "Beyond the Code.",
  introduction:
    "I'm Kalyan, a fullstack developer with 4+ years of experience building enterprise applications, APIs, and data-driven systems. I enjoy understanding how complex applications work, investigating issues across different layers, and building solutions that are maintainable and practical. My experience includes C# and .NET development, SQL and data-access technologies, API integration, application security, and testing workflows. I'm also exploring AI-assisted engineering, developer-support assistants, and intelligent automation. I see software engineering as more than writing code. It's about understanding the problem, making sound technical decisions, and delivering a solution that works in the real world.",
  avatarSpeech:
    "Hi, I'm Kalyan, a fullstack developer with over four years of experience. I build enterprise applications, APIs, and data-driven systems, including solutions for South Coast AQMD. My work spans .NET, C sharp, web interfaces, data systems, and browser automation. I enjoy turning complex workflows into reliable, easy-to-use software. Thanks for visiting my portfolio.",
  shortIntro:
    "I engineer enterprise software, solve complex technical problems, and explore intelligent ways to build better software.",
  email: "bavisettikalyan109@gmail.com",
  github: "https://github.com/kalyan1303",
  linkedIn: "https://www.linkedin.com/in/bavisetti-kalyan-5165aa246/",
  resumePath: "/assets/Venkata_Kalyan_Bavisetti_Resume.pdf",
  portraitPath: "/assets/portrait.webp",
} as const;

export type SkillGroup = {
  title: string;
  summary: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    summary: "Application development and service layers",
    skills: ["C#", ".NET", "ASP.NET MVC", "ASP.NET Core"],
  },
  {
    title: "Data",
    summary: "Database access and persistence",
    skills: ["SQL Server", "Ingres", "Dapper", "Entity Framework"],
  },
  {
    title: "Integration",
    summary: "Connecting services and applications",
    skills: ["REST APIs", "WCF", "Data-access layers"],
  },
  {
    title: "Web",
    summary: "Browser-facing application foundations",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Cloud & delivery",
    summary: "Application hosting and delivery workflows",
    skills: ["Azure", "IIS", "Development workflows", "Deployment workflows"],
  },
  {
    title: "Testing",
    summary: "Practical validation and browser automation",
    skills: ["Playwright", "Browser automation"],
  },
  {
    title: "AI exploration",
    summary: "Emerging interests in developer productivity",
    skills: [
      "AI-assisted coding",
      "MCP",
      "Developer-support assistants",
      "Workflow automation",
    ],
  },
];

export type Experience = {
  company: string;
  client: string;
  title: string;
  dateLabel: string;
  summary: string;
  responsibilities: string[];
  note: string;
};

export const experience: Experience = {
  company: "Varsun Information Technology",
  client: "South Coast AQMD (SCAQMD)",
  title: "Fullstack Developer",
  dateLabel: "4+ years of experience",
  summary:
    "Enterprise application engineering across backend systems, APIs, data access, and application integration.",
  responsibilities: [
    "Designing and maintaining API and application functionality",
    "Working with database access, SQL, and data-access technologies",
    "Investigating issues across application and integration layers",
    "Supporting authorization, testing, and developer productivity workflows",
  ],
  note:
    "Enterprise client: South Coast AQMD (SCAQMD). Project summaries below use the details provided by Kalyan; no internal screenshots or production data are included.",
};

export type Project = {
  id: string;
  title: string;
  category: "Enterprise · SCAQMD" | "Independent · ENFTestHub";
  status: string;
  visual: "api" | "complaint" | "integration" | "agenda" | "forms" | "grants" | "testing";
  summary: string;
  technologies: string[];
  contribution: string;
  context: string;
  detail: string[];
};

export const projects: Project[] = [
  {
    id: "aqmdcore-api",
    title: "AQMDCore RESTful Web API",
    category: "Enterprise · SCAQMD",
    status: "Enterprise project",
    visual: "api",
    summary:
      "Core RESTful APIs for secure access to AQMD data, with caching to improve response times and support scalability.",
    technologies: ["REST APIs", "C#", "Caching", "API documentation"],
    contribution:
      "Developed and maintained the APIs, optimized performance with caching, and collaborated with frontend teams on integration and API documentation.",
    context:
      "Enterprise project for South Coast AQMD (SCAQMD).",
    detail: [
      "Monitored API reliability and implemented fixes and enhancements as needed.",
      "The illustration is an original, abstract diagram; it does not show a production API or internal architecture.",
    ],
  },
  {
    id: "enforce-complaint-portal",
    title: "ENFORCE Complaint Portal",
    category: "Enterprise · SCAQMD",
    status: "Enterprise project",
    visual: "complaint",
    summary:
      "A .NET Core complaint portal with case management and workflow automation, built for a clearer user experience.",
    technologies: [".NET Core", "C#", "RBAC", "Web applications"],
    contribution:
      "Developed and optimized the portal, refactored code for performance and scalability, integrated role-based access control, and implemented key business functionality.",
    context:
      "Enterprise project for South Coast AQMD (SCAQMD).",
    detail: [
      "Testing and debugging supported a seamless user experience.",
      "The illustration uses generic workflow shapes and contains no complaint records or production data.",
    ],
  },
  {
    id: "enforce-api",
    title: "Enforce RESTful Web API",
    category: "Enterprise · SCAQMD",
    status: "Enterprise project",
    visual: "integration",
    summary:
      "RESTful APIs supporting integration with the Enforce application, with attention to security, performance, and maintainability.",
    technologies: ["REST APIs", "API integration", "Logging", "Monitoring"],
    contribution:
      "Designed and developed APIs; implemented logging, monitoring, and exception handling; and created documentation for developers and third-party integrations.",
    context:
      "Enterprise project for South Coast AQMD (SCAQMD).",
    detail: [
      "The design followed performance, security, and maintainability best practices.",
      "The illustration is conceptual and does not disclose endpoints, architecture, or production configuration.",
    ],
  },
  {
    id: "ats-agenda-tracking",
    title: "ATS · Agenda Tracking System",
    category: "Enterprise · SCAQMD",
    status: "Enterprise project",
    visual: "agenda",
    summary:
      "A system for managing meetings, agendas, and document workflows, with interfaces for scheduling and collaboration.",
    technologies: ["Meeting workflows", "Database optimization", "RBAC", "Document management"],
    contribution:
      "Developed the agenda tracking system, optimized database queries, integrated role-based access controls, and provided maintenance, enhancements, and bug fixes.",
    context:
      "Enterprise project for South Coast AQMD (SCAQMD).",
    detail: [
      "Designed user-friendly interfaces for meeting scheduling and collaboration.",
      "The illustration is a generic agenda workflow and does not reproduce internal meeting records or documents.",
    ],
  },
  {
    id: "orgforms",
    title: "OrgForms",
    category: "Enterprise · SCAQMD",
    status: "Enterprise project",
    visual: "forms",
    summary:
      "A customizable .NET Core form builder for organizations, with dynamic form creation, file uploads, and validation.",
    technologies: [".NET Core", "Entity Framework Core", "RBAC", "File uploads"],
    contribution:
      "Developed the dynamic form module, implemented role-based access control, and optimized backend data access with Entity Framework Core and efficient queries.",
    context:
      "Enterprise project for South Coast AQMD (SCAQMD).",
    detail: [
      "Integrated file uploads and validation to support data collection.",
      "The illustration is a sanitized concept diagram; it does not show an internal form or real submitted data.",
    ],
  },
  {
    id: "gms-grant-management",
    title: "GMS · Grant Management System",
    category: "Enterprise · SCAQMD",
    status: "Enterprise project",
    visual: "grants",
    summary:
      "Grant and contract workflows covering funding, award-amount validation, equipment allocation, and invoice processing.",
    technologies: ["Grant workflows", "Funding allocation", "Contracts", "Invoice processing"],
    contribution:
      "Enhanced grant and contract workflows, including equipment funding allocation, award-amount validation, and invoice processing.",
    context:
      "Enterprise project for South Coast AQMD (SCAQMD).",
    detail: [
      "The system supports funding, contracts, and invoices.",
      "The illustration represents generic grant and contract workflow stages without client funding or invoice records.",
    ],
  },
  {
    id: "browser-automation-workbench",
    title: "Browser Automation Testing Workbench",
    category: "Independent · ENFTestHub",
    status: "Independent project direction",
    visual: "testing",
    summary:
      "The ENFTestHub direction brings browser test execution, screenshots, video artifacts, and result reporting into one workbench.",
    technologies: ["Browser automation", "Test reporting", "Screenshots", "Video artifacts"],
    contribution:
      "Independent project direction focused on test execution and reviewable run artifacts.",
    context:
      "Independent project. AI-assisted automation is an opportunity for future exploration, not a claimed shipped capability.",
    detail: [
      "The visual is a concept illustration and is not a screenshot of a running product.",
      "No public demo, repository, or performance results are claimed here.",
    ],
  },
];
