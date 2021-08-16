import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const Navbar = styled.nav`
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 1s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 25px;
  max-width: 1070px;
`;

export const NavLogo = styled(LinkRouter)`
  color: inherit;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
  align-items: center;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const MenuMobile = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  height: 80px;
  padding-right: 20px;

  &:last-child {
    padding-right: 0;
  }
`;

export const MenuLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-size: 1.25rem;

  &.active {
    border-bottom: 3px solid #232323;
  }
`;

export const NavChangeTheme = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
`;
