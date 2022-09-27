import React from "react";
import {
  CloseIcon,
  Icon,
  SideBarBtnWrapper,
  SideBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBarWrapper,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon toggle={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={30}
            onClick={toggle}
          >
            Sobre Nosotros
          </SideBarLink>
          <SideBarLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={30}
            onClick={toggle}
          >
            Servicios
          </SideBarLink>
          <SideBarLink
            to="ubication"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={30}
            onClick={toggle}
          >
            Ubicación
          </SideBarLink>
        </SideBarMenu>
        <SideBarBtnWrapper>
          <SideBarRoute
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={50}
            onClick={toggle}
          >
            ¡Contactanos!
          </SideBarRoute>
        </SideBarBtnWrapper>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
