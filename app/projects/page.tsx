"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function ProjectsPage() {
  const counterSectionRef = useRef(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // State for animated counters
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    libraries: 0,
    codeLines: 0
  });
  
  // Final values for counters
  const finalValues = {
    projects: 5,
    technologies: 12,
    libraries: 8,
    codeLines: 3500
  };
  
  // State for active project
  const [activeProject, setActiveProject] = useState<keyof typeof projectDetails>('startup-radar');
  
  // Project details enhanced with resume information
  const projectDetails = {
    'startup-radar': {
      title: 'Startup Radar',
      description: 'AI-Driven Startup Insights Platform with prompt engineering for AI-driven interactions.',
      features: [
        'Developed a dynamic web app to monitor and benchmark startups with insights on funding trends, growth, and market position',
        'Implemented ML models to forecast startup funding potential and success likelihood using historical and marker data',
        'Created an interactive dashboard for seamless exploration, comparison, and data-driven decisions for entrepreneurs and investors'
      ],
      technologies: ['React', 'AI', 'Data Analysis', 'Web Development', 'ML Models'],
      bgColor: 'from-blue-600 to-indigo-700',
      githubLink: 'https://github.com/DarshniSanjaikumar/startup-radar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      date: 'February 2025'
    },
    'sign-language': {
      title: 'Sign Language Translator',
      description: 'Sign Language to Text and Speech converter for improved accessibility and communication.',
      features: [
        'Built a real-time sign-to-text and speech system using MediaPipe, OpenCV, and TensorFlow/Keras',
        'Trained gesture classification model on custom and public American Sign Language (ASL) datasets',
        'Applied CNN-based model optimization to improve accuracy and reduce latency'
      ],
      technologies: ['MediaPipe', 'OpenCV', 'TensorFlow/Keras', 'Gesture Recognition', 'CNN'],
      bgColor: 'from-green-600 to-teal-600',
      githubLink: 'https://github.com/DarshniSanjaikumar/sign-language-translator',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
      date: 'February 2025'
    },
    'legal-chatbot': {
      title: 'Legal Chatbot',
      description: 'AI-Powered Legal Chatbot for Case Information Retrieval with real-time case status tracking.',
      features: [
        'Developed a legal chatbot designed to assist users with a wide range of legal queries, providing instant responses and improving user engagement',
        'Equipped the chatbot with functionalities to offer legal advice, share contact details for legal services, and answer general knowledge questions about legal topics',
        'Improved legal accessibility by automating case information retrieval'
      ],
      technologies: ['NLP', 'Machine Learning', 'Python', 'Legal Tech', 'Chatbot Development'],
      bgColor: 'from-purple-600 to-pink-600',
      githubLink: 'https://github.com/DarshniSanjaikumar/legal-chatbot',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      date: 'May 2024'
    },
    'titanic-survival': {
      title: 'Titanic Survival Prediction',
      description: 'Supervised machine learning model to predict passenger survival on the Titanic based on passenger characteristics.',
      features: [
        'Built a supervised machine learning model to predict passenger survival based on key features',
        'Implemented feature engineering from passenger data to improve prediction accuracy',
        'Applied supervised classification algorithms for optimal performance',
        'Created detailed analytics and visualizations on survival factors'
      ],
      technologies: ['Classification', 'Python', 'Pandas', 'Scikit-learn', 'Data Analysis'],
      bgColor: 'from-red-600 to-amber-600',
      githubLink: 'https://github.com/DarshniSanjaikumar/titanic-survival',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      date: 'July 2024'
    },
    'neural-translation': {
      title: 'Neural Language Translation',
      description: 'Translation model leveraging neural networks for multi-language text processing and conversion.',
      features: [
        'Created a translation model leveraging neural networks for multi-language text processing',
        'Implemented support for multiple language pairs with efficient text tokenization',
        'Designed neural network architecture optimized for translation tasks',
        'Developed context-aware translations for improved accuracy'
      ],
      technologies: ['NLP', 'Neural Networks', 'Deep Learning', 'Transformers', 'Python'],
      bgColor: 'from-cyan-600 to-blue-500',
      githubLink: 'https://github.com/DarshniSanjaikumar/neural-translation',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      date: 'July 2024'
    }
  };

  // Animation duration in milliseconds
  const animationDuration = 2000;

  useEffect(() => {
    // Animation for counters
    const counterObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (counterSectionRef.current) {
      counterObserver.observe(counterSectionRef.current);
    }

    // Animation for project reveal
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        projectObserver.observe(card);
      });
    }

    return () => {
      if (counterSectionRef.current) {
        counterObserver.unobserve(counterSectionRef.current);
      }
      if (projectsRef.current) {
        const projectCards = projectsRef.current.querySelectorAll('.project-card');
        projectCards.forEach(card => {
          projectObserver.unobserve(card);
        });
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
      
      setCounters({
        projects: Math.floor(progress * finalValues.projects),
        technologies: Math.floor(progress * finalValues.technologies),
        libraries: Math.floor(progress * finalValues.libraries),
        codeLines: Math.floor(progress * finalValues.codeLines)
      });
      
      if (progress === 1) {
        clearInterval(interval);
      }
    }, 16); // ~60fps
  };

  return (
    <div className="container mx-auto min-h-screen p-4 md:p-8 max-w-6xl">
      {/* Hero Section */}
      <section className="mb-16 mt-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of machine learning and data science projects, showcasing practical applications in prediction, translation, and AI assistance systems.
          </p>
        </div>
      </section>
      
      {/* Project Showcase Section */}
      <section className="mb-16" ref={projectsRef}>
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Project Showcase</h2>
        
        {/* Project Filter/Navigation */}
        <div className="flex overflow-x-auto pb-2 mb-8 gap-2 md:justify-center">
          {Object.keys(projectDetails).map((key) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                activeProject === key 
                ? 'bg-blue-600 text-white font-medium' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveProject(key)}
            >
              {projectDetails[key as keyof typeof projectDetails].title}
            </button>
          ))}
        </div>
        
        {/* Featured Project (Selected Project Detail View) */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-lg mb-12">
          <div className="p-6 md:p-10 md:flex">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Project</h2>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{projectDetails[activeProject].title}</h3>
              <p className="text-gray-600 mb-4">
                {projectDetails[activeProject].description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {projectDetails[activeProject].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {projectDetails[activeProject].technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">{tech}</span>
                ))}
              </div>
              <a 
                href={projectDetails[activeProject].githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition transform hover:scale-105 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View GitHub Repository
              </a>
            </div>
            <div className="md:w-1/2 relative h-60 md:h-auto">
              <div className={`absolute inset-0 bg-gradient-to-r ${projectDetails[activeProject].bgColor} opacity-75 rounded-lg`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {projectDetails[activeProject].icon}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
      </section>
      
      {/* Statistics Section */}
      <section className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 py-10 rounded-xl" ref={counterSectionRef}>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Project Statistics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A quantitative snapshot of my development experience and technical capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{counters.projects}+</div>
            <div className="text-gray-600">Completed Projects</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{counters.technologies}+</div>
            <div className="text-gray-600">Technologies Used</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{counters.libraries}+</div>
            <div className="text-gray-600">Libraries Integrated</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">{counters.codeLines}+</div>
            <div className="text-gray-600">Lines of Code</div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="mb-8 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in Collaborating?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:contact@example.com" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition transform hover:scale-105 inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
            <a 
              href="https://github.com/DarshniSanjaikumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg transition transform hover:scale-105 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}