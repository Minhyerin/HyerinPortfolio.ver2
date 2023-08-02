import "./App.css";
import { WorkVeiw } from "./Pages/WorkVeiw";
import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";

import Main from "./Pages/Main";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import { WorkData } from "./data/workdata";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 80px;
  background-color: #ddd;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

// const works = [
//   {
//     id: 1,
//     src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_2.png",
//     title: "Hugmom",
//     subtitle: "산후조리원 산모들을 위한 쇼핑몰 웹사이트 & 모바일",
//     role: "Header / shoppingmall / Footer Page Design & publishing",
//     tech: "Html / css / Vanila Javascript",
//     date: "2023.05-2023.06",
//     info: "산후조리원 산모들을 대상으로 한 쇼핑몰 웹 사이트로 저렴한 가격에 유기농 농산물 및 육아용품 및산모용품을 구매 할 수 있는 사이트를 기획, 제작하였습니다. 임산부 코드 인증을 받아 가입을 진행할 수 있고, 산후조리원과 연계를 맺어 바로 배송이 가능하고 산후조리원에서 받아 볼 수 있는 시스템을 기획하였습니다.",
//   },
//   {
//     id: 2,
//     src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_1.png",
//     title: "React Shoppingmall",
//     subtitle: "Hugmom 사이트를 React를 이용하여 재구성",
//     role: "Design & Publishing",
//     tech: "Html / css / Vanila Javascript",
//     date: "2023.05-2023.06",
//     info: "",
//   },
//   {
//     id: 3,
//     src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_3.png",
//     title: "Hugmom",
//     subtitle: "",
//     role: "",
//     tech: "Html / css / Vanila Javascript",
//     date: "2023.05-2023.06",
//     info: "",
//   },
//   {
//     id: 4,
//     src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_4.png",
//     title: "Hugmom",
//     subtitle: "",
//     role: "",
//     tech: "Html / css / Vanila Javascript",
//     date: "2023.05-2023.06",
//     info: "",
//   },
//   {
//     id: 5,
//     src: "https://hugmom-b6187.web.app/img/01-main_banner_slide_mobile_img_5.png",
//     title: "Hugmom",
//     subtitle: "",
//     role: "",
//     tech: "Html / css / Vanila Javascript",
//     date: "2023.05-2023.06",
//     info: "",
//   },
// ];

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
        {WorkData.map((it) => (
          <Route path={`/work/${it.id}`} element={<WorkVeiw work={it} />} />
        ))}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </Container>
  );
}

export default App;
