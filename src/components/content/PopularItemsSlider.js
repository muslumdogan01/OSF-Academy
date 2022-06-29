import React from "react";
import { HomeContext, useContext } from "../../context/Context";
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
import { Icon } from "../../Icons/Icon";


const Slider = () => {
  const {addMobileFavorite, setAddMobileFavorite}= useContext(HomeContext)
  const { isOpen, setIsOpen } = useContext(HomeContext);

  const incrementFavorite = ()=>{
    setAddMobileFavorite(addMobileFavorite + 1)
  }

  return (
    <div className="flex flex-col md:hidden w-full  bg-[#262a32] mt-5 py-7 px-4 ">
      <div className="relative flex flex-col justify-center items-center ">
        <div class="flex flex-col items-center justify-center">
          <div className="flex flex-row w-full items-center">
            <div class="basis-1/4 flex justify-center flex-col">
              <div className="border-[#3c4047] border border-b-1"></div>
            </div>
            <div class="basis-1/2 flex justify-center items-center">
              <h1 className="text-center text-white md:text-2xl text-2xl font-bold pb-5">
                Popular Items
              </h1>
            </div>
            <div class="basis-1/4 flex justify-center flex-col ">
              <div className="border-[#3c4047] border border-b-1"></div>
            </div>
          </div>
          <div className="relative ">
            { !isOpen ?   <div className="absolute rounded-t-xl group z-10 hover:bg-[#34c97c] opacity-90 top-0 left-0 w-full h-full  flex justify-center items-center">
          <Link to="Product">
          <span className="bg-white mr-4  hover:bg-[#e6e6e6] h-20 w-20 rounded-full flex justify-center items-center">
                <Icon name="plus" size={30} />
              </span>
          </Link>
              <span
               onClick={()=>{incrementFavorite()}}
              className="bg-white hover:bg-[#e6e6e6] fill-[#e73c68] h-20 w-20 rounded-full flex justify-center items-center">
              <Icon name="heart" size={30} />
              </span>
            </div>: <div className="hidden"></div>}
          
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
                <Link to="Product">
                  <img
                    src="popularItems/img1.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="Product">
                  <img
                    src="popularItems/img2.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="Product">
                  <img
                    src="popularItems/img3.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="Product">
                  <img
                    src="popularItems/img4.png"
                    style={{ width: "100%" }}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="bg-white px-8 text-center py-5 rounded-b-xl w-[22.488rem] h-[#22.488rem]">
          <p className="text-[#45413e] text-base">
            Kristina Dam Oak Table With White Marble Top
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
