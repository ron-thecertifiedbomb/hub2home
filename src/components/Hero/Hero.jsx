import React from "react";

const Hero = ({title}) => {
    
  return (
    <div className="w-full h-[516px] bg-[#FFF7F3] pt-[56px]">
      <div className="flex bg-[#FFF7F3] max-w-[1140px] w-full h-[100%] justify-center items-center m-auto">
        <h1 className="font-Roboto text-[#f02f1b] text-[30px] md:text-[60px] font-bold tracking-normal  ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
