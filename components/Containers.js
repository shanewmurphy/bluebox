import Image from "next/image";
export default function ContainerSizes() {
  return (
    <div className="w-11/12 mx-auto lg:my-60 md:my-32 sm:mb-0 antialiased">
      <div>
        <h2 className="text-center lg:text-7xl md:text-5xl sm:text-5xl text-black font-extrabold">
          Storage Options
        </h2>
        <p className="text-center lg:text-2xl md:text-2xl sm:text-sm text-gray lg:w-8/12 md:w-10/12 sm:w-11/12 font-bold mx-auto lg:leading-normal md:leading-normal sm:leading-normal mb-8">
          We offer a wide range of container types, sizes. Whether you require
          short-term or long-term storage, we have the flexibility to
          accommodate your requirements
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-rows-1 gap-4 lg:space-y-0 md:space-y-0 sm:space-y-12">
        <div>
          <div className="bg-BkColor rounded-lg lg:py-8 md:py-8 sm:py-9">
            <h3 className="text-center text-black text-7xl font-bold lg:mb-0 md-mb-0 sm:mb-8">
              8FT
            </h3>
            <div>
              <Image
                className="max-h-36"
                src="/8ft_Container-min.png"
                width={180}
                height={140}
                alt="8ft container"
              />
            </div>
            <div className="text-center">
              <button className="bg-blue text-white font-semibold text-base rounded-md py-2 w-36 mt-6">
                View
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-center text-3xl text-black font-bold mt-4">
              Storage Capacity
            </h4>
            <p className="text-center text-sm font-semibold text-gray lg:w-72 md:w-56 sm:w-10/12 mx-auto">
              This container size can typically hold the contents of a studio
              apartment or a small office space.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-BkColor rounded-lg lg:py-8 md:py-8 sm:py-9">
            <h3 className="text-center text-black text-7xl font-bold lg:mb-0 md-mb-0 sm:mb-8">
              20FT
            </h3>
            <div className="lg:mb-0 md:mb-2 sm:mb-0">
              <Image
                className="max-h-36"
                src="/20ft_Container-min.png"
                width={245}
                height={141}
                alt="20ft Container"
              />
            </div>
            <div className="text-center">
              <button className="bg-blue text-white font-semibold text-base rounded-md py-2 w-36 mt-6">
                View
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-center text-3xl text-black font-bold mt-4">
              Storage Capacity
            </h4>
            <p className="text-center text-sm font-semibold text-gray lg:w-72 md:w-56 sm:w-10/12 mx-auto">
              It can hold the contents of a one-to-two-bedroom apartment, a
              small vehicle, or around 10 standard pallets.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-BkColor rounded-lg lg:py-8 md:py-8 sm:py-9 sm:pb-12">
            <h3 className="text-center text-black text-7xl font-bold lg:mb-0 md-mb-0 sm:mb-8">
              40FT
            </h3>
            <div>
              <Image
                className="max-h-36 mb-2"
                src="/40ft_Container-min.png"
                width={230}
                height={133}
                alt="40ft Container"
              />
            </div>
            <div className="text-center">
              <button className="bg-blue text-white font-semibold text-base rounded-md py-2 w-36 mt-6">
                View
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-center text-3xl text-black font-bold mt-4">
              Storage Capacity
            </h4>
            <p className="text-center text-sm font-semibold text-gray lg:w-72 md:w-56 sm:w-10/12 mx-auto">
              It can accommodate the contents of a three-to-four-bedroom house,
              multiple vehicles, or approximately 21 pallets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
