import React, { useState } from "react";
import { Icon } from "../../../Icons/Icon";

const Contact = () => {
  const [showDetail, setShowDetail] = useState(false);
  const showContact = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className="relative">
        <div className="inline-flex items-center pt-5" onClick={showContact}> 
        <span className="text-[#333333] font-semibold pr-2 ml-4">CONTACT</span>
        <Icon name="down" size={14}/>
        </div>
        {showDetail? <div className="absolute left-0 z-10 rounded-md w-full bg-white">
        <div className="ml-4">
        <p>Headquarters:</p>
            <span>
              5600,Blcd. des Galeries, Bur 530 <br /> Quenbec, Quenbec G2K 2H6
            </span>
            <p className="pt-5 pb-6 hover:text-[#84bc22] hover:underline">
            contact@osf-global.com
            </p>
            <p>+1 (888) 548-4344</p>
        </div>
        </div> : null}
    </div>
  );
};

export default Contact;
