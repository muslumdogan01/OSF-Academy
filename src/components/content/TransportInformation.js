import React from "react";
import { Icon } from "../../Icons/Icon";

const TransportInformation = () => {
  return (
    <div className=" flex-col justify-center py-16 bg-[#45413e] md:flex-row flex">
      <div className="flex flex-col md:flex-row text-[14px] md:container mx-4 md:mx-auto">
        <div className="basis-1/2 flex justify-end md:justify-center">
          <span className="fill-[#84bc22]">
            <Icon name="dolly" size={70} />
          </span>

          <div className="pl-10">
            <h1 className="text-lg text-white font-semibold">FOCUS</h1>
            <h1 className="text-[#868380] text-sm w-56">
              Our unwavering focus on superior service delivery and building
              next generation competencies
            </h1>
          </div>
        </div>
        <div className="basis-1/2 flex justify-start md:justify-center py-20">
          <span className="fill-[#84bc22]">
            <Icon name="metodology" size={70} />
          </span>

          <div className="pl-10">
            <h1 className="text-lg text-white font-semibold">METHOD</h1>
            <h1 className="text-[#868380] text-sm w-56">
              Our unwavering focus on superior service delivery and building
              next generation competencies
            </h1>
          </div>
        </div>
        <div className="basis-1/2 flex justify-end md:justify-center">
          <span className="fill-[#84bc22]">
            <Icon name="dolly" size={70} />
          </span>

          <div className="pl-10">
            <h1 className="text-lg text-white font-semibold">KNOWLEDGE</h1>
            <h1 className="text-[#868380] text-sm w-56">
              Our unwavering focus on superior service delivery and building
              next generation competencies
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportInformation;
