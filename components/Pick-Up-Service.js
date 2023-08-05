import Image from "next/image";
export default function PickUpService() {
  return (
    <div className="w-11/12 mx-auto bg-blue rounded-xl lg:py-16 lg:px-16 md:py-12 md:px-12 sm:px-6 sm:py-6 antialiased">
      <div className="flex lg:flex-row md:flex-col sm:flex-col gap-12">
        <div className="basis-2/5 lg:order-1 md:order-2 sm:order-2">
          <div>
            <Image
              className="object-cover"
              src="/Pick_Up_img-min.png"
              width={403}
              height={417}
              alt="blue box pick-up service"
            />
          </div>
        </div>
        <div class="basis-3/5 lg:order-2 md:order-1 sm:order-1">
          <h2 className="lg:text-6xl md:text-5xl h-12 sm:text-5xl text-white font-extrabold mb-2">
            Pick Up Service
          </h2>
          <h3 className="text-white font-bold lg:text-3xl md:text-3xl sm:text-2xl">
            Let us handle the transportation logistics, saving you time and
            effort
          </h3>
          <p className="text-white font-medium lg:text-base md:text-text-base sm:text-sm mt-2">
            Select our convenient pick-up service, and our dedicated team will
            bring our reliable vans right to your doorstep, making your storage
            experience seamless from start to finish.
          </p>
          {/* <h4 className="lg:text-2xl md:text-2xl sm:text-base text-green font-bold mt-4 antialiased">
            Select this option in the Quotation Form
          </h4> */}
          {/* <div className="lg:w-96 bg-white rounded-md py-4 px-4 mt-2">
            <p className="lg:text-xs md:text-sm sm:text-xs font-bold text-gray">
              Do you require our transportation services?
              <span className="pl-1">
                <Image
                  className="inline-flex mb-4 lg:inline-block md:inline-block sm:hidden"
                  src="/question_mark.svg"
                  width={20}
                  height={20}
                />
              </span>
            </p>
            <div className="flex flex-row gap-2">
              <div className="basis-20 lg:mt-1 sm:mt-2">
                <button className="cursor-none lg:py-1 lg:px-6 sm:py-1 sm:px-8 lg:text-sm sm:text-sm font-bold text-black rounded-md outline outline-2 outline-gray-300">
                  No
                </button>
              </div>
              <div className="basis-20 lg:mt-1 sm:mt-2">
                <button className="cursor-none cursor_svg lg:py-1 lg:px-6 sm:py-1 sm:px-6 lg:text-sm sm:text-sm font-medium text-white rounded-md bg-blue outline outline-2 outline-blue">
                  Yes
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
