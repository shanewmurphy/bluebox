import Image from "next/image";
import Link from "next/link";
import forthyFtContainer from "../public/forthyFtContainer.png";

import PickUpService from "@/components/Pick-Up-Service";
import Security from "@/components/Security";
import ContainerTerms from "@/components/Container-terms";
import FAQCommon from "@/components/FAQ/Common";
import Testimonials from "@/components/Testimonials/Testimonials";

import Layout from "@/components/Layout";

export default function ForthyFtContainer() {
  return (
    <Layout title="40ft Storage Container">
      <div className="w-11/12 mx-auto mt-8 bg-bkgGray lg:py-12 lg:px-12 md:py-8 md:px-8 sm:py-4 sm:px-4 lg:rounded-2xl md:rounded-xl sm:rounded-md antialiased">
        <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-16 md:gap-8 sm:gap-6">
          <div className="basis-2/5 rounded-md bg-white p-4">
            <Image
              className="m-0 mx-auto lg:mt-20"
              src={forthyFtContainer}
              width={335}
              height={193}
              alt="Blue Box Storage Containers"
              priority
            />
          </div>
          <div className="basis-3/5">
            <h3 className="lg:text-5xl md:text-5xl sm:text-3xl font-extrabold text-black">
              40ft Storage Container
            </h3>
            <h6 className="font-semibold text-base text-black">
              Generous and Capacious
            </h6>
            <h5 className="lg:mt-4 md:mt-4 sm:mt-4 lg:text-2xl md:text-2xl sm:text-2xl font-bold text-black">
              Key Features
            </h5>
            <p className="font-semibold lg:text-base md:text-base sm:text-sm text-black">
              Dimensions: The 20ft container measures dimensions Lenght: 5.90m X
              Width: 2.35m X Height: 2.39m
            </p>
            <p className="mt-2 font-semibold lg:text-base md:text-base sm:text-sm text-black">
              The 40ft container offers substantial space, making it suitable
              for storing the contents of a three-to-four-bedroom house or large
              equipment.
            </p>
            <p className="mt-2 font-semibold lg:text-base md:text-base sm:text-sm text-black">
              Security: Equipped with
              <Link
                href="#"
                className="underline pl-1 font-semibold lg:text-base md:text-base sm:text-sm text-gray"
              >
                security features
              </Link>
              , our 20ft container provides a secure storage solution.
            </p>
            <div className="lg:mt-8 md:mt-8 sm:mt-12 sm:mb-8 lg:text-left md:text-center sm:text-center">
              <button className="lg:py-4 lg:px-16 md:py-4 md:px-16 sm:py-4 sm:px-12 sm:text-center bg-blue font-bold text-white text-2xl rounded-md antialiased">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto lg:my-40 md:my-40 sm:my-40  antialiased">
        <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-16 md:gap-8 sm:gap-6">
          <div className="basis-2/5 bg-bkgGray p-16">
            <Image
              className="bg-center"
              src="/Opened_container-min.png"
              width={273}
              height={233}
              alt="Blue box storage containers"
            />
          </div>
          <div className="basis-3/5 antialiased">
            <h4 className="lg:text-5xl mb-2 md:text-4xl sm:text-3xl font-extrabold text-black">
              20ft Container Suitability
            </h4>
            <p className="font-medium text-sm leading-relaxed text-gray lg:pr-16">
              Commercial businesses can rely on the 40ft container to store
              substantial inventory, equipment, and supplies, while industrial
              applications benefit from its ability to house large machinery,
              construction materials, and industrial equipment. Moving and
              logistics companies find the container invaluable for securely
              storing household or commercial goods during transit or
              relocations.
            </p>
            <p className="mt-4 font-medium leading-relaxed text-sm text-gray lg:pr-16">
              Offering approximately 2,390 cubic feet of storage space, the 40ft
              container can accommodate the contents of a three-to-four-bedroom
              house, making it suitable for residential storage as well. Whether
              you need to store furniture, appliances, large machinery, or bulky
              items, the 40ft container provides the secure, flexible, and
              expansive storage solution you require.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Security />
      </div>
      <div>
        <ContainerTerms />
      </div>
      <div>
        <PickUpService />
      </div>
      <div>
        <FAQCommon />
      </div>
      <div>
        <Testimonials />
      </div>
    </Layout>
  );
}
