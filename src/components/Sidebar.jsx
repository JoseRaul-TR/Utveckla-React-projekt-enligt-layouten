import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
<aside className="bg-gray-100 shadow-md z-10 lg:z-auto w-full md:w-1/7 h-auto md:h-full flex md:flex-col">
      {/* Title for the sidebar – hidden on medium screens and narrower */}
      <h4 className="p-4 font-bold text-gray-600 text-center hidden md:block">
        Funktioner
      </h4>
      {/* Ul for the navigation links */}
      <ul className="flex flex-row md:flex-col md:items-center justify-evenly p-2 w-full md:w-auto">
        <li className="nav-item">
          <NavLink
            to="/uppgift1"
            className="text-gray-700 hover:text-blue-500 block py-2 md:py-4 text-center md:text-left"
            activeclassname="active"
            style={{ textDecoration: "none" }}
            title="Visar layout för uppgiften: 'React-app med Navbar och Sidobar'"
          >
            Uppgift 1 – 'React-app med Navbar och Sidobar'
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/uppgift2"
            className="text-gray-700 hover:text-blue-500 block py-2 md:py-4 text-center md:text-left"
            activeclassname="active"
            style={{ textDecoration: "none" }}
            title="Visar layout för uppgiften: 'Utveckla React-projekt enligt layouten'"
          >
            Uppgift 2 – Utveckla React-projekt enligt layouten
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
