import React, { useState } from "react";

const ColorButton = () => {
  const [color, setColor] = useState("#45413e");
  const colorOne = () => {
    setColor("colorOne");
  };
  return (
    <div className="relative">
      <div className={`absolute top-[10px] left-4 h-5 w-5  rounded-full ${color} `}></div>
      <select className="border-2 border-[#e8e2d6] bg-white py-1 mt-11 px-12 flex w-48 h-10 rounded-full">
        <option onClick={colorOne}>Dark Gray</option>
        <option>Red</option>
        <option>Yellow</option>
      </select>
    </div>
  );
};

export default ColorButton;
