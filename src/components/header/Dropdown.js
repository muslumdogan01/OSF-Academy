import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const categories = [
  {
    name: "Accessories",
    href: "##",
  },
  {
    name: "Alcohol",
    href: "##",
  },
  {
    name: "Art",
    href: "##",
  },
  {
    name: "Books",
    href: "##",
  },
  {
    name: "Drink",
    href: "##",
  },
  {
    name: "Electronics",
    href: "##",
  },
  {
    name: "Flowers & Plants",
    href: "##",
  },
  {
    name: "Gadgets",
    href: "##",
  },
];

export default function Example({ name }) {
  return (
    <Popover className="w-full">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md  text-[14px] text-base  hover:text-opacity-100 focus:outline-none `}
          >
            <span className="flex items-center justify-between text-white md:text-header-text md:hover:text-white">
              <span className="pr-2 dropSpan font-semibold  text-[14px]">{name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                id="serviceIcon"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-full transform  md:left-[0] left-[-1px] md:top-[66px]">
              <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-[#262a32] p-11">
                  <div className="container mx-auto px-5 ">
                    <div class="flex flex-col md:flex-row text-white ">
                      <div class="basis-1/2">
                        <span>PRODUCT CATEGORIES</span>
                        <ul className="mt-3">
                          {categories.map((item) => {
                            return (
                              <li className="py-3 pb-0 cursor-text">
                                <a
                                  className="hover:text-[#84bc22] hover:underline"
                                  href={item.href}
                                >
                                  {item.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div class="basis-1/2">
                        <ul className="mt-8">
                          {categories.map((item) => {
                            return (
                              <li className="py-3 pb-0 cursor-text">
                                <a
                                  className="hover:text-[#84bc22] hover:underline"
                                  href={item.href}
                                >
                                  {item.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div class="basis-1/2">
                        <ul className="mt-8">
                          {categories.map((item) => {
                            return (
                              <li className="py-3 pb-0 cursor-text">
                                <a
                                  className="hover:text-[#84bc22] hover:underline"
                                  href={item.href}
                                >
                                  {item.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div class="basis-1/2">
                        <span className="">SALES</span>
                        <ul className="mt-3">
                          {categories.map((item) => {
                            return (
                              <li className="py-3 pb-0 cursor-text">
                                <a
                                  className="hover:text-[#84bc22] hover:underline"
                                  href={item.href}
                                >
                                  {item.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div class="basis-1/2 ">
                        <img className="rounded-lg mt-5" src="/navPhoto.png"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
