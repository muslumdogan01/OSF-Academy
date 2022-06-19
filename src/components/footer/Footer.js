import React from "react";
import { Icon } from "../../Icons/Icon";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto  flex flex-col md:flex-row py-10">
        <div className="basis-1/2 text-[#45413e]">
          <p>
            © Copyright 2022. <br /> All Rightts Reserved.
          </p>
          <h1 className="pt-9 pb-4 font-semibold">CONTACT</h1>
          <p>Headquarters:</p>
          <span>
            5600,Blcd. des Galeries, Bur 530 <br /> Quenbec, Quenbec G2K 2H6
          </span>
          <p className="pt-5 pb-6">contact@osf-global.com</p>
          <p>+1 (888) 548-4344</p>
        </div>
        <div className="basis-1/2 flex flex-col items-center">
          <ul className="text-[#45413e]">
            <h1 className="font-semibold pb-7">CATEGORIEST</h1>
            <li className="pb-5">Alcohol</li>
            <li className="pb-5">Art</li>
            <li className="pb-5">Books</li>
            <li className="pb-5">Drink</li>
            <li>Electronics</li>
          </ul>
        </div>
        <div className="basis-1/2 flex md:flex-col items-center">
          <ul className="text-[#45413e] pt-12">
            <li className="pb-5">Home</li>
            <li className="pb-5">Jewelry</li>
            <li className="pb-5">Kids & Baby</li>
            <li className="pb-5">Men's Fashion</li>
            <li className="pb-5">Mobile</li>
            <li className="pb-5">Motorcycles</li>
            <li className="pb-5">Movies</li>
            <li className="pb-5">Music</li>
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col items-center">
          <ul className="text-[#45413e] pt-12">
            <li className="pb-5">Sport</li>
            <li className="pb-5">Toys</li>
            <li className="pb-5">Travel</li>
            <li className="pb-5">Women's Fashion</li>
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col items-center">
          <ul className="text-[#45413e]">
            <h1 className="font-semibold pb-7">ABOUT</h1>
            <li className="pb-5">About us</li>
            <li className="pb-5">Delivery</li>
            <li className="pb-5">Testimonials</li>
            <li className="pb-5">Contact</li>
          </ul>
        </div>
        <div className="basis-1/2 flex">
          <span className="fill-[#b2b2b2] pr-6">
            <Icon name="facebook" size={24} />
          </span>
          <span className="fill-[#b2b2b2] pr-6">
            <Icon name="googlePlus" size={24} />
          </span>
          <span className="fill-[#b2b2b2] pr-6">
            <Icon name="twitter" size={24} />
          </span>
          <span className="fill-[#b2b2b2]">
            <Icon name="pinterest" size={24} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
