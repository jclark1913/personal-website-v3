import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mx-0 lg:mx-10">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-7xl sm:text-left text-center">
            Hi. I'm <b className="font-bold">Justin Clark.</b>
          </h1>
          <p className="text-[#888888] text-lg lg:text-xl text-justify pr-2">
            I'm a software engineer, professional translator, and consultant
            with eight years of experience working in journalism and conflict
            analysis. I'm passionate about OSINT tools, solving neat problems
            and using tech as a force for good.
          </p>
          <div className="mt-3">
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black border-black border w-full sm:w-fit">
              Github
            </button>
            <button className="px-6 py-3 rounded-full bg-[#161b22] hover:bg-slate-200 hover:text-black text-white border-white border w-full sm:w-fit">
              Contact
            </button>
          </div>
        </div>
        <div className="col-span-5 flex mt-4 place-self-center sm:place-self-end lg:mt-0">
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
