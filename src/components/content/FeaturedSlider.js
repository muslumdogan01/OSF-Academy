import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const FeaturedSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={4}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log()}
      loop={true}
      a11y={true}
      style={{ width: "100%", height: "100%" }}
    >
      <SwiperSlide>
        <div className="w-72 h-80 border-none bg-white rounded-xl">
          <img
            src="featuredImages/img1.png"
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-72 h-80 border-none bg-white rounded-xl">
          <img
            src="featuredImages/img1.png"
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-72 h-80 border-none bg-white rounded-xl">
          <img
            src="featuredImages/img1.png"
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-72 h-80 border-none bg-white rounded-xl">
          <img
            src="featuredImages/img1.png"
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default FeaturedSlider;
