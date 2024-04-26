import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #ffffff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuBars = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
  color: #000;
`;

const NavMenu = styled.nav`
  background-color: #ffffff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
  
  &.active {
    left: 0;
    transition: 450ms;
  }
  ul.nav-menu-items {
    width: 100%;
  }
`;

const NavText = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #151414;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;

  &:hover {
    background-color: #000000;
    color: #fff;
  }
`;

const NavbarToggle = styled.li`
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Span = styled.span`
  margin-left: 16px;
`;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <NavbarContainer>
        <MenuBars >
          <FaBars onClick={showSidebar} />
        </MenuBars>
      </NavbarContainer>
      <NavMenu className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <NavbarToggle>
            <MenuBars >
              <AiOutlineClose />
            </MenuBars>
          </NavbarToggle>
          {SidebarData.map((item, index) => {
            return (
              <NavText key={index} className={item.cName}>
                <NavLink to={item.path}>
                  {item.icon}
                  <Span>{item.title}</Span>
                </NavLink>
              </NavText>
            );
          })}
        </ul>
      </NavMenu>
    </>
  );
}

export default Navbar;
