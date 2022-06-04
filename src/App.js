import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { HomeContext } from "./context/Context";
import Header from "./components/header/Header";

const state = {};

function App() {
  return (
    <HomeContext.Provider value={state}>
      <header className=" bg-yellow-900 w-full ">
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
