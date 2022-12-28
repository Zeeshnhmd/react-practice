import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Dashboard from "./Routes/Dashboard";
import Home from "./Routes/Home";
import Mails from "./Routes/Mails";
import Signout from "./Routes/Signout";

const Contents = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mails" element={<Mails />} />
      <Route path="/" element={<Signout />} />
    </Routes>
  );
};

export default Contents;
