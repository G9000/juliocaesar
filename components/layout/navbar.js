import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";
import { SiGithub, SiLinkedin, SiBehance } from "react-icons/si";

const Navbar = ({ menu = [] }) => (
  <Navigation>
    <a href="/" className="logo">
      {RichText.asText(menu.data.title)}
    </a>
    <div>
      <SocialBtn href="https://github.com/G9000" target="_blank">
        <SiGithub />
      </SocialBtn>
      <SocialBtn
        href="https://www.linkedin.com/in/juliocaesar/"
        target="_blank"
      >
        <SiLinkedin />
      </SocialBtn>
      <SocialBtn href="https://www.behance.net/juliocaesar" target="_blank">
        <SiBehance />
      </SocialBtn>
    </div>
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

export default Navbar;

const Navigation = styled.header`
  display: none;
  @media ${breakpoints.md} {
    display: flex;
    justify-content: space-between;
    width: min(1400px, 80%);
    margin: 0 auto;
    padding: 1rem 0;
    height: 120px;
    align-items: center;

    div {
      display: flex;
      gap: 2rem;
    }
  }
`;

const Menu = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    transition: color 300ms ease;

    :hover {
      color: #87479d;
    }
  }
`;

const SocialBtn = styled.a`
  font-size: 1.45rem;
  transition: color 300ms ease;

  :hover {
    color: #87479d;
  }
`;
