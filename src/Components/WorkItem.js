import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 10%;
  height: 50%;
  border: 1px solid #eee;
  border-radius: 150px;

  cursor: pointer;
`;

const WorkItem = () => {
  return <Container>Item1</Container>;
};

export default WorkItem;
