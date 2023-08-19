import Image from "next/image";
import Layout from "@/components/Layout";

import aboutUsHero from "../public/AboutUsHero.png";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function AboutUs() {
  return (
    <div>
      <Layout title="About Us, Blue Box Storage, Cork">
        <div className="w-11/12 mx-auto lg:py-16 lg:px-16 md:py-12 md:px-16 sm:px-4 sm:py-8 bg-gradient-to-r from-gradientBlue to-gradientWhite lg:rounded-xl md:rounded-md sm:rounded-md lg:mt-8 md:mt-8 sm:mt-4">
          <div className="w-10/12 sm:w-full mx-auto antialiased">
            <Image
              src={aboutUsHero}
              alt="About Us Blue Box Storage, Cork"
              priority
            />
            <h3 className="text-center lg:w-10/12 mx-auto lg:text-5xl md:text-5xl sm:text-base font-extrabold text-black">
              Our mission is to provide you with a reliable, flexible, and
              hassle-free storage experience
            </h3>
          </div>
        </div>
        <div className="lg:w-9/12 md:w-9/12 sm:w-full mx-auto lg:my-40 md:my-32 sm:my-16 sm:px-4 antialiased">
          <h2 className="text-center lg:text-6xl md:text-4xl sm:text-2xl font-extrabold text-blue line_height_h2">
            Our state-of-the-art storage facilities with advanced security,
            including surveillance systems, access controls, to ensure that your
            items are well-protected
          </h2>
          <div className="w-2/5 mx-auto mt-6">
            <Image
              src="/LogoPage.svg"
              width={216}
              height={46}
              alt="Blue Box Logo"
            />
          </div>
        </div>
        <div className="w-11/12 mx-auto lg:my-60 antialiased">
          <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-16 sm:gap-12">
            <div className="bg-bkgGray lg:py-8 lg:px-6 md:py-8 md:px-6 sm:py-8 sm:px-4 rounded-lg">
              <h2 className="lg:text-5xl md:text-5xl sm:text-4xl text-center font-extrabold text-black lg:mb-8">
                Variety of Storage Options
              </h2>
              <div className="p-12">
                <Image
                  className="object-center"
                  src="/AboutContainers.png"
                  width={413}
                  height={170}
                  alt="Blue Box Container 20ft 8ft 40ft"
                />
              </div>
              <p className="lg:text-base md:text-base sm:text-sm text-gray font-semibold text-left mb-4">
                We offer a variety of storage options to cater to different
                needs. From our versatile container sizes to our convenient
                pick-up service.
              </p>
              <p className="lg:text-base md:text-base sm:text-sm text-gray font-semibold text-left">
                We strive to provide flexible solutions that meet your unique
                requirements. Our containers are clean, weatherproof, and
                designed to keep your belongings in excellent condition.
              </p>
            </div>
            <div className="bg-bkgGray lg:py-8 lg:px-6 md:py-8 md:px-6 sm:py-8 sm:px-4 rounded-lg">
              <h2 className="lg:text-5xl md:text-5xl sm:text-4xl text-center font-extrabold text-black lg:mb-8">
                Transparency and Value
              </h2>
              <div className="p-12">
                <Image
                  className="object-center"
                  src="/AboutFrontView.png"
                  width={166}
                  height={171}
                  alt="Blue Box Container 20ft 8ft 40ft"
                />
              </div>
              <p className="lg:text-base md:text-base sm:text-sm text-gray font-semibold text-left mb-4">
                We believe in transparency and value for our customers. Our
                pricing is competitive and straightforward, with no hidden fees
                or surprises. We aim to make the storage process as seamless as
                possible, from the initial quotation to the final retrieval of
                your items.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Security />
        </div>
        <div>
          <Testimonials />
        </div>
      </Layout>
    </div>
  );
}
