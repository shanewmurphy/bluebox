import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import common from "@/Data/common.json";
export default function FAQCommon() {
  return (
    <div className="lg:my-60 md:my-32 sm:my-24 antialiased">
      <div className="lg:w-9/12 md:w-10/12 sm:w-11/12 mx-auto">
        <h2 className="text-center lg:text-7xl md:text-6xl sm:text-4xl font-extrabold mb-4 text-black">
          Questions & Answers
        </h2>
        {common.map((common) => (
          <Disclosure key={common.ID}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center lg:w-full md:w-full sm:w-full mx-auto mb-4 justify-between rounded-lg bg-bkgGray lg:px-6 lg:py-4 md:px-6 md:py-6 sm:px-4 sm:py-4 text-left lg:text-base md:text-sm sm:text-xs font-semibold text-gray hover:bg-bkgGray">
                  <span className="lg:w-5/6 md:w-5/6 sm:w-4/5">
                    {common.Question}
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } lg:h-8 lg:w-8 sm:w-6 sm:h-6 text-gray`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="lg:pb-4 lg:pl-8 md:pb-4 md:pl-4 lg:pr-8 md:pr-8 sm:pl-2 sm:pb-4 sm:pr-4">
                  <p className="lg:text-base md:text-sm sm:text-xs font-medium leading-relaxed text-gray">
                    {common.Answer}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
