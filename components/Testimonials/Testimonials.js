import testimonials from "@/Data/Testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperBtns from "./Swiper-Btns";

import "swiper/css";
import "swiper/css/pagination";

import { ArrowLeftCircle } from "@heroicons/react/24/outline";
import { ArrowRightCircle } from "@heroicons/react/24/outline";

export default function Testimonials() {
  return (
    <div>
      <div className="w-11/12 lg:my-60 md:my-32 sm:my-24 mx-auto lg:block md:block sm:hidden antialiased">
        <h5 className="text-center text-7xl text-black font-extrabold">
          Trusted Reputation
        </h5>
        <p className="w-2/3 mx-auto text-center text-3xl font-senibold text-gray mb-8">
          Count on us to handle your storage needs professionally and securely.
        </p>
        <div>
          <Swiper
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            pagination={{ clickable: true }}
            className="swiper-container"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonials.map((testimonials) => {
              return (
                <div>
                  <SwiperSlide className="bg-blue mb-16 rounded-lg lg:py-12 lg:px-12 lg:h-1/3 relative">
                    <p
                      className="text-white text-center h-44 text-base font-medium"
                      key={testimonials.ID}
                    >
                      "{testimonials.Comment}"
                    </p>
                    <p className="mt-6 text-white text-center">
                      {testimonials.Name}
                    </p>
                  </SwiperSlide>
                  <div className="h-14 absolute z-10">
                    <SwiperBtns />
                  </div>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="w-11/12 mx-auto lg:hidden md:hidden sm:block antialiased">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          className="swiper-container"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonials.map((testimonials) => {
            return (
              <div>
                <SwiperSlide className="bg-blue mb-16 rounded-lg px-6 py-6 relative">
                  <p
                    className="text-white text-center h-56 font-medium text-sm"
                    key={testimonials.ID}
                  >
                    "{testimonials.Comment}"
                  </p>
                  <p className="mt-6 text-white text-center">
                    {testimonials.Name}
                  </p>
                </SwiperSlide>
                <div className="h-14 absolute z-10">
                  <SwiperBtns />
                </div>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}