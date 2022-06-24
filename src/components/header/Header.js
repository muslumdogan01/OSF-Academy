import React from "react";
import { Icon } from "../../Icons/Icon";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import { HomeContext, useContext } from "../../context/Context";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(HomeContext);
  const { increment } = useContext(HomeContext);
  const { favorite } = useContext(HomeContext);

  return (
    <div className="container mx-auto">
      <div className="h-20 w-full md:flex md:items-center md:justify-around ">
        <div className="md:flex md:py-2 py-5">
          <Logo />
        </div>
        <div className="flex md:justify-center">
          <ul
            className={`md:flex md:items-center justify-center transition-all duration-500 ease-in z-10 md:bg-white bg-[#262a32] w-full 
          ${
            isOpen ? "top-20 opacity-100" : "top-[-40] hidden "
          }  md:opacity-100 opacity-0
        `}
          >
            <li className="mx-4 my-6 md:my-0 md:hover:border-b-[3px] navHover font-semibold hover:border-[#84bc22]  text-[14px] p-3  hover:bg-[#262a32] text-white md:text-header-text md:hover:text-white cursor-pointer">
              <Dropdown name="SERVICES" />
            </li>
            <li className="mx-4 my-6 md:my-0 md:hover:border-b-[3px] font-semibold hover:border-[#84bc22] text-[14px] p-3  hover:bg-[#262a32] text-white md:text-header-text md:hover:text-white cursor-pointer">
              <Link to="ErorPage">COMPANY</Link>
            </li>
            <li className="mx-4 my-6 md:hover:border-b-[3px] font-semibold hover:border-[#84bc22] md:my-0  text-[14px] p-3 hover:bg-[#262a32] text-white md:text-header-text md:hover:text-white cursor-pointer">
              LIBRARY
            </li>
            <li className="mx-4 my-6 md:hover:border-b-[3px] font-semibold hover:border-[#84bc22] md:my-0  text-[14px] p-3 hover:bg-[#262a32] text-white md:text-header-text md:hover:text-white cursor-pointer">
              CONTACT US
            </li>
            <li className="mx-4 my-6 md:my-0 text-header-text text-[14px]  md:flex hidden  cursor-pointer">
              <div className="flex items-center">
                <select
                  id="currency"
                  name="currency"
                  className="focus:outline-none focus:ring-0 w-12 cursor-pointer text-[#b1b0b0] h-full py-0 pr-1 border-0 border-none bg-transparent sm:text-sm rounded-md"
                >
                  <option className="border-0 border-none text-[#b1b0b0]">
                    EN
                  </option>
                  <option className="border-0 border-none text-[#b1b0b0]">
                    FR
                  </option>
                  <option className="border-0 border-none text-[#b1b0b0]">
                    UA
                  </option>
                </select>
              </div>
            </li>
            <li className="my-6 md:my-0 text-header-text text-[14px] md:flex hidden  cursor-pointer">
              <div className="flex items-center ">
                <span className="cursor-pointer text-[#b1b0b0]">$</span>
                <select
                  id="currency"
                  name="currency"
                  className="focus:outline-none focus:ring-0 cursor-pointer  text-[#b1b0b0] border-none w-14 py-0 pr-1 border-0  bg-transparent sm:text-sm rounded-md"
                >
                  <option className="border-0 border-none">USD</option>
                  <option className="border-0 border-none">CAD</option>
                  <option className="border-0 border-none">EUR</option>
                </select>
              </div>
            </li>
            <li className="mx-4 my-6 md:my-0 md:flex hidden cursor-pointer">
              <img src="/search.png" className="border-none" alt="Search" />
            </li>
            <li className="mx-4 my-6 md:my-0 md:flex hidden  cursor-pointer">
              <Modal />
            </li>
            <li className="mx-4 my-6 md:my-0 md:flex hidden  cursor-pointer relative">
              <span className="absolute top-[-11px] right-[-12px] rounded-xl w-5 h-5 text-center flex justify-center items-center  border-2 z-10 border-[#84bc22] text-[#84bc22]">
                {" "}
                {favorite}{" "}
              </span>
              <img src="/heart.png" className="border-none" alt="Favorite" />
            </li>
            <li className="mx-4 my-6 md:my-0 md:flex hidden  cursor-pointer relative">
              <Link to="ShoppingCart">
                <span className="absolute top-[-11px] right-[-12px] rounded-xl w-5 h-5 text-center flex justify-center items-center  border-2 z-10 border-[#84bc22] text-[#84bc22]">
                  {" "}
                  {increment}{" "}
                </span>
                <img src="/shop.png" className="border-none" alt="Shopping" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
