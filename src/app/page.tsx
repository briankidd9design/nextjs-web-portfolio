// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Resume from "@/components/sections/Resume";
import Footer from "@/components/sections/Footer";
// import Hero from '@/components/Hero'
// import About from '@/components/About'
// import Skills from '@/components/Skills'
// import Projects from '@/components/Projects'
// import Experience from '@/components/Experience'
// import Contact from '@/components/Contact'
// import Footer from '@/components/Footer'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");
  // Navigation configuration for portfolio
  const navItems = [
    { href: "#hero", label: "Home", active: activeSection === "hero" },
    { href: "#about", label: "About", active: activeSection === "about" },
    { href: "#skills", label: "Skills", active: activeSection === "skills" },
    {
      href: "#projects",
      label: "Projects",
      active: activeSection === "projects",
    },
    {
      href: "#experience",
      label: "Experience",
      active: activeSection === "experience",
    },
    { href: "#contact", label: "Contact", active: activeSection === "contact" },
  ];

  // Portfolio owner info
  const portfolioOwner = {
    name: "Brian Kidd",
    title: "UX Engineer & Frontend Developer",
    location: "Seattle, WA",
    email: "brian.kidd.one@gmail.com",
    linkedin: "https://www.linkedin.com/in/briankidd9design/",
    github: "https://github.com/briankidd9design",
    // behance: "https://behance.net/alexjohnson",
    // resume: "/resume-alex-johnson.pdf",
  };

  // Section change handler for navigation
  const onSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);

    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      // Update URL hash without triggering page reload
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  // Intersection Observer for automatic section detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-50px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Navigation props for portfolio context
  const navigationProps = {
    activeSection,
    onSectionClick: onSectionClick,
    socialLinks: {
      github: portfolioOwner.github,
      linkedin: portfolioOwner.linkedin,
    },
  };
  // const navigationProps = {
  //   items: navItems,

  //   owner: portfolioOwner,
  //   showThemeToggle: true,
  //   showResumeButton: true,
  //   resumeUrl: portfolioOwner.resume,
  //   socialLinks: {
  //     github: portfolioOwner.github,
  //     linkedin: portfolioOwner.linkedin,
  //     behance: portfolioOwner.behance,
  //   },
  //   ctaButton: {
  //     text: "Hire Me",
  //     href: "#contact",
  //     variant: "primary",
  //   },
  // };

  // Skills data to pass to components
  const skillsData = {
    technical: [
      "React/Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Adobe Creative Suite",
      "Framer Motion",
      "Three.js",
    ],
    ux: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Information Architecture",
      "Design Systems",
      "Accessibility (WCAG)",
    ],
  };

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Design System",
      category: "UX/UI Design",
      description: "Comprehensive design system for a major retail platform",
      image: "/projects/design-system.jpg",
      tags: ["Figma", "React", "Storybook"],
      link: "/projects/design-system",
      featured: true,
    },
    {
      id: 2,
      title: "Financial Dashboard",
      category: "Frontend Development",
      description: "Interactive dashboard for personal finance management",
      image: "/projects/dashboard.jpg",
      tags: ["Next.js", "D3.js", "TypeScript"],
      link: "/projects/financial-dashboard",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile App Redesign",
      category: "UX Research",
      description: "Complete UX overhaul based on user research insights",
      image: "/projects/mobile-app.jpg",
      tags: ["User Research", "Prototyping", "A/B Testing"],
      link: "/projects/mobile-redesign",
      featured: true,
    },
  ];

  // Experience data
  const experienceData = [
    {
      company: "TechCorp",
      position: "Senior UX Engineer",
      duration: "2022 - Present",
      description:
        "Lead design and development of user-facing features for 2M+ users",
      achievements: [
        "Increased user engagement by 40% through redesigned onboarding flow",
        "Built and maintained design system used across 15+ products",
      ],
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with design team",
      achievements: [
        "Improved page load speeds by 60% through optimization",
        "Implemented accessibility standards achieving WCAG AA compliance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation with portfolio-specific props */}
      <Navigation {...navigationProps} />
      {/* Main content sections */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="section">
          <Hero
          // name={portfolioOwner.name}
          // title={portfolioOwner.title}
          // location={portfolioOwner.location}
          // socialLinks={navigationProps.socialLinks}
          // ctaButton={navigationProps.ctaButton}
          />
        </section>
        <section id="about" className="min-h-screen  scroll-mt-16">
          <About />
        </section>
        <section id="about" className="min-h-screen  scroll-mt-16">
          <Portfolio />
        </section>
        {/* Contact Section */}
        <section id="contact" className="section">
          <Contact />
        </section>
        <section id="resume" className="section">
          <Resume />
        </section>
        <section id="footer" className="section">
          <Footer />
        </section>
      </main>
    </div>
  );
}
