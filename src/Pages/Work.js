import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import WorkItem from "../Components/WorkItem";
import hugmom from "../imgs/mobile.png";
import { WorkData } from "../data/workdata";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Item = styled.div`
  cursor: pointer;
`;

const Work = () => {
  return (
    <Container>
      {WorkData.map((work, index) => (
        <WorkItem key={index} work={work} index={index} />
      ))}
    </Container>
  );
};

export default Work;
