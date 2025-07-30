import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Windows Search Box UI",
    description:
      "Improved Windows Search Box interface at Microsoft, resulting in 7% usage increase and enhanced accessibility compliance.",
    longDescription:
      "Led the redesign of the Windows Search Box interface as part of Microsoft's Windows Search team. Focused on improving user experience while maintaining strict accessibility standards.",
    image: "/images/projects/windows-search.jpg",
    tech: ["React", "TypeScript", "Sass", "C#", "ASP.NET"],
    liveUrl: "https://microsoft.com/windows",
    githubUrl: "#", // Private repository
    category: "enterprise",
    featured: true,
    year: 2022,
    challenges: [
      "Improving UI while maintaining backward compatibility",
      "Meeting strict WCAG accessibility standards",
      "Optimizing performance for millions of users",
    ],
    solutions: [
      "Implemented progressive enhancement approach",
      "Created comprehensive accessibility testing suite",
      "Optimized rendering with React.memo and useMemo",
    ],
    results: [
      "7% increase in search box usage",
      "40% improvement in Bing desktop market share",
      "100% WCAG 2.1 AA compliance achieved",
    ],
  },
  {
    id: 2,
    title: "NextGen Image Converter",
    description:
      "Node.js application for converting legacy image formats to WebP, improving website load speeds significantly.",
    longDescription:
      "Developed a command-line tool and web service for converting images to modern formats, helping Pacific Software Publishing improve their website performance.",
    image: "/images/projects/nextgen-converter.jpg",
    tech: ["Node.js", "JavaScript", "WebP", "Sharp", "Express"],
    liveUrl: "#",
    githubUrl: "https://github.com/briankidd9design/nextgen-converter",
    category: "fullstack",
    featured: true,
    year: 2021,
    challenges: [
      "Handling large batch image processing",
      "Maintaining image quality during conversion",
      "Creating user-friendly CLI interface",
    ],
    solutions: [
      "Implemented queue-based processing with Bull",
      "Used Sharp library for high-quality conversions",
      "Built interactive CLI with inquirer.js",
    ],
    results: [
      "50% reduction in image file sizes",
      "30% improvement in page load speeds",
      "Adopted by 15+ client websites",
    ],
  },
  {
    id: 3,
    title: "Boeing 787 Dreamliner Page",
    description:
      "Spearheaded development of promotional page for Boeing's 787 Dreamliner using enterprise CMS.",
    longDescription:
      "Led the development of a high-profile promotional page for Boeing's 787 Dreamliner aircraft, working within enterprise constraints and tight deadlines.",
    image: "/images/projects/boeing-787.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "TeamSite CMS", "Bootstrap"],
    liveUrl: "https://boeing.com/commercial/787dreamliner/",
    githubUrl: "#", // Private repository
    category: "enterprise",
    featured: false,
    year: 2020,
    challenges: [
      "Working within enterprise CMS limitations",
      "Meeting strict brand guidelines",
      "Ensuring cross-browser compatibility",
    ],
    solutions: [
      "Created custom CSS framework within CMS constraints",
      "Implemented progressive enhancement strategy",
      "Extensive testing across browser matrix",
    ],
    results: [
      "Successful launch meeting all deadlines",
      "Positive feedback from Boeing stakeholders",
      "Improved user engagement metrics",
    ],
  },
  {
    id: 4,
    title: "Accessible Web Components",
    description:
      "Collection of WCAG-compliant React components designed for enterprise applications.",
    longDescription:
      "Developed a comprehensive library of accessible React components that can be used across multiple enterprise applications, ensuring consistent UX and accessibility compliance.",
    image: "/images/projects/accessible-components.jpg",
    tech: ["React", "TypeScript", "WCAG", "Sass", "Storybook", "Jest"],
    liveUrl: "https://storybook-components.example.com",
    githubUrl: "https://github.com/briankidd9design/accessible-components",
    category: "ux",
    featured: true,
    year: 2023,
    challenges: [
      "Creating truly accessible components",
      "Maintaining consistent design system",
      "Comprehensive documentation and testing",
    ],
    solutions: [
      "Implemented ARIA patterns correctly",
      "Used Storybook for component documentation",
      "Automated accessibility testing with axe-core",
    ],
    results: [
      "100% WCAG 2.1 AA compliance",
      "Used across 5+ enterprise applications",
      "50% reduction in accessibility issues",
    ],
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with modern payment integration and inventory management.",
    longDescription:
      "Built a complete e-commerce platform from scratch using modern technologies, featuring real-time inventory management, secure payments, and responsive design.",
    image: "/images/projects/ecommerce-platform.jpg",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
    ],
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/briankidd9design/ecommerce-platform",
    category: "fullstack",
    featured: true,
    year: 2023,
    challenges: [
      "Implementing secure payment processing",
      "Real-time inventory management",
      "Optimizing for mobile commerce",
    ],
    solutions: [
      "Integrated Stripe for secure payments",
      "Used WebSockets for real-time updates",
      "Mobile-first responsive design approach",
    ],
    results: [
      "Successfully processed $50k+ in test transactions",
      "99.9% uptime during load testing",
      "Mobile conversion rate of 78%",
    ],
  },
  {
    id: 6,
    title: "UX Design System",
    description:
      "Comprehensive design system with reusable components and documentation for development teams.",
    longDescription:
      "Created a complete design system including component library, design tokens, and comprehensive documentation to ensure consistency across all digital products.",
    image: "/images/projects/ux-design-system.jpg",
    tech: [
      "Figma",
      "React",
      "Storybook",
      "Design Tokens",
      "CSS Custom Properties",
    ],
    liveUrl: "https://design-system.example.com",
    githubUrl: "https://github.com/briankidd9design/ux-design-system",
    category: "ux",
    featured: false,
    year: 2022,
    challenges: [
      "Creating scalable design token system",
      "Ensuring designer-developer collaboration",
      "Maintaining design consistency",
    ],
    solutions: [
      "Implemented atomic design methodology",
      "Created Figma-to-code automation",
      "Built comprehensive style guide",
    ],
    results: [
      "50% faster development time",
      "90% design consistency across products",
      "Adopted by entire design team",
    ],
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (
  category: Project["category"]
): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};
