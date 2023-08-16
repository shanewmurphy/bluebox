import Image from "next/image";
import hero from "../public/Hero.png";

export default function Hero() {
  return (
    <div>
      <div className="w-11/12 mx-auto lg:mt-8 md:mt-8 sm:mt-4 bg-gradient-to-r from-gradientBlue to-gradientWhite lg:p-16 md:p-12 sm:p-2 sm:pb-14 sm:pt-14 rounded-xl antialiased">
        <div className="lg:w-7/12 md:w-7/12 sm:w-full mx-auto lg:mb-2 md:mb-2 sm:mb-4">
          <div>
            <Image
              src={hero}
              width={864}
              height={380}
              alt="bluebox storage container"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className="lg:text-7xl md:text-5xl sm:text-5xl lg:w-10/12 md:w-4/5 sm:w-72 mx-auto font-extrabold text-center text-black">
            Your Belongings, Our Priority
          </h1>
          <h4 className="lg:text-4xl md:text-3xl sm:text-lg font-bold text-center text-gray mt-2 antialiased">
            Your Trusted Storage Solution
          </h4>
          <div className="text-center mt-8">
            <button className="bg-blue text-white lg:text-2xl md:text-2xl sm:text-base lg:py-6 lg:px-14 md:py-4 md:px-10 sm:py-4 sm:px-8 font-bold rounded-md py-4">
              Select Your Container
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
