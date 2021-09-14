import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  let menu;

  if (showMenu) {
    menu = (
      <div className="md:hidden relative py-2 text-center bg-gray-300">
        <NavLink
          to="/projects"
          activeClassName="text-white-100 bg-gray-700"
          className="block text-black"
          onClick={() => closeMenu()}
        >
          Projects
        </NavLink>

        <NavLink
          to="/resume"
          activeClassName="text-white-100 bg-gray-700"
          className="block text-black"
          onClick={() => closeMenu()}
        >
          Resume
        </NavLink>

        <NavLink
          to="/about"
          activeClassName="text-white-100 bg-gray-700"
          className="block text-black"
          onClick={() => closeMenu()}
        >
          About
        </NavLink>

        <NavLink
          to="/activities"
          activeClassName="text-white-100 bg-gray-700"
          className="block text-black"
          onClick={() => closeMenu()}
        >
          Activities
        </NavLink>
      </div>
    );
  }

  return (
    <header className="bg-gray-600">
      <div className="mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white-100"
            className="items-center py-6 ml-2 md:px-3 mr-6 md:mr-4 mt-2 md:mt-4 text-blue-100 hover-nav text-3xl font-bold cursive tracking-wide"
          >
            Seth Blanchard
          </NavLink>

          <NavLink
            to="/projects"
            activeClassName="text-white-100 bg-gray-700"
            className="hidden md:flex text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover-nav"
          >
            Projects
          </NavLink>

          <NavLink
            to="/resume"
            activeClassName="text-white-100 bg-gray-700"
            className="hidden md:flex text-2xl inline-flex items-center py-2 px-2 my-6 rounded text-blue-200 hover-nav"
          >
            Resume
          </NavLink>

          <NavLink
            to="/about"
            activeClassName="text-white-100 bg-gray-700"
            className="hidden md:flex text-2xl inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover-nav"
          >
            About
          </NavLink>

          <NavLink
            to="/activities"
            activeClassName="text-white-100 bg-gray-700"
            className="hidden md:flex text-2xl inline-flex items-center py-2 px-2 my-6 rounded text-blue-200 hover-nav"
          >
            Activities
          </NavLink>

          <FontAwesomeIcon
            icon={faBars}
            className="mt-11 mr-4 text-2xl md:hidden text-gray-500"
            onClick={() => setShowMenu(!showMenu)}
          />
        </nav>

        <div className="mt-10 inline-flex md:pt-7 md:py-3 md:px-4 md:my-6">
          <SocialIcon
            url="https://github.com/nsethblanchard"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 32, width: 32 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/seth-blanchard-2042ba89/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 32, width: 32 }}
          />
          <SocialIcon
            url="https://twitter.com/nsethblanchard"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 32, width: 32 }}
          />
        </div>
      </div>
      {menu}
    </header>
  );
}

export default NavBar;
