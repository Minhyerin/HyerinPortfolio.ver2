import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 30px;
  }
`;
const AboutBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
const Topdiv = styled(motion.div)`
  width: 100%;
  padding: 0 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const Title = styled(motion.div)`
  width: 400px;
  over-flow: hidden;
  flex: 1;
  h1 {
    display: block;
    font-size: 24px;
  }
}
`;
const Socialbtn = styled(motion.div)`
  margin-left: 20px;
  p {
    font-size: 16px;
  }
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
  @media screen and (max-width: 768px) {
    p {
      font-size: 14px;
    }
`;
const AboutInfo = styled.div`
  width: 100%;
`;
const SubTitle = styled(motion.div)`
  flex: 1;
  p {
    font-size: 16px;
  }
`;
const DescDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  gap: 20px;
`;
const Expriencebox = styled.div`
  flex: 1;
  height: 100%;
  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #333;
    margin: 10px 0;
    padding: 10px 0;
    span {
      flex: 1;
      word-break: keep-all;
    }
  }

  @media screen and (max-width: 768px) {
    div {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      span {
        font-size: 14px;
      }
    }
  }
`;
const Skillbox = styled.div`
  flex: 1;
  height: 100%;
  padding-top: 10px;
  div {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const About = () => {
  const containerVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  const TopVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        durtaion: 1,
        delayChildren: 0.5,
        staggerChildren: 0.7,
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

  const subtextVariant = {
    start: {
      opacity: 0,
      y: 20,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
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
    <Container
      variants={containerVariant}
      initial="start"
      animate="end"
      exit="out"
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper>
        <AboutBox>
          <Topdiv variants={TopVariant} initial="start" animate="end">
            <Title variants={textVariant}>
              <h1>ABOUT</h1>
            </Title>
            <Socialbtn variants={textVariant}>
              <Link to={"https://github.com/Minhyerin"} target="_blank">
                Github
              </Link>
            </Socialbtn>
            <Socialbtn variants={textVariant}>
              <Link to={"https://hyerin1201.tistory.com/"} target="_blank">
                Blog
              </Link>
            </Socialbtn>
          </Topdiv>
          <UnderLine variants={lineVariant} initial="start" animate="end" />
          <TopUnderdiv>
            <p>
              안녕하세요! 프론트엔드 개발자를 희망하는 민혜린입니다. <br />
              저는 시각디자인 전공으로 좋은 ui/ux 를 제공하는것에 흥미를 느끼고,
              사용자에게 멋진 경험을 선사하는 데에 열정을 가지고 있습니다! 좋은
              웹사이트는 기업을 인식하는 방식 중 가장 큰 부분을 차지 한다고
              생각합니다. 멋진 경험을 함께 하며 성장해 나가고 싶습니다!
            </p>
          </TopUnderdiv>
        </AboutBox>
        <AboutInfo>
          <Topdiv ariants={TopVariant} initial="start" animate="end">
            <SubTitle variants={subtextVariant}>
              <p>EXPERIENCE</p>
            </SubTitle>
            <SubTitle variants={subtextVariant}>
              <p>SKILLS</p>
            </SubTitle>
          </Topdiv>
          <UnderLine variants={lineVariant} initial="start" animate="end" />
          <DescDiv>
            <Expriencebox>
              <div>
                <span>
                  그린컴퓨터아트학원
                  <br />
                  2023.02-2023.08
                </span>
                <span>
                  웹퍼블리셔&리엑트 활용 프론트엔드 웹SW 개발자 과정 수료
                </span>
              </div>

              <div>
                <span>
                  엘코잉크 코리아
                  <br />
                  2019.01-2023.02
                </span>
                <span>
                  신라면세점 바비브라운 매장 근무 고객응대 및 매장 관리
                </span>
              </div>
            </Expriencebox>
            <Skillbox>
              <div>
                <span>HTML / CSS</span>
                <span>JavaScript</span>
                <span>React / Redux</span>
                <span>PhotoShop</span>
                <span>Illustrator</span>
              </div>
            </Skillbox>
          </DescDiv>
        </AboutInfo>
      </ContentWrapper>
    </Container>
  );
};

export default About;
