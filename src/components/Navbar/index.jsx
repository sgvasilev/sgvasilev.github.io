import React, { useEffect, useState } from 'react'
import { FaBars, FaSun, FaDrawPolygon } from 'react-icons/fa'
import {
  Navbar,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MenuMobile,
  MenuItem,
  MenuLink,
  NavChangeTheme,
} from './HeaderElements'

const Nav = ({ toggleTheme, toggleMobileMenu }) => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset
    if (position > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  return (
    <>
      <Navbar className={`${scroll ? 'scroll' : ''}`}>
        <NavbarContainer>
          <NavLogo to='main' smooth={true} offset={-120}>
            <FaDrawPolygon size={40} />
          </NavLogo>
          <MobileIcon>
            <FaBars onClick={toggleMobileMenu} size={32} />
          </MobileIcon>

          <MenuMobile>
            <MenuItem>
              <MenuLink to='main' smooth={true} offset={-100}>
                О себе
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='skills' smooth={true}>
                Навыки
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to='contact' smooth={true} duration={1000}>
                Контакты
              </MenuLink>
            </MenuItem>
            <NavChangeTheme onClick={toggleTheme}>
              <FaSun size={40} style={{ fill: '', background: 'inherit' }} />
            </NavChangeTheme>
          </MenuMobile>
        </NavbarContainer>
      </Navbar>
    </>
  )
}

export default Nav
