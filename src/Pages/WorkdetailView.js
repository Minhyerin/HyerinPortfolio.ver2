import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 100%;
  padding: 30px 50px;
  border: 1px solid #333;
  background-color: #eee;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding: 10px;
  h1 {
    margin: 0;
  }
`;

const WorkdetailView = ({ toggleModal, work }) => {
  return (
    <Container>
      <Title>
        <h1>{work.title}</h1>
        <button onClick={(e) => toggleModal(e)}>닫기</button>
      </Title>
    </Container>
  );
};

export default WorkdetailView;
