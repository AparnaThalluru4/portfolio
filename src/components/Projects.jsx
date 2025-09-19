import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "Personal portfolio for a institute in this students can easily find the details of their placement.",
      img: "/images/nareshit.png",
      tech: ["React", "TailwindCSS"],
    },
    {
      id: 2,
      title: "Expense Tracker",
      desc: "Track your daily expenses easily we can delete and update and also edit the expenses.",
      img: "/images/expense.jpg",
      tech: ["React", "Javascript"],
    },
    {
      id: 3,
      title: "E-commerce App",
      desc: "In this all movies are listed and user can add the reviews and ratings for the movies.",
      img: "/images/movies.jpg.png",
      tech: ["React", "Express", "MongoDB"],
    },
  ];

  const [activeProject, setActiveProject] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    activeProject === "All"
      ? projects
      : projects.filter((p) => p.title === activeProject);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h2>
      <p className="text-gray-400 mb-8">
        I have worked on a wide range of projects. Here are some of them.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveProject("All")}
          className={`px-5 py-2 rounded-full border transition ${
            activeProject === "All"
              ? "bg-purple-600 text-white border-purple-600"
              : "text-purple-400 border-purple-600 hover:bg-purple-600 hover:text-white"
          }`}
        >
          All
        </button>
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveProject(p.title)}
            className={`px-5 py-2 rounded-full border transition ${
              activeProject === p.title
                ? "bg-purple-600 text-white border-purple-600"
                : "text-purple-400 border-purple-600 hover:bg-purple-600 hover:text-white"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/project/${p.id}`, { state: p })}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 sm:h-56 object-cover object-center"
              loading="lazy"
            />

            <div className="p-5 text-left">
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-purple-700 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
