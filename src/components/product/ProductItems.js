import React from "react";

const products = [
  {
    id: 0,
    name: "Kristina Dam Oak Table With White Marble Top",
    href: "#",
    imageSrc: "popularItems/img4.png",
    price: "$799.55",
    color: "Black",
  },
  {
    id: 1,
    name: "Kristina Dam Oak Table With White Marble Top",
    href: "#",
    imageSrc: "popularItems/img3.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$129.55",
    color: "Black",
  },
  {
    id: 2,
    name: "Activate Facial Mask and Charcoal Soap  ",
    href: "#",
    imageSrc: "popularItems/img1.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
  {
    id: 3,
    name: "Cocktail Table Walnut | YES",
    href: "#",
    imageSrc: "popularItems/img7.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$3522",
    color: "Black",
  },
];

const ProductItems = () => {
  return (
    <div className="w-full">
      <div className="max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full ">
        <div class="flex flex-row justify-center pb-5">
          <div class="basis-1/2 flex flex-col justify-center">
            <div className="border-[#e5e2df] border border-b-1"></div>
          </div>
          <div class="basis-1/4">
            <h1 className="text-center text-[#45413e] md:text-2xl font-bold">
              POPULAR ITEMS
            </h1>
          </div>
          <div class="basis-1/2 flex flex-col justify-center">
            <div className="border-[#e5e2df] border border-b-1"></div>
          </div>
        </div>
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
    </div>
  );
};

export default ProductItems;
