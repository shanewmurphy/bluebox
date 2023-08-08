import { useSwiper } from "swiper/react";
import { ArrowLeftCircle } from "@heroicons/react/24/outline";
import { ArrowRightCircle } from "@heroicons/react/24/outline";

export default function SwiperBtns() {
  const swiper = useSwiper();
  return (
    <div>
      <div className="w-60 h-16 mx-auto antialiased">
        <div className="absolute left-0 bottom-0 z-20">
          <button onClick={() => swiper.slidePrev()}>
            <ArrowLeftCircle className="h-8 w-8 text-blue" />
          </button>
          <button onClick={() => swiper.slideNext()}>
            <ArrowRightCircle className="h-8 w-8 text-blue" />
          </button>
        </div>
      </div>
    </div>
  );
}
