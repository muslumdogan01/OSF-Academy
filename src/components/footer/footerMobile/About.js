import React, { useState } from 'react'
import { Icon } from '../../../Icons/Icon'

const About = () => {
    const [showDetail, setShowDetail] = useState(false);
    const showContact = () => {
      setShowDetail(!showDetail);
    }
  return (
    <div className="relative">
    <div className="inline-flex items-center pt-5" onClick={showContact}>
      <span className="text-[#333333] font-semibold pr-2 ml-4">ABOUT</span>
      <Icon name="down" size={14} />
    </div>
    {showDetail ? (
      <div className="absolute left-0 z-10  w-full bg-white">
         <ul className="text-[#45413e] ml-4">
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
              <a href="ErorPage">About us</a>
            </li>
            <li className="pb-5  hover:text-[#84bc22] hover:underline">
              <a href="ErorPage">
                Delivery
              </a>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
            <a href="ErorPage">
            Testimonials
              </a>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline">
            <a href="ErorPage">
                Drink
              </a>
            </li>
            <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
            Sport
          </li>
          <li className="pb-5 hover:text-[#84bc22] hover:underline cursor-pointer">
            Toys
          </li>
 
          </ul>
      </div>
    ) : null}
  </div>
  )
}

export default About