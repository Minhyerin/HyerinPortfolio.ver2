import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import { GrClose } from "react-icons/gr";
import { FiExternalLink } from "react-icons/fi";
import { PiFigmaLogo } from "react-icons/pi";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 30px 50px;
  background-color: #eee;

  position: absolute;
  top: 0;
  left: 0;

  .closeBtn {
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    font-size: 22px;
  }
`;
const InnerWrapper = styled.div`
  width: 100%;
  border: 1px solid blue;
  position: relative;


`

const Title = styled.div`
  width: 100%;
  border: 1px solid tomato;
  height: 50px;

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
  a {
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
  margin-top: 50px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  div {
    height: 500px;
  }
  img {
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
      <InnerWrapper>

      <GrClose className="closeBtn" onClick={(e) => toggleModal(e)} />
      <Title>
        <h1>
          {work.title}
          <Link>
            <FiExternalLink className="linkBtn" />
          </Link>
        </h1>
        <Link>
          Figma
          <PiFigmaLogo className="figmaicon" />
        </Link>
      </Title>
      <ContentWrapper>
        <div>{work.subtitle}</div>
        <img />
        <img />
        <img />
      </ContentWrapper>
      </InnerWrapper>
    </Container>
  );
};

export default WorkdetailView;
