import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-6 bg-gradient-to-r from-gradientBlue to-gradientWhite lg:p-16 md:p-12 sm:p-8 sm:pb-14 rounded-xl antialiased">
        <div className="lg:w-7/12 md:w-7/12 sm:9/12 mx-auto">
          <div>
            <Image
              src="/Hero_min.png"
              width={864}
              height={380}
              alt="bluebox storage container"
            />
          </div>
        </div>
        <div>
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl lg:w-4/6 md:w-5/6 sm:w-64 mx-auto font-bold text-center text-black">
            Your Belongings, Our Priority
          </h1>
          <h4 className="lg:text-4xl md:text-3xl sm:text-base font-semibold text-center text-gray mt-2">
            Your Trusted Storage Solution
          </h4>
          <div className="lg:w-80 md:w-60 sm:w-56 mx-auto mt-8">
            <button className="bg-blue text-white lg:text-2xl md:text-2xl sm:text-base font-semibold w-full rounded-md py-4">
              Select Your Container
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
