import Image from "next/image";
import frontcontainer from "../public/FrontContainer.png";
export default function Intro() {
  return (
    <div className="w-11/12 mx-auto lg:mt-40 md:mt-40 sm:mt-28 lg:mb-60 md:mb-60 sm:mb-40 antialiased">
      <div className="lg:w-8/12 md:w-10/12 sm:w-11/12 mx-auto">
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-center font-extrabold text-blue lg:mb-2 md:mb-4 sm:mb-4">
          Unlock the Space You Need
        </h1>
        <div className="lg:w-11/12 md:w-11/12 sm:w-full mx-auto">
          <Image
            src={frontcontainer}
            width={723}
            height={293}
            alt="blue box storage"
            priority
          />
        </div>
        <p className="text-center lg:text-4xl md:text-3xl sm:text-base text-gray lg:leading-tight md:leading-tight sm:leading-normal font-bold lg:mt-4 md:mt-4 sm:mt-2">
          Our competitive rates and flexible payment options ensure you get the
          best value for your storage needs, without any surprises
        </p>
      </div>
    </div>
  );
}
