import Image from "next/image";
export default function Security() {
  return (
    <div className="w-11/12 mx-auto rounded-xl bg-bkgGray lg:my-60 md:my-32 sm:my-24 lg:py-12 md:py-8 lg:px-12 md:px-8 sm:px-2 sm:py-8 antialiased">
      <div>
        <h2 className="text-center text-black font-extrabold lg:text-7xl md:text-5xl sm:text-5xl antialiased">
          Security Features
        </h2>
        <div>
          <Image
            src="/Security-min.png"
            width={600}
            height={169}
            alt="Blue Box security"
          />
        </div>
        <div className="w-11/12 mx-auto lg:mt-12 lg:mb-16 md:mt-8 md:mb-8 sm:mt-6 sm:mb-8">
          <div className="grid lg:grid-cols-2 md:grid-col-2 sm:grid-row-1 lg:gap-x-16 lg:gap-y-6 md:gap-x-16 sm:gap-y-6">
            <div>
              <h5 className="text-black font-bold lg:text-2xl md:text-2xl sm:text-base">
                On-Site Security Personnel
              </h5>
              <p className="text-gray font-medium text-sm">
                Storage facilities employ on-site security personnel to monitor
                the premises, conduct regular patrols, and respond to security
                incidents.
              </p>
            </div>
            <div>
              <h5 className="text-black font-bold lg:text-2xl md:text-2xl sm:text-base">
                Fencing and Perimeter Security
              </h5>
              <p className="text-gray font-medium text-sm">
                Storage facilities are typically enclosed with perimeter fencing
                or walls to enhance security.
              </p>
            </div>
            <div>
              <h5 className="text-black font-bold lg:text-2xl md:text-2xl sm:text-base">
                Surveillance Systems
              </h5>
              <p className="text-gray font-medium text-sm">
                Storage facilities often employ surveillance systems, including
                CCTV cameras strategically placed to monitor container areas.
              </p>
            </div>
            <div>
              <h5 className="text-black font-bold lg:text-2xl md:text-2xl sm:text-base">
                Alarm Systems
              </h5>
              <p className="text-gray font-medium text-sm">
                Storage containers and facilities are equipped with alarm
                systems to detect and alert in case of unauthorised entry or
                tampering
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
