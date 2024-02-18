import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className="flex py-2 pl-3 pr-4 text-headertext border border-transparent hover:border-b-headertext ">
      {title}
    </Link>
  );
};

export default NavLink;
