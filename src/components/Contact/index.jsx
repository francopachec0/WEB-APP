import React from "react";
import { ButtonA } from "../ButtonAElements";

import {
  BtnWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrapper,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "../InfoSection/InfoSectionElements";

const ContactSection = ({
  id,
  lightBg,
  lightText,
  imgStart,
  img,
  alt,
  darkText,
  primary,
  dark,
  dark2,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>Contacto</TopLine>
              <Heading lightText={lightText}>¿Tenés alguna pregunta?</Heading>
              <Subtitle darkText={darkText}>
                Al +54 3854096894 o sí no tambien a nuestro teléfono secundario
                +54 3856254495
              </Subtitle>
              <BtnWrapper>
                <ButtonA
                  href="https://wa.me/+543854096894"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ENVIANOS UN MENSAJE
                </ButtonA>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default ContactSection;
