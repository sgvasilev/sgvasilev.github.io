import React, { useState, useEffect } from "react";
import { FaBars, FaDrawPolygon, FaSun } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MenuMobile,
  MenuItem,
  MenuLink,
  NavChangeTheme,
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
            <NavChangeTheme>
              <FaSun size={32} />
            </NavChangeTheme>
          </MenuMobile>
        </NavbarContainer>
      </Navbar>
    </>
  );
};

export default Nav;
