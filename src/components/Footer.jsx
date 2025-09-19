import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-purple-400">
          Thalluru Aparna
        </h1>
        <nav className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
        </nav>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/aparna-thalluru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/AparnaThalluru4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;