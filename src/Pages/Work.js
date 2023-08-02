import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import { WorkData } from "../data/workdata";
import WorkItem from "../Components/WorkItem";

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
  }
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
