import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import styles from "../../constants/style";
import { navLinks } from "../../constants/navlink";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="w-full bg-[#FFF7F3] h-[60px] fixed z-10 top-0">
      <nav className=" flex max-w-[1140px] w-full h-[60px] justify-between items-center m-auto p-3 bg-[#FFF7F3] fixed top-0 left-0 right-0">
        <img src={Logo} alt="logo" className="w-[150px] md:w-[204px]"></img>
        <section className="flex justify-center items-center gap-1 relative">
         
          <section className="hidden md:flex gap-[22px]">
            {navLinks.map((item, index) => (
              <ul className="hidden md:flex gap-[22px]" key={index}>
                <NavLink to={item.to}>
                  <li className={styles.link}>{item.link}</li>
                </NavLink>
              </ul>
            ))}
          </section>

          <div
            className="flex justify-center items-center pb-1 md:hidden "
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            {showMenu ? (
              <AiOutlineClose style={{ fontSize: "25", color: "black" }} />
            ) : (
              <RxHamburgerMenu style={{ fontSize: "25", color: "black" }} />
            )}
          </div>
        </section>
      </nav>
      <div className={showMenu ? styles.show : styles.hide}>

        <section>
            {navLinks.map((item, index) => (
          <ul className="md:flex gap-[22px] " key={index} >
              <Link to={item.to}>
                <li
                  className={styles.sublink}
                  
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  {item.link}
                </li>
              </Link>
          </ul>
            ))}
        </section>
      </div>
    </section>
  );
};

export default NavBar;
