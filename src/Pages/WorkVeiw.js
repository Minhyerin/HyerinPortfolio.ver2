import React, { useState } from "react";
import { styled } from "styled-components";
import WorkdetailView from "../Components/WorkdetailView";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #eee;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const ContentWrapper = styled.div`
  width: 70%;
`;

const Topdiv = styled(motion.div)`
  width: 100%;
  height: 70px;
  padding: 0 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UnderLine = styled(motion.div)`
  width: 0;
  height: 2px;
  background-color: #333;
`;

const TopUnderdiv = styled(motion.div)`
  width: 100%;
  height: 70px;
  padding: 0 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleCol = styled(motion.div)`
  width: 450px;
  over-flow: hidden;
  h1 {
    display: block;
    font-size: 24px;
  }
  }
`;
const RoleCol = styled(motion.div)`
  width: 250px;
  p.p1 {
    font-size: 16px;
  }
`;
const TechCol = styled(motion.div)`
  width: 200px;
  p.p2 {
    font-size: 16px;
  }
`;
const DateCol = styled(motion.div)`
  width: 150px;
  p.p3 {
    font-size: 16px;
  }
`;

const Bottomdiv = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImgBox = styled.div`
  width: 450px;
  height: 100%;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const InfoBox = styled(motion.div)`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  algin-items: center;
`;

const InfoCol = styled(motion.div)`
  padding: 0 6px;
  word-break: keep-all;
  font-size: 16px;
  p.work {
    line-height: 1.4;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-left: 10px;
  gap: 30px;
  a {
    padding: 10px;
    border: none;
    border-radius: 30px;
    background-color: #333;
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    cursor: pointer;
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 30px;
    background-color: #333;
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const WorkVeiw = ({ work }) => {
  const [isModal, setModal] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault();
    setModal(!isModal);
    console.log(isModal);
  };
  const TopVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        durtaion: 1,
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  };
  const textVariant = {
    start: {
      opacity: 0,
      y: 20,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        durtaion: 2,
      },
    },
  };

  const lineVariant = {
    start: {
      width: 0,
    },
    end: {
      width: "100%",
      transition: {
        duration: 2.5,
      },
    },
  };
  return (
    <Container>
      <ContentWrapper>
        <Topdiv variants={TopVariant} initial="start" animate="end">
          <TitleCol variants={textVariant}>
            <h1>{work.title}</h1>
          </TitleCol>
          <RoleCol variants={textVariant}>
            <p className="p1">ROLE</p>
          </RoleCol>
          <TechCol variants={textVariant}>
            <p className="p2">TECH</p>
          </TechCol>
          <DateCol variants={textVariant}>
            <p className="p3">Date</p>
          </DateCol>
        </Topdiv>
        <UnderLine
          variants={lineVariant}
          initial="start"
          animate="end"
        ></UnderLine>
        <TopUnderdiv>
          <TitleCol>
            <p className="p4">{work.subtitle}</p>
          </TitleCol>
          <RoleCol>
            <p className="p5">{work.role}</p>
          </RoleCol>
          <TechCol>
            <p className="p6">{work.tech}</p>
          </TechCol>
          <DateCol>
            <p className="p7">{work.date}</p>
          </DateCol>
        </TopUnderdiv>
        <Bottomdiv>
          <ImgBox>
            <img src={work.src} />
          </ImgBox>
          <InfoBox variants={TopVariant} initial="start" animate="end">
            <InfoCol variants={textVariant}>
              <p>INFO</p>
            </InfoCol>
            <UnderLine variants={lineVariant} initial="start" animate="end" />
            <InfoCol>
              <p className="work">{work.info}</p>
            </InfoCol>
            <Buttons>
              <button onClick={(e) => toggleModal(e)}>View Detail</button>
              <Link target={"_blank"} to={work.link}>View Website</Link>
            </Buttons>
          </InfoBox>
        </Bottomdiv>
      </ContentWrapper>
      {isModal && <WorkdetailView toggleModal={toggleModal} work={work} />}
    </Container>
  );
};
