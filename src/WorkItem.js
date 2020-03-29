import React from "react";
import styled from "styled-components";
import { colors } from "./styleHelper";

const Base = styled.li`
  margin: 16px 0;
`;

// バックスラッシュの文字列中では${}で囲った部分はJSとして評価される
const Category = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.5px;
  margin: 6px 0 2px;
  color: ${colors.green};
`;

const Title = styled.p`
  font-weight: 600;
`;

const WorkItem = props => {
  return (
    <Base>
      <img
        className="workItem-image"
        src="https://dummyimage.com/600x300/eee/ccc"
        alt="{props.title}"
      />
      <Category>{props.category}</Category>
      <Title>{props.title}</Title>
    </Base>
  );
};

export default WorkItem;
