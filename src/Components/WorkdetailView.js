import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { motion, AnimatePresence, sync } from "framer-motion";

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
    right: 30px;
    font-size: 22px;
  }
`;
const InnerWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Title = styled.div`
  width: 100%;
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
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  span {
    display: block;
    font-size: 18px;
    margin-left: 10px;
    line-height: 1.5;
  }
`;
const Content = styled.div`
  margin-top: 20px;
  img {
    width: 1000px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;
const VideoBox = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #fff;
  video {
    width: 100%;
  }
`;
const InfoBox = styled.div`
  margin-top: 20px;
  h3 {
    margin: 0;
  }
  span {
    font-size: 16px;
    line-height: 1.8;
    word-break: keep-all;
    border-bottom: 1px solid #ddd;
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
            <Link target="blank" to={work.link}>
              <FiExternalLink className="linkBtn" />
            </Link>
          </h1>
          {work.figma.length > 0 ? (
            <Link to={work.figma} target="_blank">
              Figma
              <PiFigmaLogo className="figmaicon" />
            </Link>
          ) : (
            ""
          )}
        </Title>
        <ContentWrapper>
          {work.desc.map((it) => (
            <span>{it}</span>
          ))}
          <Content>
            <img src={work.imgs[0]} />
            <VideoBox>
              <video src={work.imgs[1]} autoPlay loop />
            </VideoBox>
            <InfoBox>
              <span>{work.detail}</span>
            </InfoBox>
          </Content>
        </ContentWrapper>
      </InnerWrapper>
    </Container>
  );
};

export default WorkdetailView;
