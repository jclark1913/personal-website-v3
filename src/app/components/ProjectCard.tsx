import React from "react";
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { TbBrandPython, TbBrandGithub } from "react-icons/tb";
import Link from "next/link";

interface ProjectCardsProps {
  imgUrl: string;
  title: string;
  description: string;
  repoUrl: string;
  demoUrl: string | null;
  pypiUrl: string | null;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardsProps> = ({
  imgUrl,
  title,
  description,
  repoUrl,
  demoUrl,
  pypiUrl,
  tech,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-1000">
          {repoUrl ? (
            <Link href={`${repoUrl}`} className="">
              <TbBrandGithub className="h-10 w-10 hover:text-white m-2 cursor-pointer text-slate-400" />
              <p className="text-white text-xs text-center">GitHub</p>
            </Link>
          ) : null}
          {pypiUrl ? (
            <Link href={`${pypiUrl}`} className="">
              <TbBrandPython className="h-10 w-10 hover:text-white m-2 cursor-pointer text-slate-400" />
              <p className="text-white text-xs text-center">PyPi</p>
            </Link>
          ) : null}
          {demoUrl ? (
            <Link href={`${demoUrl}`} className="">
              <ComputerDesktopIcon className="h-10 w-10 hover:text-white m-2 cursor-pointer text-slate-400" />
              <p className="text-white text-xs text-center">Demo</p>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 flex-1 grid">
        <h5 className="text-xl font-semibold mb-2 self-start">{title}</h5>
        <p className="text-[#ADB7BE] self-start">{description}</p>
        <div className="flex flex-row flex-auto flex-wrap pt-2 gap-1 self-end">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs text-[#ADB7BE] border border-slate-200 border-1 border-opacity-45 rounded-md px-2 bg-[#161b22]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
