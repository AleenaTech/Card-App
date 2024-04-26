import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 20px;
  color: white;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline;
  margin-right: 20px;
`;

const SideNav = () => {
    return (
        <Nav>
            <NavList>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
            </NavList>
        </Nav>
    );
};

export default SideNav;
