import Image from "next/image";
import Layout from "@/components/Layout";

import aboutUs from "../public/aboutUs.png";
export default function AboutUs() {
  return (
    <div>
      <Layout title="About Us, Blue Box Storage, Cork">
        <div className="w-11/12 mx-auto py-16 px-16 bg-gradient-to-r from-gradientBlue to-gradientWhite  rounded-xl lg:mt-8">
          <div className="w-10/12 mx-auto antialiased">
            <Image
              src={aboutUs}
              alt="about us image blue box storage"
              priority
            />
            <h4 className="text-center lg:text-5xl md:text-5xl sm:text-4xl font-extrabold text-black">
              Our mission is to provide you with a reliable, flexible, and
              hassle-free storage experience.
            </h4>
          </div>
        </div>
        <div className="w-8/12 mx-auto lg:mt-40 antialiased">
          <h3 className="text-center lg:text-4xl md:text-4xl sm:text-3xl font-bold text-blue">
            Our state-of-the-art storage facilities are equipped with advanced
            security measures, including surveillance systems, access controls,
            and trained personnel to ensure that your items are well-protected
          </h3>
        </div>
        <div></div>
      </Layout>
    </div>
  );
}
