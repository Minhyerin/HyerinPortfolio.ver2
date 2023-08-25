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
  position: relative;
`;
const Svg = styled.svg`
  width: 100px;
  height: 100px;
  path {
    stroke: #333;
    stroke-width: 5px;
  }
`;
const LogoBg = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
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
  font-weight: 600;
`;
const SubTitle = styled.div`
  width: 360px;
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

const svg = {
  start: { fill: "rgba(51,51,51,0)", pathLength: 0 },
  end: {
    fill: "rgba(51,51,51,1)",
    pathLength: 1,
  },
};
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
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 10 },
            fill: { duration: 1, delay: 1.8 },
          }}
          d="M288.88,76.48C172.7,76.48,78.17,171,78.17,287.19S172.7,497.91,288.88,497.91,499.6,403.38,499.6,287.19,405.07,76.48,288.88,76.48ZM103.17,287.19a184.91,184.91,0,0,1,43.89-119.75V348.51h27.2V251.58H277.67V437.2h27.2V355h37l55.85,82.17h.48a184.68,184.68,0,0,1-109.35,35.71C186.48,472.91,103.17,389.6,103.17,287.19ZM305.62,331V249.42H352.9q18.23,0,29.37,11.14t11.14,29.36q0,18.52-11.14,29.81T352.9,331ZM419,419.54l-46.17-68q22.86-6.94,35.45-23.44a60.8,60.8,0,0,0,12.58-37.91q0-19.09-8.24-33.85A57.43,57.43,0,0,0,389.5,233.5q-14.91-8.1-34.29-8.1H305.62V136.71H278.13V225.4h-.46v2.45H174.26V141.17a184.81,184.81,0,0,1,114.62-39.69c102.41,0,185.72,83.31,185.72,185.71A185.18,185.18,0,0,1,419,419.54Z"
          transform="translate(-78.17 -76.48)"
        />
      </Svg>
      <TitleOne variants={titleVariant} initial="start" whileInView="end">
        {Array.from(title).map((t) => (
          <span>
            <SpanText variants={textVariant}>{t}</SpanText>
          </span>
        ))}
      </TitleOne>
      {/* <SubTitle>
        <SubText
          variants={marquee}
          initial="start"
          animate="end"
          transition={{
            ease: "linear",
            repeatType: "loop",
            duration: 20,
            repeat: Infinity,
            delay: 3,
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
      </SubTitle> */}
    </Container>
  );
};

export default Main;
