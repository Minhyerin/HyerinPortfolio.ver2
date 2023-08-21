import "./App.css";
import { useEffect } from "react";
import { WorkVeiw } from "./Pages/WorkVeiw";
import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import { AnimatePresence } from "framer-motion";

import Main from "./Pages/Main";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import { WorkData } from "./data/workdata";

const Container = styled.div`
  width: 100%;
  //height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding: 60px 80px;
  background-color: #ddd;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 40px 20px;
  }
`;

function App() {
  let vh = 0;

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <Container>
      <Header />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Work />} />
          {WorkData.map((it) => (
            <Route path={`/work/${it.id}`} element={<WorkVeiw work={it} />} />
          ))}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Navbar />
    </Container>
  );
}

export default App;
