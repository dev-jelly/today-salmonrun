import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePage } from "../store/use-page";
import { GithubIcon } from "./icons/GithubIcon";

const navigation = [
  { name: "Now", href: 0 },
  { name: "Next 1", href: 1 },
  { name: "Next 2", href: 2 },
  { name: "Next 3", href: 3 },
  { name: "Next 4", href: 4 },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setPage } = usePage();
  return (
    <header className="bg-splatoon-salmonRun text-white">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" onClick={() => setPage(0)} className="-m-1.5 p-1.5">
            <span className="text-xl">초코야! 오늘 연어 한판?!</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <a
            href={"https://github.com/dev-jelly/today-salmonrun"}
            className={
              "mr-2 flex cursor-pointer justify-center fill-black text-center hover:fill-gray-700"
            }
          >
            <GithubIcon />
          </a>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              onClick={() => {
                setPage(item.href);
                setMobileMenuOpen(false);
              }}
              className={
                "cursor-pointer text-sm font-semibold  leading-6 text-white" +
                (index === 0 ? "text-lime-200" : "text-white")
              }
            >
              {item.name}
            </a>
          ))}
          <a
            href={"https://github.com/dev-jelly/today-salmonrun"}
            className={
              "flex cursor-pointer justify-center fill-white text-center hover:fill-gray-700"
            }
          >
            <GithubIcon />
          </a>
        </div>
      </nav>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md  bg-splatoon-salmonRun px-6 py-6 shadow-xl sm:max-w-sm sm:ring-1 sm:ring-white">
                    <div className="flex h-full flex-col overflow-y-scroll ">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <a
                            href="#"
                            onClick={() => {
                              setPage(0);
                              setMobileMenuOpen(false);
                            }}
                            className="-m-1.5 p-1.5"
                          >
                            <Dialog.Title className="text-xl text-white">
                              초코야! 오늘 연어한판?!
                            </Dialog.Title>
                          </a>
                          <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon
                              className="h-6 w-6 "
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                        <div className="mt-6 flow-root">
                          <div className="-my-6 divide-y divide-white">
                            <div className="space-y-2 py-6">
                              {navigation.map((item) => (
                                <button
                                  key={item.name}
                                  onClick={() => {
                                    setPage(item.href);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="-mx-3 block cursor-pointer cursor-pointer select-none rounded-lg px-3 py-2  text-base font-semibold leading-7 text-white hover:bg-gray-500/10"
                                >
                                  {item.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
