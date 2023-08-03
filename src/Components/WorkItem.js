import React from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 10%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.8s;
  filter: brightness(0.6) grayscale(0.7);
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    width: 100%;
    height: 60px;
    position: absolute;
    left: 0;
    bottom: -100px;
    padding: 0 20px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-weight: bold;
    transition: 0.8s;
  }
  &:hover {
    width: 25%;
    filter: brightness(1);
    div {
      bottom: 0;
    }
  }
  @media screen and (max-width: 768px) {
    //width: 45%;
    width:20%;
    //height: 28%;
    height: 40%;
    &: hover {
      width: 45%;
    }
  }
`;

const WorkItem = ({ work, index }) => {
  const navigate = useNavigate();
  const containerVariant = {
    start: {
      opacity: 0,
      scale: 0,
    },
    end: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <Container
      variants={containerVariant}
      initial="start"
      animate="end"
      className={`item_${index}`}
      onClick={() => navigate(`/work/${work.id}`)}
    >
      <img src={work.thumb} />
      <div>
        <p>{work.title}</p>
      </div>
    </Container>
  );
};

export default WorkItem;
