import React from "react";
import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <Nav>
      <Brand>Julio Caesar</Brand>
      <NavItem>
        <NavLink>About</NavLink>
        <NavLink>Journal</NavLink>
        <NavLink>Contact</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  color: white;
`;

const Brand = styled.span`
  font-weight: 700;
`;

const NavItem = styled.li`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.li`
  list-style-type: none;
`;
