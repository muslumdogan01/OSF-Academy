import React from "react";
import { Icon } from "../../Icons/Icon";
import { Link } from "react-router-dom";
import Contact from "./footerMobile/Contact";
import Categories from "./footerMobile/Categories";
import About from "./footerMobile/About";

const Footer = () => {
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
              <h1 className="font-semibold pb-7 text-[#333333]">CATEGORIEST</h1>
              <li className="pb-5 hover:text-[#84bc22] hover:underline">
                <Link to="ErorPage">Alcohol</Link>
              </li>
              <li className="pb-5">
                <Link to="ErorPage hover:text-[#84bc22] hover:underline">
                  Art
                </Link>
              </li>
              <li className="pb-5 hover:text-[#84bc22] hover:underline">
                Books
              </li>
              <li className="pb-5 hover:text-[#84bc22] hover:underline">
                Drink
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
              <Link to="ErorPage">Home</Link>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              <Link to="ErorPage">Jewelry</Link>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              Kids & Baby
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              Men's Fashion
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              Mobile
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
        <div className="w-full absolute bg-[#262a33] text-white flex md:hidden  bottom-0  py-4">
      <div className="flex items-center justify-center w-full">
      <span className="fill-[#909497]">
            {" "}
            <Icon name="search" size={24} />
          </span>
          <span className="fill-[#909497] px-12">
            {" "}
            <Icon name="profil" size={24} />
          </span>
          <span className="fill-[#909497]">
            {" "}
            <Icon name="heart" size={24} />
          </span>
          <span className="fill-[#909497] pl-12">
            {" "}
            <Icon name="shop" size={24} />
          </span>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
