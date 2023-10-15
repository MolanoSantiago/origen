import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = ({id}) => {
  const [hover, setHover] = useState(true);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Marketing Digital</HeroTitle>
        <HeroP>
          Haz crecer la cantidad de clientes potenciales y transforma tu marca en algo trascendental
        </HeroP>
        <HeroBtnWrapper>
          <Button to="/Servicio" onMouseEnter={onHover} onMouseLeave={onHover} primary={false} dark>
            Cómo empezar {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
