import Image from "next/image";
import Link from "next/link";
import PickUpService from "@/components/Pick-Up-Service";
import Security from "@/components/Security";
import ContainerTerms from "@/components/Container-terms";
import FAQCommon from "@/components/FAQ/Common";
import Testimonials from "@/components/Testimonials/Testimonials";

import Layout from "@/components/Layout";

export default function EightFTContainer() {
  return (
    <Layout title="8ft Blue Box Storage Container">
      <div className="w-11/12 mx-auto lg:mt-8 md:mt-8 sm:mt-4 bg-bkgGray lg:py-12 lg:px-12 md:py-8 md:px-8 sm:py-4 sm:px-4 lg:rounded-2xl md:rounded-xl sm:rounded-md antialiased">
        <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-16 md:gap-8 sm:gap-6">
          <div className="basis-2/5 rounded-md bg-white p-4">
            <Image
              className="m-0 mx-auto lg:mt-10"
              src="/8ft_container_Blue-min.png"
              width={320}
              height={248}
              alt="Eight Foot Storage Container"
            />
          </div>
          <div className="basis-3/5">
            <h3 className="lg:text-6xl md:text-5xl sm:text-5xl font-extrabold text-black">
              8ft Container
            </h3>
            <h6 className="font-semibold text-base text-black">
              Compact and Convenient
            </h6>
            <h5 className="lg:mt-4 md:mt-4 sm:mt-4 lg:text-2xl md:text-2xl sm:text-2xl font-bold text-black">
              Key Features
            </h5>
            <p className="font-semibold lg:text-base md:text-base sm:text-sm text-black">
              Dimensions: The 8ft container measures dimensions Lenght: 2.44m X
              Width: 2.20m X Height: 2.26m
            </p>
            <p className="mt-2 font-semibold lg:text-base md:text-base sm:text-sm text-black">
              Storage Capacity: With a storage capacity of approximately hold
              the contents of a studio apartment or a small office space
            </p>
            <p className="mt-2 font-semibold lg:text-base md:text-base sm:text-sm text-black">
              Security: Equipped with
              <Link
                href="#"
                className="underline pl-1 font-semibold lg:text-base md:text-base sm:text-sm text-gray"
              >
                security features
              </Link>
              , our 8ft container provides a secure storage solution.
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
              alt="Blue Box Storage Containers"
            />
          </div>
          <div className="basis-3/5 antialiased">
            <h4 className="lg:text-5xl mb-2 md:text-4xl sm:text-4xl font-extrabold text-black">
              8ft Container Suitability
            </h4>
            <p className="font-medium text-sm leading-relaxed text-gray lg:pr-16">
              An 8ft storage container is a versatile solution for storing a
              range of items. It is suitable for small to medium-sized furniture
              pieces, such as chairs, tables, and compact appliances.
            </p>
            <p className="mt-4 font-medium leading-relaxed text-sm text-gray lg:pr-16">
              Personal belongings like clothing, books, and toys can be easily
              stored in this container. It&apos;s also ideal for seasonal items
              such as holiday decorations, sports equipment, camping gear, and
              gardening tools.
            </p>
            <p className="mt-4 font-medium leading-relaxed text-sm text-gray lg:pr-16">
              For small businesses, the 8ft container provides space for office
              supplies, inventory, and equipment. Whether you&apos;re moving,
              renovating, or need additional storage for your belongings, the
              8ft container offers a compact and secure solution to meet your
              needs.
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
