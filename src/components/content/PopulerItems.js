import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HomeContext } from "../../context/Context";
import { Icon } from "../../Icons/Icon";
import PopulerItemDetail from "./PopulerItemDetail";

const items = [
  {
    id: 1,
    name: "Kristina Dam Oak Table With White Marble Top",
    price: "$100",
    image: "popularItems/img1.png",
  },
  {
    id: 2,
    name: "Hay - About A Lounge Chair AAL 93",
    priceTwo: "$100",
    image: "popularItems/img2.png",
    buy: "BUY NOW",
  },
  {
    id: 3,
    name: "Activate Facial Mask and Charcoal Soap ",
    price: "$100",
    image: "popularItems/img3.png",
  },
  {
    id: 4,
    name: "Cocktail Table Walnut | YES",
    price: "$100",
    image: "popularItems/img4.png",
  },
  {
    id: 5,
    name: "Hay - About A Lounge Chair AAL 93",
    price: "$100",
    image: "popularItems/img5.png",
  },
  {
    id: 6,
    name: "TORY DESK CALENDAR",
    price: "$100",
    image: "popularItems/img6.png",
  },
  {
    id: 7,
    name: "CH445 Wing Chair on SUITE NY",
    price: "$100",
    image: "popularItems/img7.png",
  },
  {
    id: 8,
    name: "Activate Facial Mask and Charcoal Soap",
    price: "$100",
    image: "popularItems/img3.png",
  },
  {
    id: 9,
    name: "Cocktail Table Walnut | YES",
    price: "$100",
    image: "popularItems/img1.png",
  },
  {
    id: 10,
    name: "CH445 Wing Chair on SUITE NY",
    price: "$100",
    image: "popularItems/img2.png",
  },
  {
    id: 11,
    name: "Cocktail Table Walnut | YES",
    price: "$100",
    image: "popularItems/img5.png",
  },
  {
    id: 12,
    name: "CH445 Wing Chair on SUITE NY",
    price: "$100",
    image: "popularItems/img4.png",
  },
];

const PopulerItems = () => {
  const loadMoreClick = () => {
    setLoadMore(loadMore + loadMore);
  };

  const { loadMore, setLoadMore } = useContext(HomeContext);

  const slice = items.slice(0, loadMore);

  return (
    <div className="container mx-auto">
      <div className="mx-[8rem] flex flex-col">
        <div className="grid md:grid-cols-4 gap-x-0 gap-y-5 md:gap-y-11 grid-cols-1">
          {slice.map((item) => {
            return <PopulerItemDetail item={item} />;
          })}
        </div>
        <div className="mt-11 mb-14 w-full flex justify-center items-center">
          <button
            className="py-3 flex flex-col justify-center items-center relative w-64 hover:fill-[#262a32] rounded-full transition-all font-semibold duration-800 ease-in-out bg-[#262a32] text-white border-2 hover:bg-white hover:text-[#262a32] "
            onClick={() => loadMoreClick()}
          >
            LOAD MORE
            <span className="right-10 absolute fill-current">
              <Icon name="rotate" size={18} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopulerItems;
