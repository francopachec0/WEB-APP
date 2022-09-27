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

const UbicationSection = ({
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
              <TopLine>Ubicación</TopLine>
              <Heading lightText={lightText}>¡Aquí podés encontrarnos!</Heading>
              <Subtitle darkText={darkText}>
                Avenida Aguirre Sur N° 1426 Barrio Primera Junta, Santiago del
                Estero Capital, Argentina.
              </Subtitle>
              <BtnWrapper>
                <ButtonA
                  href="https://goo.gl/maps/LxMM5s4B5ntoJRdDA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GOOGLE MAPS
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

export default UbicationSection;
