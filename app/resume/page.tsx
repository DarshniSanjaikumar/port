"use client";
import React, { useState } from "react";

export default function ResumePage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10 py-10 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Intro */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">Darshni Sanjaikumar</h1>
          <p className="text-xl text-gray-600">Computer Science Engineer | ML & Data Science Enthusiast</p>
          <a
            href="/CV.pdf"
            download
            className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Download CV
          </a>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
            <li><strong>Languages:</strong> C++, Java, Python</li>
            <li><strong>ML:</strong> Model Dev, Data Analysis</li>
            <li><strong>Dev:</strong> Web Apps, ML Integration</li>
            <li><strong>Soft Skills:</strong> Teamwork, Communication</li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Startup Radar:</strong> Predicts startup success & investments using ML
            </li>
            <li>
              <strong>Sign Language Translator:</strong> Real-time sign language to text using ML + CV
            </li>
            <li>
              <strong>Legal Chatbot:</strong> AI tool for legal query handling and case status
            </li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Education</h2>
          <div className="text-gray-700 space-y-2">
            <div>
              <strong>B.Tech, Computer Science</strong> – Sri Sairam Engineering College (2020–2024)
              <p>CGPA: 8.9 / 10</p>
            </div>
            <div>
              <strong>HSC</strong> – St. Joseph's Higher Secondary School (2018–2020)
              <p>Percentage: 95%</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Get in Touch</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <div className="space-y-2 text-gray-700">
              <p>Email: <a href="mailto:darshnisanjaikumar@gmail.com" className="text-blue-600 hover:underline">darshnisanjaikumar@gmail.com</a></p>
              <p>Phone: <a href="tel:+919840527916" className="text-blue-600 hover:underline">+91 9840527916</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/darshni-sanjaikumar-448642253/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">darshni-sanjaikumar</a></p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
              <textarea
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitMessage && <p className="text-green-600">{submitMessage}</p>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}