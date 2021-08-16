import React from "react";
import { FaBars, FaSun, FaDrawPolygon } from "react-icons/fa";
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

const Nav = ({ toggleTheme }) => {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavLogo to="/">
            <FaDrawPolygon size={40} />
          </NavLogo>
          <MobileIcon>
            <FaBars size={32} />
          </MobileIcon>
          <MenuMobile>
            <MenuItem>
              <MenuLink to="about">About me</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="resume">Resume</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="contact">Contact</MenuLink>
            </MenuItem>
            <NavChangeTheme onClick={toggleTheme}>
              <FaSun size={40} style={{ fill: "", background: "inherit" }} />
            </NavChangeTheme>
          </MenuMobile>
        </NavbarContainer>
      </Navbar>
    </>
  );
};

export default Nav;
