export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "frontend" | "fullstack" | "backend" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
  icon?: string;
}

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts, user management, and customizable widgets built for enterprise teams.",
    longDescription:
      "Nexus is a comprehensive analytics platform designed for enterprise teams who need real-time insights. Built with Next.js and TypeScript, it features interactive D3.js charts, a drag-and-drop widget system, role-based access control, and WebSocket-powered live data updates. The dashboard supports multi-tenant architecture and integrates with popular data sources like PostgreSQL, MongoDB, and REST APIs.",
    image: "/projects/nexus.jpg",
    tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://nexus-demo.vercel.app",
    githubUrl: "https://github.com/alexdev/nexus-dashboard",
    featured: true,
    year: 2024,
  },
  {
    slug: "aurora-ecommerce",
    title: "Aurora E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart, checkout, and Stripe payment integration.",
    longDescription:
      "Aurora is a modern e-commerce solution built from the ground up with performance and developer experience in mind. It features a headless CMS integration with Sanity, Stripe payment processing, real-time inventory management, and a blazing-fast storefront powered by Next.js App Router with React Server Components. The admin panel allows merchants to manage products, orders, and customers with ease.",
    image: "/projects/aurora.jpg",
    tags: ["Next.js", "Stripe", "Sanity CMS", "TypeScript", "Prisma", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "https://aurora-store.vercel.app",
    githubUrl: "https://github.com/alexdev/aurora-ecommerce",
    featured: true,
    year: 2024,
  },
  {
    slug: "mindflow-app",
    title: "MindFlow — AI Note Taking",
    description:
      "An AI-powered note-taking app with smart tagging, semantic search, and automatic summarization using OpenAI.",
    longDescription:
      "MindFlow reimagines note-taking by leveraging AI to help users capture, organize, and retrieve information effortlessly. Built with React Native for cross-platform support, it uses OpenAI's GPT-4 for smart summarization, pgvector for semantic search, and a beautiful rich-text editor. Notes are automatically tagged, linked to related content, and can be exported in multiple formats.",
    image: "/projects/mindflow.jpg",
    tags: ["React Native", "OpenAI", "pgvector", "Node.js", "Expo", "TypeScript"],
    category: "mobile",
    liveUrl: "https://mindflow.app",
    githubUrl: "https://github.com/alexdev/mindflow",
    featured: true,
    year: 2023,
  },
  {
    slug: "velocity-api",
    title: "Velocity REST API Framework",
    description:
      "A high-performance Node.js REST API framework with built-in auth, rate limiting, caching, and OpenAPI docs generation.",
    longDescription:
      "Velocity is an opinionated Node.js framework built on top of Fastify that provides everything you need to build production-ready APIs. It includes JWT and OAuth2 authentication, Redis-based rate limiting and caching, automatic OpenAPI 3.0 documentation generation, request validation with Zod, and a powerful plugin system. Velocity achieves 50,000+ requests per second in benchmarks.",
    image: "/projects/velocity.jpg",
    tags: ["Node.js", "Fastify", "Redis", "TypeScript", "OpenAPI", "Zod"],
    category: "backend",
    githubUrl: "https://github.com/alexdev/velocity-api",
    featured: false,
    year: 2023,
  },
  {
    slug: "prism-ui",
    title: "Prism UI Component Library",
    description:
      "A themeable React component library with 50+ accessible components, dark mode support, and Storybook documentation.",
    longDescription:
      "Prism UI is a production-ready React component library built with accessibility and customization in mind. It ships with 50+ components following WAI-ARIA guidelines, a powerful theming system based on CSS custom properties, first-class dark mode support, and comprehensive Storybook documentation. Every component is fully typed with TypeScript and tested with Vitest and Testing Library.",
    image: "/projects/prism.jpg",
    tags: ["React", "TypeScript", "Storybook", "Vitest", "CSS Variables", "Radix UI"],
    category: "frontend",
    liveUrl: "https://prism-ui.dev",
    githubUrl: "https://github.com/alexdev/prism-ui",
    featured: false,
    year: 2023,
  },
  {
    slug: "cloudvault",
    title: "CloudVault File Storage",
    description:
      "A secure cloud file storage service with end-to-end encryption, sharing, and real-time collaboration features.",
    longDescription:
      "CloudVault provides secure, encrypted file storage with a focus on privacy and collaboration. Built with a microservices architecture on AWS, it features client-side AES-256 encryption, granular sharing permissions, real-time collaborative editing for documents, version history, and an S3-compatible API. The web client is built with React and the mobile apps use React Native.",
    image: "/projects/cloudvault.jpg",
    tags: ["AWS S3", "Node.js", "React", "Encryption", "WebRTC", "Docker"],
    category: "fullstack",
    liveUrl: "https://cloudvault.io",
    githubUrl: "https://github.com/alexdev/cloudvault",
    featured: false,
    year: 2022,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Framer Motion", level: 82, category: "frontend" },
  { name: "Vue.js", level: 75, category: "frontend" },
  { name: "React Native", level: 78, category: "frontend" },
  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Python / FastAPI", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "Redis", level: 78, category: "backend" },
  { name: "GraphQL", level: 76, category: "backend" },
  { name: "Docker / K8s", level: 72, category: "backend" },
  // Tools
  { name: "Git / GitHub", level: 95, category: "tools" },
  { name: "AWS / Vercel", level: 80, category: "tools" },
  { name: "Figma", level: 74, category: "tools" },
  { name: "CI/CD Pipelines", level: 78, category: "tools" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/alexdev", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/alexdev", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com/alexdev", icon: "Twitter" },
  { label: "Email", href: "mailto:alex@example.com", icon: "Mail" },
];
