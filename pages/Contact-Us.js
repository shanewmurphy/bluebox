import Layout from "@/components/Layout";
import Image from "next/image";
import contactUs from "../public/ContactUs.png";
export default function ContactUs() {
  return (
    <div>
      <Layout title="Contact Us | Blue Box Storage Cork">
        <div>
          <div className="w-11/12 mx-auto lg:py-16 lg:px-16 md:py-12 md:px-16 sm:px-4 sm:py-8 bg-gradient-to-r from-gradientBlue to-gradientWhite lg:rounded-xl md:rounded-md sm:rounded-md lg:mt-8 md:mt-8 sm:mt-4 antialiased">
            <div className="w-10/12 sm:w-full mx-auto antialiased">
              <Image
                src={contactUs}
                alt="about us image blue box storage"
                priority
              />
              <h3 className="text-center lg:w-10/12 mx-auto lg:text-5xl md:text-5xl sm:text-base font-extrabold text-black">
                We are here to assist you with any inquiries or storage needs
                you may have.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto lg:my-40 antialiased">
          <div className="grid lg:grid-cols-2 lg:gap-24">
            <div>
              <h4 className="lg:text-4xl md:text-4xl sm:text-3xl font-extrabold text-black mb-2">
                Blue Box Storage
              </h4>
              <address className="lg:text-2xl md:text-2xl sm:text-2xl font-semibold text-gray not-italic lg:mb-8">
                Units 24-48, Euro Business Park, Little Island, T45 WP96, County
                Cork, Ireland.
              </address>
              <h5 className="lg:text-4xl md:text-4xl sm:text-3xl font-extrabold text-black lg:mb-2">
                Call: 0214 450 450
              </h5>
              <p className="lg:text-3xl md:text-2xl sm:text-2xl font-semibold text-gray hover:text-blue">
                info@bluebox.ie
              </p>
              <p className="lg:text-2xl md:text-2xl sm:text-2xl font-bold text-black lg:mt-8">
                Business Hours
              </p>
              <p className="text-base font-medium text-gray">
                Monday - Friday: 9:00am to 6:00pm
              </p>
            </div>
            <div>BB</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
