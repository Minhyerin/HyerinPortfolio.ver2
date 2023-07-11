import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Container>
  );
}

export default App;
