import React from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  width: 10%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  filter: brightness(0.4);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    width: 25%;
    filter: brightness(1);
  }
`;

const WorkItem = ({work}) => {
  const navigate = useNavigate();

  return (
  <Container onClick={() => navigate(`/work/${work.id}`)}>
    <img src={work.src} />
  </Container>
  )
};

export default WorkItem;
