import React from "react";
import { Button } from "../ButtonElements";

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
} from "./InfoSectionElements";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  title,
  headline,
  description,
  buttonName,
  imgStart,
  img,
  alt,
  darkText,
  primary,
  dark,
  dark2,
  lightTextDescr,
}) => {

  const buttonChange = () => {
    if (buttonName === 'GOOGLE MAPS') {
      return <a href="https://goo.gl/maps/LxMM5s4B5ntoJRdDA" target="_blank" rel="noopener noreferrer">GOOGLE MAPS</a>
    } else if (buttonName === 'ENVIANOS UN MENSAJE') {
      return <a href="https://wa.me/+543854096894"
      target="_blank"
      rel="noopener noreferrer">ENVIANOS UN MENSAJE</a>
    } else {
      return buttonName
    }
  }

  const abc = buttonChange()

  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{title}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrapper>
                <Button
                  to={id === 'about' ? 'services' : 'ubication'}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={45}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonName}
                </Button>
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

export default InfoSection;
