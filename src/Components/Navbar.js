import React, { useState } from "react";
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

  background-color: #bbb;
  border-radius: 30px;
  li {
    text-align: center;
    width: 100%;
    a {
      display: inline-block;
      width: 100%;
      color: #333;
      padding: 3px 0;
      transition: 0.4s;
      &.off {
        color: #333;
      }
      &.active {
        color: #fff;
      }
    }
  }
`;

const menulist = ["work", "about", "resume"];
const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const handleOnActive = () => {
    setActive(!isActive);
    return;
  };
  // const activeStyle = {
  //   width: "90%",
  //   backgroundColor: "#ddd",
  //   color: "#333",
  //   borderRadius: "15px",
  //   transition: "0.4s",
  // };

  return (
    <Container>
      <Ul>
        {menulist.map((menu, index) => (
          <li>
            <NavLink
              key={index}
              onClick={handleOnActive}
              className={isActive ? "active" : "off"}
              to={"/" + menu}
              href="#"
            >
              {menu}
            </NavLink>
            {/* <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to={"/" + menu}
              href="#"
            >
              {menu}
            </NavLink> */}
          </li>
        ))}
      </Ul>
    </Container>
  );
};

export default Navbar;
