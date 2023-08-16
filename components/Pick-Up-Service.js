import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function PickUpService() {
  return (
    <div>
      <div className="w-11/12 mx-auto lg:bg-blue md:bg-blue sm:bg-white rounded-xl lg:py-16 lg:px-16 md:py-8 md:px-8 sm:px-2 sm:py-6 antialiased">
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
            <h2 className="lg:text-6xl md:text-4xl sm:text-5xl lg:text-white md:text-white sm:text-black font-extrabold">
              Pick Up Service
            </h2>
            <h3 className="lg:text-white md:text-white sm:text-gray font-bold lg:text-3xl md:text-2xl sm:text-3xl">
              Leave the transportation logistics to us, and enjoy the benefits
              of saved time and effort
            </h3>
            <p className="lg:text-white md:text-white sm:text-gray font-medium leading-relaxed lg:text-base md:text-xs sm:text-sm mt-2">
              Select our convenient pick-up service, and our dedicated team will
              bring our reliable vans right to your doorstep, making your
              storage experience seamless from start to finish.
            </p>
            <div className="lg:mt-8 md:mt-4 sm:mt-6">
              <Link href="/Pick-Up-Service">
                <button className="lg:bg-white md:bg-white sm:bg-blue lg:text-2xl md:text-sm lg:text-blue md:text-blue sm:text-white rounded-md font-bold lg:py-4 lg:px-12 md:py-3 md:px-4 sm:py-3 sm:px-8 flex justify-center items-center antialiased">
                  Learn More
                  <spam className="contents">
                    <ArrowRightIcon className="w-6 h-6 ml-2" />
                  </spam>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
