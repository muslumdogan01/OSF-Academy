import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeContext, useContext } from "../context/Context";

const ShoppingCart = () => {
  const { shoppingCart, setShoppingCart } = useContext(HomeContext);
  const [count, setCount] = useState(0);
  const [countDecrese, setCountDecrese] = useState(0);
  const [increment, setIncrement] = useState(Number(2.99));

  const decreasePrice = (item) => {
   item.count = item.count - 1;
   setIncrement(item.count - Number(2.99));
    item.price = item.price - Number(2.99);
  };
  const incrementPrice = (item) => {
    item.count = item.count + 1;
    setIncrement(item.count + Number(2.99));
     item.price = item.price + Number(2.99);
  };

    const removeItem = (item) => {
        setShoppingCart(shoppingCart.filter(cartItem => cartItem.id !== item.id));
    }

  return (
    <div className="bg-[#f1edea]">
      <div className="container mx-auto">
        <div className="w-full flex justify-center items-center pt-16">
          <ul className="flex justify-center items-center">
            <li className="text-[#84bc22] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">/</li>
            <li className="text-[#45413e]">SHOPPİNG CART</li>
          </ul>
        </div>
        <div className="flex container  justify-center items-center md:px-28 py-8">
          <div className="basis-1/2 border-b-2 border-[#e5e2df]"></div>
          <div className="basis-1/2 font-semibold text-5xl text-[#45413e] text-center">
            SHOPPİNG CART
          </div>
          <div className="basis-1/2 border-b-2 border-[#e5e2df]"></div>
        </div>
        <div className="container px-28 pb-10">
          <div class="bg-white shadow-2xl rounded-lg px-24 py-20 mt-4 flex flex-col justify-center">
            {shoppingCart.map((item) => {
              return (
                <div className="flex mb-10 " key={item.id}>
                  <div className="flex basis-1/2">
                    <div className=" bg-[#c7c7c7] w-20 h-20"></div>
                    <div className="flex flex-col justify-center pl-5">
                      <p className="text-base text-[#45413e]">{item.name}</p>
                      <p className="text-sm text-[#bdc3c7]">$2,195.00</p>
                    </div>
                  </div>
                  <div className="flex basis-1/2">
                    <div className="flex items-center justify-around w-full">
                      <div className="flex rounded-full  border-2 px-6 pt-1 pb-2 justify-center items-center border-[#e8e2d6]">
                        <span
                          onClick={() => {
                            decreasePrice(item);
                          }}
                          className="text-2xl text-[#999999] cursor-pointer font-semibold"
                        >
                          -
                        </span>
                        <span className="px-5 text-2xl text-[#45413e]">{item.count}</span>
                        <span
                          onClick={() => {
                            incrementPrice(item);
                          }}
                          className="text-2xl text-[#999999] cursor-pointer font-semibold"
                        >
                          +
                        </span>
                      </div>
                      <span className="text-[#45413e] text-3xl font-bold">
                        ${item.price}
                      </span>
                      <div className="hover:bg-[#e8e2d6] hover:text-white transition-all duration-500 ease-in-out rounded-full border-2 flex items-center justify-center px-3 pb-2 cursor-pointer border-[#e8e2d6] ">
                        <span onClick={()=>{removeItem(item)}} className="text-center text-2xl font-bold text-[#a2a09e] ">
                          x
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="w-full border-b-2 border-red-500 pt-24"></div>
            <div className="basis-1/2  pt-16">
              <div className="flex">
                <div className="basis-1/2">
                  <div className="flex">
                    <label class="relative block">
                      <span class="sr-only">Search</span>
                      <input
                        class="placeholder:italic placeholder:text-black block bg-white w-full border border-[#e8e2d6] rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Enter Coupon Code"
                        type="text"
                        name="search"
                      />
                    </label>
                    <button className="border-2 border-[#84bc22] text-[#84bc22] px-8 rounded-full ml-3 ">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="basis-1/2">
                  <button className="border-2 border-[#84bc22] text-[#84bc22] px-8 py-1 rounded-full ml-3 ">
                    UPDATE CART
                  </button>
                  <button className="border-2 border-[#84bc22] text-white bg-[#84bc22] px-10 py-1 rounded-full ml-3 ">
                    PROCEED TO CHECKOUT
                  </button>
                  <div className="flex ml-3 pt-11">
                    <div className="basis-1/2 text-[#45413e] ">
                      CART SUBTOTAL:
                    </div>
                    <div className="basis-1/2 font-bold text-[#45413e] ">
                      $3,489
                    </div>
                  </div>
                  <div className="flex ml-3 pt-9">
                    <div className="basis-1/2 font-bold text-[#45413e] ">
                      SHIPPING AND HANDLING:
                    </div>
                    <div className="basis-1/2 font-bold">
                      <div className="flex flex-col">
                        <div>
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio text-green-500"
                            />
                            <span class="ml-2 text-[#45413e] font-normal">
                              Flat Rate:{" "}
                              <span className="font-bold">$10.00</span>
                            </span>
                          </label>
                        </div>
                        <div>
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio text-green-500"
                            />
                            <span class="ml-2 text-[#45413e] font-normal">
                              Free Shipping
                            </span>
                          </label>
                        </div>
                        <div>
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio text-green-500"
                            />
                            <span class="ml-2 text-[#45413e] font-normal">
                              International:{" "}
                              <span className="font-bold">$60.00</span>
                            </span>
                          </label>
                        </div>
                        <div>
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio text-green-500"
                            />
                            <span class="ml-2 text-[#45413e] font-normal">
                              Local Delivery:{" "}
                              <span className="font-bold">$5.00</span>
                            </span>
                          </label>
                        </div>
                        <div>
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio text-green-500"
                            />
                            <span class="ml-2 text-[#45413e] font-normal">
                              Local Pickup (Free)
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-3 pt-16 items-center">
                    <div className="basis-1/2">
                      <span className="font-bold text-[#45413e]">
                        ORDER TOTAL:
                      </span>
                    </div>
                    <div className="basis-1/2">
                      <span className="font-semibold text-[#45413e] text-5xl">
                        $3,489
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
