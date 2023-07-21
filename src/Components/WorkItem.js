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
  filter: brightness(0.4);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    width: 25%;
    filter: brightness(1);
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
      <img src={work.src} />
    </Container>
  );
};

export default WorkItem;
