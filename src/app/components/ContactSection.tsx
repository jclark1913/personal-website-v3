"use client";
import React from "react";
import { SOCIALS } from "../lib/Socials";
import { TypeAnimation } from "react-type-animation";

const ContactSection = () => {
  return (
    <div id="contact" className="lg:mx-24 mt-24 flex flex-col">
      <h1 className="border-t-2 border-normalborder pt-24 text-4xl font-bold text-headertext mb-4 text-center">
        Contact Me
      </h1>
      <div className="flex flex-col sm:flex-row place-items-stretch gap-8 text-paragraphtext">
        <div className="flex flex-col gap-4">
          <h2 className="text-left text-md font-extrabold sm:text-3xl">
            Let&apos;s Connect:
          </h2>
          <div className="flex flex-col gap-3 sm:w-full text-justify sm:text-left">
            <p className="sm:text-2xl">
              I&apos;m currently looking for new opportunities and open to new roles.
            </p>
            <p className="">
              My inbox is open - send me a message if you&apos;d like to ask a
              question, connect or set up a time to chat.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center sm:grid sm:grid-cols-2 sm:w-2/3 items-center sm:ml-24 p-8">
          {SOCIALS.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-start items-center gap-4 text-experiencetabinactive hover:text-headertext"
            >
              <social.icon className="size-8" />
              <p className="hidden xl:flex text-md xl:text-2xl">
                {social.title}
              </p>
            </a>
          ))}
        </div>
      </div>
      <TypeAnimation
        className="text-center text-xl text-paragraphtext pt-4 my-12"
        sequence={["Thanks for visiting!", 1500]}
      />
    </div>
  );
};

export default ContactSection;
