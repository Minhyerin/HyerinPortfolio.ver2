import React, { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { styled } from "styled-components";
import { keyframes } from "styled-components";
import useInterval from "../hooks/useInterval";

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
const TitleOne = styled.div`
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
const TitleTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h1 {
    font-size: 60px;
    animation: ${animation} 0.1s linear forwards;
  }
`;
const Main = () => {
  // const [landingTitle, setLandingTitle] = useState("");
  // const [count, setCount] = useState(0); //문자열 인덱스
  // useInterval(() => {
  //   // 만약, count가 completedTitle의 길이와 같거나 커지면 반복을 멈춘다.
  //   if (count >= completedTitle.length) {
  //     return;
  //   }

  //   setLandingTitle((prev) => {
  //     // 빈 문자열("")은 false이므로 completedTitle의 가장 앞 글자가 result에 할당된다.
  //     // 그 뒤로는 landingTitle이 빈 문자열이 아니므로
  //     // 이전에 존재하던 것과 count번 인덱스에 존재하는 문자열을 합쳐서
  //     // 다시 result에 할당한다.
  //     let result = prev ? prev + completedTitle[count] : completedTitle[0];

  //     // count를 증가시킨다.
  //     setCount((prev) => prev + 1);

  //     // 연산된 result를 반환한다.
  //     return result;
  //   });

  //   // 150ms에 한번씩 연산이 진행된다.
  //   // 즉, 150ms에 한번씩 문자열이 늘어난다.(타이핑 효과)
  // }, 150);

  // const completedTitle = useMemo(() => {
  //   return "Developer";
  // }, []);
  const title1 = "Front Dev";
  const [titleText, setTitleText] = useState([]);
  useEffect(() => {
    setTitleText(title1.split(""));
  }, [title1]);
  return (
    <Container>
      <TitleOne>
        {titleText.map((t) => (
          <span>
            <span className={t}>{t}</span>
          </span>
        ))}
      </TitleOne>
      <TitleTwo></TitleTwo>
      <div>
        <p>
          안녕하세요! 프론트엔드 개발자 민혜린 포트폴리오 입니다. 자유롭게
          둘러보시고, 저를 찾아주세요!
        </p>
      </div>
    </Container>
  );
};

export default Main;
