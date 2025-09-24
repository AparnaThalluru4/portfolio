import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div
      className="
        max-w-6xl mx-auto 
        flex flex-col md:flex-row items-center md:items-start 
        gap-8 px-4 sm:px-6 lg:px-8 py-12 
        bg-gray-900/70 rounded-2xl shadow-xl 
        transform transition duration-700 hover:scale-[1.02] hover:shadow-2xl
      "
    >
      {/* Profile + Resume */}
      <div className="flex flex-col items-center gap-4 w-full md:w-auto">
        <img
          src="/images/pic2.jpg"
          alt="Profile"
          className="
            w-28 h-28 
            sm:w-40 sm:h-40 
            md:w-48 md:h-48 
            lg:w-56 lg:h-56 
            rounded-full object-cover 
            shadow-lg border-4 border-purple-600/40 
            transform transition duration-500 hover:scale-105
          "
        />
        <a
          href="https://drive.google.com/file/d/14fZRDTZtAd3EnMet4fkAuG4UudFixxxb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5 py-2 bg-purple-600 text-white 
            font-medium rounded-lg shadow-md 
            hover:bg-purple-700 transition 
            text-sm sm:text-base
          "
        >
          Check Resume
        </a>
      </div>

      {/* Intro Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
          Hi, I am <br /> Thalluru Aparna
        </h1>

        {/* 🔥 Typing effect for roles */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-purple-400 min-h-[2rem]">
          <Typewriter
            words={[
              "Web Developer",
              "Full Stack Developer",
              "Programmer",
            ]}
            loop={0} // 0 = infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
          I’m a passionate developer who loves building web applications using
          React and modern technologies. I enjoy solving real-world problems and
          creating clean, responsive, and user-friendly interfaces for all
          devices.
        </p>
      </div>
    </div>
  );
};

export default About;
