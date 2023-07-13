import React from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  width: 10%;
  height: 450px;
  border: 1px solid #eee;
  border-radius: 150px;

  cursor: pointer;
  transition: 0.4s;
  &:hover {
    width: 15%;
    border-radius: 70px;
  }
`;

const WorkItem = () => {
  const navigate = useNavigate();

  return <Container onClick={() => navigate("/work/:id")}>Item1</Container>;
};

export default WorkItem;
