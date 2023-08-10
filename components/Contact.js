import Image from "next/image";

export default function Contact() {
  return (
    <div className="w-11/12 mx-auto rounded-xl bg-bkgGray lg:my-60 md:my-32 sm:my-24 lg:py-12 md:py-8 sm:py-8 lg:px-12 md:px-8 sm:px-6 antialiased">
      <div className="flex lg:flex-row md:flex-row sm:flex-col gap-6">
        <div className="basis-7/12">
          <h3 className="font-extrabold text-black lg:text-5xl md:text-2xl sm:text-4xl">
            Have a question about our storage?
          </h3>
          <h4 className="font-bold text-gray lg:text-3xl md:text-base sm:text- mt-1">
            Our dedicated team is just a phone call away.
          </h4>
          <h3 className="font-extrabold text-black lg:text-6xl md:text-3xl sm:text-4xl mt-4">
            0214 450 450
          </h3>
          <p className="text-gray font-medium lg:text-2xl md:text-sm">
            info@blueboxstorage.ie
          </p>
          <p className="mt-4 font-bold text-black text-xl">Business Hours</p>
          <p className="font-medium text-gray text-sm">
            Monday - Friday: 9:00am to 6:00pm
          </p>
        </div>
        <div className="basis-5/12 lg:mt-0 md:mt-0 sm:mt-8">
          <div>
            <Image
              className="w-full object-cover"
              src="/Customer_service_02.png"
              width={420}
              height={335}
              alt="Blue box customer service"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
