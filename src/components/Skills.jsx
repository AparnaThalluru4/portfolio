import React from "react";

const frontendSkills = [
  { name: "React Js", logo: "/images/react.png" },
  { name: "HTML", logo: "/images/html.png" },
  { name: "CSS", logo: "/images/css.png" },
  { name: "TailwindCSS", logo: "/images/tailwind.jpg" },
  { name: "JavaScript", logo: "/images/javascript.png" },
  { name: "Bootstrap", logo: "/images/bootstrap.jpg" },
];

const backendSkills = [
  { name: "Node Js", logo: "/images/node.png" },
  { name: "Express Js", logo: "/images/express.png" },
  { name: "MongoDB", logo: "/images/mongodb.png" },
  { name: "MySQL", logo: "/images/mysql.png" },
];

const Skills = () => {
  const SkillCard = ({ skill }) => (
    <div className="bg-gray-800/80 text-white rounded-lg p-4 flex flex-col items-center gap-2 hover:scale-105 hover:shadow-xl transform transition duration-300">
      {skill.logo && (
        <img
          src={skill.logo}
          alt={skill.name}
          className="w-10 h-10 sm:w-12 sm:h-12"
        />
      )}
      <span className="font-medium text-sm sm:text-base">{skill.name}</span>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto text-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/70 rounded-2xl shadow-lg">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Skills</h2>
      <p className="text-gray-300 text-sm sm:text-base mb-8">
        Here are some of my skills on which I have been working.
      </p>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="flex-1 max-w-md mx-auto bg-gray-800/80 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
            Frontend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div className="flex-1 max-w-md mx-auto bg-gray-800/80 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
            Backend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {backendSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
