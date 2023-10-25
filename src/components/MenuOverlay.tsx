import React from "react";
import NavLink from "./NavLink";

interface MenuOverlayProps {
  links: Link[];
}

type Link = {
  title: string;
  path: string;
};

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, i) => (
        <li key={i}>
          <NavLink title={link.title} href={link.path}></NavLink>
        </li>
      ))}
    </ul>
  );
};
export default MenuOverlay;
