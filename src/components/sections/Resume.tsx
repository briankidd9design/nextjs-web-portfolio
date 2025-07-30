"use client";
import React from "react";
import { Download } from "lucide-react";

const Resume: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    // const link = document.createElement("a");
    // link.href = "/assets/BrianKiddResumeDeveloper.pdf";
    // link.download = "Brian_Kidd_Resume.pdf";
    // link.click();
    window.open("/assets/BrianKiddResumeDeveloper.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-8">
          Resume
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          View and possibly download my resume to learn more about my experience
          and qualifications.
        </p>

        {/* Download Button */}
        <button
          onClick={handleDownloadResume}
          className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Download size={24} className="mr-3" />
          Download Resume (PDF)
        </button>

        {/* Additional Info */}
        <p className="text-gray-600 mt-6 text-sm">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}
        </p>
      </div>
    </section>
  );
};

export default Resume;
