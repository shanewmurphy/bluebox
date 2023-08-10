import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
export default function PickUpService() {
  return (
    <div className="w-11/12 mx-auto bg-blue rounded-xl lg:py-16 lg:px-16 md:py-8 md:px-8 sm:px-6 sm:py-6 antialiased">
      <div className="flex lg:flex-row md:flex-row sm:flex-col gap-12">
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
        <div className="basis-3/5 lg:order-2 md:order-1 sm:order-1">
          <h2 className="lg:text-6xl md:text-5xl sm:text-5xl text-white font-extrabold lg:mb-2 md:mb-1">
            Pick Up Service
          </h2>
          <h3 className="text-white font-bold lg:text-3xl md:text-2xl sm:text-3xl">
            Let us handle the transportation logistics, saving you time and
            effort
          </h3>
          <p className="text-white font-medium leading-relaxed lg:text-base md:text-xs sm:text-sm mt-2">
            Select our convenient pick-up service, and our dedicated team will
            bring our reliable vans right to your doorstep, making your storage
            experience seamless from start to finish.
          </p>
          <div className="lg:mt-8 md:mt-4 sm:mt-6">
            <button className="bg-white lg:text-2xl md:text-sm text-blue rounded-md font-bold lg:py-4 lg:px-12 md:py-3 md:px-4 sm:py-4 sm:px-8 flex justify-center items-center antialiased">
              Learn More
              <spam className="contents">
                <ArrowRightIcon className="w-6 h-6 ml-2" />
              </spam>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
