import Image from "next/image";
import Link from "next/link";
export default function EightFTContainer() {
  return (
    <div className="w-11/12 mx-auto lg:mt-16 bg-bkgGray lg:py-12 lg:px-12 md:py-8 md:px-8 sm:py-4 sm:px-4 rounded-3xl antialiased">
      <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-16 md:gap-8 sm:gap-6">
        <div className="basis-2/5">
          <Image
            className="object-cover m-0"
            src="/8ft_B-min.png"
            width={402}
            height={378}
            alt="8ft container"
          />
        </div>
        <div className="basis-3/5">
          <h3 className="lg:text-5xl md:text-5xl sm:text-4xl font-extrabold text-black">
            8ft Storage Container
          </h3>
          <h6 className="font-semibold text-base text-black">
            Compact and Convenient
          </h6>
          <h5 className="lg:mt-4 md:mt-4 sm:mt-2 lg:text-2xl md:text-2xl sm:text-2xl font-bold text-black">
            Key Features
          </h5>
          <p className="font-semibold lg:text-base md:text-base sm:text-sm text-black">
            Dimensions: The 8ft container measures [dimensions] (L x W x H)
          </p>
          <p className="mt-2 font-semibold lg:text-base md:text-base sm:text-sm text-black">
            Storage Capacity: With a storage capacity of approximately hold the
            contents of a studio apartment or a small office space
          </p>
          <p className="mt-2 font-semibold lg:text-base md:text-base sm:text-sm text-black">
            Security: Equipped with
            <Link
              href="#"
              className="underline pl-2 font-semibold lg:text-base md:text-base sm:text-sm text-black"
            >
              security features
            </Link>
            , our 8ft container provides a secure storage solution.
          </p>
          <div className="mt-8 lg:text-left md:text-center sm:text-center">
            <button className="lg:py-4 lg:px-16 md:py-4 md:px-16 sm:py-4 sm:px-12 sm:text-center bg-blue font-bold text-white text-2xl rounded-md antialiased">
              Get a Quote
            </button>
            <p className="mt-2  pl-4 text-sm font-semibold text-black underline">
              View full terms & conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
