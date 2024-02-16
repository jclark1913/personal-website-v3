"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { ABOUT_TAB_DATA } from "../lib/constants";
import ExperienceCard from "./ExperienceCard";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <section className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 sm:mt-24" id="about">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="text-justify text-base md:text-xl">
          <p className="mb-2 ">
            I'm a full stack software developer and technical consultant based
            in Michigan. Prior to moving back to my home state in 2022, I lived
            for more than seven years in the Middle East where I worked in
            journalism, analysis and translation.
          </p>

          <p className="mb-2">
            Today, most of my work is focused on developing software aimed at
            boosting the capacity of researchers and analysts. I'm also on the
            lookout for full-time software engineering roles.
          </p>

          <p className="mb-2">
            {" "}
            Some of my recent open source projects include a{" "}
            <a href="https://github.com/bellingcat/wayback-google-analytics">
              tool
            </a>{" "}
            for identifying disinformation networks (read my Bellingcat article{" "}
            <a href="https://www.bellingcat.com/resources/2024/01/09/using-the-wayback-machine-and-google-analytics-to-uncover-disinformation-networks/">
              here
            </a>
            ) and an <a href="#syria-daily-brief">AI-powered web scraper</a> to
            monitor Syrian media. But I tinker a lot, so follow me on{" "}
            <a href="https://github.com/jclark1913">github</a> to see what I'm
            working on.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end mt-2">
        <div className="flex flex-row gap-3 items-start">
          {ABOUT_TAB_DATA.map((tab) => (
            <TabButton
              key={tab.id}
              selectActiveTab={() => handleTabChange(tab.id)}
              active={activeTab === tab.id}
            >
              {tab.title}
            </TabButton>
          ))}
        </div>
        <div className="flex flex-col items-center w-5/6">
          {isPending ? (
            <div className="text-white">Loading...</div>
          ) : (
            <div className="w-full">
              {ABOUT_TAB_DATA.filter((tab) => tab.id === activeTab).map(
                (tab) => (
                  <div className="w-full" key={tab.id}>
                    {tab.content.map((c) => (
                      <ExperienceCard
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
