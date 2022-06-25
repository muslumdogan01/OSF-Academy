import React from "react";
import { HomeContext, useContext } from "../context/Context";

const products = [
  {
    id: 0,
    name: "Kristina Dam Oak Table With White Marble Top",
    href: "#",
    imageSrc: "popularItems/img7.png",
    price: "$799.55",
    color: "Black",
  },
  {
    id: 1,
    name: "Kristina Dam Oak Table With White Marble Top",
    href: "#",
    imageSrc: "popularItems/img6.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$129.55",
    color: "Black",
  },
  {
    id: 2,
    name: "Activate Facial Mask and Charcoal Soap  ",
    href: "#",
    imageSrc: "popularItems/img8.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 3,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img4.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 4,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img3.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 5,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img1.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 6,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img2.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 7,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img5.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 8,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img1.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 9,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img6.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 10,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img5.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 11,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img4.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 12,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img1.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
];

const ServicesDetail = () => {
  const { servicesItems, setServicesItems } = useContext(HomeContext);

  const loadMoreClick = () => {
    setServicesItems(servicesItems + 4);
  };
  const slice = products.slice(0, servicesItems);
  console.log("slice", slice);
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <div className="max-w-2xl lg:max-w-full ">
          <div className=" grid md:grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {slice.map((product)=>{
              return(
                <div
                key={product.id}
                className="group relative bg-white rounded-lg"
              >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="py-5 flex justify-center items-center">
                  <div className="flex flex-col">
                    <h3 className="text-[#2c3e50] text-center px-5">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 text-[#2c3e50] text-base "
                      />
                      {product.name}
                    </h3>
                    <p className=" text-sm text-gray-500 text-center pt-4">
                      {" "}
                      {product.price}
                    </p>
                  </div>
                </div>
               
              </div>
              )
            })}
          </div>
        </div>
        <div className="flex justify-center items-center pt-10 md:pt-28 pb-10">
        <button
          onClick={()=>{loadMoreClick()}}
        className="bg-[#84bc22] text-white text-base px-8 md:px-16 py-4 rounded-full">LOAD MORE</button>
      </div>
      </div>
      {/* <div className="w-full">
      <div className="max-w-2xl pt-8 lg:max-w-full ">

        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {slice.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="py-5 flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="text-[#2c3e50] text-center px-5">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 text-[#2c3e50] text-base "
                    />
                    {product.name}
                  </h3>
                  <p className=" text-sm text-gray-500 text-center pt-4">  {product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
      {/* <div className="w-full">
      <div className="max-w-2xl pt-8 lg:max-w-full ">

        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {slice.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="py-5 flex justify-center items-center">
                <div className="flex flex-col">
                  <h3 className="text-[#2c3e50] text-center px-5">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 text-[#2c3e50] text-base "
                    />
                    {product.name}
                  </h3>
                  <p className=" text-sm text-gray-500 text-center pt-4">  {product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default ServicesDetail;
