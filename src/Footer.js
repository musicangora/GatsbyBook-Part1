import React from "react";
import styled from "styled-components";
import { colors } from "./styleHelper";

const Base = styled.footer`
  font-size: 12px;
  text-align: center;
  padding: 16px 0;
  background-color: ${colors.black};
  color: white;
`;

const Footer = props => {
  return (
    <Base>Copyright &copy; {props.name}. All right All Rights Reserved.</Base>
  );
};

export default Footer;
