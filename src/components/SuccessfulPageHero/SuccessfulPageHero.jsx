import React from "react";
import Logo from "../../assets/h2h-logo.svg";
import Title from "../../assets/h2h-lm (1).svg";
import { useNavigate } from "react-router-dom";

const SuccessfulPageHero = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <section className="  flex flex-col gap-4 justify-center items-center">
      <img className=" w-[40px] md:w-[60px]" src={Logo} alt="logo"></img>
      <img className=" w-[180px] md:w-[230px]" src={Title} alt="logo"></img>

      <div className="flex flex-col items-center mt-[84px]">
        <h1 className=" font-Roboto text-[25px] md:text-[31px] font-bold text-[#fa7419] tracking-tight">
          Thank you for reaching out!
        </h1>
        <h1 className=" mt-[24px] font-Roboto text-[11px] md:text-[18px] font-normal  text-[#ffffff tracking-tight">
          We received your message and we'll get back to you as soon as we can!
        </h1>
        <button
          className=" flex w-full md:w-[240px] h-[52px] justify-center items-center bg-[#f02f1b] mt-[46px] rounded "
          onClick={backToHome}
        >
          <h1 className=" font-Roboto text-[16px] tracking-normal text-white">
            Go back to home page
          </h1>
        </button>
      </div>
    </section>
  );
};

export default SuccessfulPageHero;
