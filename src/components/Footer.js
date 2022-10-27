import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-primary py-10 body-font border-t">
      <div className="container">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" font-semibold text-gray-900 tracking-widest text-sm mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-800">
                  Faq
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" font-bold text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-800">
                  Faq
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" font-bold text-gray-900 tracking-widest text-sm mb-3 uppercase">
              Our Service
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-800">
                  Faq
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" font-bold text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  our newsletter
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-secondary border-0 py-2.5 px-6 focus:outline-none hover:bg-red-500 rounded text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              waistcoat green juice
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
