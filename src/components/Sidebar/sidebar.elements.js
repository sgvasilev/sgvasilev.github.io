import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
//import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled(motion.aside)`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 100;
  height: 100%;
  background: #1f2833; //#66fcf1
  display: flex;
  top: -100%;
  flex-direction: row-reverse;

  word-wrap: break-word;
`;

export const FaTimesIcon = styled(FaTimes)`
  color: #fff;
  cursor: pointer;
`;

export const CloseIcon = styled(motion.div)`
  position: absolute;
  display: flex;
  //padding: 20px 25px 0 0;
  margin: 20px 20px 0 auto;
  background: transparent;
`;

export const SidebarItem = styled(motion.LinkScroll)`
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
  font-size: 2.5rem;
  color: #66fcf1;

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }

  &:hover {
    color: #66fcf1;
    transition: 0.25s ease-in-out;
    border-left: 2px solid #66fcf1;
    border-left-width: 3px;
    padding-left: 30px;
  }
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
