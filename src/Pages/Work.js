import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import WorkItem from "../Components/WorkItem";

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
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
    </Container>
  );
};

export default Work;
