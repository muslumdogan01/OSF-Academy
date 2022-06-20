import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icons/Icon";

const Services = () => {
  return (
    <div className="bg-[#f1edea]">
      <div className="container mx-auto">
        <div className="w-full flex justify-center items-center pt-16">
          <ul className="flex justify-center items-center">
            <li className="text-[#84bc22] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">/</li>
            <li className="text-[#45413e]">Category Landing Services</li>
          </ul>
        </div>
        <div className="flex container  justify-center items-center md:px-28 py-8">
          <div className="basis-1/2 border-b-2 border-[#e5e2df]"></div>
          <div className="basis-1/6 text-5xl text-[#45413e] text-center">
            SERVICES
          </div>
          <div className="basis-1/2 border-b-2 border-[#e5e2df]"></div>
        </div>
        <div className="container px-28 pb-10">
          <div class="bg-white shadow-2xl rounded-lg  pt-20 pb-16 mt-4 flex flex-col">
            <div className="flex">
              <div className="basis-1/2">Price</div>
              <div className="basis-1/2">Brands</div>
              <div className="basis-1/2">Size</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
