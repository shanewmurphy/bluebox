import Image from "next/image";
import Link from "next/link";
import twentyFtContainer from "../public/twentyFtContainer.png";

import PickUpService from "@/components/Pick-Up-Service";
import Security from "@/components/Security";
import ContainerTerms from "@/components/Container-terms";
import FAQCommon from "@/components/FAQ/Common";
import Testimonials from "@/components/Testimonials/Testimonials";

import Layout from "@/components/Layout";

export default function TwentyFtContainer() {
  return (
    <Layout title="20ft Storage Container">
      <div className="w-11/12 mx-auto lg:mt-8 md:mt-8 sm:mt-4 bg-bkgGray lg:py-12 lg:px-12 md:py-8 md:px-8 sm:py-4 sm:px-4 lg:rounded-2xl md:rounded-xl sm:rounded-md antialiased">
        <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-16 md:gap-8 sm:gap-6">
          <div className="basis-2/5 rounded-md bg-white p-4">
            <Image
              className="m-0 mx-auto lg:mt-20"
              src={twentyFtContainer}
              width={335}
              height={193}
              alt="Blue Box Storage Containers"
              priority
            />
          </div>
          <div className="basis-3/5">
            <h3 className="lg:text-6xl md:text-5xl sm:text-4xl font-extrabold text-black">
              20ft Container
            </h3>
            <h6 className="font-semibold text-base text-black">
              Spacious and Versatile
            </h6>
            <h5 className="lg:mt-4 md:mt-4 sm:mt-4 lg:text-2xl md:text-2xl sm:text-2xl font-bold text-black">
              Key Features
            </h5>
            <p className="font-semibold lg:text-base md:text-base sm:text-sm text-black">
              Dimensions: The 20ft container measures dimensions Lenght: 5.90m X
              Width: 2.35m X Height: 2.39m
            </p>
            <p className="mt-2 font-semibold lg:text-base md:text-base sm:text-sm text-black">
              Storage Capacity: Spacious interior of the 20ft container offers
              room to store the contents of a one-to-two-bedroom apartment or a
              small office.
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
              alt="Twenthy Foot Storage Container"
            />
          </div>
          <div className="basis-3/5 antialiased">
            <h4 className="lg:text-5xl mb-2 md:text-4xl sm:text-3xl font-extrabold text-black">
              20ft Container Suitability
            </h4>
            <p className="font-medium text-sm leading-relaxed text-gray lg:pr-16">
              The 20ft container is designed to cater to a diverse range of
              storage needs, making it an ideal choice for individuals,
              businesses, and organisations. Whether you&apos;re a homeowner in
              the midst of a move or renovation, a small business owner seeking
              extra space for inventory, or a contractor requiring on-site
              storage for tools and equipment, the 20ft container has you
              covered.
            </p>
            <p className="mt-4 font-medium leading-relaxed text-sm text-gray lg:pr-16">
              It can accommodate the contents of a one-to-two-bedroom apartment
              or house, including furniture, appliances, boxed items, and more.
              For businesses, it offers ample room for office equipment,
              inventory, filing cabinets, and even medium-sized machinery. Its
              versatility makes it suitable for various industries, including
              retail, event planning, education, and construction.
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
