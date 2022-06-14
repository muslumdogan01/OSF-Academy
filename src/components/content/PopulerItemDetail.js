import React, { useContext, useState } from "react";
import { HomeContext } from "../../context/Context";
import { Icon } from "../../Icons/Icon";

const PopulerItemDetail = ({ item }) => {
  const { increment, setIncrement } = useContext(HomeContext);
  const {favorite, setFavorite} = useContext(HomeContext);
  const [style, setStyle] = useState({ display: "none" });

  const incrementItem = () => {
    setIncrement(increment + 1);
  };
  const favoriteItem = () => {
    setFavorite(favorite + 1);
  }

  return (
    <div
      key={item.id}
      className="w-[17rem] h-[22.813rem] flex flex-col  bg-white rounded-lg text-center  relative cursor-pointer"
      onMouseEnter={() => setStyle({ display: "block" })}
      onMouseLeave={() => setStyle({ display: "none" })}
    >
      {item.priceTwo ? (
        <div className="absolute left-0 top-0 hover:bg-none rounded-lg  z-10"></div>
      ) : (
        <div className="absolute left-0 top-0 flex items-center justify-evenly hover:bg-[#34c97c] opacity-90 rounded-lg  w-full h-[22.813rem] z-10">
          <div style={style}>
            <div className="flex justify-evenly items-center w-[16.875rem] h-[22.813rem]">
              <span onClick={()=>{incrementItem()}} className="bg-white   hover:bg-[#e6e6e6] h-20 w-20 rounded-full flex justify-center items-center">
                <Icon name="plus" size={30} />
              </span>
              <span onClick={()=>{favoriteItem()}} className="bg-white h-20 w-20 hover:bg-[#e6e6e6]   rounded-full flex  justify-center items-center">
                <Icon name="heart" size={30} />
              </span>
            </div>
          </div>
        </div>
      )}
      <img src={item.image} alt="" className="rounded-t-lg " />
      <div className="flex flex-col  items-center pt-5  text-[16px] font-semibold px-4">
        <div className="flex flex-col">
          <span className="text-center"> {item.name} </span>
          <span className="text-center mt-5"> {item.price} </span>
          <div
            className={
              item.priceTwo
                ? "mt-[-7px] flex justify-center items-center hover:bg-none bg-none relative z-30 border-[#e5e5e5] border-[2px]  rounded-2xl"
                : null
            }
          >
            {item.priceTwo ? (
              <span className="text-[#24c36c] border-[#e5e5e5] basis-1/2">
                {" "}
                {item.priceTwo}{" "}
              </span>
            ) : null}
            {item.buy ? (
              <span className="basis-[0] h-10  w-[2px] text-[#c8c7c7] bg-[#c8c7c7]">
                .
              </span>
            ) : null}
            {item.buy ? (
              <button
                onClick={() => incrementItem()}
                className="text-black hover:bg-[#24c36c] hover:text-white transition duration-150 ease-out  basis-1/2 py-2 rounded-r-2xl"
              >
                {item.buy}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerItemDetail;
