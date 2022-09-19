import React from "react";
import {
  LandingContainer,
  LandingBg,
  VideoBg,
  LandingContent,
  LandingH1,
  LandingP,
  LandingBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./LandingElements";
import Video from "../../video/video2.mp4";
import { useState } from "react";
import { Button } from "../ButtonElements";

export const Landing = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <LandingContainer>
      <LandingBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </LandingBg>
      <LandingContent>
        <LandingH1>PACHECO Impresiones</LandingH1>
        <LandingP>¡Conoce lo que te ofrecemos aquí!</LandingP>
        <LandingBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            SERVICIOS {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </LandingBtnWrapper>
      </LandingContent>
    </LandingContainer>
  );
};
