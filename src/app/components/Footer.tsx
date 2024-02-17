"use client";
import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="border z-10 border-t-slate-400 border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>{"</>"}</span>
        <small className="text-slate-400">Justin Clark © {currYear}</small>
      </div>
    </footer>
  );
};

export default Footer;
