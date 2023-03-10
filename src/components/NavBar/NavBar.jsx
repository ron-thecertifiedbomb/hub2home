import React from "react";
import Logo from "../../assets/logo.svg";
import styles from "../../constants/style";
import { navLinks } from "../../constants/navlink";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <section className="w-full bg-[#FFF7F3] h-[56px] fixed z-10">
      <nav className=" flex  max-w-[1140px] w-full h-[47px] justify-between items-center m-auto p-3 bg-[#FFF7F3] mt-2 fixed top-0 left-0 right-0">
        <img src={Logo} alt="logo" className="w-[150px] md:w-[204px]"></img>

        <ul className="hidden md:flex gap-[22px] ">
        {navLinks.map((item, index) => (
          <NavLink to={item.to}><li className={styles.link} key={index}>{item.link}</li></NavLink>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
