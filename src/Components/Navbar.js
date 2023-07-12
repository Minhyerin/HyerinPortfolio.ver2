import React from "react";
import { styled } from "styled-components";
import { Routes, Rou } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

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
      display: inline-block;
      color: #fff;
    }
  }
`;

const menulist = ["work", "about", "resume"];
const Navbar = () => {
  const activeStyle = {
    width: "100%",
    padding: "3px 0",
    backgroundColor: "#ddd",
    color: "#333",
    borderRadius: "10px",
  };

  return (
    <Container>
      <Ul>
        {menulist.map((menu) => (
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to={"/" + menu}
              href="#"
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </Ul>
    </Container>
  );
};

export default Navbar;
