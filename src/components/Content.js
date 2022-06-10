import React from "react";

const Content = () => {
  return (
    <div className="container mx-auto pt-20 pb-14">
      <div class="flex flex-row mx-8 justify-center">
        <div class="basis-1/2 flex flex-col justify-center">
            <div className="border-[#3c4047] border border-b-1"></div>
        </div>
        <div class="basis-1/4">
            <h1 className="text-center text-white text-[24px] font-bold">Popular Items</h1>
        </div>
        <div class="basis-1/2 flex flex-col justify-center">
        <div className="border-[#3c4047] border border-b-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
