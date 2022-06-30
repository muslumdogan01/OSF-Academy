import React from "react";
import { Icon } from "../../Icons/Icon";
import { Link } from "react-router-dom";
import Contact from "./footerMobile/Contact";
import Categories from "./footerMobile/Categories";
import About from "./footerMobile/About";
import { HomeContext, useContext } from "../../context/Context";
import Modal from "../Modal";

const Footer = () => {
  const { addMobileFavorite, setAddMobileFavorite } = useContext(HomeContext);
  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="w-full bg-white relative">
      <div className="container md:mx-auto flex flex-col md:flex-row py-10">
        <div className="basis-2/4 text-[#45413e] flex flex-col">
          <p className="font-semibold mx-4">
            © Copyright 2022. <br /> All Rightts Reserved.
          </p>
          <div className="hidden md:block">
            <h1 className="pt-9 pb-4 text-[#333333] font-semibold cursor-pointer ">
              CONTACT
            </h1>
            <p>Headquarters:</p>
            <span>
              5600,Blcd. des Galeries, Bur 530 <br /> Quenbec, Quenbec G2K 2H6
            </span>
            <p className="pt-5 pb-6 hover:text-[#84bc22] hover:underline">
              <ButtonMailto
                label="contact@osf-global.com"
                mailto="mailto:no-reply@example.com"
              />
            </p>
            <p>+1 (888) 548-4344</p>
          </div>
          <div className="block md:hidden">
            <Contact />
          </div>
        </div>
        <div className="basis-2/4 flex flex-col text-left md:items-center">
          <div className="hidden md:block">
            <ul className="text-[#45413e]">
              <h1 className="font-semibold pb-7 text-[#333333]">CATEGORIES</h1>
              <li className="pb-5 hover:text-[#84bc22] hover:underline">
                <a href="ErorPage">Alcohol</a>
              </li>
              <li className="pb-5 hover:text-[#84bc22] hover:underline">
                <a href="ErorPage">Art</a>
              </li>
              <li className="pb-5 hover:text-[#84bc22] hover:underline">
                <a href="ErorPage">Books</a>
              </li>
              <li className="pb-5 hover:text-[#84bc22] hover:underline">
                <a href="ErorPage">Drink</a>
              </li>
              <li>Electronics</li>
            </ul>
          </div>

          <div className="block md:hidden">
            <Categories />
          </div>
        </div>
        <div className="basis-2/4  md:flex-col items-center hidden md:flex ">
          <ul className="text-[#45413e] pt-12">
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              <a href="ErorPage">Home</a>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              <a href="ErorPage">Jewelry</a>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              <a href="ErorPage">Kids & Baby</a>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              <a href="ErorPage">Men's Fashion</a>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              <a href="ErorPage">Mobile</a>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              Motorcycles
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              Movies
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">Music</li>
          </ul>
        </div>
        <div className="basis-2/4  flex-col items-center hidden md:flex ">
          <ul className="text-[#45413e] pt-12">
            <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
              Sport
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
              Toys
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
              Travel
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
              Women's Fashion
            </li>
          </ul>
        </div>
        <div className="basis-2/4 hidden md:flex flex-col items-center ">
          <ul className="text-[#45413e]">
            <h1 className="font-semibold pb-7">ABOUT</h1>
            <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
              About us
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
              Delivery
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
              Testimonials
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="block md:hidden mb-8">
          <About />
        </div>
        <div className="basis-2/4 flex justify-center md:justify-start mb-10">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="fill-[#b2b2b2] pr-6"
          >
            <Icon name="facebook" size={24} />
          </a>
          <a
            href="https://www.google.com/intl/tr/gmail/about/"
            target="_blank"
            className="fill-[#b2b2b2] pr-6"
          >
            <Icon name="googlePlus" size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="fill-[#b2b2b2] pr-6"
          >
            <Icon name="twitter" size={24} />
          </a>
          <a
            href="https://tr.pinterest.com/"
            target="_blank"
            className="fill-[#b2b2b2]"
          >
            <Icon name="pinterest" size={24} />
          </a>
        </div>
        <div className="w-full absolute bg-[#262a33] text-white flex md:hidden   bottom-0  py-4">
          <div className="flex items-center justify-center w-full">
            <span className="fill-[#909497]">
              {" "}
              <Icon name="search" size={24} />
            </span>
            <span className="fill-[#909497] px-12">
              <Modal fillColor="fill-[#909497]" />
            </span>
            <span className="fill-[#909497] relative">
              <Icon name="heart" size={24} />
              <span className="absolute top-[-11px] right-[-12px] rounded-xl w-5 h-5 text-center flex justify-center items-center  border-2  border-[#84bc22] text-[#84bc22]">
                {addMobileFavorite}
              </span>
            </span>
            <span className=" pl-12">
             <a href="ShoppingCart" className="fill-[#909497]">
             <Icon name="shop" size={24} />
             </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
