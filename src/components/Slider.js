import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      a11y={true}

    >
      <SwiperSlide>
        <img src="/slider1.png" style={{ width: "100%" , height:"100%" }} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/slider2.png" style={{ width: "100%" , height:"100%"  }} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/slider3.png" style={{ width: "100%" , height:"100%"  }} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/slider2.png" style={{ width: "100%", height:"100%"  }} alt="" />
      </SwiperSlide>
      <div className="absolute text-white left-0 top-0 z-10 w-full">
        <div className="md:px-16 md:py-20 px-4 py-2">
          <h1 className="md:text-[28px] text-[14px]">
            Control and manage any device <br /> with cloud solutions
          </h1>
          <p className="md:pt-24 md:pb-12 pb-3 pt-3 md:text-[14px] text-[12px]">
            Improve business performance and the user experience with <br /> the
            right mix of IoT technology and processes
          </p>
          <button class=" rounded-xl text-sm px-2 text-[12px]  transition ease-in-out delay-150 bg-transparent border md:rounded-2xl md:px-7 md:py-1 hover:-translate-y-1 hover:scale-110  duration-300 ...">
            VIEW MORE
          </button>
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
