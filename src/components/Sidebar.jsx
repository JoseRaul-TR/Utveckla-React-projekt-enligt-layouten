import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-light p-3 shadow-sm">
      <h6 className="mb-3 fw-bold text-muted d-none d-md-block">Funktioner</h6>
      <ul className="nav flex-row flex-md-column navbar-nav justify-content-around justify-content-md-start">
        <li className="nav-item">
          <NavLink
            to="/uppgift2"
            className="nav-link text-secondary"
            activeclassname="active"
            style={{ textDecoration: "none" }}
          >
            Uppgift 2
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/uppgift3"
            className="nav-link text-secondary"
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
