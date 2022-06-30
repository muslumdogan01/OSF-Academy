import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "../Icons/Icon";

const Modal = ({ fillColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeVisibile, setChangeVisible] = useState(
    <Icon name="showEyes" size={20} />
  );

  const handleVisible = () => {
    setChangeVisible(!changeVisibile);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(isOpen ? false : true);
  }

  return (
    <>
      <div className=" flex ">
        <button
          type="button"
          onClick={openModal}
          className="border-0 border-none "
        >
          {fillColor ? (
            <Icon name="profil" size={24} />
          ) : (
            <img src="/profil.png" className="border-none" alt="Profile" />
          )}
        </button>
      </div>

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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md  transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center pt-10 pb-10 md:text-[30px] font-bold leading-6 text-[#45413e]"
                  >
                    Sign in
                  </Dialog.Title>
                  <div className="mt-2">
                    <form>
                      <label class="block">
                        <span class="block text-sm font-medium  text-[#45413e]">
                          Email
                        </span>
                        <input
                          type="email"
                          className=" peer ... mt-1 block w-full px-3 py-2 bg-white border border-[#d7d7d7] rounded-2xl text-sm shadow-sm 
                          focus:outline-none text-[#84bc22] ring-0  active:border-[#84bc22] active:ring-[#84bc22] focus:ring-[#84bc22] focus:border-[#84bc22]
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                        />

                        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                          Please provide a valid email address.
                        </p>
                      </label>
                      <label class="block relative">
                        <div className="flex items-center justify-between">
                          <span class="block text-sm font-medium  text-[#45413e]">
                            Password
                          </span>
                          <span class="block text-sm font-medium cursor-pointer text-[#84bc22]">
                            Forgot password
                          </span>
                        </div>

                        <input
                          type={changeVisibile ? "text" : "password"}
                          class="mt-1 block w-full px-3 py-2 bg-white border border-[#d7d7d7] rounded-2xl text-sm shadow-sm
                          focus:outline-none text-[#84bc22] ring-0  active:border-[#84bc22] active:ring-[#84bc22] focus:ring-[#84bc22] focus:border-[#84bc22]
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                        />
                        <span
                          onClick={() => {
                            handleVisible();
                          }}
                          className="absolute right-2 top-1/2 fill-[#d7d7d7] cursor-pointer"
                        >
                          {changeVisibile ? (
                            <Icon name="showEyes" size={20} />
                          ) : (
                            <Icon name="closeEyes" size={20} />
                          )}
                        </span>
                      </label>
                    </form>
                  </div>

                  <div className="mt-4 flex flex-col items-center justify-center pt-5 pb-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#84bc22] px-4 py-2  text-sm font-medium text-white hover:bg-[#ace151] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Login
                    </button>
                    <p className="pt-5 text-[#84bc22] cursor-pointer ">
                      I don't have an account
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
