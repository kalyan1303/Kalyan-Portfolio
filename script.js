/* Kalyan's portfolio — plain JavaScript, no build tools or external libraries. */
const projects = [
  {
    id: "aqmdcore-api", number: "01", title: "AQMDCore RESTful Web API", category: "Enterprise · SCAQMD", kind: "enterprise", visual: "api",
    summary: "Core RESTful APIs for secure access to AQMD data, with caching to improve response times and support scalability.",
    technologies: ["REST APIs", "C#", "Caching", "API docs"],
    contribution: "Developed and maintained the APIs, optimized performance with caching, and collaborated with frontend teams on integration and API documentation.",
    detail: ["Monitored API reliability and implemented fixes and enhancements as needed.", "The artwork is an original abstract illustration; it does not show a production API or internal architecture."],
  },
  {
    id: "enforce-complaint-portal", number: "02", title: "ENFORCE Complaint Portal", category: "Enterprise · SCAQMD", kind: "enterprise", visual: "complaint",
    summary: "A .NET Core complaint portal with case management and workflow automation, built for a clearer user experience.",
    technologies: [".NET Core", "C#", "RBAC", "Web apps"],
    contribution: "Developed and optimized the portal, refactored code for performance and scalability, integrated role-based access control, and implemented key business functionality.",
    detail: ["Testing and debugging supported a seamless user experience.", "The artwork uses generic workflow shapes and contains no complaint records or production data."],
  },
  {
    id: "enforce-api", number: "03", title: "Enforce RESTful Web API", category: "Enterprise · SCAQMD", kind: "enterprise", visual: "integration",
    summary: "RESTful APIs supporting integration with the Enforce application, with attention to security, performance, and maintainability.",
    technologies: ["REST APIs", "Integration", "Logging", "Monitoring"],
    contribution: "Designed and developed APIs; implemented logging, monitoring, and exception handling; and created documentation for developers and third-party integrations.",
    detail: ["The design followed performance, security, and maintainability best practices.", "The artwork is conceptual and does not disclose endpoints, architecture, or production configuration."],
  },
  {
    id: "ats-agenda-tracking", number: "04", title: "ATS · Agenda Tracking System", category: "Enterprise · SCAQMD", kind: "enterprise", visual: "agenda",
    summary: "A system for managing meetings, agendas, and document workflows, with interfaces for scheduling and collaboration.",
    technologies: ["Meeting workflows", "Database", "RBAC", "Documents"],
    contribution: "Developed the agenda tracking system, optimized database queries, integrated role-based access controls, and provided maintenance, enhancements, and bug fixes.",
    detail: ["Designed user-friendly interfaces for meeting scheduling and collaboration.", "The artwork is a generic agenda workflow and does not reproduce internal meeting records or documents."],
  },
  {
    id: "orgforms", number: "05", title: "OrgForms", category: "Enterprise · SCAQMD", kind: "enterprise", visual: "forms",
    summary: "A customizable .NET Core form builder for organizations, with dynamic form creation, file uploads, and validation.",
    technologies: [".NET Core", "EF Core", "RBAC", "File uploads"],
    contribution: "Developed the dynamic form module, implemented role-based access control, and optimized backend data access with Entity Framework Core and efficient queries.",
    detail: ["Integrated file uploads and validation to support data collection.", "The artwork is a sanitized concept diagram; it does not show an internal form or real submitted data."],
  },
  {
    id: "gms-grant-management", number: "06", title: "GMS · Grant Management System", category: "Enterprise · SCAQMD", kind: "enterprise", visual: "grants",
    summary: "Grant and contract workflows covering funding, award-amount validation, equipment allocation, and invoice processing.",
    technologies: ["Grant workflows", "Funding", "Contracts", "Invoices"],
    contribution: "Enhanced grant and contract workflows, including equipment funding allocation, award-amount validation, and invoice processing.",
    detail: ["The system supports funding, contracts, and invoices.", "The artwork represents generic grant and contract workflow stages without client funding or invoice records."],
  },
  {
    id: "browser-automation-workbench", number: "07", title: "Browser Automation Testing Workbench", category: "Independent · ENFTestHub", kind: "independent", visual: "testing",
    summary: "The ENFTestHub direction brings browser test execution, screenshots, video artifacts, and result reporting into one workbench.",
    technologies: ["Browser tests", "Reporting", "Screenshots", "Video"],
    contribution: "Independent project direction focused on test execution and reviewable run artifacts.",
    detail: ["AI-assisted automation is an opportunity for future exploration, not a claimed shipped capability.", "No public demo, repository, or performance results are claimed here."],
  },
];

