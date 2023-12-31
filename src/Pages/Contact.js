import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  position; relative;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const UnderLine = styled(motion.div)`
  width: 0;
  height: 2px;
  background-color: #333;
`;

const Bottomdiv = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContactBox = styled.div`
  flex: 2;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
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
      &::placeholder {
        transition: 0.3s;
      }
      &:focus {
        &::placeholder {
          color: #eee;
        }
      }
    }
    textarea {
      width: 100%;
      height: 200px;
      border: none;
      outline: none;
      background-color: transparent;
      resize: none;
      &::placeholder {
        transition: 0.3s;
      }
      &:focus {
        &::placeholder {
          color: #eee;
        }
      }
    }
  }
  button {
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    transition: 0.4s; ease-in-out;
    &:hover {
      letter-spacing: 3px;
    }
  }
  div.messageBox {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    div {
      width: 100%;
      margin: 0;
      textarea {
        height: 150px;
      }
    }
    button {
      margin-top: 10px;
      width: 100px;
    }
  }
`;
const EmailBox = styled.div`
  flex: 1;
  margin: 20px 0;
  a {
    display: inline-block;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    margin-top: 20px;
  }
`;
const SocialBox = styled.div`
  flex: 1;
  margin: 20px 0;
  a {
    display: inline-block;
    margin-right: 10px;
  }
`;
const SendModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  border: 1px solid #333;
  border-radius: 10px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  span {
    text-align: center;
  }
  button {
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const toggleModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "") {
      nameRef.current.focus();
    } else if (email == "") {
      emailRef.current.focus();
    } else if (message == "") {
      messageRef.current.focus();
    } else {
      emailjs
        .sendForm(
          "hyerin1201",
          "template_qafjumn",
          form.current,
          "txyA1kU-qMzBEcQ9t"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toggleModal(e);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
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
            <Form ref={form} onSubmit={sendEmail}>
              <div>
                <label for="name">
                  Name<em>*</em>
                </label>
                <input
                  ref={nameRef}
                  name="user_name"
                  id="name"
                  type={"text"}
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label for="email">
                  Email<em>*</em>
                </label>
                <input
                  ref={emailRef}
                  name="user_email"
                  id="email"
                  type={"email"}
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="messageBox">
                <label>
                  Message<em>*</em>
                </label>
                <textarea
                  ref={messageRef}
                  name="message"
                  placeholder="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit">Send</button>
            </Form>
          </ContactBox>
          <EmailBox>
            <a href="mailto:minhyerin1201@gamil.com">minhyerin1201@gmail.com</a>
          </EmailBox>
          <SocialBox>
            <Link to={"https://github.com/Minhyerin"} target="_blank">
              Github
            </Link>
            <Link to={"https://hyerin1201.tistory.com/"} target="_blank">
              Blog
            </Link>
            <Link>KakaoTalk</Link>
          </SocialBox>
        </Bottomdiv>
        {modal ? (
          <SendModal>
            <span>
              전송이 완료되었습니다.
              <br />
              확인 후 연락드리겠습니다.
            </span>
            <button onClick={(e) => toggleModal(e)}>확인</button>
          </SendModal>
        ) : (
          ""
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Contact;
