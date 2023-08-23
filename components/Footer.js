import Image from "next/image";
import logoFooter from "../public/LogoFooter.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="mt-48">
      <div className="w-screen bg-blue lg:py-16 lg:px-16 md:py-12 md:px-8 sm:py-10 sm:px-8 antialiased">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-16 md:gap-8">
          <div>
            <div>
              <Image className="m-0" src={logoFooter} alt="Blue Box Logo" />
            </div>
            <div className="block">
              <p className="text-white text-sm font-semibold mt-2">
                Units 24-48, Euro Business Park, Little Island, T45 WP96,
                <p>Cork, Ireland.</p>
              </p>
              <p className="text-white font-bold text-xl mt-4">
                Call: 0214 450 450
              </p>
              <p className="text-white font-bold text-lg mt-1">
                Email: info@bluebox.ie
              </p>
            </div>
          </div>
          <div>
            <p className="text-white font-bold lg:text-3xl md:text-3xl sm:text-2xl lg:mt-0 md:mt-0 sm:mt-8">
              Storage Containers
            </p>
            <p className="mt-2">
              <Link
                href="/8ft-container"
                className="text-white lg:font-semibold md:font-semibold sm:font-medium lg:text-2xl md:text-2xl sm:text-base hover:text-BkColor hover:underline"
              >
                8ft Storage Container
              </Link>
            </p>
            <p className="mt-2">
              <Link
                href="20ft-container"
                className="text-white font-semibold lg:text-2xl md:text-2xl sm:text-base hover:text-BkColor hover:underline"
              >
                20ft Container
              </Link>
            </p>
            <p className="mt-2">
              <Link
                href="40ft-container"
                className="text-white font-semibold lg:text-2xl md:text-2xl sm:text-base hover:text-BkColor hover:underline"
              >
                40ft Container
              </Link>
            </p>
          </div>
          <div>
            <p className="text-white font-bold lg:text-3xl md:text-3xl sm:text-2xl lg:mt-0 md:mt-0 sm:mt-8">
              Quick Links
            </p>
            <p className="mt-2">
              <Link
                href="/About-Us"
                className="text-white lg:font-semibold md:font-semibold sm:font-medium lg:text-2xl md:text-2xl sm:text-base hover:text-BkColor hover:underline"
              >
                About Us
              </Link>
            </p>
            <p className="mt-2">
              <Link
                href="/Pick-Up-Service"
                className="text-white lg:font-semibold md:font-semibold sm:font-medium lg:text-2xl md:text-2xl sm:text-base hover:text-BkColor hover:underline"
              >
                Pick-Up Service
              </Link>
            </p>
            <p className="mt-2">
              <Link
                href="/Contact-Us"
                className="text-white lg:font-semibold md:font-semibold sm:font-medium lg:text-2xl md:text-2xl sm:text-base hover:text-BkColor hover:underline"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
