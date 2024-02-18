"use client";
import React from "react";
import Image from "next/image";
import { HERO_BLURB } from "../lib/constants";
import SOCIALS from "../lib/Socials";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mx-0 lg:mx-10">
        <div className="col-span-7">
          <h1 className="text-headertext mb-4 text-4xl sm:text-6xl lg:text-7xl sm:text-left text-center">
            Hi. I'm{" "}
            <TypeAnimation
              className="font-extrabold"
              sequence={["Justin Clark", 1500]}
            />
          </h1>
          <p className="text-paragraphtext text-lg lg:text-xl text-justify pr-2">
            {HERO_BLURB}
          </p>
          <div className="sm:ml-4 flex flex-row align-center justify-center sm:justify-start gap-4 mt-4">
            {SOCIALS.map((social, index) => (
              <div key={index}>
                <a href={social.link} target="_blank">
                  <social.icon className="size-7 sm:size-8 text-experiencetabinactive hover:text-headertext" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-5 flex mt-24 place-self-center sm:place-self-end lg:mt-0">
          <Image
            className="rounded-full"
            src="/images/hero-image.jpeg"
            alt="Justin Clark headshot"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
