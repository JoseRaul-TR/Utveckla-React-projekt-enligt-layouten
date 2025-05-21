import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Heaader from "./components/HeaderComponent1";
import TagList from "./components/TagListComponent2"

import Home from "./components/Home";
import Services from "./pages/Services";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Uppgift2 from "./pages/Uppgift2";
import Uppgift3 from "./pages/Uppgift3";


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Heaader />
      
      <main className="main-content">
        <Sidebar />
        <TagList />
        {/* <Posts /> */}


        
      </main>
      <Footer />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/uppgift2" element={<Uppgift2 />} />
          <Route path="/uppgift3" element={<Uppgift3 />} />
        </Routes>
    </div>
  );
}

export default App;
