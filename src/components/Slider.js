import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = () => {
  const images = [
    { url: "/slider-1.png" },
    { url: "/slider-1.png" },
    { url: "/slider-1.png" },
    { url: "/slider-1.png" },
    { url: "/slider-1.png" },
  ];

  return (
    <div className="mx-5 rounded-2xl mt-5">
      <SimpleImageSlider
      style={{   borderRadius: '500px',  }}
        width={1172}
        height={507}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
