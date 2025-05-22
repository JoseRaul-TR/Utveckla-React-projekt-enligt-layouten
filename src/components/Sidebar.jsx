import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
<aside className="bg-gray-100 shadow-md z-10 lg:z-auto w-full md:w-1/6 h-auto md:h-full flex md:flex-col">
      {/* Title for the sidebar – hidden on medium screens and narrower */}
      <h4 className="p-4 font-bold text-gray-600 text-center hidden md:block">
        Funktioner
      </h4>
      {/* Ul for the navigation links */}
      <ul className="flex flex-row md:flex-col md:items-center justify-evenly p-2 w-full md:w-auto">
        <li className="nav-item">
          <NavLink
            to="/uppgift2"
            className="text-gray-700 hover:text-blue-500 block py-2 md:py-4 text-center md:text-left"
            activeclassname="active"
            style={{ textDecoration: "none" }}
          >
            Uppgift 2
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/uppgift3"
            className="text-gray-700 hover:text-blue-500 block py-2 md:py-4 text-center md:text-left"
            activeclassname="active"
            style={{ textDecoration: "none" }}
          >
            Uppgift 3
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
