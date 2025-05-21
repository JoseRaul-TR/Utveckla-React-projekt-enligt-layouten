import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto text-center">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <NavLink
            to="/"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            Min App
          </NavLink>
          <br />
          José Raúl Tenza Ramírez – Alla rättigheter förbehållna
        </p>
      </div>
    </footer>
  );
}