const skills = [
  { title: "Backend", summary: "Application and service layers", tags: ["C#", ".NET", "ASP.NET MVC", "ASP.NET Core"] },
  { title: "Data", summary: "Database and persistence", tags: ["SQL Server", "Ingres", "Dapper", "Entity Framework"] },
  { title: "Integration", summary: "Connecting services", tags: ["REST APIs", "WCF", "Data-access layers"] },
  { title: "Web", summary: "Browser-facing foundations", tags: ["JavaScript", "HTML", "CSS"] },
  { title: "Cloud & delivery", summary: "Hosting and deployment", tags: ["Azure", "IIS", "Development", "Deployment"] },
  { title: "Testing & exploration", summary: "Quality and emerging tools", tags: ["Playwright", "Browser automation", "AI-assisted coding", "MCP"] },
];

const projectGrid = document.getElementById("project-grid");
const artContents = {
  api: { icon: "API", nodes: ["GET", "POST", "DB", "↗"] },
  complaint: { icon: "CASE", nodes: ["01", "02", "03", "✓"] },
  integration: { icon: "↔", nodes: ["APP", "API", "LOG", "DB"] },
  agenda: { icon: "ATS", nodes: ["MON", "DOC", "SYNC", "✓"] },
  forms: { icon: "FORM", nodes: ["A", "B", "C", "+"] },
  grants: { icon: "GMS", nodes: ["$", "AWD", "INV", "✓"] },
  testing: { icon: "RUN", nodes: ["WEB", "▶", "IMG", "✓"] },
};

function makeProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.kind = project.kind;

  const art = document.createElement("div");
  art.className = `project-art art-${project.visual}`;
  art.setAttribute("aria-hidden", "true");
  const grid = document.createElement("span"); grid.className = "art-grid";
  const caption = document.createElement("span"); caption.className = "art-caption"; caption.textContent = "SYSTEM STUDY / " + project.number;
  const visual = document.createElement("span"); visual.className = "art-visual";
  const linkA = document.createElement("i"); linkA.className = "art-link";
  const linkB = document.createElement("i"); linkB.className = "art-link l2";
  const core = document.createElement("span"); core.className = "art-core"; core.textContent = artContents[project.visual].icon;
  visual.append(linkA, linkB, core);
  artContents[project.visual].nodes.forEach((label, index) => {
    const node = document.createElement("span"); node.className = `art-node n${index + 1}`; node.textContent = label; visual.append(node);
  });
  const code = document.createElement("span"); code.className = "art-code"; code.textContent = "K / " + project.number;
  art.append(grid, caption, visual, code);

  const info = document.createElement("div"); info.className = "project-info";
  const meta = document.createElement("div"); meta.className = "project-meta";
  const category = document.createElement("span"); category.className = "project-category"; category.textContent = project.category;
  const number = document.createElement("span"); number.className = "project-number"; number.textContent = project.number;
  meta.append(category, number);
  const title = document.createElement("h3"); title.textContent = project.title;
  const summary = document.createElement("p"); summary.textContent = project.summary;
  const bottom = document.createElement("div"); bottom.className = "project-bottom";
  const tags = document.createElement("div"); tags.className = "tech-tags";
  project.technologies.slice(0, 3).forEach((label) => { const tag = document.createElement("span"); tag.className = "tech-tag"; tag.textContent = label; tags.append(tag); });
  const open = document.createElement("button"); open.type = "button"; open.className = "project-open"; open.setAttribute("aria-label", "View details for " + project.title); open.textContent = "↗";
  open.addEventListener("click", () => showProject(project));
  bottom.append(tags, open);
  info.append(meta, title, summary, bottom);
  card.append(art, info);
  return card;
}

function renderProjects(kind = "all") {
  projectGrid.replaceChildren(...projects.filter((project) => kind === "all" || project.kind === kind).map(makeProjectCard));
}

