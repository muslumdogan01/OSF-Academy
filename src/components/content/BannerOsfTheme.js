import React from "react";

const BannerOsfTheme = () => {
  return (
    <div className="w-full bg-white relative flex flex-col justify-center items-center">
      <h1 className="absolute text-5xl font-semibold top-[40%] text-white">
        Banner OSF Theme
      </h1>
      <span className="absolute text-sm text-center top-1/2 text-white">
      Sed ut perspiciatis unde omnis iste natus error sit iste <br/> voluptatem accusantium 
      </span>
      <img className="w-full h-auto" src="banner.png" alt="" />
    </div>
  );
};

export default BannerOsfTheme;
