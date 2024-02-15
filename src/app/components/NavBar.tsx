"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../lib/constants";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-[#33353F] border">
      <div className="flex container lg:py-4 px-4 py-2 flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="text-2xl text-white font-semibold">
          {"</>"}
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto">
          <ul className="text-lg md:text-1xl flex p-4 md:p-0 sm:flex-row md:space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
