import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import WorkItem from "../Components/WorkItem";
import { WorkData } from "../data/workdata";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Work = () => {
  const containerVariant = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
    },
  };

  return (
    <Container variants={containerVariant} initial="start" animate="end">
      {WorkData.map((work, index) => (
        <WorkItem key={index} work={work} index={index} />
      ))}
    </Container>
  );
};

export default Work;
