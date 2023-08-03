import React, { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { keyframes } from "styled-components";
import { motion, useAnimationControls } from "framer-motion";

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  //height: 100%;
  //border: 1px solid red;
`;
const TitleOne = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  over-flow: hidden;
  position: relative;
  span {
    padding: 0.3rem 0;
    overflow: hidden;
    font-size: 60px;
  }
`;
const SpanText = styled(motion.span)`
  display: block;
`;
const TitleTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h1 {
    font-size: 60px;
    animation: ${animation} 0.1s linear forwards;
  }
`;
const titleVariant = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const textVariant = {
  start: {
    opacity: 0,
    y: 30,
    transition: {},
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {},
  },
};

const Main = () => {
  const title = "Front Dev";
  const controls = useAnimationControls();
  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <Container>
      <TitleOne variants={titleVariant} initial="start" whileInView="end">
        {Array.from(title).map((t) => (
          <span>
            <SpanText variants={textVariant}>{t}</SpanText>
          </span>
        ))}
      </TitleOne>
      <TitleTwo></TitleTwo>
      <div>
        {/* <p>
          안녕하세요! 프론트엔드 개발자 민혜린 포트폴리오 입니다. 자유롭게
          둘러보시고, 저를 찾아주세요!
        </p> */}
      </div>
    </Container>
  );
};

export default Main;
