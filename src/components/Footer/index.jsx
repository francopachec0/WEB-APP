import React from "react";
import {
  FooterContainer,
//   FooterLink,
//   FooterLinksContainer,
//   FooterLinksItems,
//   FooterLinksWrapper,
//   FooterLinkTitle,
  FooterWrapper,
  SocialIconLink,
  SocialIconLinkDeveloper,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
  SocialMediaWrapperDeveloper,
  WebSiteRights,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        {/*<FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Sobre Nosotros</FooterLinkTitle>
              <FooterLink
                href="google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </FooterLink>
              <FooterLink
                href="instragram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                instragram
              </FooterLink>
              <FooterLink
                href="facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook
              </FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink
                href="google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </FooterLink>
              <FooterLink
                href="instragram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                instragram
              </FooterLink>
              <FooterLink
                href="facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink
                href="google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </FooterLink>
              <FooterLink
                href="instragram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                instragram
              </FooterLink>
              <FooterLink
                href="facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook
              </FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink
                href="www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </FooterLink>
              <FooterLink
                href="instragram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                instragram
              </FooterLink>
              <FooterLink
                href="https://www.mozilla.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                mozilla
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
  </FooterLinksContainer>*/}
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to='inicio' onClick={toggleHome}>PACHECO Impresiones</SocialLogo>
            <WebSiteRights>
              PACHECO Impresiones © {new Date().getFullYear()} <br />Todos los
              derechos reservados
            </WebSiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/PACHECOImpresiones"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/impre.pacheco/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://wa.me/+543854096894"
                target="_blank"
                aria-label="WhatsApp"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
        <SocialMedia>
          <SocialMediaWrapperDeveloper>
            <WebSiteRights>
              App Desarrollada por Franco Pacheco
            </WebSiteRights>
            <WebSiteRights>
              {"< "}Frontend Developer 🧡{" />"}
            </WebSiteRights>
          </SocialMediaWrapperDeveloper>
          <SocialMediaWrapperDeveloper>
            <WebSiteRights>
            <SocialIconLinkDeveloper
                href="https://www.linkedin.com/in/francopachec0/"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </SocialIconLinkDeveloper>
            </WebSiteRights>
          </SocialMediaWrapperDeveloper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
