import React from "react";
import { RichText } from "prismic-reactjs";
import { Link as PrismicLink } from "prismic-reactjs";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";
import Link from "next/link";

const NavbarMobile = ({ menu = [] }) => (
  <Navigation>
    <Link href="/">{RichText.asText(menu.data.title)}</Link>
    <Links menuLinks={menu.data.menu_links} />
  </Navigation>
);

const Links = ({ menuLinks }) => {
  if (menuLinks) {
    return (
      <Menu>
        {menuLinks.map((menuLink, index) => (
          <Link
            key={`menulink-${index}`}
            href={PrismicLink.url(menuLink.link)}
            passHref
          >
            <a>{RichText.asText(menuLink.label)}</a>
          </Link>
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
