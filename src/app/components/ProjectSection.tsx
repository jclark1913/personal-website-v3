"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS, PROJECT_BUTTONS } from "../lib/constants";

const ProjectSection = () => {
  return (
    <div
      id="projects"
      className="flex flex-col align-middle justify-center mt-24"
    >
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Projects
      </h1>
      <div className="flex align-center justify-center gap-4">
        {PROJECT_BUTTONS.map((button, index) => (
          <button className="border rounded-xl px-4 py-1" key={index}>{button.display}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 mt-10">
        {PROJECTS.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            imgUrl={p.image}
            repoUrl={p.repoUrl}
            demoUrl={p.demoUrl}
            pypiUrl={p.pypiUrl}
            tech={p.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
