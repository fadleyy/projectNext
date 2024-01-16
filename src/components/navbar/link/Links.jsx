import Link from "next/link";
import React from "react";
import style from "./links.module.css";
import Navlink from "./navLink/Navlink";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className={style.links}>
      {links.map((link) => (
        <Navlink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
