import React from "react";
import WorkItem from "./WorkItem";

const List = () => {
  return (
    <ul>
      <WorkItem title="すごいサービス" category="2019 - フロントエンド" />
      <WorkItem title="すごいデザイン" category="2018 - デザイン" />
      <WorkItem title="すごいプロダクト" category="2020 - デザイン" />
    </ul>
  );
};

export default List;
