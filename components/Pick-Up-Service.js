import Image from "next/image";
export default function PickUp() {
  return (
    <div className="w-11/12 mx-auto rounded-xl lg:my-60 md:my-32 sm:my-24 lg:py-12 md:py-8 sm:py-8 lg:px-12 md:px-8 sm:px-2 antialiased">
      <div>
        <div class="flex lg:flex-row md:flex-row sm:flex-col gap-8">
          <div className="basis-2/5 lg:order-1 md:order-1 sm:order-2">
            <div>
              <Image
                className="object-cover"
                src="/Pick_up_02.png"
                width={382}
                height={336}
                alt="blue box pick-up service"
              />
            </div>
          </div>
          <div class="basis-3/5 sm:order-1">
            <h2 className="lg:text-6xl md:text-5xl h-12 sm:text-5xl text-black font-extrabold mb-2">
              Pick Up Service
            </h2>
            <h3 className="text-black font-bold lg:text-3xl md:text-3xl sm:text-2xl">
              Let us handle the transportation logistics, saving you time and
              effort
            </h3>
            <p className="text-black font-medium lg:text-base md:text-text-base sm:text-sm mt-2">
              Select our convenient pick-up service, and our dedicated team will
              bring our reliable vans right to your doorstep, making your
              storage experience seamless from start to finish.
            </p>
            <div className="lg:my-4 md:my-4 sm:mt-8">
              <h4 className="lg:text-2xl md:text-2xl sm:text-2xl text-blue font-extrabold mt-2 antialiased">
                Select this option in the Quotation Form
              </h4>
              <div className="float-left">
                <Image
                  src="/Form_pick_up_01.png"
                  objectFit="cover"
                  width={391}
                  height={87}
                  alt="blue box form"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
