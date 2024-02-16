"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS, PROJECT_BUTTONS } from "../lib/constants";
import ProjectButton from "./ProjectButton";

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProjects = PROJECTS.filter((p) => {
    console.log(p.tag);
    console.log(activeFilter);
    return p.tag.includes(activeFilter);
  });

  console.log(filteredProjects);
  console.log(activeFilter);

  return (
    <div
      id="projects"
      className="flex flex-col align-middle justify-center mt-24"
    >
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Projects
      </h1>
      <div className="flex flex-row gap-3 items-start justify-center">
        {PROJECT_BUTTONS.map((button, index) => (
          <ProjectButton
            key={index}
            selectActiveFilter={() => setActiveFilter(button.tag.toLowerCase())}
            active={activeFilter === button.tag.toLowerCase()}
          >
            {button.display}
          </ProjectButton>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 mt-10">
        {filteredProjects.map((p, index) => (
          <ProjectCard
            key={index}
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
