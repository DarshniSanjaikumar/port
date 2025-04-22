"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function CertificationsPage() {
  // Create refs for counter elements
  const counterSectionRef = useRef(null);
  // State for each counter
  const [counters, setCounters] = useState({
    certifications: 0,
    projects: 0,
    hackathons: 0,
    internships: 0
  });
  
  // Final values for counters
  const finalValues = {
    certifications: 2,
    projects: 5,
    hackathons: 3,
    internships: 1
  };
  
  // Animation duration in milliseconds
  const animationDuration = 2000;

  useEffect(() => {
    // Create intersection observer to detect when counter section is visible
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Start counter animation when section is visible
        animateCounters();
        // Unobserve after triggering animation
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

    // Observe the counter section
    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  // Function to animate counters
  const animateCounters = () => {
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Update counter values based on animation progress
      setCounters({
        certifications: Math.floor(progress * finalValues.certifications),
        projects: Math.floor(progress * finalValues.projects),
        hackathons: Math.floor(progress * finalValues.hackathons),
        internships: Math.floor(progress * finalValues.internships)
      });
      
      // Stop animation when complete
      if (progress === 1) {
        clearInterval(interval);
      }
    }, 16); // ~60fps for smooth animation
  };

  return (
    <div className="container mx-auto min-h-screen p-8 md:p-10 max-w-5xl mt-10">
      
      {/* Certifications Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Professional Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certificate Card 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
            
            <div className="relative p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 mb-4 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cloud Computing</h3>
                <p className="text-white/90 mb-3">NPTEL</p>
                <p className="text-white/75 text-sm">Comprehensive training in cloud technologies, services, and deployment models.</p>
              </div>
              
              <div className="mt-4">
                <p className="text-white/80 text-sm">Issued: December 2024</p>
                <div className="flex items-center mt-2">
                  <div className="h-1 w-12 bg-white/30 rounded"></div>
                  <div className="h-1 w-16 bg-white rounded mx-1"></div>
                  <div className="h-1 w-8 bg-white/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certificate Card 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-90"></div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
            
            <div className="relative p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 mb-4 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Machine Learning and Data Science</h3>
                <p className="text-white/90 mb-3">GeeksforGeeks</p>
                <p className="text-white/75 text-sm">Expert-level training in ML algorithms, data analysis, and practical implementations.</p>
              </div>
              
              <div className="mt-4">
                <p className="text-white/80 text-sm">Issued: July 2024</p>
                <div className="flex items-center mt-2">
                  <div className="h-1 w-8 bg-white/30 rounded"></div>
                  <div className="h-1 w-16 bg-white rounded mx-1"></div>
                  <div className="h-1 w-12 bg-white/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Professional Training Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Professional Training</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-blue-600">GeeksforGeeks Online Internship</h4>
                <p className="text-gray-700">Machine Learning and Data Science</p>
              </div>
              <p className="text-gray-600 mt-2 md:mt-0">May 2024 - July 2024</p>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-700 mb-2">Key accomplishments during the internship:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Completed comprehensive training on theoretical knowledge and practical implementations</li>
                <li>Underwent rigorous training on data science, machine learning, Python libraries, and mathematical foundations</li>
                <li>Gained exposure to advanced ML and Data Science projects</li>
                <li>Built supervised ML model for Titanic Survival Prediction</li>
                <li>Created neural network-based language translation model</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Achievements & Hackathons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Smart India Hackathon Card */}
          <div className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Smart India Hackathon</h3>
                <p className="text-gray-600">2023, 2024</p>
              </div>
            </div>
            <p className="text-gray-700">Participated in the prestigious nationwide Smart India Hackathon, representing innovative solutions to real-world problems in the technology space.</p>
          </div>
          
          {/* Cognitia Hackathon Card */}
          <div className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Cognitia Intercollege Hackathon</h3>
                <p className="text-gray-600">Top 5 Finalist</p>
              </div>
            </div>
            <p className="text-gray-700">Qualified as one of the top 5 teams in the Cognitia intercollege hackathon, demonstrating innovative thinking and technical excellence.</p>
          </div>
        </div>
        
        {/* ML Projects Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Notable Machine Learning Projects</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                <h4 className="font-semibold mb-2">Startup Radar</h4>
                <p className="text-gray-600 text-sm">Growth prediction, investment forecasting, and success prediction for startups</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                <h4 className="font-semibold mb-2">Sign Language Translator</h4>
                <p className="text-gray-600 text-sm">Real-time sign language translation using ML and computer vision</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                <h4 className="font-semibold mb-2">Legal Chatbot</h4>
                <p className="text-gray-600 text-sm">AI-powered legal assistance solution for answering legal queries</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                <h4 className="font-semibold mb-2">Titanic Survival Prediction</h4>
                <p className="text-gray-600 text-sm">ML model to predict passenger survival based on key features</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                <h4 className="font-semibold mb-2">Neural Language Translation</h4>
                <p className="text-gray-600 text-sm">Translation model using neural networks for multi-language processing</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievement Counter Section - ANIMATED */}
        <div ref={counterSectionRef} className="mt-10 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6 text-center">Professional Milestones</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1 transition-all duration-1000">
                {counters.certifications}{finalValues.certifications > counters.certifications ? "+" : ""}
              </div>
              <p className="text-gray-600">Certifications</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1 transition-all duration-1000">
                {counters.projects}{finalValues.projects > counters.projects ? "+" : "+"}
              </div>
              <p className="text-gray-600">ML Projects</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1 transition-all duration-1000">
                {counters.hackathons}{finalValues.hackathons > counters.hackathons ? "+" : "+"}
              </div>
              <p className="text-gray-600">Hackathons</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1 transition-all duration-1000">
                {counters.internships}
              </div>
              <p className="text-gray-600">Internship Completed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}