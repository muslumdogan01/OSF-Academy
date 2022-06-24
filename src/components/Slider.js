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
      style={{ width:'870px', height:'504px', borderRadius:'8px' }}
    >
      <SwiperSlide>
        <img src="deneme.png" style={{ width: "100%" }} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="deneme.png" style={{ width: "100%" }} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="deneme.png" style={{ width: "100%" }} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="deneme.png" style={{ width: "100%" }} alt="" />
      </SwiperSlide>
      <div className="absolute text-white left-0 top-0 z-10 w-full">
        <div className="md:px-16 md:py-20 px-4 py-2 flex flex-col justify-center items-center md:items-start">
          <h1 className="md:text-[28px] text-[28px] font-semibold md:px-0 px-4 md:w-[25rem]">
            Control and manage any device with cloud solutions
          </h1>
          <p className="md:pt-12 md:pb-12 pb-8 pt-4 px-4 md:text-[14px] md:px-0 text-[14px] md:w-[25rem]">
            Improve business performance and the user experience with the right
            mix of IoT technology and processes doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>

          <button class="rounded-xl text-md px-4 text-center transition ease-in-out delay-150 bg-transparent border md:rounded-2xl md:px-7 md:py-1 hover:-translate-y-1 hover:scale-110  duration-300 ...">
            <Link to="/Services">VIEW MORE </Link>
          </button>
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
