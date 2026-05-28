export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export const roles = ["React Developer", "Frontend Engineer", "Problem Solver"];

export const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
  { category: "Database", items: ["MongoDB", "MySQL", "Firebase", "Database Design"] },
  { category: "Tools", items: ["Git", "GitHub", "Vite", "Postman", "VS Code"] }
];

export const projects = [
  {
    title: "Home Interior Designer Service App",
    description:
      "A service platform connecting homeowners with interior designers, including portfolio browsing, booking requests, and service management.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/hackss12/ganeshsawant.git",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Weather App",
    description:
      "A responsive weather dashboard with real-time forecasts, city search, and dynamic UI updates based on weather conditions.",
    technologies: ["React", "OpenWeather API", "Framer Motion", "CSS"],
    github: "https://github.com/hackss12/ganeshsawant.git",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Task Management App",
    description:
      "A productivity app for creating, organizing, and tracking tasks with status-based workflow and responsive cross-device experience.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
    github: "https://github.com/hackss12/ganeshsawant.git",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  }
];

export const experience = {
  role: "Web Development Intern",
  company: "Tech Startup",
  period: "Jan 2026 - Apr 2026",
  responsibilities: [
    "Built responsive UI components using React and Tailwind CSS.",
    "Collaborated with backend teams to integrate REST APIs.",
    "Improved website performance by optimizing component rendering.",
    "Participated in code reviews and agile sprint planning."
  ]
};
