import React from "react";
import { Icon } from "../../Icons/Icon";

const TransportInformation = () => {
  return (
    <div className=" flex-col justify-center md:py-0 py-6 bg-[#45413e] md:flex-row flex">
      <div className="flex flex-col md:flex-row text-sm md:container md:items-center mx-6 md:mx-auto">
        <div className="basis-1/2 flex justify-end md:justify-center">
          <span className="fill-[#84bc22]">
            <Icon name="dolly" size={70} />
          </span>

          <div className="pl-10">
            <h1 className="text-lg  text-white font-semibold md:pb-8 pb-3">FOCUS</h1>
            <h1 className="text-[#868380] text-sm md:w-56 w-36">
              Our unwavering focus on superior service delivery and building
              next generation competencies
            </h1>
          </div>
        </div>
        <div className="basis-1/2 flex justify-start md:justify-center py-20">
          <span className="fill-[#84bc22] md:relative absolute right-14 md:right-0">
            <Icon name="metodology" size={70} />
          </span>

          <div className="pl-10">
            <h1 className="text-lg text-white font-semibold md:pb-8 pb-3">METHOD</h1>
            <h1 className="text-[#868380] text-sm md:w-56 w-36">
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
            <h1 className="text-lg text-white font-semibold md:pb-8 pb-3">KNOWLEDGE</h1>
            <h1 className="text-[#868380] text-sm md:w-56 w-36">
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
