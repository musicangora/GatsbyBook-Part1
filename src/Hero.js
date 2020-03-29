import React from "react";
import styled from "styled-components";
import { colors } from "./styleHelper";

const Base = styled.div`
  padding: 140px 0 120px;
  background-color: ${colors.black};
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.4;
`;

const Description = styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
`;

const Hero = props => {
  return (
    <Base>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Base>
  );
};

export default Hero;
