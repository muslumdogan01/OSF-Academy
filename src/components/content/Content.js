import React from "react";
import PopulerItems from "./PopulerItems";

const Content = () => {
  return (
    <div className="container mx-auto md:pt-20 md:pb-14 pt-10 pb-7">
      <div class="flex flex-row px-8 justify-center pb-10">
        <div class="basis-1/2 flex flex-col justify-center">
            <div className="border-[#3c4047] border border-b-1"></div>
        </div>
        <div class="basis-1/4">
            <h1 className="text-center text-white md:text-[24px] font-bold">Popular Items</h1>
        </div>
        <div class="basis-1/2 flex flex-col justify-center">
        <div className="border-[#3c4047] border border-b-1"></div>
        </div>
      </div>
      <PopulerItems/>
    </div>
  );
};

export default Content;
