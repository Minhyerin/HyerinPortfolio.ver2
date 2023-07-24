import React from "react";
import { styled } from "styled-components";
import { GrClose } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { PiFigmaLogo } from "react-icons/pi";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 70%;
  padding: 30px 50px;
  background-color: #eee;

  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .closeBtn {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 22px;
  }
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
    font-size: 24px;
    display: flex;
    align-items: center;
    .linkBtn {
      cursor: pointer;
      font-size: 20px;
      margin-top: 3px;
      margin-left: 10px;
    }
  }
  span {
    font-size: 18px;
    display: flex;
    align-items: center;
    .figmaicon {
      margin-top: 3px;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  .box {
    width: 100%;
    height: 500px;
  }
`;

const WorkdetailView = ({ toggleModal, work }) => {
  const containerVariant = {
    start: {
      scale: 0,
      opacity: 0,
    },
    end: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <Container variants={containerVariant} initial="start" animate="end">
      <GrClose className="closeBtn" onClick={(e) => toggleModal(e)} />
      <Title>
        <h1>
          {work.title}
          <FiExternalLink className="linkBtn" />
        </h1>
        <span>
          Figma
          <PiFigmaLogo className="figmaicon" />
        </span>
      </Title>
      <ContentWrapper>
        <div>산후조리원 산모들을 위한 웹 / 모바일 사이트</div>
        <Carousel>
          <Paper>
            <div className="box">1</div>
          </Paper>
          <Paper>
            <div className="box">2</div>
          </Paper>
        </Carousel>
      </ContentWrapper>
    </Container>
  );
};

export default WorkdetailView;
