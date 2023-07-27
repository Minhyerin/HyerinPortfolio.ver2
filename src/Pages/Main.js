import React, { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";

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
  height: 100vh;
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
    .F {
      display: block;
      animation: ${animation} 0.6s 0.5s linear;
    }
    .r {
      display: block;
      animation: ${animation} 0.6s 0.52s linear;
    }
    .o {
      display: block;
      animation: ${animation} 0.6s 0.54s linear;
    }
    .n {
      display: block;
      animation: ${animation} 0.6s 0.56s linear forwards;
    }
    .t {
      display: block;
      animation: ${animation} 0.6s 0.58s linear forwards;
    }
    .D {
      display: block;
      animation: ${animation} 0.6s 0.6s linear forwards;
    }
    .e {
      display: block;
      animation: ${animation} 0.6s 0.62s linear forwards;
    }
    .v {
      display: block;
      animation: ${animation} 0.6s 0.58s linear forwards;
    }
  }
`;
const SpanWrapper = styled(motion.span)`
  padding: 0.3rem 0;
  overflow: hidden;
  font-size: 60px;
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
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const textVariant = {
  start: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 400,
    },
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 400,
    },
  },
};

const Main = () => {
  const title1 = "Front Dev";
  const [titleText, setTitleText] = useState([]);
  useEffect(() => {
    setTitleText(title1.split(""));
  }, [title1]);

  return (
    <Container>
      <TitleOne>
        {titleText.map((t) => (
          <SpanWrapper
            variants={titleVariant}
            initial="start"
            whileInView="end"
          >
            <SpanText variants={textVariant}>{t}</SpanText>
          </SpanWrapper>
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
