"use client";

import React from "react";
import Image from "next/image";
import Testimonials from "../portfolio/Testimonials";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-green-400">
          About
        </h2>

        {/* Desktop Layout: 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Left Column: Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg leading-relaxed">
              I’m a UX Engineer and Front-End Developer who thrives at the
              intersection of design and engineering. My journey began at the
              University of Washington, where I earned a degree in journalism,
              received an Excellence in Journalism Award, and minored in music.
              As a journalist, I was drawn to the power of storytelling—but as a
              musician, I sought to create richer, more immersive experiences.
              Web development became the perfect medium to unite both passions,
              enabling me to weave together narrative, interactivity, and
              user-centered design.
            </p>

            <p className="text-lg leading-relaxed">
              At Microsoft, I had the privilege of working on the Windows Search
              Box team, where I improved the UI and contributed to a 7% increase
              in usage. As the team&apos;s accessibility expert, I ensured our
              interfaces met strict WCAG standards, reflecting my commitment to
              inclusive design.
            </p>

            <p className="text-lg leading-relaxed">
              I specialize in creating responsive, accessible web applications
              using React, TypeScript, and modern development practices. My
              background in both UX research and front-end development allows me
              to build interfaces that are not only visually appealing but also
              intuitive and user-centered.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Core Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Frontend Technologies</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>React & Next.js</li>
                    <li>TypeScript & JavaScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>Sass & Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">UX & Design</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>WCAG Accessibility</li>
                    <li>Figma & Adobe XD</li>
                    <li>User Research</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Photo + Testimonials */}
          <div className="lg:col-span-5 space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gray-300/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                  <Image
                    src="/images/brian-kidd-avatar.jpg"
                    alt="Brian Kidd - UX Engineer"
                    width={320}
                    height={320}
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Testimonials - Compact for sidebar */}
            <div className="mt-8">
              <Testimonials />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Stacked */}
        <div className="lg:hidden space-y-12">
          {/* Bio Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am a UX Engineer with seven years of experience bridging the gap
              between design and development. My journey began in journalism at
              the University of Washington, where I earned my degree and an
              Excellence in Journalism Award, before transitioning into the
              world of web development.
            </p>

            <p className="text-lg leading-relaxed">
              At Microsoft, I had the privilege of working on the Windows Search
              Box team, where I improved the UI and contributed to a 7% increase
              in usage. As the team&apos;s accessibility expert, I ensured our
              interfaces met strict WCAG standards, reflecting my commitment to
              inclusive design.
            </p>

            <p className="text-lg leading-relaxed">
              I specialize in creating responsive, accessible web applications
              using React, TypeScript, and modern development practices. My
              background in both UX research and front-end development allows me
              to build interfaces that are not only visually appealing but also
              intuitive and user-centered.
            </p>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gray-300/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Image
                  src="/images/brian-kidd-avatar.jpg"
                  alt="Brian Kidd - UX Engineer"
                  width={320}
                  height={320}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Core Expertise */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Core Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Frontend Technologies</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>React & Next.js</li>
                  <li>TypeScript & JavaScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>Sass & Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">UX & Design</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>WCAG Accessibility</li>
                  <li>Figma & Adobe XD</li>
                  <li>User Research</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default About;
