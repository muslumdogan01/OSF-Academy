import React from "react";
import BannerOsfTheme from "./BannerOsfTheme";
import FeaturedProducts from "./FeaturedProducts";
import FeaturedSlider from "./FeaturedSlider";
import PopulerItems from "./PopulerItems";
import TransportInformation from "./TransportInformation";

const Content = () => {
  return (
    <>
      <div className="container mx-auto md:pt-20  pt-10 ">
        <div class="flex flex-row px-8 justify-center pb-10">
          <div class="basis-1/2 flex flex-col justify-center">
            <div className="border-[#3c4047] border border-b-1"></div>
          </div>
          <div class="basis-1/4">
            <h1 className="text-center text-white md:text-[24px] font-bold">
              Popular Items
            </h1>
          </div>
          <div class="basis-1/2 flex flex-col justify-center">
            <div className="border-[#3c4047] border border-b-1"></div>
          </div>
        </div>
        <PopulerItems />
      </div>
      <BannerOsfTheme />
      <FeaturedProducts />
      <div className="mx-80 py-16 hidden md:flex">
        <FeaturedSlider />
      </div>
      <TransportInformation />
    </>
  );
};

export default Content;
