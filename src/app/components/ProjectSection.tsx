"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS, PROJECT_BUTTONS } from "../lib/constants";
import ProjectButton from "./ProjectButton";
import { SiGithub } from "react-icons/si";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProjects = PROJECTS.filter((p) => {
    console.log(p.tag);
    console.log(activeFilter);
    return p.tag.includes(activeFilter);
  });

  return (
    <div
      id="projects"
      className="flex flex-col align-middle justify-center mt-24"
    >
      <h1 className="text-4xl font-bold text-headertext mb-4 text-center">
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
      <div className="flex flex-row justify-center align-middle items-center">
        <a
          href="https://github.com/jclark1913"
          className="text-experiencetabinactive hover:text-headertext flex flex-row items-center"
          target="_blank"
        >
          <div className="flex justify-center mt-8 items-center border border-normalborder hover:border-headertext p-2 rounded-lg">
            <p className="text-headertext mr-2">See more on github</p>{" "}
            <SiGithub className="size-5" />
            <ArrowUpRightIcon className="ml-1 h-5 w-5" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
