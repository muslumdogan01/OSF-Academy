import React, { useRef, useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HomeContext, useContext } from "../context/Context";

const Cookies = () => {
  const { showCookies, setShowCookies } = useContext(HomeContext);

  function closeModal() {
    setShowCookies(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowCookies(true),6000);
    return () => {
      clearTimeout(timer);
      setShowCookies(false);
    };
  }, []);

  return (
    <>
      {showCookies ? (
        <Transition appear show={showCookies} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-70" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-end pb-40 justify-center px-6 md:px-40 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full transform md:mx-20 overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="flex flex-col md:flex-row items-center justify-center relative p-5">
                      <div className="md:basis-auto flex flex-col justify-center ">
                        <p>
                          <p className="text-md text-[#45413e]">
                            OSF uses its own and third-party cookies for
                            statistical purposes, to know your preferences, for
                            website performance{" "}
                          </p>
                          <p className="text-md text-[#45413e]">
                            and interaction with social media offering publicity
                            tailored to your interests. If you continue
                            browsing, we consider that you accept its use.
                          </p>
                        </p>
                        <p className="text-md text-[#45413e]">
                          {" "}
                          You can expand this information consulting our{" "}
                          <span className="text-[#84bc22] hover:underline cursor-pointer">
                            Cookies Policy Page.
                          </span>
                        </p>
                      </div>
                      <div className="md:basis-1/4 p-6 md:text-right ">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-full border border-transparent bg-[#84bc22] px-12 py-2  text-sm font-medium text-white hover:bg-[#ace151] focus:outline-none "
                          onClick={closeModal}
                        >
                          ACCEPT
                        </button>
                        <span className="absolute right-0 top-[-1rem] text-2xl text-[#45413e] font-semibold cursor-pointer" onClick={closeModal}>X</span>
                      </div>

                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      ) : (
        ""
      )}
    </>
  );
};

export default Cookies;
