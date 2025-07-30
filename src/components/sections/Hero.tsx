"use client";

import React, { useState, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
  const [animationsLoaded, setAnimationsLoaded] = useState(false);

  useEffect(() => {
    // Trigger all animations after component mounts
    const timer = setTimeout(() => {
      setAnimationsLoaded(true);
    }, 200); // Small delay for better effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/80"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(29, 78, 216, 0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><rect fill="%23374151" width="1000" height="600"/><circle fill="%23475569" cx="200" cy="150" r="3"/><circle fill="%23475569" cx="800" cy="400" r="2"/><circle fill="%236366f1" cx="400" cy="300" r="1"/><circle fill="%236366f1" cx="600" cy="200" r="1"/></svg>')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle - Slide Down */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            animationsLoaded
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Brian Kidd
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-8">
            UX Engineer | Front End Developer
          </h2>
        </div>

        {/* Animated Logo - Fade In Scale */}
        <div className="mb-8 flex justify-center">
          <div
            className={`w-32 h-50 bg-gray-300/20 backdrop-blur-sm flex items-center justify-center border border-white/20 transform transition-all duration-1200 ease-out ${
              animationsLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{
              transitionDelay: "300ms", // Logo starts after text begins moving
            }}
          >
            <Image
              src="/images/bk-logo-1.png"
              alt="Brian Kidd - UX Engineer - logo"
              width={128}
              height={200}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Social Links and Tagline - Slide Up */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            animationsLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: "600ms", // Social links start after logo begins fading
          }}
        >
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://www.linkedin.com/in/briankidd9design/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 transition-colors p-3 rounded-full"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/briankidd9design"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 transition-colors p-3 rounded-full"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Tagline */}
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Creating accessible, intuitive interfaces with 7+ years of
            experience in UX engineering and front-end development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
