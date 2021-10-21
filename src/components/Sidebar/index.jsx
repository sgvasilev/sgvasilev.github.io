import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'

import { startPositionMenu, menuItemBehavior, iconVariants } from './variants'
import {
  SidebarContainer,
  FaTimesIcon,
  CloseIcon,
  SidebarMenu,
  SidebarItem,
  SideBarWrapper,
} from './sidebar.elements'

const Sidebar = ({ isOpen, toggleMobileMenu }) => {
  return (
    <SidebarContainer
      variants={startPositionMenu}
      initial={false}
      animate={isOpen ? 'visible' : 'hidden'}
      transition={{ duration: 1.5, times: [0.5, 0.5, 0.5, 0.5, 0.5] }}
    >
      <CloseIcon
        variants={iconVariants}
        initial={false}
        animate={isOpen ? 'rotateIcon' : 'norotateIcon'}
        transition={{ duration: 0.8, repeat: 1, ease: 'linear' }}
        onClick={toggleMobileMenu}
      >
        <AnimateSharedLayout>
          <FaTimesIcon size={40} />
        </AnimateSharedLayout>
      </CloseIcon>
      <SidebarMenu>
        <SideBarWrapper to='main' smooth={true} delay={1000} offset={-120}>
          <SidebarItem
            variants={menuItemBehavior}
            initial={false}
            animate={isOpen ? 'show' : 'hide'}
            transition={{ delay: 0.3, duration: 1.1 }}
            to='main'
            smooth={true}
            spy={true}
            onClick={toggleMobileMenu}
          >
            Main page
          </SidebarItem>
        </SideBarWrapper>

        <SideBarWrapper to='skills' smooth={true} delay={1000} offset={-120}>
          <SidebarItem
            variants={menuItemBehavior}
            initial={false}
            animate={isOpen ? 'show' : 'hide'}
            transition={{ delay: 0.3, duration: 1.3 }}
            to='resume'
            onClick={toggleMobileMenu}
          >
            Skills
          </SidebarItem>
        </SideBarWrapper>
        <SideBarWrapper to='works' smooth={true} delay={1000} offset={-120}>
          <SidebarItem
            variants={menuItemBehavior}
            initial={false}
            animate={isOpen ? 'show' : 'hide'}
            transition={{ delay: 0.3, duration: 1.3 }}
            to='resume'
            onClick={toggleMobileMenu}
          >
            Works
          </SidebarItem>
        </SideBarWrapper>
        <SideBarWrapper to='contact' smooth={true} delay={1000}>
          <SidebarItem
            variants={menuItemBehavior}
            initial={false}
            animate={isOpen ? 'show' : 'hide'}
            transition={{ delay: 0.3, duration: 1.5 }}
            onClick={toggleMobileMenu}
          >
            Contacts
          </SidebarItem>
        </SideBarWrapper>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar
