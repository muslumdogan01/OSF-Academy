import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HomeContext } from "./context/Context";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/header/Header";
import PopulerItems from "./components/content/PopulerItems";
import Footer from "./components/footer/Footer";
import ErorPage from "./components/ErorPage";

function App() {
  //Hamburger Menu State
  const [isOpen, setIsOpen] = useState(false);
  //Add to cart icon State
  const [increment, setIncrement] = useState(0);
  const [favorite, setFavorite] = useState(0);
  //Populer Items State
  const [loadMore, setLoadMore] = useState(8);

  const state = {
    isOpen,
    setIsOpen,
    increment,
    setIncrement,
    favorite,
    setFavorite,
    loadMore,
    setLoadMore,
  };
  return (
    <HomeContext.Provider value={state}>
      <header className="w-full relative border-b-[1px]">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="ErorPage" element={<ErorPage/>} />
          <Route path="PopulerItems/:id" element={<PopulerItems />} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </HomeContext.Provider>
  );
}

export default App;
