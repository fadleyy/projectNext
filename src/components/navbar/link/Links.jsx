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

  // Temporary
  const session = true;
  const isAdmin = true;
  return (
    <div className={style.links}>
      {links.map((link) => (
        <Navlink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
          <button>Logout</button>
        </>
      ) : (
        <Navlink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
