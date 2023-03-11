import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
 import {footerLinks} from "./contstants";
 import { Link } from "react-router-dom";

const footer = () => {
  return (
    <main className="w-[full] min-h-[382px] bg-[#f02f1b] pt-[40px] md:pt-[80px]">
      <section className="max-w-[1140px] w-full m-auto ">
        <section className="flex-col border-b sm:justify-start pb-[20px] md:flex md:flex-row md:justify-between md: items-start md:pb-[27px]">
          <section>
            <h1 className=" font-Roboto p-2 mb-[5px] md:text-[21px] md:p-0 text-[#ffffff] font-medium tracking-normal md:mb-[14px]">
              ESHOP2DROP CORPORATION
            </h1>
            <p className=" font-Roboto text-[12px] p-2 text-[#ffffff] font-medium leading-4 md:pl-0 tracking-normal md:text-left md:text-[16px]">
              SMB Prestige Bldg
            </p>
            <p className=" font-Roboto text-[12px] p-2 text-[#ffffff] font-medium leading-4 md:pl-0 tracking-normal  md:text-left md:text-[16px]">
              40 San Buenaventura St.,
            </p>
            <p className=" font-Roboto text-[12px] p-2 text-[#ffffff] font-medium leading-4 md:pl-0 tracking-normal  md:text-left md:text-[16px]">
              Bagong Ilog, Pasig City, Metro Manila Philippines
            </p>
            <p className=" font-Roboto text-[12px] p-2 text-[#ffffff] font-medium leading-4 md:pl-0 tracking-normal  md:text-left md:text-[16px] ">
              hub2home.com.ph
            </p>
          </section>

          <section>


            <section className=" hidden md:flex gap-6 items-center mb-[41px]" >
              {footerLinks.map((item, index) => (
            <ul className=" hidden md:flex gap-6 items-center mb-[41px]" key={index}>
                
               <Link to={item.to}> <li className="font-Roboto text-[18px] text-[#ffffff] font-medium tracking-normal cursor-pointer"
                  > {item.link}
                </li>
                </Link>
            </ul>
              ))}

            </section>

            <p className=" font-Roboto leading-3 text-[14px] p-2 text-[#ffffff] md:text-[18px] font-medium tracking-normal md:text-right">
            For immediate concerns, email us at
            </p>
            <p className=" font-Roboto leading-3 text-[14px] p-2 text-[#ffffff] md:text-[18px] font-medium tracking-normal  md:text-right">
              customerservice@hub2home.com.ph
            </p>
          </section>
        </section>
        <section className="flex pr-3 justify-between mt-[22.5px] md:pr-0">
          <p className=" font-Roboto text-[12px] p-2 text-[#ffffff] font-medium leading-4 md:pl-0 tracking-normal  md:text-left md:text-[16px]">
            2023 - Hub2home all rights reserved.
          </p>
          <div className="flex w-[30.8px] h-[30.8px] bg-white rounded-full justify-center items-center">
            <FaLinkedinIn style={{ fontSize: "18", color: "#f02f1b" }} />
          </div>
        </section>
      </section>
    </main>
  );
};

export default footer;
