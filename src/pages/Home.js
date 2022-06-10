import React from "react";
import Content from "../components/Content";
import Slider from "../components/Slider";
import SummerSales from "../components/SummerSales";

const Home = () => {
  return (
    <>
      <div className=" container mx-auto md:flex md:flex-col">
        <div className="flex flex-col md:flex-row w-full mb-7 mt-4 md:mt-12">
          <div className="basis-4/5 ">
            <div className="flex w-full">
              <Slider />
            </div>
          </div>
          <div className="basis-1/5 flex flex-col justify-between items-center mt-6 md:mt-0">
            <div className="w-full flex flex-col justify-between items-center">
              <SummerSales />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-[#45413e] text-[18px]">
                Follow us on Facebook
              </h1>
              <p className="py-4 text-center text-[#45413e] text-[13px]">
                Sed ut perspiciatis unde omnis iste <br /> natus error sit
              </p>
              <button class="transition ease-in-out delay-150 bg-transparent border rounded-2xl px-7 py-1 hover:-translate-y-1 hover:scale-110  duration-300 ...">
                VIEW MORE
              </button>
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
