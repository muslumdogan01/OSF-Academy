import React from "react";

const BannerOsfTheme = () => {
  return (
    <div className="w-full bg-white relative flex flex-col justify-center items-center">
      <h1 className="absolute md:text-5xl text-3xl font-semibold md:top-[40%] top-7 text-white">
        Banner OSF Theme
      </h1>
      <span className="absolute text-md px-3 text-center top-1/2 text-white">
      Sed ut perspiciatis unde omnis iste natus error sit  <br/> voluptatem accusantium 
      </span>
      <img className="w-full h-48 md:h-auto" src="banner.png" alt="" />
    </div>
  );
};

export default BannerOsfTheme;
