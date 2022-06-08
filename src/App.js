import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HomeContext } from "./context/Context";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/header/Header";



function App() {
  //Hamburger Menu State
  const [isOpen, setIsOpen] = useState(false);

  const state = {
    isOpen,
    setIsOpen
  };
  return (
    <HomeContext.Provider value={state}>
      <header className="w-full relative border-b-[1px]">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Services" element={<Services />} />
      </Routes>
    </HomeContext.Provider>
  );
}

export default App;
