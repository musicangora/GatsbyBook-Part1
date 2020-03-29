import React from "react";
import List from "./List";

import styled from "styled-components";
import { colors } from "./styleHelper";

const Section = styled.section`
  max-width: 630px;
  padding: 0 15px;
  margin: 32px auto;
`;

const Title = styled.h2`
  color: ${colors.gray};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const About = styled.p`
  font-size: 14px;
  line-height: 1.8;
`;

const Home = () => {
  return (
    <div>
      <Section id="about">
        <Title>私について</Title>
        <About>React, Gatsby, Nextあたりを中心に勉強しています。</About>
        <About>UI/UXの開発に興味があります。</About>
      </Section>

      <Section id="works">
        <Title>制作物</Title>
        <List />
      </Section>
    </div>
  );
};

export default Home;
