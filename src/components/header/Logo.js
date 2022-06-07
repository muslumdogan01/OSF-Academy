import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="md:flex md:items-center ">
      <div className=" justify-center flex overflow-hidden items-center">
        <img
          src="/osfLogo.png"
          className="border-none md:flex hidden"
          alt="OSF Academy"
        />
        <img
          src="/logoMb.png"
        className="flex md:hidden "></img>
      </div>
    </div>
  );
};

export default Logo;
