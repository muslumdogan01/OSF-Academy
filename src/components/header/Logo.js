import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="md:flex md:items-center ">
      <div className=" justify-center flex overflow-hidden items-center">
        <img
          src="https://raw.githubusercontent.com/muslumdogan01/OSF-Academy/master/public/osfLogo.png?token=GHSAT0AAAAAABURP4KVLOEJ3XWNFLNAVEFGYU66WQQ"
          className="border-none md:flex hidden"
          alt="OSF Academy"
        />
        <img
          src="https://raw.githubusercontent.com/muslumdogan01/OSF-Academy/master/public/logoMB.png?token=GHSAT0AAAAAABURP4KUABZLVYFGD4H6OH24YU66XDA"
        className="flex md:hidden "></img>
      </div>
    </div>
  );
};

export default Logo;
