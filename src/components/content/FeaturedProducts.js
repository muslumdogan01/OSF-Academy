import React from "react";
import { Icon } from "../../Icons/Icon";

const FeaturedProducts = () => {
  return (
    <div className="pt-10 hidden md:flex md:flex-col">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white font-semibold pb-6">
          Featured Products
        </h1>
        <p className="text-lg text-white">
          Unde omnis iste natus error sit voluptatem
        </p>
        <div className="flex container mx-auto justify-center pt-7">
          <div className="bg-[#2d343a] px-4 py-4 mr-2 fill-white cursor-pointer">
            <Icon name="left" size={24} />
          </div>
          <div className="basis-1/4 flex flex-col justify-center">
            <span className="border-white border border-b-1"></span>
          </div>
          <div className="text-white px-4 py-4 text-xl">///</div>
          <div className="basis-1/4 flex flex-col justify-center">
            <span className="border-white border border-b-1"></span>
          </div>
          <div className="px-4 py-4 bg-[#2d343a] ml-2 fill-white cursor-pointer">
            <Icon name="right" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
