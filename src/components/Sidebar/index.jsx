import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";

import { startPositionMenu, menuItemBehavior, iconVariants } from "./variants";
import {
  SidebarContainer,
  FaTimesIcon,
  CloseIcon,
  SidebarMenu,
  SidebarItem,
} from "./sidebar.elements";

const Sidebar = ({ isOpen, toggleMobileMenu }) => {
  const [isLinks, setLinks] = useState(false);

  return (
    <SidebarContainer
      variants={startPositionMenu}
      initial={false}
      animate={isOpen ? "visible" : "hidden"}
      transition={{ duration: 1.5, times: [0.5, 0.5, 0.5, 0.5, 0.5] }}
      onClick={toggleMobileMenu}
    >
      <CloseIcon
        variants={iconVariants}
        initial={false}
        animate={isOpen ? "rotateIcon" : "norotateIcon"}
        transition={{ duration: 0.8, repeat: 1, ease: "linear" }}
      >
        <AnimateSharedLayout>
          <FaTimesIcon size={40} />
        </AnimateSharedLayout>
      </CloseIcon>
      <SidebarMenu>
        <SidebarItem
          variants={menuItemBehavior}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          transition={{ delay: 0.3, duration: 1.1 }}
          to="main"
        >
          To start
        </SidebarItem>
        <SidebarItem
          variants={menuItemBehavior}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          transition={{ delay: 0.3, duration: 1.2 }}
          to="about"
        >
          About
        </SidebarItem>
        <SidebarItem
          variants={menuItemBehavior}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          transition={{ delay: 0.3, duration: 1.3 }}
          to="resume"
        >
          Resume
        </SidebarItem>
        <SidebarItem
          variants={menuItemBehavior}
          initial={false}
          animate={isOpen ? "show" : "hide"}
          transition={{ delay: 0.3, duration: 1.5 }}
          to="contact"
        >
          Contact
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
