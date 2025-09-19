import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4 sm:px-6 lg:px-8 py-12 bg-gray-900/70 rounded-2xl shadow-lg">
      <div className="flex flex-col items-center gap-4 w-full md:w-auto">
        <img
          src="/images/pic2.jpg"
          alt="Profile"
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl transform transition duration-500 hover:scale-105"
        />
        <a
          href="https://rxresu.me/aparnathalluru/aparna"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition text-sm sm:text-base"
        >
          Check Resume
        </a>
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          Hi, I am <br /> Aparna
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-400">
          Full Stack Developer
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300">
          I’m a passionate developer who loves building web apps using React and
          modern technologies. I enjoy solving real-world problems and creating
          clean, responsive user interfaces.
        </p>
      </div>
    </div>
  );
};

export default About;
