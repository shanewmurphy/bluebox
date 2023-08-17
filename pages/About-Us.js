import Image from "next/image";
import Layout from "@/components/Layout";

import aboutHeroImgA from "../public/AboutHeroImgA.png";
export default function AboutUs() {
  return (
    <div>
      <Layout title="About Us, Blue Box Storage, Cork">
        <div className="w-11/12 mx-auto lg:py-16 lg:px-16 md:py-12 md:px-16 sm:px-4 sm:py-8 bg-gradient-to-r from-gradientBlue to-gradientWhite  lg:rounded-xl md:rounded-md sm:rounded-md lg:mt-8 md:mt-8 sm:mt-4">
          <div className="w-10/12 sm:w-full  mx-auto antialiased">
            <Image
              src={aboutHeroImgA}
              alt="about us image blue box storage"
              priority
            />
            <h3 className="text-center lg:w-10/12 mx-auto lg:text-5xl md:text-5xl sm:text-base font-extrabold text-black">
              Our mission is to provide you with a reliable, flexible, and
              hassle-free storage experience
            </h3>
          </div>
        </div>
        <div className="lg:w-9/12 md:w-9/12 sm:w-full mx-auto lg:my-40 md:my-36 sm:my-24 sm:px-4 antialiased">
          <h2 className="text-center lg:text-7xl md:text-4xl sm:text-2xl font-extrabold text-blue line_height_h2">
            Our state-of-the-art storage facilities with advanced security ,
            including surveillance systems, access controls, to ensure that your
            items are well-protected
          </h2>
        </div>
        <div className="w-11/12 mx-auto my-60">
          <div className="grid lg:grid-cols-2 lg:gap-16">
            <div>KKKK</div>
            <div>BBBBB</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
