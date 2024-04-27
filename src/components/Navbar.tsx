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
    z-index: 999;
    position: fixed;
    width: 100%;
`;

const MenuBars = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    color: #000;
`;

const NavMenu = styled.nav<{ sidebar: boolean }>`
    background-color: #ffffff;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
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

const Navbar: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <NavbarContainer>
                <MenuBars to="#" onClick={showSidebar}>
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
