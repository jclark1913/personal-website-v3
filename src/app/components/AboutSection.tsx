"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { ABOUT_TAB_DATA } from "../lib/constants";
import ExperienceCard from "./ExperienceCard";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import SkillsSection from "./SkillsSection";
import {ABOUT_BLURB} from "../lib/AboutBlurb"

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <section
      className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 pb-4 xl:gap-16 sm:py-16 xl:px-16 mt-24 sm:min-h-[60vh] mb-10 sm:mb-0"
      id="about"
    >
      <div>
        <h2 className="text-4xl font-bold text-headertext mb-4">About Me</h2>
        <div className="text-justify text-base md:text-xl text-paragraphtext">
          {ABOUT_BLURB}
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end mt-2">
        <div className="flex flex-row gap-3 items-start">
          {ABOUT_TAB_DATA.map((tab, index) => (
            <TabButton
              key={index}
              selectActiveTab={() => handleTabChange(tab.id)}
              active={activeTab === tab.id}
            >
              {tab.title}
            </TabButton>
          ))}
          <button>
            <a
              href="/assets/resume.pdf"
              className="mr-3 font-semibold text-experiencetabinactive hover:text-experiencetabactive flex justify-center items-center"
            >
              <p>Resume</p>
              <ArrowUpRightIcon className="ml-1 h-5 w-5" />
            </a>
          </button>
        </div>
        <div className="flex flex-col items-center w-full lg:w-5/6">
          {isPending ? (
            <div className="text-white">{""}</div>
          ) : (
            <div className="w-full">
              {ABOUT_TAB_DATA.filter((tab) => tab.id === activeTab).map(
                (tab) => (
                  <div className="w-full" key={tab.id}>
                    {tab.content.map((c, index) => (
                      <ExperienceCard
                        key={index}
                        title={c.title}
                        institution={c.institution}
                        date={c.date}
                        info={c.info}
                      />
                    ))}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
