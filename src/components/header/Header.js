import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="h-20 container mx-auto  md:flex md:items-center md:justify-between">
      <div className="md:flex px-4 py-2">
        <Logo />
      </div>
      <div className="flex md:justify-center">
        <ul className="md:flex md:items-center justify-center z-10 md:bg-white bg-pink-400 bg-[#262a32] w-full">
          <li className="mx-4 my-6 md:my-0 text-header-text text-[14px] cursor-pointer">
            SERVICES
          </li>
          <li className="mx-4 my-6 md:my-0 text-header-text text-[14px] cursor-pointer">
            COMPANY
          </li>
          <li className="mx-4 my-6 md:my-0 text-header-text text-[14px] cursor-pointer">
            LIBRARY
          </li>
          <li className="mx-4 my-6 md:my-0 text-header-text text-[14px] cursor-pointer">
            CONTACT US
          </li>
          <li className="mx-4 my-6 md:my-0 text-header-text text-[14px] md:flex hidden  cursor-pointer">
            EN
          </li>
          <li className="mx-4 my-6 md:my-0 text-header-text text-[14px] md:flex hidden  cursor-pointer">
            $ US
          </li>
          <li className="mx-4 my-6 md:my-0 md:flex hidden cursor-pointer">
            <img
              src="https://raw.githubusercontent.com/muslumdogan01/OSF-Academy/master/public/search.png"
              className="border-none"
              alt="Search"
            />
          </li>
          <li className="mx-4 my-6 md:my-0 md:flex hidden  cursor-pointer">
            <img
              src="https://raw.githubusercontent.com/muslumdogan01/OSF-Academy/master/public/profil.png"
              className="border-none"
              alt="Profile"
            />
          </li>
          <li className="mx-4 my-6 md:my-0 md:flex hidden  cursor-pointer">
            <img
              src="https://raw.githubusercontent.com/muslumdogan01/OSF-Academy/master/public/heart.png"
              className="border-none"
              alt="Favorite"
            />
          </li>
          <li className="mx-4 my-6 md:my-0 md:flex hidden  cursor-pointer">
            <img
              src="https://raw.githubusercontent.com/muslumdogan01/OSF-Academy/master/public/shop.png"
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
