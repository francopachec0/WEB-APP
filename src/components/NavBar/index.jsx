import React from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLogoMobile,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            PACHECO <span>Impresiones</span>
          </NavLogo>
          <NavLogoMobile to="/">
            P <span>Impresiones</span>
          </NavLogoMobile>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={45}
              >
                Sobre Nosotros
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={45}
              >
                Servicios
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="ubication"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={45}
              >
                Ubicación
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={45}
            >
              ¡Contactanos!
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
