import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RadioGroup } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/20/solid";

export default function Quote() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  let [plan, setPlan] = useState("");
  return (
    <div>
      <>
        <div className="flex items-center antialiased">
          <button
            type="button"
            onClick={openModal}
            className="lg:py-4 lg:px-12 md:py-4 md:px-16 sm:py-4 sm:px-12 sm:text-center bg-blue font-bold text-white text-2xl rounded-md antialiased"
          >
            Get a Quote
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
              <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  <Dialog.Panel className="lg:w-10/12 mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="float-right">
                      <button onClick={closeModal}>
                        <ModalClose />
                      </button>
                    </div>
                    <Dialog.Title
                      as="h3"
                      className="lg:text-6xl text-center font-extrabold leading-6 text-black antialiased"
                    >
                      Get a Quote for Storage Container
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="lg:text-2xl text-center text-black antialiased">
                        To provide you with accurate pricing information for
                        storage
                      </p>
                    </div>
                    <div className="lg:w-11/12 mx-auto lg:my-16 antialiased">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <label className="block">
                            <span className="text-black font-bold lg:text-base">
                              Full Name
                            </span>
                            <input
                              type="text"
                              className="
                                    mt-1
                                    block
                                    lg:w-80
                                    rounded-md
                                    bg-zinc-100
                                    border-transparent
                                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                              placeholder=""
                            ></input>
                          </label>
                          <label className="block mt-4">
                            <span className="text-black font-bold lg:text-base">
                              Your Email
                            </span>
                            <input
                              type="email"
                              className="
                                    mt-1
                                    block
                                    lg:w-80
                                    rounded-md
                                    bg-zinc-100
                                    border-transparent
                                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                              placeholder="john@example.com"
                            ></input>
                          </label>
                          <label className="block mt-4">
                            <span className="text-black font-bold lg:text-base">
                              Comfirm Email
                            </span>
                            <input
                              type="email"
                              className="
                                    mt-1
                                    block
                                    lg:w-80
                                    rounded-md
                                    bg-zinc-100
                                    border-transparent
                                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                              placeholder="john@example.com"
                            ></input>
                          </label>
                          <label className="block mt-4">
                            <span className="text-black font-bold lg:text-base">
                              Contact Number
                            </span>
                            <input
                              type="number"
                              className="block mt-1 lg:w-80 rounded-md bg-zinc-100 border-transparent
                              focus:border-gray-500 focus:bg-white focus:ring-0"
                            ></input>
                          </label>
                          <div className="mt-6">
                            <span className="text-black font-bold lg:text-base">
                              Please Select Container Size
                            </span>

                            <div className="mt-2">
                              <ul>
                                <RadioGroup value={plan} onChange={setPlan}>
                                  <RadioGroup.Label></RadioGroup.Label>
                                  <li className="inline-flex">
                                    <RadioGroup.Option value="8ft">
                                      {({ checked }) => (
                                        <button
                                          className={
                                            checked
                                              ? "bg-indigo-700 border-2 border-indigo-700 w-28 lg:py-2 lg:px-8 text-base font-bold rounded-md text-white"
                                              : "border-2 w-28 text-black border-slate-800 lg:py-2 lg:px-8 text-base font-bold rounded-md"
                                          }
                                        >
                                          8FT
                                        </button>
                                      )}
                                    </RadioGroup.Option>
                                  </li>
                                  <li className="inline-flex lg:pl-4">
                                    <RadioGroup.Option value="20ft">
                                      {({ checked }) => (
                                        <button
                                          className={
                                            checked
                                              ? "bg-indigo-700 border-2 border-indigo-700 w-28 lg:py-2 lg:px-8 text-base font-bold rounded-md text-white"
                                              : "border-2 w-28 text-black border-slate-800 lg:py-2 lg:px-8 text-base font-bold rounded-md"
                                          }
                                        >
                                          20ft
                                        </button>
                                      )}
                                    </RadioGroup.Option>
                                  </li>
                                  <li className="inline-flex lg:pl-4">
                                    <RadioGroup.Option value="enterprise">
                                      {({ checked }) => (
                                        <button
                                          className={
                                            checked
                                              ? "bg-indigo-700 border-2 border-indigo-700 w-28 lg:py-2 lg:px-8 text-base font-bold rounded-md text-white"
                                              : "border-2 w-28 text-black border-slate-800 lg:py-2 lg:px-8 text-base font-bold rounded-md"
                                          }
                                        >
                                          40ft
                                        </button>
                                      )}
                                    </RadioGroup.Option>
                                  </li>
                                </RadioGroup>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <span>Select Dates for period of Storage</span>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
}
function ModalClose() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
}
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.8" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
