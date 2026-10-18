export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Frontend' | 'Enterprise' | 'Automation';
  tech: string[];
  description: string;
  keyPoints: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  accentGradient: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  iconName: string;
  skills: { name: string; level: string; icon?: string; highlighted?: boolean }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skillsUsed: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  details: string;
  badge?: string;
}

export const PERSONAL_INFO = {
  name: "Bilgod Soren",
  role: "React & Next.js Frontend Developer",
  shortBio: "An innovative and ambitious Frontend Developer & fresher with practical internship experience building modern, component-driven web interfaces with React, Next.js, TypeScript, and MUI. Driven by creative problem-solving, clean code aesthetics, and intelligent workflow automation.",
  location: "Jharkhand, India",
  availability: "Available for Full-time Roles & Remote Opportunities",
  phone: "+91 9304231971",
  email: "bilgodsoren12@gmail.com",
  linkedin: "https://www.linkedin.com/in/bilgodsoren",
  github: "https://github.com/bilgodsoren",
  stats: [
    { label: "Professional Status", value: "Fresher", sub: "Innovative & quick learner" },
    { label: "Industry Experience", value: "Internship", sub: "Frontend Developer at Zedgoo" },
    { label: "Workflow Optimization", value: "87.5%", sub: "Manual effort cut with AI & N8N" },
    { label: "Availability", value: "Immediate", sub: "Open to full-time & remote roles" },
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    categoryKey: "frontend",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", highlighted: true },
      { name: "Next.js", level: "Proficient", highlighted: true },
      { name: "TypeScript", level: "Proficient", highlighted: true },
      { name: "Vite", level: "Advanced" },
      { name: "MUI (Material-UI)", level: "Advanced", highlighted: true },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Component Architecture", level: "Advanced", highlighted: true },
      { name: "Responsive Design", level: "Expert" },
    ]
  },
  {
    title: "Programming Languages",
    categoryKey: "languages",
    iconName: "Code",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", highlighted: true },
      { name: "TypeScript", level: "Proficient", highlighted: true },
      { name: "C", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "SQL", level: "Proficient" },
    ]
  },
  {
    title: "Backend & APIs",
    categoryKey: "backend",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Intermediate", highlighted: true },
      { name: "Express.js", level: "Intermediate" },
      { name: "RESTful APIs", level: "Advanced", highlighted: true },
      { name: "API Integration", level: "Advanced" },
      { name: "JSON / Webhooks", level: "Advanced" },
    ]
  },
  {
    title: "Databases & Storage",
    categoryKey: "databases",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: "Proficient", highlighted: true },
      { name: "MongoDB", level: "Proficient" },
      { name: "MSSQL", level: "Intermediate" },
      { name: "Schema Design", level: "Intermediate" },
    ]
  },
  {
    title: "Tools & AI Automation",
    categoryKey: "tools",
    iconName: "Cpu",
    skills: [
      { name: "N8N Automation", level: "Advanced", highlighted: true },
      { name: "Meta AI / LLM Tools", level: "Proficient", highlighted: true },
      { name: "Git & GitHub", level: "Advanced", highlighted: true },
      { name: "VS Code", level: "Expert" },
      { name: "IntelliJ IDEA", level: "Intermediate" },
      { name: "Jenkins CI/CD", level: "Familiar" },
      { name: "Microsoft Excel", level: "Proficient" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "admin-panel",
    title: "Admin Panel Web Application",
    subtitle: "Modular UI, Data Tables & Form Management System",
    category: "Frontend",
    tech: ["React", "Material UI (MUI)", "React Router", "Vite", "Data Tables", "Form Validation"],
    description: "A production-grade, highly responsive administrative suite engineered with reusable modular layouts, structured data tables with filtering and pagination, interactive input forms, and seamless client-side routing.",
    keyPoints: [
      "Engineered a component-driven architecture allowing engineers to seamlessly add new screens and modules with minimal boilerplate.",
      "Built structured data tables with multi-column filtering, sorting, pagination, and robust dynamic form validation.",
      "Optimized client-side rendering performance and state handling across complex multi-step admin workflows."
    ],
    metrics: "Modular structure reduced module rollout time by 40%",
    githubUrl: "https://github.com/bilgodsoren/admin-panel-web-app",
    accentGradient: "linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)"
  },
  {
    id: "axesuite-erp",
    title: "ERP Project – Axesuite",
    subtitle: "Real-time Enterprise Resource Planning Frontend",
    category: "Enterprise",
    tech: ["React", "JavaScript (ES6+)", "RESTful APIs", "Component Architecture", "CSS3 / Custom UI"],
    description: "Comprehensive frontend system developed for Axesuite ERP, powering core operational modules such as inventory tracking, multi-currency billing, procurement schedules, and automated analytical business reports.",
    keyPoints: [
      "Crafted an intuitive, high-density user interface tailored for enterprise operators handling large datasets daily.",
      "Collaborated closely with backend engineers to integrate REST APIs for real-time data sync, CRUD workflows, and status tracking.",
      "Implemented responsive data views ensuring flawless usability across tablets, desktops, and mobile displays."
    ],
    metrics: "Synchronized real-time inventory and billing data with zero latency",
    githubUrl: "https://github.com/bilgodsoren/axesuite-erp-frontend",
    accentGradient: "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)"
  },
  {
    id: "ai-content-workflow",
    title: "AI Content Workflow Automation",
    subtitle: "End-to-End Autonomous Social Publishing Engine",
    category: "Automation",
    tech: ["N8N", "Meta AI", "REST Webhooks", "Social Media APIs", "Workflow Automation"],
    description: "An automated autonomous publishing system powered by N8N visual workflows and Meta AI synthesis, orchestrating topic research, copy generation, and scheduled multi-channel distribution.",
    keyPoints: [
      "Designed and deployed an automated trigger-based pipeline eliminating repetitive manual content drafting and publishing steps.",
      "Integrated Meta AI prompts to formulate high-engagement copy adapted for distinct social platform specifications.",
      "Drastically slashed daily manual social management effort from 4 hours down to merely 30 minutes."
    ],
    metrics: "Reduced manual posting effort from 4 hrs to 30 mins (87.5% time saved)",
    githubUrl: "https://github.com/bilgodsoren/ai-content-workflow-automation",
    accentGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)"
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Frontend Developer Intern",
    company: "Zedgoo",
    location: "Bangalore, India",
    period: "July 2024",
    type: "Internship",
    description: [
      "Constructed modern, responsive, and reusable UI components utilizing React and Material-UI (MUI), deployed across critical screens of the primary product.",
      "Architected a scalable, component-based directory pattern that simplified state propagation, improved maintenance agility, and expedited future feature integrations.",
      "Elevated navigation ergonomics, reduced redundant component re-renders, and measured visible gains in UI responsiveness.",
      "Engaged in professional Git-driven team workflows, code reviews, and cross-functional synchronization with backend engineers and UI/UX designers."
    ],
    skillsUsed: ["React", "MUI", "JavaScript", "Component Architecture", "Git", "Code Review"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "B.Tech in Information Technology",
    institution: "YBN University",
    location: "Ranchi, Jharkhand",
    period: "2023 – 2026",
    badge: "Current Degree",
    details: "Deepening knowledge in advanced web architectures, cloud paradigms, algorithms, and software engineering. Serving as an active member of the University Coding Club."
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Santiniketan Institute of Polytechnic",
    location: "West Bengal",
    period: "2020 – 2023",
    grade: "83.5%",
    badge: "Distinction (83.5%)",
    details: "Built an exhaustive foundation in Computer Science fundamentals: C, C++, Object-Oriented Programming, Relational Databases (MySQL), and Modern Web Technology."
  },
  {
    degree: "Secondary School Examination (Matriculation)",
    institution: "Sacred Heart School",
    location: "Dumka, Jharkhand",
    period: "2015 – 2020",
    grade: "76.6%",
    badge: "First Division (76.6%)",
    details: "Strong academic foundation in Mathematics, Science, and English. Engaged in youth leadership and inter-district events."
  }
];

export const ACTIVITIES = [
  {
    title: "Active Member, Coding Club",
    organization: "YBN University",
    description: "Collaborating with peers on frontend challenges, conducting peer code-walkthroughs, and organizing mini-hackathons to promote modern web development practices.",
    icon: "Users"
  },
  {
    title: "NSS Inter-District Youth Programme",
    organization: "National Service Scheme (NSS)",
    description: "Represented district in community empowerment, disaster preparedness drives, and social welfare workshops, cultivating strong leadership and team communication.",
    icon: "Award"
  },
  {
    title: "Guitarist & Musical Creativity",
    organization: "Creative Expression",
    description: "Passionate about acoustic & electric guitar. Music brings an intuitive rhythm, focused discipline, and harmonious balance to everyday frontend problem-solving.",
    icon: "Music"
  }
];
