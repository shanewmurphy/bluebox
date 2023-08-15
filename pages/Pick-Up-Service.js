import Image from "next/image";
import Link from "next/link";

import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

import Layout from "@/components/Layout";

export default function PickUpServicePage() {
  return (
    <Layout title="Pick Up Service from Blue Box Storage">
      <div className="w-11/12 bg-bkgGray lg:rounded-2xl lg:py-16 lg:px-12 md:py-8 md:px-8 sm:py-4 sm:px-4 md:rounded-xl sm:rounded-md mx-auto mt-8 antialiased">
        <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-36 md:gap-24 sm:gap-12">
          <div className="basis-3/5 antialiased">
            <h2 className="lg:text-6xl md:text-6xl sm:text-4xl font-extrabold text-black mb-6 line_height_h2">
              Let us handle the transportation logistics, saving you time and
              effort
            </h2>
            <p className="font-medium text-base text-gray">
              Don't worry about renting a truck or lifting heavy boxes. Choose
              our pick-up service when filling out the quote form, and our
              professional team will take care of collecting your belongings and
              transporting them to our secure storage facility.
            </p>
            <h4 className="font-bold text-blue lg:text-2xl md:text-3xl sm:text-2xl mt-4 line_height_h4">
              This service is only available when you rent a storage container
              with us
            </h4>
            {/* <div className="mt-4">
              <h5 className="lg:text-2xl font-bold text-black flex align-middle">
                Learn More
                <span>
                  <ArrowDownCircleIcon className="w-8 h-8 text-gray ml-2" />
                </span>
              </h5>
            </div> */}
          </div>
          <div className="basis-2/5">
            <div className="bg-white h-96"></div>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto my-40">
        <h2 className="text-center lg:text-7xl text-blue font-extrabold line_height_h2">
          We offer a fleet of vans and trucks in various sizes to accommodate
          different storage needs
        </h2>
      </div>
      <div>kk</div>
    </Layout>
  );
}
