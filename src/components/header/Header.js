import React from "react";
import { Icon } from "../../Icons/Icon";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import { HomeContext, useContext } from "../../context/Context";

const Header = () => {

  const {isOpen, setIsOpen} = useContext(HomeContext);

  return (
    <div className=" h-20 w-full container mx-auto md:flex md:items-center md:justify-between">
      <div className="md:flex px-4 md:py-2 py-5">
        <Logo />
      </div>
      <div className="flex md:justify-center">
        <ul className={`md:flex md:items-center justify-center transition-all duration-500 ease-in z-10 md:bg-white bg-[#262a32] w-full
          ${isOpen ? 'top-20 opacity-100':'top-[-40]'} md:opacity-100 opacity-0
        `}>
          <li className="mx-4 my-6 md:my-0 md:hover:border-b-[3px] font-semibold hover:border-[#84bc22] text-header-text text-[14px] p-3  hover:bg-[#262a32] text-white md:text-header-text md:hover:text-white cursor-pointer">
            <Dropdown name="SERVICES"/>
          </li>
          <li className="mx-4 my-6 md:my-0 md:hover:border-b-[3px] font-semibold hover:border-[#84bc22] text-header-text text-[14px] p-3  hover:bg-[#262a32] text-white md:text-header-text md:hover:text-white cursor-pointer">
          COMPANY
          </li>
          <li className="mx-4 my-6 md:hover:border-b-[3px] font-semibold hover:border-[#84bc22] md:my-0 text-header-text text-[14px] p-3 hover:bg-[#262a32] text-white md:text-header-text md:hover:text-white cursor-pointer">
          LIBRARY
          </li>
          <li className="mx-4 my-6 md:hover:border-b-[3px] hover:border-[#84bc22] md:my-0 text-header-text text-[14px] p-3 hover:bg-[#262a32] hover:tran text-white md:text-header-text md:hover:text-white cursor-pointer">
            CONTACT US
          </li>
          <li className="mx-4 my-6 md:my-0 text-header-text text-[14px]  md:flex hidden  cursor-pointer">
           EN
          </li>
          <li className="mx-4 my-6 md:my-0 text-header-text text-[14px] md:flex hidden  cursor-pointer">
            $ US
          </li>
          <li className="mx-4 my-6 md:my-0 md:flex hidden cursor-pointer">
            <img
              src="/search.png"
              className="border-none"
              alt="Search"
            />
          </li>
          <li className="mx-4 my-6 md:my-0 md:flex hidden  cursor-pointer">
            <img
              src="/profil.png"
              className="border-none"
              alt="Profile"
            />
          </li>
          <li className="mx-4 my-6 md:my-0 md:flex hidden  cursor-pointer">
            <img
              src="/heart.png"
              className="border-none"
              alt="Favorite"
            />
          </li>
          <li className="mx-4 my-6 md:my-0 md:flex hidden  cursor-pointer">
            <img
              src="/shop.png"
              className="border-none"
              alt="Shopping"
            />
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
