import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import styled from "styled-components";

const NavbarContainer = styled.div`
    background-color: #000000;
    height: 80px;
    z-index: 999;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MenuBars = styled.div`
    margin-right: 1rem;
    font-size: 1.5rem;
    background: none;
    color: #ffffff;
    cursor: pointer;
`;
const LogoContainer = styled(Link)`
    height: 70px;
    width: 100px;

    img {
        height: 100%;
        width: 100%;
        filter: invert(1);
    }
`;

const NavMenu = styled.nav<{ sidebar: boolean }>`
    background-color: #000000;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 850ms;
    margin-top: 80px;
    z-index: 9;
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
    color: #ffffff;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;

    &:hover {
        background-color: #ffffff;
        color: #000000;
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

const Navbar: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <NavbarContainer>
                <LogoContainer to={`/`}>
                    <img
                        src={require("../assets/images/recipe.png")}
                        alt="Logo"
                    />
                </LogoContainer>
                <MenuBars onClick={showSidebar}>
                    {sidebar ? <AiOutlineClose /> : <FaBars />}
                </MenuBars>
            </NavbarContainer>
            <NavMenu sidebar={sidebar}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    {SidebarData.map((item, index) => (
                        <NavText key={index} className={item.cName}>
                            <NavLink to={item.path}>
                                {item.icon}
                                <Span>{item.title}</Span>
                            </NavLink>
                        </NavText>
                    ))}
                </ul>
            </NavMenu>
        </>
    );
};

export default Navbar;
