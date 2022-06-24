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
      navigation
      loop={true}
      a11y={true}
      style={{ width: "1200px" }}
    >
      <SwiperSlide>
        <div className="group relative bg-white rounded-t-md">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-md  overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="featuredImages/img1.png" alt="" />
          </div>
          <div className="py-5 flex justify-center items-center">
            <div className="flex flex-col">
              <h3 className="text-[#45413e] text-center px-5">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-[#45413e] text-base "
                />
                Kristina Dam Oak Table With White Marble
              </h3>
              <p className=" text-sm text-[#84bc22] text-center pt-4">
                Awesome
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="group relative bg-white rounded-t-md">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
            <img src="featuredImages/img2.png" alt="" />
          </div>
          <div className="py-5 flex justify-center items-center">
            <div className="flex flex-col">
              <h3 className="text-[#45413e] text-center px-5">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-[#45413e] text-base "
                />
                Kristina Dam Oak Table With White Marble
              </h3>
              <p className=" text-sm text-[#84bc22] text-center pt-4">
                Marketing
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="group relative bg-white rounded-t-md">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
            <img src="featuredImages/img3.png" alt="" />
          </div>
          <div className="py-5 flex justify-center items-center">
            <div className="flex flex-col">
              <h3 className="text-[#45413e] text-center px-5">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-[#45413e] text-base "
                />
                Kristina Dam Oak Table With White Marble
              </h3>
              <p className=" text-sm text-[#84bc22] text-center pt-4">
                Awesome
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="group relative bg-white rounded-md">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="featuredImages/img4.png" alt="" />
          </div>
          <div className="py-5 flex justify-center items-center">
            <div className="flex flex-col">
              <h3 className="text-[#45413e] text-center px-5">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-[#45413e] text-base "
                />
                Kristina Dam Oak Table With White Marble
              </h3>
              <p className=" text-sm text-[#84bc22] text-center pt-4">
                Marketing
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default FeaturedSlider;
