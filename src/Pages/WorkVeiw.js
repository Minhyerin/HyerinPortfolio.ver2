import React from 'react'
import { styled } from "styled-components";
import { useParams } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #eee;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Topdiv = styled.div`
  width: 80%;
  height: 70px;
  padding: 0 3px;
  border-bottom: 1px solid #333;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopUnderdiv = styled.div`
  width:80%;
  height: 70px;
  padding: 0 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TitleCol = styled.div`
  width: 400px;
  h1 {
    font-size: 24px;
  }
  border: 1px solid #eee;
`;
const RoleCol = styled.div`
  width: 350px;
  p {
    font-size: 16px;
  }
  border: 1px solid #eee;
`;
const TechCol = styled.div`
  width: 200px;
  p {
    font-size: 16px;
  }
  border: 1px solid #eee;
`;
const DateCol = styled.div`
  width: 100px;
  p {
    font-size: 16px;
  }
  border: 1px solid #eee;
`;

const Bottomdiv = styled.div`
  width: 80%;
  height: 400px;
  margin-top : 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImgBox = styled.div`
  width: 400px;
  height: 100%;
  border-readius: 10px;
  border: 1px solid #eee;
`;
const InfoBox = styled.div`
  width: 750px;
  height: 100%;
  border: 1px solid #eee;
`;

export const WorkVeiw = ({work}) => {
  //const {id} = useParams();
  return (
    <Container>
      <Topdiv>
        <TitleCol>
          <h1>{work.title}</h1>
        </TitleCol>
        <RoleCol>
          <p>ROLE</p>
        </RoleCol>
        <TechCol>
          <p>TECH</p>
        </TechCol>
        <DateCol>
          <p>Date</p>
        </DateCol>
      </Topdiv>
      <TopUnderdiv>
        <TitleCol>
          <p>산후조리원 산모들을 위한 쇼핑몰 웹사이트 &  모바일 </p>
        </TitleCol>
        <RoleCol>
          <p>{work.role}</p>
        </RoleCol>
        <TechCol>
          <p>Html / css / Vanila Javascript</p>
        </TechCol>
        <DateCol>
          <p>2023.06</p>
        </DateCol>
      </TopUnderdiv>
      <Bottomdiv>
        <ImgBox>
          <img />
        </ImgBox>
        <InfoBox>

        </InfoBox>
      </Bottomdiv>
    </Container>
  )
}
