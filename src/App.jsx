import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./Common/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Project from "./Pages/Project";


export default function App() {


  return (
    <div className="font-poppins selection:bg-vegas-gold selection:text-black flex flex-col gap-6 min-h-[calc(100vh-3.5rem)] bg-smoky-black px-5 py-5 sm:px-8 sm:py-11 sm:pt-[80px] lg:flex-row">
      <div className="self-auto lg:w-[23%] w-full h-auto lg:h-auto">
        <Sidebar />
      </div>
      <div className="relative mb-20 md:mb-0 xl:mb-0 flex-1 min-h-[calc(100vh-3.5rem)]  bg-eerie-black-2 border border-jet rounded-[20px] shadow-shadow-1 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skill" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}
