import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-200 w-full flex flex-col justify-center items-center p-2">
        <h5>Min App</h5>
        <p>
          José Raúl Tenza Ramírez – Alla rättigheter förbehållna
          <br />
          &copy; {new Date().getFullYear()}
        </p>
    </footer>
  );
}
