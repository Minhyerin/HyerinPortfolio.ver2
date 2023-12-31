import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import { WorkData } from "../data/workdata";
import WorkItem from "../Components/WorkItem";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    //border: 1px solid red;
    //flex-direction: column;
    flex-wrap: wrap;
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
    out: {
      opacity: 0,
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
      {WorkData.map((work, index) => (
        <WorkItem key={index} work={work} index={index} />
      ))}
    </Container>
  );
};

export default Work;
