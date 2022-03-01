import React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";
import { SiGithub, SiLinkedin, SiBehance } from "react-icons/si";
import { useRouter } from "next/router";

const Navbar = ({ menu = [] }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <Navigation>
      <a onClick={handleClick} className="logo" style={{ cursor: "pointer" }}>
        {/* {RichText.asText(menu.data.title)} */}
        <Logo />
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
      {/* <Links menuLinks={menu.data.menu_links} /> */}
    </Navigation>
  );
};

// const Links = ({ menuLinks }) => {
//   if (menuLinks) {
//     return (
//       <Menu>
//         {menuLinks.map((menuLink, index) => (
//           <a key={`menulink-${index}`} href={Link.url(menuLink.link)}>
//             {RichText.asText(menuLink.label)}
//           </a>
//         ))}
//       </Menu>
//     );
//   }
//   return null;
// };

export default Navbar;

const Navigation = styled.header`
  display: none;
  position: sticky;
  top: 0;
  background: white;
  z-index: 999;

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

const Logo = () => {
  return (
    <svg
      width="62"
      height="54"
      viewBox="0 0 62 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.34766 7.55859C2.34766 6.23047 2.45312 5.17969 2.66406 4.40625C2.88281 3.63281 3.26172 2.94922 3.80078 2.35547C4.33984 1.76172 5 1.32812 5.78125 1.05469C6.5625 0.78125 7.55469 0.644531 8.75781 0.644531C11.2344 0.644531 12.9609 1.33203 13.9375 2.70703C14.4844 3.48828 14.7891 4.58594 14.8516 6L10.9375 6.26953C10.8594 5.49609 10.6562 4.9375 10.3281 4.59375C10 4.25 9.45312 4.07812 8.6875 4.07812C7.92188 4.07812 7.38281 4.33984 7.07031 4.86328C6.76562 5.38672 6.61328 6.39844 6.61328 7.89844V11.0391C6.61328 12.5547 6.76172 13.5703 7.05859 14.0859C7.34766 14.6016 7.89844 14.8594 8.71094 14.8594C9.52344 14.8594 10.1133 14.6875 10.4805 14.3438C10.8477 14 11.0781 13.4336 11.1719 12.6445L15.1562 13.125C15.0781 14.6484 14.6562 15.8242 13.8906 16.6523C12.8516 17.7383 11.1484 18.2852 8.78125 18.293C6.3125 18.3008 4.58594 17.6641 3.60156 16.3828C3.11719 15.7422 2.78516 15.0547 2.60547 14.3203C2.42578 13.5859 2.33984 12.6055 2.34766 11.3789V7.55859ZM17.3008 18V15.2109L23.7812 4.32422H17.6055V0.867188H28.5977V3.64453L22.1172 14.543H28.9375V18H17.3008ZM10.3398 40.5898L8.62891 34.8125L6.88281 40.5898H10.3398ZM11.3477 43.9766H5.875L4.96094 47H0.355469L6.51953 29.8672H10.668L16.8672 47H12.2617L11.3477 43.9766ZM22.0938 37.1328H24.1797C24.9297 37.1328 25.4531 36.9922 25.75 36.7109C26.0469 36.4297 26.1953 35.9219 26.1953 35.1875C26.1953 34.4531 26.0469 33.9453 25.75 33.6641C25.4531 33.3828 24.9297 33.2422 24.1797 33.2422H22.0938V37.1328ZM22.1641 40.3789V47H17.8984V29.8672H24.6133C25.8164 29.8672 26.7656 29.9609 27.4609 30.1484C29.4219 30.6875 30.4102 32.3203 30.4258 35.0469C30.4336 36.5156 30.2109 37.6328 29.7578 38.3984C29.3047 39.1641 28.543 39.7109 27.4727 40.0391L31.1641 47H26.4414L23.3125 40.3789H22.1641Z"
        fill="black"
      />
      <path
        d="M50.9062 33.457L56.6602 15.4102H60.6211L54.8672 33.457H50.9062Z"
        fill="black"
      />
    </svg>
  );
};
