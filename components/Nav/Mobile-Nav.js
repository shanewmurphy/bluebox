import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Logo.svg";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="antialiased">
        <div className="flex justify-between content-center mt-6 px-4">
          <div>
            <button>
              <Link href="/">
                <Image src={logo} priority alt="Logo Blue Box Storage" />
              </Link>
            </button>
          </div>
          <div>
            <button onClick={() => setOpen(true)}>
              <NavMenu />
            </button>
          </div>
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                      {/* <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child> */}
                      <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 flex  sm:px-6">
                          <button
                            type="button"
                            className="absolute right-0 pr-4 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="relative mt-12 flex-1 px-4 sm:px-6 antialiased">
                          <ul>
                            <li className="text-2xl font-bold text-black">
                              Storage Options
                              <ul>
                                <li className="indent-4 pt-2">
                                  <button className="font-semibold text-black hover:text-blue">
                                    <Link href="/8ft-container">
                                      8FT Container
                                    </Link>
                                  </button>
                                </li>
                                <li className="indent-4 pt-2">
                                  <button className="font-semibold text-black hover:text-blue">
                                    <Link href="/20ft-container">
                                      20FT Container
                                    </Link>
                                  </button>
                                </li>
                                <li className="indent-4 pt-2">
                                  <button className="font-semibold text-black hover:text-blue">
                                    <Link href="/40ft-container">
                                      40FT Container
                                    </Link>
                                  </button>
                                </li>
                              </ul>
                            </li>
                            <li className="pt-4">
                              <button className="text-2xl font-bold text-black hover:text-blue">
                                <Link href="/Pick-Up-Service">
                                  Pick-Up Service
                                </Link>
                              </button>
                            </li>
                            <li className="pt-2">
                              <button className="text-2xl font-bold text-black hover:text-blue">
                                <Link href="/">About Us</Link>
                              </button>
                            </li>
                            <li className="pt-2">
                              <button className="text-2xl font-bold text-black hover:text-blue">
                                <Link href="/">FAQs</Link>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="p-6 mb-8 antialiased">
                          <button className="bg-blue w-full py-3 px-6 text-2xl rounded-md font-bold text-white">
                            Call Us - 0214 450 450
                          </button>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
}

function NavMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-8 h-8 text-black hover:text-blue"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
