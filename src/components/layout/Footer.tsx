"use client";
import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/briankidd9design/",
      //   count: "1920", // Your LinkedIn connections or followers
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/briankidd9design",
      //   count: "207", // Your GitHub followers or repos
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-8">
          <p className="text-lg mb-4">
            Brian David Kidd | All Rights Reserved © | brian.kidd.one@gmail.com
          </p>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-8 mb-6">
            {socialLinks.map((social, index) => (
              <div key={index} className="flex flex-col items-center">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors mb-2"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
                {/* <span className="text-sm font-semibold">{social.count}</span> */}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/80 text-sm">
            © {currentYear} Brian Kidd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
