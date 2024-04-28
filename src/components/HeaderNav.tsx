import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    padding: 20px;
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
    }
`;

const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const NavItem = styled.li`
    display: inline;
    margin-right: 20px;
    a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        position: relative;
        transition: border-bottom 0.3s ease;
    }
    a::after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: transparent;
        transition: width 0.3s ease;
    }
    a:hover::after,
    a:focus::after {
        width: 20px;
        background-color: white;
    }
`;

const HeaderNav: React.FC = () => {
    return (
        <Nav>
            <NavList>
                <NavItem>
                    <Link to="/recipes">Recipes</Link>
                </NavItem>
                <NavItem>
                    <Link to="/aboutUs">About Us</Link>
                </NavItem>
                <NavItem>
                    <Link to="/contactUs">Contact Us</Link>
                </NavItem>
                <NavItem>
                    <Link to="/careers">Careers</Link>
                </NavItem>
                <NavItem>
                    <Link to="/blog">Blog</Link>
                </NavItem>
            </NavList>
        </Nav>
    );
};

export default HeaderNav;
