import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className="bg-primary py-5">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className=" flex items-center ">
            <img src="favicon.svg" alt="skilify" className="h-8" />
            <span className="font-bold tracking-wide text-gray-800 text-sm uppercase">
              Skilify
            </span>
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-10 capitalize text-sm  text-gray-500">
          <li>
            <NavLink to="/courses">courses</NavLink>
          </li>
          <li>
            <NavLink to="/faq">faq</NavLink>
          </li>
          <li>
            <NavLink to="/blog">blog</NavLink>
          </li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <MdLightMode size="18" />
              ) : (
                <MdOutlineLightMode size="18" />
              )}
            </button>
          </li>
          <li>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
