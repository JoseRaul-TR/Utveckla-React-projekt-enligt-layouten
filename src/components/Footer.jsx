import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="">
      <div className="">
        <h6>Min App</h6>
        <p>
          José Raúl Tenza Ramírez – Alla rättigheter förbehållna
          <br />
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
