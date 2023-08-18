import Image from "next/image";
import Link from "next/link";

import Contact from "@/components/Contact";
import PickUpFAQ from "@/components/FAQ/PickUpFAQ";
import Layout from "@/components/Layout";

export default function PickUpServicePage() {
  return (
    <Layout title="Pick Up Service from Blue Box Storage">
      <div className="lg:mt-8 md:mt-8 sm:mt-4 antialiased">
        <div className="w-11/12 bg-bkgGray lg:rounded-2xl lg:py-16 lg:px-12 md:py-8 md:px-8 sm:py-4 sm:px-4 md:rounded-xl sm:rounded-md mx-auto mt-8 antialiased">
          <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-16 md:gap-24 sm:gap-12">
            <div className="basis-3/5 antialiased">
              <h2 className="lg:text-6xl md:text-6xl sm:text-4xl font-extrabold text-black mb-6 line_height_h2">
                Let us handle the transportation logistics, saving you time and
                effort
              </h2>
              <p className="font-semibold lg:text-base md:text-base sm:text-sm text-gray">
                Don&apos;t worry about renting a truck or lifting heavy boxes.
                Choose our pick-up service when filling out the quote form, and
                our professional team will take care of collecting your
                belongings and transporting them to our secure storage facility.
              </p>
              <h4 className="font-bold text-blue lg:text-2xl md:text-3xl sm:text-base mt-4 line_height_h4">
                This service is only available when you rent a storage container
                with us
              </h4>
            </div>
            <div className="basis-2/5">
              <div className="bg-white h-96"></div>
            </div>
          </div>
        </div>
        <div className="lg:w-9/12 md:w-9/12 sm:w-full mx-auto lg:my-60 md:my-40 sm:my-16 antialiased">
          <h2 className="text-center lg:text-7xl md:text-6xl sm:text-4xl text-blue font-extrabold sm:px-4 line_height_h2">
            We offer a fleet of vans and trucks in various sizes to accommodate
            different storage needs
          </h2>
        </div>
        <div className="w-11/12 mx-auto lg:my-60 md:my-40 sm:my-36 antialiased">
          <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-24 md:gap-6 sm:gap-8">
            <div className="basis-3/6">
              <h2 className="font-extrabold text-black lg:text-4xl md:text-4xl sm:text-3xl lg:mb-4 md:mb-4 sm:mb-2">
                Our Pick-up Service option to take advantage of our hassle-free
                transportation
              </h2>
              <p className="font-semibold text-gray lg:text-xl md:text-xl sm:text-sm mb-2">
                Please note that this service is exclusively available only to
                customers who rent a storage unit with us.
              </p>
              <p className="font-semibold text-gray lg:text-base md:text-base sm:text-sm">
                Select this option during the quotation process. Prices are
                based on the size of container you choose & location where items
                are picked-up from.
              </p>
            </div>
            <div className="basis-3/6">
              <div className="bg-slate-100 h-80"></div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto my-60 antialiased">
          <h2 className="lg:w-8/12 mx-auto text-center lg:text-7xl md:text-6xl sm:text-4xl text-blue font-extrabold line_height_h2 lg:mb-8 md:mb-8 sm:mb-6">
            We can provide the appropriate van or truck
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-bkgGray rounded-md py-8">
              <div className="w-11/12 h-80 mx-auto bg-white py-16">
                <Image
                  src="/Van_B&W.png"
                  width={294}
                  height={173}
                  alt="Blue Box Vans"
                />
              </div>
              <h4 className="w-9/12 mx-auto lg:text-xl mt-4 text-center text-black font-bold">
                Vans Suitable for belonging for 8ft Storage Container
              </h4>
            </div>
            <div>
              <div className="bg-bkgGray rounded-md py-8">
                <div className="w-11/12 h-80 mx-auto bg-white py-16">
                  <Image
                    src="/Truck_B&W.png"
                    width={292}
                    height={174}
                    alt="Blue Box Trucks"
                  />
                </div>
                <h4 className="w-9/12 mx-auto lg:text-xl mt-4 text-center text-black font-bold">
                  Trucks Suitable for belonging for 14ft and 20ft Storage
                  Container
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto bg-bkgGray rounded-xl lg:py-8 lg:px-8 md:py-8 md:px-8 sm:py-8 sm:px-4 lg:mb-60 antialiased">
          <h4 className="lg:text-7xl md:text-6xl sm:text-4xl text-black text-center font-extrabold lg:mb-8 md:mb-4 sm:mb-4">
            Rules for your pick-up service
          </h4>
          <div className="grid lg:grid-cols-3 lg:gap-12 md:gap-12 sm:gap-6">
            <div>
              <h5 className="lg:text-xl md:text-xl sm:text-lg font-bold text-blue">
                Items for Pick-up
              </h5>
              <p className="text-sm font-semibold mb-2 text-gray">
                Items must be packed in boxes or suitable containers
              </p>
              <p className="text-sm font-semibold text-gray">
                Please ensure that your belongings are securely packed and ready
                for transport
              </p>
            </div>
            <div>
              <h5 className="lg:text-xl md:text-xl sm:text-lg font-bold text-blue">
                Size and Weight Restrictions
              </h5>
              <p className="text-sm font-semibold text-gray mb-2">
                Each item or box should be manageable by our team during the
                pick-up process.
              </p>
              <p className="text-sm font-semibold text-gray">
                Weight restrictions may apply for safety reasons. Please consult
                with our team for specific guidelines
              </p>
            </div>
            <div>
              <h5 className="lg:text-xl md:text-xl sm:text-lg font-bold text-blue">
                Packing Requirements
              </h5>
              <p className="text-sm font-semibold text-gray mb-2">
                All items should be properly packed and sealed to prevent damage
                during transport.
              </p>
              <p className="text-sm font-semibold text-gray">
                Fragile or delicate items should be adequately protected with
                appropriate padding or wrapping
              </p>
            </div>
            <div>
              <h5 className="lg:text-xl md:text-xl sm:text-lg font-bold text-blue">
                Prohibited Items
              </h5>
              <p className="text-sm font-semibold text-gray mb-2">
                We cannot transport hazardous materials, perishable goods,
                firearms, illegal substances, or any other items prohibited by
                law
              </p>
              <p className="text-sm font-semibold text-gray">
                Please refer to our list of prohibited items for more details.
              </p>
            </div>
            <div>
              <h5 className="lg:text-xl md:text-xl sm:text-lg font-bold text-blue">
                Preparing for Pick-up
              </h5>
              <p className="text-sm font-semibold text-gray mb-2">
                Prior to the scheduled pick-up, have your items organised and
                ready for collection
              </p>
              <p className="text-sm font-semibold text-gray">
                Our team will load the items into the van, so please ensure they
                are easily accessible.
              </p>
            </div>
            <div>
              <h5 className="lg:text-xl md:text-xl sm:text-lg font-bold text-blue">
                Accessibility
              </h5>
              <p className="text-sm font-semibold text-gray mb-2">
                Ensure that the pick-up location is easily accessible for our
                team and the van.
              </p>
              <p className="text-sm font-semibold text-gray">
                Clear pathways and entrances to facilitate smooth loading
              </p>
            </div>
          </div>
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <PickUpFAQ />
        </div>
      </div>
    </Layout>
  );
}
