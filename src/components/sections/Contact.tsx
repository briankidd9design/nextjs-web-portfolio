"use client";
import React, { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

interface ContactSectionProps {
  email?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
  };
  location?: string;
  availability?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  antiSpam: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  antiSpam?: string;
}

const Contact: React.FC<ContactSectionProps> = ({}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    antiSpam: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    // Anti-spam validation (2 + 2 = 4)
    if (formData.antiSpam.trim() !== "4") {
      newErrors.antiSpam = "Please solve the math problem correctly";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          antiSpam: "",
        });
      } else {
        console.error("Server error:", result);
        // Show more detailed error information
        const errorMsg =
          result.error || "Failed to send message. Please try again.";
        alert(`Error: ${errorMsg}`);
      }
    } catch (error) {
      console.error("Network error submitting form:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center py-12"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <CheckCircle className="mx-auto h-16 w-16 text-white mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-lg text-white/90 mb-6">
              Your message has been sent successfully. I will get back to you
              within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center py-12"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact
          </h2>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 bg-white/90 border-0 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-white focus:bg-white transition-all ${
                  errors.name ? "ring-2 ring-red-400" : ""
                }`}
                placeholder="Name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-200">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 bg-white/90 border-0 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-white focus:bg-white transition-all ${
                  errors.email ? "ring-2 ring-red-400" : ""
                }`}
                placeholder="Email"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-200">{errors.email}</p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 bg-white/90 border-0 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-white focus:bg-white transition-all ${
                  errors.subject ? "ring-2 ring-red-400" : ""
                }`}
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="mt-2 text-sm text-red-200">{errors.subject}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 bg-white/90 border-0 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-white focus:bg-white transition-all resize-vertical ${
                  errors.message ? "ring-2 ring-red-400" : ""
                }`}
                placeholder="Message"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-200">{errors.message}</p>
              )}
            </div>

            {/* Anti-spam Field */}
            <div>
              <input
                type="text"
                id="antiSpam"
                name="antiSpam"
                value={formData.antiSpam}
                onChange={handleInputChange}
                className={`w-full px-4 py-4 bg-white/90 border-0 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-white focus:bg-white transition-all ${
                  errors.antiSpam ? "ring-2 ring-red-400" : ""
                }`}
                placeholder="Anti-spam: What is 2 + 2?"
              />
              {errors.antiSpam && (
                <p className="mt-2 text-sm text-red-200">{errors.antiSpam}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center px-6 py-4 text-lg font-semibold rounded-lg text-white transition-all ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>

          {/* Video Call Section */}
          <div className="mt-8 text-center">
            <p className="text-white/90 mb-4">Or schedule a video call:</p>
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/brian-kidd-one/30min",
                  "_blank"
                )
              }
              className="text-green-200 hover:text-white underline transition-colors"
            >
              Click here to set up a video conference call through Calendly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
