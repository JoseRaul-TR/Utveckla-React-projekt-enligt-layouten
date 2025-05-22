import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Uppgift2 from "./pages/Uppgift2";
import Uppgift3 from "./pages/Uppgift3";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Navbar always at the top with full width */}
      <Navbar className="w-full"/>
      {/* Container for Sidebar and Main */}
      <div className="flex md:flex-row flex-col flex-grow">
      <Sidebar />
        <main className="flex flex-grow justify-center items-center p-4">
          <Routes>
            <Route path="/" element={<Uppgift2 />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/uppgift2" element={<Uppgift2 />} />
            <Route path="/uppgift3" element={<Uppgift3 />} />
          </Routes>
        </main>
      </div>
      {/* Footer always at the bottom with full width */}
      <Footer />
    </div>
  );
}

export default App;
