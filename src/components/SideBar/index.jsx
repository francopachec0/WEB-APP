import React from "react";
import { CloseIcon, Icon, SideBarBtnWrapper, SideBarContainer, SideBarLink, SideBarMenu, SideBarRoute, SideBarWrapper } from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon toggle={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>Sobre Nosotros</SideBarLink>
          <SideBarLink to="services" onClick={toggle}>Servicios</SideBarLink>
          <SideBarLink to="ubication" onClick={toggle}>Ubicación</SideBarLink>
        </SideBarMenu>
        <SideBarBtnWrapper>
          <SideBarRoute to="/contact" onClick={toggle}>¡Contactanos!</SideBarRoute>
        </SideBarBtnWrapper>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
