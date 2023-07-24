import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  width: 70%;
`;
const Topdiv = styled(motion.div)`
  width: 100%;
  padding: 0 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled(motion.div)`
  width: 400px;
  over-flow: hidden;
  flex: 2;
  h1 {
    display: block;
    font-size: 24px;
  }
}
`;
const SubTitle = styled(motion.div)`
  flex: 1;
`;
const UnderLine = styled(motion.div)`
  width: 0;
  height: 2px;
  background-color: #333;
`;

const Bottomdiv = styled.div`
  width: 100%;
  display: flex;
`;
const ContactBox = styled.div`
  flex: 2;
`;
const Form = styled.form`
  div {
    width: 90%;
    padding: 10px;
    border-bottom: 1px solid #333;
    margin: 10px 0;

    display: flex;
    gap: 10px;
    align-items: center;
    input {
      width: 100%;
      border: none;
      outline: none;
      padding: 3px;
      background-color: transparent;
    }
    textarea {
      width: 100%;
      height: 200px;
      border: none;
      outline: none;
      background-color: transparent;
      resize: none;
    }
  }
  button {
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
  div.messageBox {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const EmailBox = styled.div`
  flex: 1;
`;
const SocialBox = styled.div`
  flex: 1;
`;
const Contact = () => {
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
  const handleOnSend = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <ContentWrapper>
        <Topdiv variants={TopVariant} initial="start" animate="end">
          <Title variants={textVariant}>
            <h1>CONTACT</h1>
          </Title>
          <SubTitle variants={textVariant}>
            <p>EMAIL</p>
          </SubTitle>
          <SubTitle variants={textVariant}>
            <p>SOCIALS</p>
          </SubTitle>
        </Topdiv>
        <UnderLine variants={lineVariant} initial="start" animate="end" />
        <Bottomdiv>
          <ContactBox>
            <Form>
              <div>
                <label for="name">
                  Name<em>*</em>
                </label>
                <input id="name" type={"text"} placeholder="name" />
              </div>
              <div>
                <label for="email">
                  Email<em>*</em>
                </label>
                <input id="email" type={"email"} placeholder="email" />
              </div>
              <div className="messageBox">
                <label>
                  Message<em>*</em>
                </label>
                <textarea placeholder="message" />
              </div>
              <button onClick={(e) => handleOnSend(e)}>Send</button>
            </Form>
          </ContactBox>
          <EmailBox>
            <p>rin1401@naver.com</p>
          </EmailBox>
          <SocialBox>
            <p>Github</p>
            <p>Blog</p>
            <p>KakaoTalk</p>
          </SocialBox>
        </Bottomdiv>
      </ContentWrapper>
    </Container>
  );
};

export default Contact;
