import React from "react";
import { styled } from "styled-components";
import { Routes, Rou } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Ul = styled.ul`
  width: 500px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  background-color: #333;
  border-radius: 30px;
  li {
    text-align: center;
    width: 100%;
    a {
      color: #fff;
    }
  }
`;

const menulist = ["work", "about", "resume"];
const Navbar = () => {
  return (
    <Container>
      <Ul>
        {menulist.map((menu) => (
          <li>
            <Link to={"/" + menu} href="#">
              {menu}
            </Link>
          </li>
        ))}
      </Ul>
    </Container>
  );
};

export default Navbar;
