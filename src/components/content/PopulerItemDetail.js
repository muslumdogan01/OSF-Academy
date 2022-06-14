import React, { useContext } from "react";
import { HomeContext } from "../../context/Context";

const PopulerItemDetail = ({ item }) => {

  const {increment, setIncrement} = useContext(HomeContext);

  const incrementItem = ()=>{
    setIncrement(increment + 1);
  }

  return (
    <div
      key={item.id}
      className="w-[17rem] h-[22.813rem] flex flex-col  bg-white rounded-lg text-center"
    >
      <img src={item.image} alt="" className="rounded-t-lg" />
      <div className="flex flex-col  items-center pt-5  text-[16px] font-semibold px-4">
        
        <div className="flex flex-col">
        <span className="text-center"> {item.name} </span>
          <span className="text-center mt-5"> {item.price} </span>
          <div className={item.priceTwo? "mt-[-7px] flex justify-center items-center  border-[#e5e5e5] border-[2px]  rounded-2xl":null}>
            {item.priceTwo ? (
              <span className="text-[#24c36c] border-[#e5e5e5] basis-1/2"> {item.priceTwo} </span>
            ) : (
             null
            )}
           {item.buy?  <span className="basis-[0] h-10  w-[2px] text-[#c8c7c7] bg-[#c8c7c7]">.</span> : null}
            {item.buy ? (
              <button onClick={()=>incrementItem()} className="text-black hover:bg-[#24c36c] hover:text-white transition duration-150 ease-out  basis-1/2 py-2 rounded-r-2xl">
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