function showProject(project) {
  const dialog = document.getElementById("project-dialog");
  document.getElementById("dialog-category").textContent = project.category;
  document.getElementById("dialog-title").textContent = project.title;
  document.getElementById("dialog-summary").textContent = project.summary;
  document.getElementById("dialog-contribution").textContent = project.contribution;
  document.getElementById("dialog-detail").replaceChildren(...project.detail.map((text) => { const li = document.createElement("li"); li.textContent = text; return li; }));
  document.getElementById("dialog-tech").replaceChildren(...project.technologies.map((text) => { const tag = document.createElement("span"); tag.className = "tech-tag"; tag.textContent = text; return tag; }));
  const art = document.getElementById("dialog-art");
  art.className = `dialog-art art-${project.visual}`;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

renderProjects();
document.getElementById("skill-groups").replaceChildren(...skills.map((group) => {
  const card = document.createElement("article"); card.className = "skill-group";
  const heading = document.createElement("h3"); heading.textContent = group.title;
  const summary = document.createElement("p"); summary.textContent = group.summary;
  const tags = document.createElement("div"); tags.className = "skill-pills";
  group.tags.forEach((label) => { const tag = document.createElement("span"); tag.textContent = label; tags.append(tag); });
  card.append(heading, summary, tags); return card;
}));

document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".filter-button").forEach((item) => { const active = item === button; item.classList.toggle("is-active", active); item.setAttribute("aria-pressed", String(active)); });
  renderProjects(button.dataset.filter);
}));

const dialog = document.getElementById("project-dialog");
document.getElementById("dialog-close").addEventListener("click", () => dialog.close ? dialog.close() : dialog.removeAttribute("open"));
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open)); nav.classList.toggle("is-open", open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false");
}));

if ("IntersectionObserver" in window) {
  const sections = document.querySelectorAll("main section[id]");
  const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    nav.querySelectorAll("a").forEach((link) => link.classList.toggle("is-current", link.hash === "#" + entry.target.id));
  }), { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
}

const avatar = document.getElementById("avatar-figure");
const rotateButton = document.getElementById("rotate-button");
rotateButton.addEventListener("click", () => {
  avatar.classList.remove("is-rotating");
  void avatar.offsetWidth;
  avatar.classList.add("is-rotating");
  window.setTimeout(() => avatar.classList.remove("is-rotating"), 1550);
});

const speechButton = document.getElementById("speak-button");
const speechStatus = document.getElementById("speech-status");
const wave = document.querySelector(".live-wave");
let activeUtterance = null;
speechButton.addEventListener("click", () => {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    speechStatus.textContent = "Speech is not available in this browser — read my introduction below.";
    showToast("Try opening this portfolio in a recent version of Chrome or Edge to hear the avatar.");
    return;
  }
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel(); activeUtterance = null;
    speechButton.innerHTML = '<span aria-hidden="true">◖</span> Tell my story';
    speechStatus.textContent = "Introduction stopped"; wave.classList.remove("is-speaking");
    return;
  }
  const message = "Hi, I’m Kalyan, a fullstack developer with over four years of experience. I build enterprise applications, APIs, and data-driven systems, including solutions for South Coast AQMD. My work spans .NET, C sharp, web interfaces, data systems, and browser automation. I enjoy turning complex workflows into reliable, easy-to-use software. Thanks for visiting my portfolio.";
  activeUtterance = new SpeechSynthesisUtterance(message);
  activeUtterance.rate = 0.94; activeUtterance.pitch = 1.03;
  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find((voice) => /^en(-|_)/i.test(voice.lang));
  if (englishVoice) activeUtterance.voice = englishVoice;
  activeUtterance.onstart = () => { speechButton.innerHTML = '<span aria-hidden="true">■</span> Stop story'; speechStatus.textContent = "Kalyan is speaking…"; wave.classList.add("is-speaking"); };
  const finish = () => { speechButton.innerHTML = '<span aria-hidden="true">◖</span> Tell my story'; speechStatus.textContent = "Tap to hear a short introduction"; wave.classList.remove("is-speaking"); activeUtterance = null; };
  activeUtterance.onend = finish; activeUtterance.onerror = finish;
  window.speechSynthesis.speak(activeUtterance);
});

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast"); toast.textContent = message; toast.classList.add("is-visible");
  window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("pagehide", () => { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); });
