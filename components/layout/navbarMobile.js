import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";

const NavbarMobile = ({ menu = [] }) => (
  <Navigation>
    <a href="/" className="logo">
      {RichText.asText(menu.data.title)}
    </a>
    <Links menuLinks={menu.data.menu_links} />
  </Navigation>
);

const Links = ({ menuLinks }) => {
  if (menuLinks) {
    return (
      <Menu>
        {menuLinks.map((menuLink, index) => (
          <a key={`menulink-${index}`} href={Link.url(menuLink.link)}>
            {RichText.asText(menuLink.label)}
          </a>
        ))}
      </Menu>
    );
  }
  return null;
};

export default NavbarMobile;

const Navigation = styled.header`
  display: flex;
  justify-content: space-between;
  width: min(1400px, 80%);
  margin: 0 auto;
  padding: 1rem 1.5rem;
  height: 90px;
  align-items: center;

  div {
    display: flex;
    gap: 2rem;
  }

  @media ${breakpoints.md} {
    display: none;
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 2rem;
`;
