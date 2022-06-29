import React, { useRef, useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HomeContext, useContext } from "../../context/Context";

const Cookies = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }
  function accepModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => {
      clearTimeout(timer);
      setIsOpen(false);
    };
  }, []);

  return (
    <>
      {isOpen ? (
        <Transition appear show={isOpen} as={Fragment}>
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
              <div className="flex min-h-full items-center md:mt-80 justify-center  text-center">
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
                    <div className="flex  items-center ">
                      <div className="basis-auto">
                        <span className="flex pr-36">
                          OSF uses its own and third-party cookies for
                          statistical purposes, to know your preferences, for
                          website performance and interaction with social media
                          offering publicity tailored to your interests. If you
                          continue browsing, we consider that you accept its
                          use. You can expand this information consulting our
                          Cookies Policy Page.
                        </span>
                      </div>
                      <div className="basis-1/3 text-center">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-[#84bc22] px-4 py-2  text-sm font-medium text-white hover:bg-[#ace151] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          ACCEPT
                        </button>
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
