import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Home from "./Home";

import "minireset.css";
import styled from "styled-components";
import "./styles.css";
import { colors } from "./styleHelper";

const Base = styled.div`
  font-family: sans-serif;
  color: ${colors.black};
`;

const App = () => {
  return (
    <Base>
      <Header />
      <Hero title="miiya" description="フロントエンドエンジニア, 大学生" />
      <Home />
      <Footer name="miiya" />
    </Base>
  );
};

export default App;
