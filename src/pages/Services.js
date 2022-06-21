import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/content/FeaturedProducts";
import FeaturedSlider from "../components/content/FeaturedSlider";
import ServicesDetail from "../components/ServicesDetail";

const Services = () => {
  const [changeBackground, setChangeBackground] = useState("#fff");

  const colorOne = () => {
    setChangeBackground("colorOne");
  };
  const colorTwo = () => {
    setChangeBackground("colorTwo");
  };
  const colorThere = () => {
    setChangeBackground("colorThere");
  };
  const colorFour = () => {
    setChangeBackground("colorFour");
  };
  const colorFive = () => {
    setChangeBackground("colorFive");
  };
  const colorSix = () => {
    setChangeBackground("colorSix");
  };
  const colorSeven = () => {
    setChangeBackground("colorSeven");
  };
  const colorEight = () => {
    setChangeBackground("colorEight");
  };

  return (
    <>
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
            <div
              className={`bg-white shadow-lg rounded-lg  pt-20 pb-16 mt-4 flex flex-col ${changeBackground}`}
            >
              <div className="flex">
                <div className="basis-1/2 flex items-center  justify-center">
                  <span className="mr-4">Prices</span>
                  <div className="w-48 ml-4">
                    <select
                      id="countries"
                      class="bg-white border-[#a2a09e] border-2 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>$0.00 - $100.00</option>
                      <option>$100.00 - $300.00</option>
                      <option>$300.00 - $700.00</option>
                    </select>
                  </div>
                </div>
                <div className="basis-1/2 flex items-center  justify-center">
                  <span className="mr-4">Brands</span>
                  <div className="w-48 ml-4">
                    <select
                      id="countries"
                      class="bg-white border-[#a2a09e] border-2 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Ukraine sport</option>
                      <option>Poland sport</option>
                      <option>German sport</option>
                    </select>
                  </div>
                </div>
                <div className="basis-1/2 flex items-center  justify-center">
                  <span className="mr-4">Size</span>
                  <div className="w-48 ml-4">
                    <select
                      id="countries"
                      class="bg-white border-[#a2a09e] border-2 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex pt-8">
                <div className="basis-1/2 flex items-center  justify-center">
                  <span className="mr-4">Color</span>
                  <div className="w-48 ml-4 flex">
                    <div
                      onClick={colorOne}
                      className=" mr-2 w-4 h-4 bg-white hover:border-[#45413e] cursor-pointer border-2 rounded-full"
                    ></div>
                    <div
                      onClick={colorTwo}
                      className="mr-2 w-4 h-4 bg-[#43c0cf] hover:border-[#45413e] cursor-pointer border-2 rounded-full"
                    ></div>
                    <div
                      onClick={colorThere}
                      className="mr-2 w-4 h-4 bg-[#3d402f] hover:border-[#45413e] cursor-pointer border-2 rounded-full"
                    ></div>
                    <div
                      onClick={colorFour}
                      className="mr-2 w-4 h-4 bg-[#4aaf00] hover:border-[#45413e] cursor-pointer border-2 rounded-full"
                    ></div>
                    <div
                      onClick={colorFive}
                      className="mr-2 w-4 h-4 bg-[#315bbd] hover:border-[#45413e] cursor-pointer border-2 rounded-full"
                    ></div>
                    <div
                      onClick={colorSix}
                      className="mr-2 w-4 h-4 bg-[#ec6115] hover:border-[#45413e] cursor-pointer border-2 rounded-full"
                    ></div>
                    <div
                      onClick={colorSeven}
                      className="mr-2 w-4 h-4 bg-[#dc041d] hover:border-[#45413e] cursor-pointer border-2 rounded-full"
                    ></div>
                    <div
                      onClick={colorEight}
                      className="w-4 h-4 bg-[#efead7] hover:border-[#45413e] cursor-pointer border-2 rounded-full"
                    ></div>
                  </div>
                </div>
                <div className="basis-1/2 flex items-center  justify-center">
                  <span className="mr-4">Sort by</span>
                  <div className="w-48 ml-4">
                    <select
                      id="countries"
                      class="bg-white border-[#a2a09e] border-2 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Price</option>
                      <option>Price</option>
                      <option>Price</option>
                    </select>
                  </div>
                </div>
                <div className="basis-1/2 flex items-center  justify-center">
                  <span className="mr-4">Show</span>
                  <div className="w-48 ml-4">
                    <select
                      id="countries"
                      class="bg-white border-[#a2a09e] border-2 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>16 per page</option>
                      <option>Price</option>
                      <option>Price</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-28 pb-10 flex justify-center items-center">
            <span>12.931 results in apparel</span>
          </div>
          <div className="container px-28 pb-10 ">
            <ServicesDetail />
          </div>
        </div>
      </div>
      <div className="bg-[#262a32] w-full">
      <FeaturedProducts />
      <div className="container mx-auto py-16 hidden md:flex">
      <FeaturedSlider/>
      </div>
      </div>
    </>
  );
};

export default Services;
