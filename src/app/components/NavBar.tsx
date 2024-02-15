import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "../lib/constants";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border-[#33353F] border">
      <div className="flex container lg:py-4 px-4 py-2 flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="text-2xl text-white font-semibold">
          {"</>"}
        </Link>
        <div className="menu">
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
