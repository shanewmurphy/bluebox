import Image from "next/image";
export default function PickUp() {
  return (
    <div className="w-11/12 mx-auto rounded-xl lg:my-60 md:my-32 sm:my-24 lg:py-12 md:py-8 sm:py-8 lg:px-12 md:px-8 sm:px-0 antialiased">
      <div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col gap-8">
          <div className="basis-2/5 lg:order-1 md:order-1 sm:order-2">
            <div>
              <Image
                className="object-cover"
                src="/Pick_up_02.png"
                width={382}
                height={336}
                alt="blue box pick-up service"
              />
            </div>
          </div>
          <div class="basis-3/5 sm:order-1">
            <h2 className="lg:text-6xl md:text-5xl h-12 sm:text-5xl text-black font-extrabold mb-2">
              Pick Up Service
            </h2>
            <h3 className="text-black font-bold lg:text-3xl md:text-3xl sm:text-2xl">
              Let us handle the transportation logistics, saving you time and
              effort
            </h3>
            <p className="text-black font-medium lg:text-base md:text-text-base sm:text-sm mt-2">
              Select our convenient pick-up service, and our dedicated team will
              bring our reliable vans right to your doorstep, making your
              storage experience seamless from start to finish.
            </p>
            <div className="lg:my-4 md:my-4 sm:mt-8 mb-2">
              <h4 className="lg:text-2xl md:text-2xl sm:text-base text-blue font-extrabold mt-2 antialiased">
                Select this option in the Quotation Form
              </h4>
              <div className="">
                <p className="lg:text-base md:text-base sm:text-sm font-bold text-black">
                  Do you require our transportation services?
                  <span className="pl-1">
                    <Image
                      className="inline-flex mb-4"
                      src="/question_mark.svg"
                      width={20}
                      height={20}
                    />
                  </span>
                </p>
                <div className="flex flex-row gap-4">
                  <div className="basis-20 lg:mt-2 sm:mt-1">
                    <button className="cursor-none lg:py-1 lg:px-9 sm:py-1 sm:px-7 lg:text-xl sm:text-sm font-bold text-black rounded-md outline outline-2 outline-gray-300">
                      No
                    </button>
                  </div>
                  <div className="basis-20 lg:mt-2 sm:mt-1">
                    <button className="cursor-none cursor_svg lg:py-1 lg:px-9 sm:py-1 sm:px-7 lg:text-xl sm:text-sm font-bold text-white rounded-md bg-blue outline outline-2 outline-blue">
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
