import React from "react";

const education = [
  {
    degree: "Bachelor of Engineering (CSE)",
    year: "Nov 2021 - Apr 2025",
    place: "Priyadarshini College Of Engineering and Technology",
    grade: "8.56 CGPA",
    description:
      "Completed Bachelor of Engineering in Computer Science and Engineering at PRIK, Nellore.",
    logo: "./images/prik.jpg",
  },
  {
    degree: "Class 12 (Intermediate)",
    year: "June 2019 - March 2021",
    place: "Jagan's Junior College",
    grade: "95.4%",
    description:
      "Completed my class 12 high school education at Jagan's Junior College, Nellore.",
    logo: "./images/jagans.jpg",
  },
  {
    degree: "Class 10 (SSC)",
    year: "June 2018 - March 2019",
    place: "ZPHS",
    grade: "9.7 GPA",
    description: "Completed my class 10th class at ZPHS, Manubolu.",
    logo: "./images/zphs.jpg",
  },
];

const Education = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <h2 className="text-4xl text-white font-bold mb-10 text-center">Education</h2>
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 rounded"></div>
      <ul className="space-y-10">
        {education.map((edu, idx) => (
          <li
            key={idx}
            className={`md:w-1/2 ${
              idx % 2 === 0
                ? "md:pr-10 md:ml-0 md:mr-auto text-right"
                : "md:pl-10 md:ml-auto md:mr-0 text-left"
            } relative`}
            style={{ zIndex: 2 }}
          >
            <div className="bg-white border shadow-md rounded-lg px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 w-full md:max-w-2xl mx-auto md:mx-0">
              <div className="flex items-center mb-2">
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={`${edu.place} logo`}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <h3 className="text-lg sm:text-xl font-semibold">{edu.degree}</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{edu.place}</p>
              <span className="block text-xs sm:text-sm text-gray-500 mb-1">
                {edu.year}
              </span>
              <span className="block text-xs sm:text-sm text-gray-700 font-bold">
                Grade: {edu.grade}
              </span>
              <p className="mt-2 text-gray-800 text-sm sm:text-base">
                {edu.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Education;
