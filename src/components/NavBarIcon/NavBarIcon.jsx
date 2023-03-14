import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "../../constants/navlink";
import { NavLink } from "react-router-dom";

const NavBarIcon = () => {
  return (
    <Menu className=" bg-[#FFF7F3]">
      <MenuHandler className="bg-transparent shadow-none hover:shadow-none w-[1px]">
        <Button>
          <RxHamburgerMenu style={{ fontSize: "25", color: "black" }} />
        </Button>
      </MenuHandler>
      <MenuList className=" bg-[#FFF7F3]">
        {navLinks.map((item, index) => (
          <div key={index}>
            <NavLink to={item.to}>
              <MenuItem>{item.link}</MenuItem>
            </NavLink>
          </div>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavBarIcon;
