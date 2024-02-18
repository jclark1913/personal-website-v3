"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../lib/constants";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "./ThemeContext";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-normalborder border bg-sitebackground opacity-90">
      <div className="flex container lg:py-4 px-4 py-2 flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="text-2xl text-headertext font-semibold">
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
        <div className="hidden md:flex md:w-auto">
          <ul className="text-lg md:text-1xl flex p-4 md:p-0 sm:flex-row md:space-x-8 items-center justify-center">
            {NAV_LINKS.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li className="flex flex-row items-center">
              <button onClick={toggleTheme}>
                {theme === "dark" ? (
                  <MoonIcon className="text-headertext h-6 w-6" />
                ) : (
                  <SunIcon className="text-headertext h-6 w-6" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        {navbarOpen ? <MenuOverlay navLinks={NAV_LINKS} /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
