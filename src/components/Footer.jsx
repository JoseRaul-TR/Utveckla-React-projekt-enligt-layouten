import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-200 w-full flex flex-col justify-center items-center p-4 text-gray-700 text-sm">
      <div className="flex items-center space-x-2">
        <p>&copy; {new Date().getFullYear()}</p>
        <span> – </span>
        <NavLink to="/uppgift1" style={{ textDecoration: "none" }}>
          <h6 className="font-semibold hover:text-blue-500 transition duration-200">
            Min App
          </h6>
        </NavLink>
      </div>
      <p className="text-center mt-2">
        José Raúl Tenza Ramírez – Alla rättigheter förbehållna
      </p>
    </footer>
  );
}
