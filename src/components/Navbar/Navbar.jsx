import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { IoIosFitness } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import ProfileDropdown from "../ProfileDropdown";
import "../Navlink.css"; // keep your custom styles

export const Navlinks = [
  { id: 0, name: "Home", link: "home" },
  { id: 1, name: "About", link: "about" },
  { id: 2, name: "Exercise", link: "exercise" },
  { id: 3, name: "Feedback", link: "feedback" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-sm bg-black/85 border-b border-white/10 shadow-md transition duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 font-bold text-pink-200 text-xl tracking-wide">
            <img
              className="w-12 rounded-full border border-white"
              src="https://static.vecteezy.com/system/resources/previews/017/504/043/original/bodybuilding-emblem-and-gym-logo-design-template-vector.jpg"
              alt="Logo"
            />
            Next Level Fitness<span className="text-3xl">🏋️‍♀️</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-white text-md font-medium">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <ScrollLink
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    activeClass="active-link"
                    className="cursor-pointer hover:text-gray-300 transition duration-300"
                  >
                    {name}
                  </ScrollLink>
                </li>
              ))}

              <li>
                <Link to="/db/dashboard">
                  <button className="bg-pink-400 text-black px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition duration-300">
                    ✊ GET STARTED 
                  </button>
                </Link>
              </li>

              <li>
                <ProfileDropdown />
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-pink-200">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-transform duration-300"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-transform duration-300"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <ResponsiveMenu showMenu={showMenu} />
    </header>
  );
};

export default Navbar;
