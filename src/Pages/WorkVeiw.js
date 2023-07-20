import React, { useState } from "react";
import { styled } from "styled-components";
import { keyframes } from "styled-components";
import WorkdetailView from "../Components/WorkdetailView";

const lineAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;
const TextAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #eee;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const ContentWrapper = styled.div`
  width: 70%;
`;

const Topdiv = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UnderLine = styled.div`
  width: 0;
  height: 2px;
  background-color: #333;
  animation: ${lineAnimation} 1.3s linear forwards;
`;

const TopUnderdiv = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleCol = styled.div`
  width: 400px;
  over-flow: hidden;
  h1 {
    display: block;
    font-size: 24px;
    animation: ${TextAnimation} 0.8s linear forwards;
  }
  p {
    animation: ${TextAnimation} 0.8s linear forwards;
    &.p4 {
      animation: ${TextAnimation} 0.8s 0.25s linear forwards;
    }
  }
`;
const RoleCol = styled.div`
  width: 350px;
  p.p1 {
    font-size: 16px;
    animation: ${TextAnimation} 0.8s 0.1s linear forwards;
  }
  p.p5 {
    animation: ${TextAnimation} 0.8s 0.3s linear forwards;
  }
`;
const TechCol = styled.div`
  width: 200px;
  p.p2 {
    font-size: 16px;
    animation: ${TextAnimation} 0.8s 0.15s linear forwards;
  }
  p.p6 {
    animation: ${TextAnimation} 0.8s 0.35s linear forwards;
  }
`;
const DateCol = styled.div`
  width: 100px;
  p.p3 {
    font-size: 16px;
    animation: ${TextAnimation} 0.8s 0.2s linear forwards;
  }
  p.p7 {
    animation: ${TextAnimation} 0.8s 0.4s linear forwards;
  }
`;

const Bottomdiv = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const ImgBox = styled.div`
  width: 400px;
  height: 100%;
  border-readius: 10px;
  border: 1px solid #eee;
`;
const InfoBox = styled.div`
  width: 750px;
  height: 100%;
  border: 1px solid #eee;

  display: flex;
  flex-direction: column;
  algin-items: center;
`;

const InfoCol = styled.div`
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
  button {
    padding: 10px;
    border: none;
    border-radius: 30px;
    background-color: #333;
    color: #fff;
    font-weight: normal;
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
  return (
    <Container>
      <ContentWrapper>
        <Topdiv>
          <TitleCol>
            <h1>{work.title}</h1>
          </TitleCol>
          <RoleCol>
            <p className="p1">ROLE</p>
          </RoleCol>
          <TechCol>
            <p className="p2">TECH</p>
          </TechCol>
          <DateCol>
            <p className="p3">Date</p>
          </DateCol>
        </Topdiv>
        <UnderLine></UnderLine>
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
            <img />
          </ImgBox>
          <InfoBox>
            <InfoCol>
              <p>INFO</p>
            </InfoCol>
            <UnderLine />
            <InfoCol>
              <p className="work">{work.info}</p>
            </InfoCol>
            <Buttons>
              <button onClick={(e) => toggleModal(e)}>View Detail</button>
              <button>View Website</button>
            </Buttons>
          </InfoBox>
        </Bottomdiv>
      </ContentWrapper>
      {isModal && <WorkdetailView toggleModal={toggleModal} work={work} />}
    </Container>
  );
};
