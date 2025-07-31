// app/page.tsx
"use client";
import { useState, useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Resume from "@/components/sections/Resume";
import Footer from "@/components/layout/Footer";

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation with portfolio-specific props */}
      <Navigation {...navigationProps} />
      {/* Main content sections */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="section">
          <Hero />
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
