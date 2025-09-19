import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  if (!state) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-2xl font-bold">Project not found!</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const { title, desc, img, tech } = state;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        ← Back
      </button>

      <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-56 sm:h-72 md:h-96 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6">{desc}</p>
          <div className="flex flex-wrap gap-3">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="text-sm px-4 py-1 rounded-full bg-purple-700 text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
