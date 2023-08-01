import mock1 from "../imgs/hugmom-mock1.png";
import mock2 from "../imgs/hugmom-mock2.png";
import mock3 from "../imgs/netfilx-mock.png";
import mock4 from "../imgs/todolist-mock.png";
import mock5 from "../imgs/diary-mock.png";
import thumb1 from "../imgs/thumb1.png";
import thumb2 from "../imgs/thumb2.png";
import thumb3 from "../imgs/thumb3.png";
import thumb4 from "../imgs/thumb4.png";
import thumb5 from "../imgs/thumb5.png";

import hugmom1 from "../imgs/hugmom1.png";
import hugmom2 from "../imgs/hugmom-video1.mp4";
import hugmom3 from "../imgs/hugmom-video2.mp4";
import hugmom4 from "../imgs/hugmom4.gif";

import hugmom2_1 from "../imgs/hugmom2-1.png";
import hugmom2_2 from "../imgs/hugmom2-video1.mp4";
import hugmom2_3 from "../imgs/hugmom2-video2.mp4";
import hugmom2_4 from "../imgs/hugmom2-4.gif";

import netflix1 from "../imgs/netflix1.png";
import netflix2 from "../imgs/netflix-video1.mp4";
import netflix3 from "../imgs/netflix-video2.mp4";

