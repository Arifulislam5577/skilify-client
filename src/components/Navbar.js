import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import Button from "./Button";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { DataContext } from "../context/context";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  const handleShowMenu = () => {
    setshowMobileMenu((prev) => !prev);
  };

  const { user, LogOut } = useContext(DataContext);

  return (
    <header className="bg-primary py-5">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/" className=" flex items-center ">
            <img
              src="https://res.cloudinary.com/arif5577/image/upload/v1666845414/Skilify/favicon_wzhwsh.svg"
              alt="skilify"
              className="h-8"
            />
            <span className="font-bold tracking-wide text-gray-800 text-sm uppercase">
              Skilify
            </span>
          </Link>
        </div>
        <ul className="lg:flex items-center justify-between gap-10 capitalize text-sm  text-gray-500 hidden">
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
          {user ? (
            <>
              <li className="">
                <img
                  src={user?.photoURL}
                  className="h-10 p-1 bg-white cursor-pointer w-10 rounded-full"
                  alt={user?.displayName}
                  title={user?.displayName}
                />
              </li>
              <li>
                <button
                  onClick={LogOut}
                  className="py-2 px-5 bg-secondary text-white  rounded-tl-xl rounded-br-xl shadow hover:translate-y-1 duration-300 transition-all capitalize text-sm"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </li>
          )}
        </ul>
        <button
          onClick={handleShowMenu}
          className="text-2xl text-gray-500 lg:hidden"
        >
          <FaBars />
        </button>
        {showMobileMenu && (
          <div
            className={`fixed w-72 z-10  h-full right-0 top-0 bg-white text-slate-900 p-5 overflow-auto shadow-2xl lg:hidden	 ${
              handleShowMenu ? "translate-x-0 box-shadow " : "translate-x-full"
            } transition-all duration-300`}
          >
            <div className="flex flex-col justify-start  h-full">
              <button onClick={handleShowMenu} className="mb-10 text-gray-500">
                <ImCross />
              </button>
              <ul className="flex flex-col items-center justify-center gap-10 capitalize text-base  text-gray-500">
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
                {user ? (
                  <>
                    <li className="">
                      <img
                        src={user?.photoURL}
                        className="h-10 p-1 bg-white cursor-pointer w-10 rounded-full"
                        alt={user?.displayName}
                        title={user?.displayName}
                      />
                    </li>
                    <li>
                      <button>Logout</button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/login">
                      <Button>Login</Button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
