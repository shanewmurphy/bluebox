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
  let [yes, setYes] = useState("No");

  const [isContentVisible, setContentVisible] = useState(false);

  const handleButtonClick = () => {
    setContentVisible(true);
  };
  const handleButtonClickHidden = () => {
    setContentVisible(false);
  };
  return (
    <div>
      <>
        <div className="flex items-center lg:justify-start md:justify-center sm:justify-center antialiased">
          <button
            type="button"
            onClick={openModal}
            className="lg:py-4 lg:px-12 md:py-4 md:px-16 sm:py-4 sm:px-12 bg-blue font-bold text-white text-2xl rounded-md  antialiased"
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
                  <Dialog.Panel className="lg:w-10/12 md:w-10/12 sm:w-full mx-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all lg:py-8 lg:px-8 md:py-8 md:px-8 sm:py-4 sm:px-4">
                    <div className="absolute right-0 top-6 pr-6">
                      <button className="hover:text-blue" onClick={closeModal}>
                        <ModalClose />
                      </button>
                    </div>
                    <Dialog.Title
                      as="h3"
                      className="lg:text-3xl text-center font-extrabold leading-6 text-black antialiased"
                    ></Dialog.Title>
                    <div className="lg:w-11/12 mx-auto lg:my-4 antialiased">
                      <div className="text-center lg:my-8 md:mt-24 md:mb-4 lg:text-3xl md:text-4xl sm:text-2xl font-extrabold lg:block md:block sm:hidden">
                        To provide you with accurate pricing please complete
                        form
                      </div>
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <div className="lg:hidden md:hidden sm:block mt-16 mb-6 w-11/12 mx-auto">
                            <h4 className="text-center text-2xl font-extrabold text-black">
                              To provide you with accurate pricing information
                              for storage
                            </h4>
                          </div>
                          <label className="block">
                            <span className="text-black font-bold lg:text-base md:text-base sm:text-sm">
                              Full Name*
                            </span>
                            <input
                              type="text"
                              className="
                                    mt-1
                                    block
                                    lg:w-80
                                    md:w-96
                                    sm:w-64
                                    rounded-md
                                    bg-zinc-100
                                    border-transparent
                                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                              placeholder=""
                            ></input>
                          </label>
                          <label className="block mt-4">
                            <span className="text-black font-bold lg:text-base md:text-base sm:text-sm">
                              Your Email*
                            </span>
                            <input
                              type="email"
                              className="
                                    mt-1
                                    block
                                    lg:w-80
                                    md:w-96
                                    sm:w-64
                                    rounded-md
                                    bg-zinc-100
                                    border-transparent
                                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                              placeholder="john@example.com"
                            ></input>
                          </label>
                          <label className="block mt-4">
                            <span className="text-black font-bold lg:text-base md:text-base sm:text-sm antialiased">
                              Comfirm Email*
                            </span>
                            <input
                              type="email"
                              className="
                                    mt-1
                                    block
                                    lg:w-80
                                    md:w-96
                                    sm:w-64
                                    rounded-md
                                    bg-zinc-100
                                    border-transparent
                                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                              placeholder="john@example.com"
                            ></input>
                          </label>
                          <label className="block mt-4">
                            <span className="text-black font-bold lg:text-base md:text-base sm:text-sm antialiased">
                              Contact Number*
                            </span>
                            <input
                              type="number"
                              className="block mt-1 md:w-96
                              sm:w-64 lg:w-80 rounded-md bg-zinc-100 border-transparent
                              focus:border-gray-500 focus:bg-white focus:ring-0"
                            ></input>
                          </label>

                          <div className="mt-6">
                            <span className="text-black font-bold lg:text-base md:text-base sm:text-sm antialiased">
                              Please Select Container Size*
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
                                              ? "bg-indigo-700 border-2 border-indigo-700 w-20 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-white text-center"
                                              : "border-2 w-20 text-black border-slate-800 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-center"
                                          }
                                        >
                                          8FT
                                        </button>
                                      )}
                                    </RadioGroup.Option>
                                  </li>
                                  <li className="inline-flex lg:pl-4 md:pl-2 sm:pl-2">
                                    <RadioGroup.Option value="20ft">
                                      {({ checked }) => (
                                        <button
                                          className={
                                            checked
                                              ? "bg-indigo-700 border-2 border-indigo-700 w-20 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-white text-center"
                                              : "border-2 w-20 text-black border-slate-800 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-center"
                                          }
                                        >
                                          20ft
                                        </button>
                                      )}
                                    </RadioGroup.Option>
                                  </li>
                                  <li className="inline-flex lg:pl-4 md:pl-2 sm:pl-2">
                                    <RadioGroup.Option value="enterprise">
                                      {({ checked }) => (
                                        <button
                                          className={
                                            checked
                                              ? "bg-indigo-700 border-2 border-indigo-700 w-20 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-white text-center"
                                              : "border-2 w-20 text-black border-slate-800 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-center"
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
                          <div className="">
                            <span className="block text-black font-bold lg:text-base md:text-base sm:text-sm antialiased">
                              Select Dates for period of Storage*
                            </span>
                            <ul className="lg:inline-flex">
                              <li>
                                <span className="block text-gray font-semibold text-sm sm:mt-2">
                                  Start Date
                                </span>
                                <label>
                                  <input
                                    type="date"
                                    className="block rounded-md
                                    border-2
                                    border-gray-300
                                    shadow-sm
                                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                  ></input>
                                </label>
                              </li>
                              <li className="lg:pl-4">
                                <span className="block text-gray font-semibold text-sm sm:mt-2">
                                  End Date
                                </span>
                                <label>
                                  <input
                                    type="date"
                                    className="block rounded-md
                                    border-2
                                    border-gray-300
                                    shadow-sm
                                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                  ></input>
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="">
                            <span className="block lg:mt-4 md:mt-4 sm:mt-4 sm:mb-2 text-black font-bold lg:text-base md:text-base sm:text-sm antialiased">
                              Do you require our Pick-Up Services?
                            </span>
                            <div>
                              <ul>
                                <RadioGroup value={yes} onChange={setYes}>
                                  <RadioGroup.Label></RadioGroup.Label>
                                  <li className="inline-flex">
                                    <RadioGroup.Option value="No">
                                      {({ checked }) => (
                                        <button
                                          onClick={handleButtonClickHidden}
                                          className={
                                            checked
                                              ? "bg-indigo-700 border-2 border-indigo-700 w-20 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-white text-center"
                                              : "border-2 w-20 text-black border-slate-800 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-center"
                                          }
                                        >
                                          No
                                        </button>
                                      )}
                                    </RadioGroup.Option>
                                  </li>
                                  <li className="inline-flex pl-4">
                                    <RadioGroup.Option value="business">
                                      {({ checked }) => (
                                        <button
                                          onClick={handleButtonClick}
                                          className={
                                            checked
                                              ? "bg-indigo-700 border-2 border-indigo-700 w-20 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-white text-center"
                                              : "border-2 w-20 text-black border-slate-800 lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 text-base font-bold rounded-md text-center"
                                          }
                                        >
                                          Yes
                                        </button>
                                      )}
                                    </RadioGroup.Option>
                                  </li>
                                </RadioGroup>
                              </ul>
                              <div>
                                {isContentVisible && (
                                  <div>
                                    <div className="mt-4">
                                      <span className="block text-black font-bold lg:text-base">
                                        Address*
                                      </span>
                                      <label>
                                        <input
                                          type="text"
                                          name="street-address"
                                          autocomplete="street-address"
                                          className="
                                          lg:w-96 
                                          md:w-96
                                          sm:w-72
                                        rounded-md
                                        bg-zinc-100
                                        border-transparent"
                                        ></input>
                                      </label>
                                    </div>
                                    <div className="mt-4">
                                      <ul className="lg:inline-flex sm:block">
                                        <li>
                                          <span className="text-black font-bold lg:text-base">
                                            City*
                                          </span>
                                          <label>
                                            <input
                                              type="text"
                                              className="block 
                                              lg:w-40
                                              md:w-52
                                              sm:w-40
                                              rounded-md
                                              bg-zinc-100
                                              border-transparent"
                                            ></input>
                                          </label>
                                        </li>
                                        <li className="lg:pl-4 lg:mt-0 sm:mt-4">
                                          <span className="text-black font-bold lg:text-base">
                                            Postal Code*
                                          </span>
                                          <label>
                                            <input
                                              type="text"
                                              autocomplete="postal-code"
                                              className="block w-40  rounded-md
                                              bg-zinc-100
                                              border-transparent"
                                            ></input>
                                          </label>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center lg:my-2 md:my-8 sm:py-12">
                      <button className="lg:py-4 lg:px-8 md:py-4 md:px-8 sm:py-4 sm:px-6 rounded-md bg-blue text-white text-2xl font-bold antialiased">
                        Submit for Quote
                      </button>
                      <p className="mt-2 text-sm text-gray font-semibold antialiased">
                        Receive a Quote within 24hrs
                      </p>
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
