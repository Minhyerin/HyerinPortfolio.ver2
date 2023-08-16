
const hugmom1 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom1.png";
const hugmom2 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom-video1.mp4";
const hugmom3 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom-video2.mp4";
const hugmom4 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom4.gif";

const hugmom2_1 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom2-1.png";
const hugmom2_2 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom2-video1.mp4";
const hugmom2_3 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom2-video2.mp4";
const hugmom2_4 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom2-4.gif";

const netflix1 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/netflix1.png";
const netflix2 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/netflix-video1.mp4";
const netflix3 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/netflix-video2.mp4";

const todolist1 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/todolist1.png";
const todolist2 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/todolist-video1.mp4";
const todolist3 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/todolist-video2.mp4";

const diary1 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/diary1.png";
const diary2 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/diary-video1.mp4"
const diary3 = "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/diary-video2.mp4";

export const WorkData = [
  {
    id: 1,
    thumb: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/thumb1.png",
    src: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom-mock1.png",
    link: "https://hugmom-b6187.web.app/html/01-intro.html",
    title: "Hugmom",
    subtitle: "산후조리원 산모들을 위한 쇼핑몰 웹사이트 & 모바일",
    role: "Design & Development",
    tech: "HTML / CSS / Vanila Javascript",
    date: "2023.05 - 06",
    info: "산후조리원 산모들을 대상으로 한 쇼핑몰 웹 사이트로 저렴한 가격에 유기농 농산물, 육아용품 및 산모용품을 구매 할 수 있는 사이트를 기획하고 제작한 팀프로젝트입니다. 임산부 코드 인증을 받아 가입을 진행하고 산후조리원과 연계를 맺어 바로 배송이 가능하며 산후조리원에서 받아 볼 수 있는 시스템을 기획 하였습니다.",
    imgs: [hugmom1, hugmom2, hugmom3, hugmom4],
    figma:
      "https://www.figma.com/file/MlFIWC7zZybEYX1PbLOyME/GMA-%EB%8C%80%EB%8B%A8%ED%95%98%EC%A1%B0-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=1303%3A901&mode=design&t=pERbCveD0y0ORsRX-1",
    desc: [
      "Hugmom은 산후조리원 산모들을 대상으로 한 쇼핑몰 웹사이트로 산후조리원에서 직접 물건을 받아보고, 좋은 제품을 구매할 수 있다면 어떨까? 라는 아이디어에서 시작 되었습니다. 후에 산후조리원을 떠나게 된 산모들도 이용할 수 있는 사이트로 아이디어를 확장하였습니다.",
      "해당 프로젝트는 HTML / CSS / Vanlia Javascript 를 사용하여 진행 되었습니다.",
    ],
    detail: [
      "허그맘 로고디자인 및 폰트 선정 헤더 와 푸터 (PC와 Mobile-메뉴바) / 산후조리원몰 / 산후조리원 졸업 몰 / 문의하기 / 아이디 및 비밀번호 찾기 페이지를 담당하여 진행했습니다.",
      "상단 헤더와 푸터 디자인 및 코딩 / 슬라이드 배너 이미지 디자인 및 전반적인 레이아웃 디자인을 진행하였습니다.",
      "홈페이지에서는 지정된 아이디와 비밀번호로 로그인을 해야 제품의 금액과 상세페이지를 볼 수 있습니다. (ID / PW : hugmom123)",
      "산후조리원 몰, 산후조리원 졸업 몰 각탭은 인기상품 / 식품 / 육아용품 / 산모용품으로 나뉘며 산후조리원 졸업몰에는 공동구매 페이지가 추가되어 있습니다. 각아이템 섬네일의 장바구니 버튼을 클릭하면 장바구니의 수량이 채워집니다. 공동구매 페이지의 공구 시간은 정해진 시간을 설정해 놓은 뒤 자바스크립트의 setInterval함수를 사용하여 1초씩 감소하도록 하였습니다.",
      "해당 프로젝트는 모바일에서도 화면 구현이 가능하도록 미디어쿼리를 사용해 반응형 웹으로 제작하였습니다.",
    ],
  },
  {
    id: 2,
    thumb: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/thumb2.png",
    src: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/hugmom-mock2.png",
    link: "https://hyerin-hugmom.netlify.app",
    title: "Hugmom React.ver",
    subtitle: "Hugmom 사이트를 React로 재구성",
    role: "Design & Development",
    tech: "React / React-router / Styled-component ",
    date: "2023.06",
    info: "앞서 제작한 Hugmom 프로젝트를 React를 사용하여 재구성 하였습니다. useState hook을 활용하여 데이터 상태관리에 대하여 익히고, React-router로 페이지 분기하는 법을 배웠습니다. 또한 JSON 파일을 가상 서버를 활용하여 데이터를 가져와 출력해 주도록 하였습니다. 해당 사이트는 netlify를 통해 배포하였습니다. ",
    imgs: [hugmom2_1, hugmom2_2, hugmom2_3, hugmom2_4],
    figma: "",
    desc: [
      "Hugmom 팀 프로젝트를 리엑트를 사용하여 재구성 해보았습니다. useState hook을 사용하여 데이터의 상태관리에 대해 익히고, JSON 파일의 데이터를 출력하였습니다.",
    ],
    detail: [
      "홈페이지는 슬라이더 배너와 각 제품의 이미지및 정보는 가상서버의 JSON파일 데이터를 불러와 출력 및 구현하였습니다.",
      "useState hook을 사용하여 로그인 되지 않은 상태 / 로그인이 된 상태에 대한 관리를 하고 상태 값의 변화에 따라 페이지 분기를 달리 해주어 로그인을 하지 않은 상태에서 제품을 클릭했을 시에는 로그인 페이지로 이동하며, 로그인을 통해 상세페이지를 확인 할 수 있습니다.",
      "상세페이지 역시 JSON 파일의 데이터를 가져와 출력 및 화면 구현을 했습니다.",
      "검색창에 키워드를 입력시 해당하는 키워드를 가진 제품을 출력하도록 react-router-dom의 useSearchParams함수와 useNavigate 함수 사용하여 url의 쿼리값과 일치하는 제품을 출력하도록 구현하였습니다.",
      "해당 프로젝트는 모바일에서도 화면 구현이 가능하도록 미디어쿼리를 사용해 반응형 웹으로 제작하였습니다.",
    ],
  },
  {
    id: 3,
    thumb: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/thumb3.png",
    src: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/netfilx-mock.png",
    link: "https://hyerin-react-netflix.netlify.app",
    title: "Netflix",
    subtitle: "React 를 활용한 Netflix 웹사이트",
    role: "Design & Development",
    tech: "React / React middleware-thunk",
    date: "2023.07",
    info: "리액트를 활용하여 넷플릭스 사이트를 만들어 보았습니다. Redux middleware를 통해 데이터 상태관리 및 최적화하는 법에 대하여 익히고 netlify를 통해 배포하였습니다.",
    imgs: [netflix1, netflix2, netflix3],
    figma: "",
    desc: [
      "리액트를 활용한 넷플릭스 사이트 입니다. API를 사용하여 무비 데이터를 가져오고, Redux middleware를 통해 데이터 상태관리 및 최적화 하는 법에 대해 익혔습니다. netlify를 통해 배포하였습니다.",
    ],
    detail: [
      "헤더 부분 스타일은 Bootstrap 라이브러리를 사용하였고, 캐러셀은 multi-carousel 라이브러리를 사용하였습니다.",
      "영화의 데이터는 The Movie Database의 API를 사용하였습니다.",
      "영화를 클릭시 로그인 페이지로 연결 되며, 로그인을 통해 상세페이지를 확인 할 수 있습니다.",
      "Movies 메뉴에서는 영화 키워드를 검색할 수 있습니다. 키워드를 입력하고 search버튼을 클릭시 해당 영화를 찾아 출력해줍니다.",
    ],
  },
  {
    id: 4,
    thumb: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/thumb4.png",
    src: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/todolist-mock.png",
    link: "https://hyerin-react-todolist.netlify.app",
    title: "React TodoList",
    subtitle: "React를 활용한 TodoList",
    role: "Design & Development",
    tech: "React",
    date: "2023.07",
    info: "리액트 실습으로 진행한 간단한 Todo List 입니다. 리액트의 useReducer hook을 사용하여 데이터를 관리하고, useMemo hook을 사용해 컴포넌트의 성능을 최적화시키는 방법에 대해 익혔습니다. 데이터는 localstorage에 저장됩니다.",
    imgs: [todolist1, todolist2, todolist3],
    figma: "",
    desc: [
      "리액트 실습으로 진행한 간단한 Todo List 입니다. 리액트의 useReducer 훅을 사용하여 데이터를 관리하고, useMemo 훅을 사용해 컴포넌트의 성능을 최적화시키는 방법에 대해 익혔습니다. 데이터는 localstorage에 저장됩니다.",
    ],
    detail: [
      "메모장의 느낌이 나도록 아기자기한 느낌으로 디자인 해보았습니다.",
      "먼저 예시로 목업 데이터의 할 일이 보여집니다.",
      "새로운 할 일을 입력하고, 완료시 체크 및 삭제 할 수 있습니다.",
      "키워드로 검색할시 할 일 목록에서 같은 키워드의 할 일을 찾을 수 있습니다.",
    ],
  },
  {
    id: 5,
    thumb: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/thumb5.png",
    src: "https://hyerin-portfolio-v2-imgs.s3.ap-northeast-2.amazonaws.com/diary-mock.png",
    link: "https://hyerin-react-diary.netlify.app",
    title: "React Diary",
    subtitle: "React를 활용한 Diary",
    role: "Design & Development",
    tech: "React",
    date: "2023.07",
    info: "리액트 실습으로 진행한 간단한 Dairy 입니다. 리액트의 useReducer hook을 사용하여 데이터를 관리하고 데이터는 localstorage에 저장됩니다",
    imgs: [diary1, diary2, diary3],
    figma: "",
    desc: [
      "리액트 실습으로 진행한 간단한 Dairy 입니다. 리액트의 useReducer hook을 사용하여 데이터를 관리하고 데이터는 localstorage에 저장됩니다.",
    ],
    detail: [
      "작성자, 일기, 감정을 선택하여 입력하는 Diary 입니다. ",
      "각 항목을 입력하고 저장하기 버튼을 누르면 작성한 시간도 함께 일기 리스트에 출력됩니다.",
      "만약 항목이 비어있거나 작성 되지 않았다면, 저장하기를 클릭시 해당 항목에 포커스 됩니다.",
      "작성된 일기는 수정 및 삭제가 가능합니다.",
    ],
  },
];
