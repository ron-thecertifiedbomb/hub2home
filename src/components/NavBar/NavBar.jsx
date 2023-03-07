import React from "react";
import Logo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <section className="w-full bg-[#FFF7F3] h-[56px] fixed">
      <nav className=" flex  max-w-[1140px] w-full h-[47px] justify-between items-center m-auto p-3 bg-[#FFF7F3] mt-2 fixed top-0 left-0 right-0">
        <img src={Logo} alt="" width={204}></img>

        <ul className="flex gap-[22px]">
          <li className="font-Roboto  font-semibold text-[18px] text-[#00000] ">
            Home
          </li>

          <li className="font-Roboto font-semibold text-[18px] text-[#00000]">
            Privacy and Policy
          </li>
          <li className="font-Roboto font-semibold text-[18px] text-[#00000]">
            FAQs
          </li>
          <li className="font-Roboto font-semibold text-[18px] text-[#00000]">
            Terms and Condition
          </li>
        </ul>
      </nav>
      
    </section>
  );
};

export default NavBar;
