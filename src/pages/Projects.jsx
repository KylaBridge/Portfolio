import React from "react";
import projects from "../data/project";
import ProjectCarousel from "../components/ProjectCarousel";

export function Projects() {
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto py-8 px-4 overflow-x-visible">
      <h2 className="text-3xl font-extrabold text-center mb-4 text-white">
        My Projects
      </h2>

      <p className="text-sm text-gray-300 px-10 leading-relaxed whitespace-normal wrap-break-word text-center mb-6">
        A compilation of both solo and collaborative works from my undergraduate
        coursework.
      </p>

      <ProjectCarousel projects={projects} autoPlayMs={6000} />
    </div>
  );
}

export default Projects;
