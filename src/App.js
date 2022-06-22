import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HomeContext } from "./context/Context";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/header/Header";
import PopulerItems from "./components/content/PopulerItems";
import Footer from "./components/footer/Footer";
import ErorPage from "./components/ErorPage";
import ShoppingCart from "./components/ShoppingCart";
import Product from "./components/product/Product";

function App() {
  //Hamburger Menu State
  const [isOpen, setIsOpen] = useState(false);
  //Add to cart icon State
  const [increment, setIncrement] = useState(0);
  const [favorite, setFavorite] = useState(0);
  //Populer Items State
  const [loadMore, setLoadMore] = useState(8);
  //Shopping Cart State
  const [shoppingCart, setShoppingCart] = useState([
    {
      id: 1,
      name: "Kristina Dam Oak Table With White Marble Top",
      price: Number(245),
      count:0,
      orderTotal: Number(1.447.toFixed(3)),
      flatRate: Number(10.00),
      international: Number(60.00),
      delivery: Number(5.10),
    },
    {
      id: 2,
      name: "Activate Facial Mask and Charcoal Soap",
      price: Number(398),
      count:0,
      orderTotal: Number(1.447.toFixed(3)),
     
    }
  ]);

  const state = {
    isOpen,
    setIsOpen,
    increment,
    setIncrement,
    favorite,
    setFavorite,
    loadMore,
    setLoadMore,
    shoppingCart,
    setShoppingCart,
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
          <Route path="ShoppingCart" element={<ShoppingCart/>} />
          <Route path="Product" element={<Product/>}/>
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
