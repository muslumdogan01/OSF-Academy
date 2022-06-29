import React from "react";
import Content from "../components/content/Content";
import Slider from "../components/Slider";
import SummerSales from "../components/SummerSales";
import PopularItemsSlider from "../components/content/PopularItemsSlider";
import { Link } from "react-router-dom";
import { Icon } from "../Icons/Icon";

const Home = () => {
  return (
    <>

      <div className=" container mx-auto md:flex md:flex-col">
        <div className="flex flex-col md:flex-row w-full md:mb-6 mt-4 md:mt-6 md:justify-center md:items-center">
          <div className="flex md:pr-5">
            <Slider />
          </div>

          <div className="flex flex-col md:ml-5 justify-between items-center mt-6 md:mt-0">
            <div className=" flex flex-col justify-between items-center">
              <SummerSales />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-[#45413e] text-[18px] pt-5 font-semibold">
                Follow us on Facebook
              </h1>
              <p className="py-4 text-center text-[#45413e] text-[13px]">
                Sed ut perspiciatis unde omnis iste <br /> natus error sit
              </p>
              <button class="transition ease-in-out delay-150 bg-transparent flex justify-center items-center  border border-[#3a5b96] rounded-2xl px-7 py-1 hover:bg-[#3a5b96] group ">
                <span className="text-sm fill-[#3a5b96] group-hover:fill-white transition ease-in-out delay-150 ">
                  {" "}
                  <Icon name="facebook" size={14} />
                </span>
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  className="text-[#3a5b96] px-2 text-sm font-semibold  group-hover:text-white transition ease-in-out delay-150 "
                >
                  FOLLOW
                </a>
              </button>
            </div>
            <div className="w-full flex flex-col">
              <PopularItemsSlider />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col bg-[#262a32]">
        <Content />
      </div>
    </>
  );
};

export default Home;
