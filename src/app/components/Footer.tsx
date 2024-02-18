"use client";
import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="border z-10 border-t-normalborder border-l-transparent border-r-transparent border-b-transparent flex align-middle justify-center text-white">
      <div className="container p-12 flex flex-col text-center align-middle justify-center text-footertext">
        <small className="">Justin Clark © {currYear}</small>
        <small className="">This isn't my first website. Check out <a href="">v1</a> and <a href="">v2</a>.</small>
      </div>
    </footer>
  );
};

export default Footer;
