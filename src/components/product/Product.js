import React, { useState } from "react";
import { Link } from "react-router-dom";
import Description from "./Description";
import ProductDetail from "./ProductDetail";

const Product = () => {
  return (
    <div className="bg-[#f1edea]">
      <div className="container mx-auto">
        <div className="w-full flex justify-center items-center pt-16">
          <ul className="flex justify-center items-center">
            <li className="text-[#84bc22] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">/</li>
            <li className="text-[#84bc22] cursor-pointer">
              <Link to="/">OSF Theme</Link>
            </li>
            <li className="px-4">/</li>
            <li className="text-[#45413e]">Ruffle Front V-Neck Cardigan</li>
          </ul>
        </div>
        <div className="flex container  justify-center items-center md:px-28 py-8">
          <div className="basis-1/4 border-b-2 border-[#e5e2df]"></div>
          <div className="basis-1/2 text-5xl text-[#45413e] text-center">
            Ruffle Front V-Neck Cardigan
          </div>
          <div className="basis-1/4 border-b-2 border-[#e5e2df]"></div>
        </div>
        <div className="container px-28 pb-10">
          <div>
            <div class="bg-white  rounded-t-lg py-5 pb-16 mt-4 flex">
              <ProductDetail />
            </div>
            <div className="bg-white w-full ">
              <Description />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
