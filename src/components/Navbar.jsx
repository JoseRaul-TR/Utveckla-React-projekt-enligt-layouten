import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  // State to manage the mobile menu's open/close state
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 shadow relative">
      {/* Main navigation container */}
      <div className="flex items-center md:justify-between py-4 px-4 md:px-6 justify-center">
        {/* App title */}
        <Link to="/">
          <h2
            className="text-xl font-semibold hover:text-blue-500 transition duration-200"
            style={{ textDecoration: "none" }}
          >
            Min App
          </h2>
        </Link>

        {/* Hamburger button for small screens with absolute positioning */}
        <div className="md:hidden absolute right-4">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Conditional rendering of the hamburger icon (open/close) */}
            {isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/* X icon when the menu is open */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/* Hamburger icon when menu is closed */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation links for medium (md) screens and wider */}
        <ul className="hidden md:flex items-center space-x-10">
          <li>
            <NavLink
              to="/services"
              className="text-gray-700 hover:text-blue-500"
              activeclassname="active"
              style={{ textDecoration: "none" }}
            >
              Tjänster
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-blue-500"
              activeclassname="active"
              style={{ textDecoration: "none" }}
            >
              Om oss
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-blue-500"
              activeclassname="active"
              style={{ textDecoration: "none" }}
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile menu – shown/hidden based on 'isOpen' state */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="text-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
            <NavLink
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              activeclassname="active"
              style={{ textDecoration: "none" }}
            >
              Tjänster
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              activeclassname="active"
              style={{ textDecoration: "none" }}
            >
              Om oss
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              activeclassname="active"
              style={{ textDecoration: "none" }}
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