export const WorkData = [
  {
    id: 1,
    thumb: thumb1,
    src: mock1,
    link: "https://hugmom-b6187.web.app/html/01-intro.html",
    title: "Hugmom",
    subtitle: "산후조리원 산모들을 위한 쇼핑몰 웹사이트 & 모바일",
    role: "Header & Footer / shoppingmall / Page Design & publishing",
    tech: "HTML / CSS / Vanila Javascript",
    date: "2023.05-2023.06",
    info: "산후조리원 산모들을 대상으로 한 쇼핑몰 웹 사이트로 저렴한 가격에 유기농 농산물, 육아용품 및 산모용품을 구매 할 수 있는 사이트를 기획, 제작하였습니다. 임산부 코드 인증을 받아 가입을 진행할 수 있고, 산후조리원과 연계를 맺어 바로 배송이 가능하고 산후조리원에서 받아 볼 수 있는 시스템을 기획 하였습니다.",
    imgs: [hugmom1, hugmom2, hugmom3, hugmom4],
    figma:
      "https://www.figma.com/file/MlFIWC7zZybEYX1PbLOyME/GMA-%EB%8C%80%EB%8B%A8%ED%95%98%EC%A1%B0-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=1303%3A901&mode=design&t=pERbCveD0y0ORsRX-1",
    desc: [
      "Hugmom은 산후조리원 산모들을 대상으로 한 쇼핑몰 웹사이트로 산후조리원에서 직접 물건을 받아보고, 좋은 제품을 구매할 수 있다면 어떨까? 라는 아이디어에서 시작 되었습니다. 후에 산후조리원을 떠나게 된 산모들도 이용할 수 있는 사이트로 아이디어를 확장하였습니다.",
      "해당 프로젝트는 HTML / CSS / Vanlia Javascript 를 사용하여 진행 되었습니다.",
    ],
    detail: [
      "허그맘 로고디자인 및 폰트 선정 / 산후조리원몰 / 산후조리원 졸업 몰 / 문의하기 / 아이디 및 비밀번호 찾기 페이지를 담당하여 진행했습니다.",
      "상단 헤더와 푸터 디자인 및 코딩 / 슬라이드 배너 이미지 디자인 및 전반적인 레이아웃 디자인을 진행하였습니다.",
      "홈페이지에서는 지정된 아이디와 비밀번호로 로그인을 해야 제품의 금액과 상세페이지를 볼 수 있습니다.",
      "산후조리원 몰, 산후조리원 졸업 몰 각탭은 인기상품 / 식품 / 육아용품 / 산모용품으로 나뉘며 산후조리원 졸업몰에는 공동구매 페이지가 추가되어 있습니다.",
      "해당 프로젝트는 모바일에서도 화면 구현이 가능하도록 미디어쿼리를 사용해 반응형 웹으로 제작하였습니다.",
    ],
  },
  {
    id: 2,
    thumb: thumb2,
    src: mock2,
    link: "https://hyerin-hugmom.netlify.app",
    title: "Hugmom React.ver",
    subtitle: "Hugmom 사이트를 React로 재구성",
    role: "Design & Publishing",
    tech: "React / Redux / Styled-component ",
    date: "2023.06-2023.06",
    info: "앞서 제작한 Hugmom 프로젝트를 리엑트를 사용하여 재구성 하였습니다. 리덕스를 활용하여 데이터 상태관리를 보다 효율적으로 사용하는 법을 익히고, netlify를 통해 배포하였습니다. JSON 파일을 가상 서버를 활용하여 데이터를 가져와 출력해 주도록 하였습니다.",
    imgs: [hugmom2_1, hugmom2_2, hugmom2_3, hugmom2_4],
    figma: "",
    desc: [
      "Hugmom 팀 프로젝트를 리엑트를 사용하여 재구성 해보았습니다. 리덕스를 사용하여 데이터의 상태관리에 대해 익히고, JSON 파일의 데이터를 출력하였습니다.",
    ],
    detail: [
      "홈페이지는 슬라이더 배너와 각 제품을 JSON파일의 데이터를 불러와 출력하여 구현하였습니다.",
      "로그인을 하지 않은 상태에서 제품을 클릭했을 시에는 로그인 페이지로 이동하며, 로그인을 통해 상세페이지를 확인 할 수 있습니다.",
      "상세페이지 역시 JSON 파일의 데이터를 가져와 출력하여 구현했습니다.",
      "검색창에 키워드를 입력시 해당하는 키워드를 가진 제품을 출력하도록 구현하였습니다.",
      "해당 프로젝트는 모바일에서도 화면 구현이 가능하도록 미디어쿼리를 사용해 반응형 웹으로 제작하였습니다.",
    ],
  },
  {
    id: 3,
    thumb: thumb3,
    src: mock3,
    link: "https://hyerin-react-netflix.netlify.app",
    title: "Netflix",
    subtitle: "Toy Project",
    role: "Design & Publishing",
    tech: "React / React middle ware thunk",
    date: "2023.07",
    info: "리엑트를 활용하여 넷플릭스 사이트를 만들어 보았습니다. 리덕스 미들웨어를 통해 데이터 상태관리 및 최적화하는 법에 대하여 익히고 netlify를 통해 배포하였습니다.",
    imgs: [netflix1, netflix2, netflix3],
    figma: "",
    desc: [
      "리엑트를 활용한 넷플릭스 사이트 입니다. API를 사용하여 무비 데이터를 가져오고, 리덕스 미들웨어를 통해 데이터 상태관리 및 최적화 하는 법에 대해 익혔습니다. netlify를 통해 배포하였습니다.",
    ],
    detail: [
      "헤더 부분 스타일은 부트스트랩 라이브러리를 사용하였고, 캐러셀은 multi-carousel 라이브러리를 사용하였습니다.",
      "영화의 데이터는 The Movie Database의 API를 사용하였습니다.",
      "영화를 클릭시 로그인 페이지로 연결 되며, 로그인을 통해 상세페이지를 확인 할 수 있습니다.",
      "Movies 메뉴에서는 영화 키워드를 검색할 수 있습니다. 키워드를 입력하고 search버튼을 클릭시 해당 영화를 찾아 출력해줍니다.",
    ],
  },
  {
    id: 4,
    thumb: thumb4,
    src: mock4,
    link: "https://hyerin-react-todolist.netlify.app",
    title: "React TodoList",
    subtitle: "React Toy Project TodoList",
    role: "Design & Publishing",
    tech: "React",
    date: "2023.07",
    info: "리액트 토이프로젝트로 작업한 Todo List 입니다.  에 데이터를 저장하고 불러올 수 있습니다.",
    imgs: [],
    figma: "",
    desc: [],
    detail: [],
  },
  {
    id: 5,
    thumb: thumb5,
    src: mock5,
    link: "https://hyerin-react-diary.netlify.app",
    title: "React Diary",
    subtitle: "React Toy Project Diary",
    role: "Design & Publishing",
    tech: "React",
    date: "2023.07",
    info: "리액트 토이프로젝트로 작업한 Dairy 입니다. 에 데이터를 저장하고 불러올 수 있습니다..",
    imgs: [],
    figma: "",
    desc: [],
    detail: [],
  },
  {
    id: 6,
    thumb: thumb5,
    src: mock5,
    link: "https://hyerin-portfolio-v1.netlify.app",
    title: "React Diary",
    subtitle: "React Toy Project Diary",
    role: "Design & Publishing",
    tech: "HTML / CSS / Javascript / jQuery",
    date: "2023.05",
    info: "HTML / CSS / Javascript / jQuery 를 사용한 포트폴리오 사이트입니다.",
    imgs: [],
    figma: "",
    desc: [],
    detail: [],
  },
];
