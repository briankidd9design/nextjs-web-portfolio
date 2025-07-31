"use client";
import React, { useState } from "react";
import { ExternalLink, Github, Figma, Film } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrl2?: string;
  figmaUrl?: string;
  reelUrl?: string;
}

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "March Madness Game Predictor",
      description:
        "Users can compare the stats and get game predictions of teams competing in the annual NCAA March Madness Tournament. The application fetches API JSON data which is then injected into a popular basketball game predictor formula. An Express Proxy server is used to bypass CORS restrictions using Node.js.",
      image: "/images/projects/march-madness-preview-desktop.jpg",
      tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Node.js"],
      liveUrl:
        "https://march-madness-game-predictor-72494844c114.herokuapp.com/index.html",
      githubUrl:
        "https://github.com/briankidd9design/march-madness-predictor-app-2",
      figmaUrl:
        "https://www.figma.com/design/ZsI7GMw1R43zP83cXbGNKG/March-Madness-Predictor?node-id=5-33&m=dev&t=F3JFvcnkMRL1O8J5-1",
    },
    {
      id: 2,
      title: "Boeing 787 Dreamliner Site",
      description:
        "Spearheaded development of promotional page for Boeing's 787 Dreamliner using enterprise CMS. This project involved creating a responsive, user-friendly interface that showcased the aircraft's key features and specifications while maintaining enterprise-level performance standards.",
      image: "/images/projects/787-dreamliner-preview-desktop.jpg",
      tags: ["HTML5", "CSS3", "TeamSite CMS"],
      liveUrl: "https://www.boeing.com/commercial/787",
    },
    {
      id: 3,
      title: "Website Builder Support Page",
      description:
        "As part of a large website migration project, I built a support page for Pacific Software Publishing's (PSP) WebdeXpress, website building tool. PSP had separate sites for their products and services. In order to improve SEO, page views, and decrease bounce rate, the company migrated all its sites under the pspinc.com umbrella.",
      image: "/images/projects/web-de-xpress-preview-desktop.jpg",
      tags: ["HTML5", "Sass", "JavaScript", "PHP"],
      liveUrl: "https://www.pspinc.com/webdexpress/manual/welcome",
    },
    {
      id: 4,
      title: "Full Stack React Movie App",
      description:
        "The React front end allows users to create accounts, login, and add movie info that is stored in a MongoDB database.",
      image: "/images/projects/react-full-stack-movie-app-preview-desktop.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://brians-movies.herokuapp.com/movies",
      githubUrl:
        "https://github.com/briankidd9design/React-Movie-Database-Front-End",
      githubUrl2:
        "https://github.com/briankidd9design/React-Movie-Database-Back-End",
    },
    {
      id: 5,
      title: "Responsive User Interface Prototype",
      description:
        "A client wanted me to code a template for the UI of their website. Using their design created in Figma, I was able to crete the UI using HTML5, CSS, employing the BEM methodology for CSS selectors, and JavaScript",
      image: "/images/projects/responsive-user-interface-preview-desktop.jpg",
      tags: ["Figma", "HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://briankidd9design.github.io/pspinc-site/",
      githubUrl: "https://github.com/briankidd9design/psp-design-layout",
      reelUrl: "https://youtu.be/AqG2VyKoEYI?si=Ad3CeUC4zYJOkShB",
    },
    {
      id: 6,
      title: "Restaurant Review Page",
      description:
        "Reviews are displayed to the UI of this restaurants review page using the Yelp Fusion API using an Express Proxy Server in order to circumvent CORS restrictions on the Yelp's api server. Notice, the Yelp API only shows previews of the top three reviews, so I also linked to the entire review on Yelp.",
      image: "/images/projects/steves-cafe-reviews-preview-desktop.jpg",
      tags: ["HTML5", "JavaScript", "Express.js", "Node.js"],
      liveUrl:
        "https://yelp-restaurant-reviews-app-3b4f952c753e.herokuapp.com/",
      githubUrl: "https://github.com/briankidd9design/steves-cafe-yelp-reviews",
    },
  ];

  const currentProject = projects[selectedProject];

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-8 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Portfolio
          </h2>
        </div>

        {/* Mobile/Tablet Layout: Stack vertically */}
        <div className="lg:hidden">
          {/* Project List - Horizontal scroll on mobile */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-100">
              Projects
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedProject === index
                      ? "bg-blue-900 text-white"
                      : "bg-blue-600/30 text-blue-100 hover:bg-blue-600/50 hover:text-white"
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          {/* Project Preview - Full width on mobile */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            {/* Project Image */}
            <div className="h-48 sm:h-64 relative overflow-hidden">
              <Image
                src={currentProject.image}
                alt={`${currentProject.title} preview`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Project Details */}
            <div className="p-4 sm:p-6 text-gray-900">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {currentProject.title}
              </h4>

              {/* Description with proper line height and space */}
              <div className="mb-4 min-h-[6rem]">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {currentProject.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                )}
                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                )}
                {currentProject.githubUrl2 && (
                  <a
                    href={currentProject.githubUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub Back End
                  </a>
                )}
                {currentProject.figmaUrl && (
                  <a
                    href={currentProject.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                  >
                    <Figma size={16} className="mr-2" />
                    Figma
                  </a>
                )}
                {currentProject.reelUrl && (
                  <a
                    href={currentProject.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                  >
                    <Film size={16} className="mr-2" />
                    Video Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Project List Sidebar */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-semibold mb-6 text-blue-100">
              Projects
            </h3>
            <div className="space-y-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    selectedProject === index
                      ? "bg-blue-900 text-white border-l-4 border-blue-300"
                      : "bg-blue-600/30 text-blue-100 hover:bg-blue-600/50 hover:text-white"
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          {/* Project Preview Area */}
          <div className="lg:col-span-8">
            <div
              className="bg-white rounded-lg overflow-hidden shadow-2xl"
              style={{ height: "650px" }}
            >
              {/* Project Image - Responsive container */}
              <div className="h-80 relative overflow-hidden">
                <Image
                  src={currentProject.image}
                  alt={`${currentProject.title} preview`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Project Details - Remaining space with flex layout */}
              <div
                className="flex flex-col justify-between p-6 text-gray-900"
                style={{ height: "calc(650px - 320px)" }}
              >
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    {currentProject.title}
                  </h4>

                  {/* Description with proper space (4+ lines) */}
                  <div className="mb-4" style={{ minHeight: "6rem" }}>
                    <p className="text-gray-700 leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  )}
                  {currentProject.githubUrl2 && (
                    <a
                      href={currentProject.githubUrl2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub Back End
                    </a>
                  )}
                  {currentProject.figmaUrl && (
                    <a
                      href={currentProject.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                    >
                      <Figma size={16} className="mr-2" />
                      Figma
                    </a>
                  )}
                  {currentProject.reelUrl && (
                    <a
                      href={currentProject.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                    >
                      <Film size={16} className="mr-2" />
                      Video Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-6 lg:mt-8">
          <p className="text-blue-200 text-sm">
            Click on project names to view details and live demos
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
