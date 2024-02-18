"use client";
import React, { useRef } from "react";
import TECHNOLOGIES from "../lib/TechStack";
import { motion, useInView } from "framer-motion";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 1 }}
      className=""
    >
      <h2 className="text-center text-headertext text-md sm:text-lg">
        My tech stack:
      </h2>
      <div className="grid gap-4 mt-4 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 sm:w-1/2 sm:mx-auto">
        {TECHNOLOGIES.map((tech) => (
          <div
            key={tech.title}
            className="flex flex-col items-center gap-1 relative group hover:cursor-pointer"
          >
            <tech.icon className="size-10 sm:size-12" color={tech.color} />
            <p className="hidden group-hover:block absolute text-black bg-white text-sm px-2 py-1 rounded-md shadow-lg -translate-y-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.title}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
