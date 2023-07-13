import logo from "./logo.svg";
import "./App.css";
import Main from "./Pages/Main";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
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

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </Container>
  );
}

export default App;
