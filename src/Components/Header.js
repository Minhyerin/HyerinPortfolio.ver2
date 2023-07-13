import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 18px;
    font-weight: normal;
  }
`;

const Header = () => {
  return (
    <Container>
      <div>
        <Link to="/" href="#">
          Hyerin's Portfolio
        </Link>
      </div>
      <div>
        <Link to="/contact">CONTACT</Link>
      </div>
    </Container>
  );
};

export default Header;
