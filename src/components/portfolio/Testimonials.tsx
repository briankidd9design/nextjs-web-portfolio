"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string | string[]; // Can be either string or array of paragraphs
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Andrea Sames",
      position: "Project Manager at Boeing Creative Services",
      company: "Boeing",
      content:
        "Brian built a new web page for the 787 Dreamliner website and was great to work with. Asked the right questions and met our deadline. He is enthusiastic about web development and I would work with him again.",
    },
    {
      id: 2,
      name: "Craig Duckett",
      position: "Business and Info Tech Professor, Cascadia College",
      company: "Cascadia College",
      content: [
        "I believe Brian would make an excellent addition to any organization that works with front-end web development and applications.",
        "Brian is well equipped to grow from any challenges he is presented with. His patience, strong web programming skills, and genuine desire to learn, prepare him beautifully for web application development. I can recommend him without hesitation.",
      ],
    },
    {
      id: 3,
      name: "Anthony Sim",
      position: "Software Engineer",
      company: "Microsoft",
      content: [
        "It was a true pleasure collaborating with Brian Kidd at Microsoft.",

        "As a Frontend UI/UX Developer, Brian consistently impressed me with his thoughtful approach to design and his exceptional development capabilities. He's a highly collaborative team player who actively seeks feedback and iterates to create the best possible user experience. He’s not just a developer; he's a problem-solver who genuinely cares about the end-user.",

        "I wholeheartedly recommend Brian for any role that requires a skilled and dedicated UI/UX professional.",
      ],
    },
    {
      id: 4,
      name: "Mark Kembel",
      position: "CEO",
      company: "AI, Online Developer Plus, Inc",
      content:
        "Brian created a website for my company and he did a great job. He tested the site, formatted it and the site works great with PC, Laptops, IPads and Cell Phones. He created a logo that was designed to my specific detail. He was recommended to me by one of my past employees that was his instructor in college. Brian registered the site and entered the keywords for searches. He did everything I wanted and the cost was in line with my budget. I plan to use Brian for other projects in the near future. He did a great job in a short time that fit my needs.",
    },
    {
      id: 5,
      name: "Jason Nazario",
      position: "Senior Project Development Manager",
      company: "Naz Digital",
      content:
        "    Brian brought commitment, hard work and talented commentary to our communications team at the FHLB Seattle. I worked with him for about 2 years and I would hire him if I had the need for a technical writer/communications specialist.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Mouse event handlers for desktop drag (optional)
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStartX.current === 0) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
            What Colleagues and Managers Say
          </h3>
          <p className="text-gray-300 text-sm">
            Testimonials from colleagues and clients I have worked with
          </p>
        </div>

        {/* Testimonial Card - Now with touch/swipe support */}
        <div
          className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Handle mouse leave as mouse up
        >
          {/* Quote Icon */}
          <div className="absolute top-4 left-4 text-green-400/30 pointer-events-none">
            <Quote size={32} />
          </div>

          {/* Testimonial Content */}
          <div className="text-center pt-4 pointer-events-none">
            <blockquote className="text-base sm:text-lg text-white leading-relaxed mb-6 italic">
              &quot;
              {Array.isArray(currentTestimonial.content)
                ? currentTestimonial.content.map((paragraph, index) => (
                    <span key={index}>
                      {paragraph}
                      {index < currentTestimonial.content.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  ))
                : currentTestimonial.content}
              &quot;
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mb-3">
                <span className="text-blue-900 font-bold text-lg">
                  {currentTestimonial.name.charAt(0)}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-white mb-1">
                {currentTestimonial.name}
              </h4>
              <p className="text-green-400 font-medium text-sm">
                {currentTestimonial.position}
              </p>
              <p className="text-gray-300 text-sm">
                {currentTestimonial.company}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Smaller */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors pointer-events-auto"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors pointer-events-auto"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        {/* Dots Indicator - Smaller */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-green-400"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter - Smaller */}
        <div className="text-center mt-3">
          <span className="text-xs text-gray-400">
            {currentIndex + 1} of {testimonials.length}
          </span>
        </div>

        {/* Swipe Hint for Mobile */}
        <div className="text-center mt-2 sm:hidden">
          <span className="text-xs text-gray-500">👈 Swipe to navigate 👉</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
