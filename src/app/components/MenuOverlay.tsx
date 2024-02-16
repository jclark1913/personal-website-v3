import React from "react";
import NavLink from "./NavLink";

interface MenuOverlayProps {
  navLinks: { path: string; title: string }[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ navLinks }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
