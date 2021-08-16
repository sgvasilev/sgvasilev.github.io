import React from "react";
import { FaBars, FaDrawPolygon } from "react-icons/fa";
import {
  Navbar,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MenuMobile,
  MenuItem,
  MenuLink,
} from "./HeaderElements";

const Nav = () => {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavLogo to="/">
            <FaDrawPolygon size={32} />
          </NavLogo>
          <MobileIcon>
            <FaBars size={32} />
          </MobileIcon>
          <MenuMobile>
            <MenuItem>
              <MenuLink to="about">About me</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="resume">resume</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="contact">Contact</MenuLink>
            </MenuItem>
          </MenuMobile>
        </NavbarContainer>
      </Navbar>
    </>
  );
};

export default Nav;
