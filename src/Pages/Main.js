import React, { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { motion, sync, useAnimationControls } from "framer-motion";

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const SubTitle = styled.div`
  width: 300px;
  height: 40px;
  position: relative;
  overflow-x: hidden;
  white-space: nowrap;

  //border-radius: 30px;
  border-bottom: 1px solid #333;
`;
const SubText = styled(motion.div)`
  position: absolute;
  overflow: hidden;
  top: 8px;
  span {
    font-size: 16px;
    margin-right: 20px;
  }
  @media screen and (max-width: 768px) {
    span {
      font-size: 14px;
    }
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

const marquee = {
  start: {
    x: 0,
  },
  end: {
    x: "-50%",
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
      <SubTitle>
        <SubText
          variants={marquee}
          initial="start"
          animate="end"
          transition={{
            ease: "linear",
            repeatType: "loop",
            duration: 20,
            repeat: Infinity,
          }}
        >
          <span>
            안녕하세요! 프론트엔드 개발자를 희망하는 민혜린의 포트폴리오 입니다.
            자유롭게 둘러보시고, 저를 찾아주세요!
          </span>
          <span>
            안녕하세요! 프론트엔드 개발자를 희망하는 민혜린의 포트폴리오 입니다.
            자유롭게 둘러보시고, 저를 찾아주세요!
          </span>
        </SubText>
      </SubTitle>
    </Container>
  );
};

export default Main;
