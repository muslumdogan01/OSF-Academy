import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../Icons/Icon";
import { HomeContext, useContext } from "../../context/Context";

const Logo = () => {
  const { isOpen, setIsOpen } = useContext(HomeContext);

  return (
    <div className="md:flex md:items-center ">
      <div className="relative justify-center flex overflow-hidden items-center">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer absolute left-4 md:hidden"
        >
          <Icon name={isOpen ? "menuClose" : "menu"} size={24} />
        </div>
        <Link to="/">
          <img
            src="/osfLogo.png"
            className="border-none md:flex hidden"
            alt="OSF Academy"
          />
        </Link>
        <Link to="/">
          <img src="/logoMb.png" className="flex md:hidden block"></img>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
