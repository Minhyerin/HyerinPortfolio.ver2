import "./App.css";
import Main from "./Pages/Main";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import { WorkVeiw } from "./Pages/WorkVeiw";
import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 80px;
  background-color: #ddd;

  display: flex;
  flex-direction: column;
`;

const works = [
  {
    id: 1,
    src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_2.png",
    title: "Hugmom",
    role: "Header / shoppingmall / Footer Page Design & publishing",
    },
  {
    id: 2,
    src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_1.png",
    title: "React Shoppingmall",
    role: "Design & Publishing",
  },
  {
    id: 3,
    src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_3.png",
    title: "Hugmom",
    role: "",
  },
  {
    id: 4,
    src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_4.png",
    title: "Hugmom",
    role: "",
  },
  {
    id: 5,
    src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_5.png",
    title: "Hugmom",
    role: "",
  },
]

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work works={works} />} />
        {works.map((it) => (
          <Route path={`/work/${it.id}`} element={<WorkVeiw work={it} />} />
        ))}
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </Container>
  );
}

export default App;
