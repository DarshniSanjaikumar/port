import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen p-8 md:p-10 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 mb-16 text-center md:text-left">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {"Hi, I'm "}
              <span className="bg-gradient-to-r from-blue-800 via-purple-900 to-gray-900 bg-[length:200%_100%] bg-clip-text text-transparent font-bold">
                Darshni Sanjaikumar
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Machine Learning Engineer
            </h2>
            <p className="text-lg mb-6">
              Specializing in Machine Learning, Data Science, and innovative application development.
              Creating technology solutions that make a difference.
            </p>
            <div className="flex flex-col md:flex-row md:justify-start justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#contact" className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                Get in Touch
              </a>
              <a href="/resume" className="border border-blue-800 text-blue-800 px-6 py-2 rounded-lg hover:bg-blue-50 transition"> 
                View Resume
              </a>
            </div>
          </div>

          {/* Profile Image + Icon */}
          <div className="mt-8 md:mt-0 md:w-2/5 flex justify-center relative">
            <img
              src="/profile.jpg"
              alt="Darshni Sanjaikumar"
              className="rounded-full w-64 h-64 object-cover border-4 border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}