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
  NavLogoMobile
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">PACHECO Impresiones</NavLogo>
          <NavLogoMobile to='/'>P Impresiones</NavLogoMobile>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Sobre Nosotros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Servicios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ubication">Ubicación</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='contact'>
              ¡Contactanos!
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
