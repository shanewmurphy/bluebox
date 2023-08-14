import React, { useRef } from "react";
import testimonials from "@/Data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperBtns from "./Swiper-Btns";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default function Testimonials() {
  const swiperRef = useRef();
  return (
    <div>
      <div className="w-10/12 lg:my-60 md:my-32 sm:my-24 mx-auto lg:block md:block sm:hidden antialiased">
        <h5 className="text-center text-7xl text-black font-extrabold">
          Trusted Reputation
        </h5>
        <p className="w-2/3 mx-auto text-center text-3xl font-bold text-gray mb-8">
          Count on us to handle your storage needs professionally and securely
        </p>
        <div>
          <>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={40}
              slidesPerView={2}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {testimonials.map((testimonials) => (
                <SwiperSlide
                  className="bg-bkgGray mb-16 rounded-lg lg:py-10 lg:px-10 md:py-6 md:px-6 lg:h-1/3 "
                  key={testimonials.ID}
                >
                  <p
                    className="text-gray text-center lg:h-28 md:h-48 lg:text-sm md:text-sm sm:text-xs font-medium"
                    key={testimonials.ID}
                  >
                    {testimonials.Comment}
                  </p>
                  <p className="mt-6 pt-4 text-black font-bold text-base text-center">
                    {testimonials.Name}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-24 mx-auto mt-4">
              <button onClick={() => swiperRef.current.slidePrev()}>
                <ArrowLeftCircleIcon className="h-12 w-12 text-blue" />
              </button>
              <button onClick={() => swiperRef.current.slideNext()}>
                <ArrowRightCircleIcon className="h-12 w-12 text-blue" />
              </button>
            </div>
          </>
        </div>
      </div>
      <div className="w-11/12 mx-auto lg:hidden md:hidden sm:block">
        <div>
          <h5 className="text-center text-4xl text-black font-extrabold">
            Trusted Reputation
          </h5>
          <p className="w-11/12 mx-auto text-center text-base font-bold text-gray mb-6">
            Count on us to handle your storage needs professionally and securely
          </p>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonials) => (
            <SwiperSlide
              className="bg-bkgGray mb-16 rounded-lg py-8 px-6"
              key={testimonials.ID}
            >
              <p
                className="text-gray text-center h-60 text-sm font-medium leading-relaxed"
                key={testimonials.ID}
              >
                {testimonials.Comment}
              </p>
              <p className="mt-6 text-black font-bold text-base text-center">
                {testimonials.Name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
