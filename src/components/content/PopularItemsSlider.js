import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Slider = () => {
  return (
<div className="flex flex-col md:hidden w-full px-4 bg-[#262a32] mt-5 pt-5 relative">
<div class="flex flex-row px-1 items-center justify-center pb-10">
          <div class="basis-1/2 flex flex-col justify-center">
            <div className="border-[#3c4047] border border-b-1"></div>
          </div>
          <div class="basis-full">
            <h1 className="text-center text-white md:text-2xl text-2xl font-bold">
              Popular Items
            </h1>
          </div>
          <div class="basis-1/2 flex flex-col justify-center">
            <div className="border-[#3c4047] border border-b-1"></div>
          </div>
        </div>
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log()} 
      loop={true}
      a11y={true}
      
    >
      <SwiperSlide>
        <img src="popularItems/img1.png" style={{ width: "100%" }} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="popularItems/img2.png" style={{ width: "100%" }} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="popularItems/img3.png" style={{ width: "100%" }} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="popularItems/img4.png" style={{ width: "100%" }} alt="" />
      </SwiperSlide>
    </Swiper>
    <div className="absolute bottom-0 left-0 z-20 bg-white px-11 text-center py-5 rounded-b-xl">
        <p className="text-[#45413e] text-base">Kristina Dam Oak Table With White Marble Top</p>
    </div>
</div>
  );
};

export default Slider;
