import React, { useState } from "react";
import { styled } from "styled-components";
import { Routes, Rou } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ul = styled.ul`
  width: 400px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  background-color: #bbb;
  border-radius: 30px;
  li {
    text-align: center;
    width: 100%;
    a {
      display: inline-block;
      width: 90%;
      color: #333;
      padding: 3px 0;
      border-radius: 20px;
      transition: 0.4s;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 10px;
    li {
      a {
        width: 100%;
        font-size: 16px;
      }
    }
  }
`;

const menulist = ["Home", "Work", "About", "Contact"];
const Navbar = () => {
  const activeStyle = {
    color: "#fff",
    backgroundColor: "#333",
  };

  return (
    <Container>
      <Ul>
        {menulist.map((menu) => (
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to={
                menu.toLowerCase() === "home" ? "/" : "/" + menu.toLowerCase()
              }
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
