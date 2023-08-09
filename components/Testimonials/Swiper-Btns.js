import { useSwiper } from "swiper/react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
export default function SwiperBtns() {
  const swiper = useSwiper();
  return (
    <div>
      <div className="w-60 h-16 mx-auto antialiased">
        <div className="absolute top-0 left-0 z-20">
          <button onClick={() => swiper.slidePrev()}>
            <ArrowLeftCircleIcon className="h-8 w-8 text-blue" />
          </button>
          <button onClick={() => swiper.slideNext()}>
            <ArrowRightCircleIcon className="h-8 w-8 text-blue" />
          </button>
        </div>
      </div>
    </div>
  );
}
