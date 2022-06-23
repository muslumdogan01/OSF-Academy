import React, { useState } from "react";
import { HomeContext, useContext } from "../../context/Context";
import { Icon } from "../../Icons/Icon";
import ColorButton from "./ColorButton";
import ImageZoom from "./ImageZoom";

const images = [
  {
    id: 0,
    photo: "product1.jpg",
  },
  {
    id: 1,
    photo: "product2.jpg",
  },
  {
    id: 2,
    photo: "product3.jpg",
  },
  {
    id: 3,
    photo: "product4.jpg",
  },
];



const ProductDetail = () => {
    const { increment, setIncrement } = useContext(HomeContext);
  const [selectedImg, setSelectedImg] = useState(images[0].photo);
  const [incrementButton, setIncrementButton] = useState(0);
  const [readMoreItem, setReadMoreItem] = useState(false)

  const addToCart = ()=>{
    setIncrement(increment + 1)
  }

  const increase = () => {
    setIncrementButton(incrementButton + 1);
  };
  const decrease = () => {
    setIncrementButton(incrementButton - 1);
  };

  const showReadMore = ()=>{
    setReadMoreItem(readMoreItem + readMoreItem)
  }

  return (
    <div className="flex flex-row w-full">
      <div className="basis-1/2 px-5 relative">
        <div className="absolute top-5 left-10">
            <ImageZoom selectedImg={selectedImg}/>
        </div>
        <img
          style={{ width: "100%", height: "auto" }}
          src={selectedImg}
          alt=""
        />
      </div>
      <div className="basis-1/2 flex">
        <div className="basis-1/6">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            {images.map((img) => {
              return (
                <div
                  className={`w-20 h-20 cursor-pointer ${
                    selectedImg === img.photo
                      ? "border-2 border-[#84bc22]"
                      : "border-2 border-[#a2a09e]"
                  }`}
                  key={img.id}
                >
                  <img
                    onClick={() => {
                      setSelectedImg(img.photo);
                    }}
                    src={img.photo}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="basis-auto pl-20 pt-3">
          <p className="text-[#45413e] text-5xl font-bold">$299.99</p>

          <ColorButton />

          <div className="flex pt-5">
            <div className="flex rounded-full  border-2 px-6  pb-2 justify-center items-center border-[#e8e2d6]">
              <span
                onClick={() => {
                  decrease();
                }}
                className="text-2xl text-[#999999] cursor-pointer font-semibold"
              >
                -
              </span>
              <span className="px-5 text-2xl text-[#45413e]">{incrementButton}</span>
              <span
                onClick={() => {
                  increase();
                }}
                className="text-2xl text-[#999999] cursor-pointer font-semibold"
              >
                +
              </span>
            </div>
            <div className="flex px-5">
              <button onClick={addToCart} className="border-2 border-[#84bc22] text-white bg-[#84bc22] px-4 py-1 rounded-full  ">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="flex pt-14 pr-20 flex-col">
              <p className="text-[#45413e] text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas
              </p>
                <p onClick={showReadMore} className="text-[#84bc22] py-5">Read more</p>
            </div>
            <div className="flex pt-7">
                <span className="text-[#b2b2b2] text-sm">Share</span>
                <span className="fill-[#b2b2b2] text-sm px-7">
                    <Icon name="facebook" size={24}/>
                </span>
                <span className="fill-[#b2b2b2] text-sm">
                    <Icon name="googlePlus" size={24}/>
                </span>
                <span className="fill-[#b2b2b2] text-sm px-7">
                    <Icon name="twitter" size={24}/>
                </span>
                <span className="fill-[#b2b2b2] text-sm">
                    <Icon name="pinterest" size={24}/>
                </span>

            </div>
      
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
