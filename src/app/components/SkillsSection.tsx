import React from "react";
import TECHNOLOGIES from "../lib/TechStack";

const SkillsSection = () => {
  return (
    <div className="">
      <h2 className="text-center text-md sm:text-lg">My tech stack:</h2>
      <div className="grid gap-4 justify-center items-center mt-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 sm:w-1/2 sm:mx-auto">
        {TECHNOLOGIES.map((tech) => (
          <div key={tech.title} className="flex flex-col items-center gap-1 relative group hover:cursor-pointer">
            <tech.icon size={48} color={tech.color} />
            <p className="hidden group-hover:block absolute text-black bg-white text-sm px-2 py-1 rounded-md shadow-lg -translate-y-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
