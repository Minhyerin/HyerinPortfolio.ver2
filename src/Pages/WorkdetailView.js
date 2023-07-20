import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 100%;
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

const WorkdetailView = ({ toggleModal, work }) => {
  return (
    <Container>
      모달창 test
      {work.subtitle}
      <button onClick={(e) => toggleModal(e)}>닫기</button>
    </Container>
  );
};

export default WorkdetailView;
