import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";

const MySlice = ({ slice }) => (
  <BlogLists>
    {slice?.items?.map((item, i) => (
      <a key={`item.link-${i}`} href={Link.url(item.link)}>
        <img
          src={item.thumbnail.url}
          alt={item.thumbnail.alt}
          key={`img-${i}`}
        />
        <RichText render={item.title} key={`rich-text-${i}`} />
        <RichText render={item.excerpt} key={`rich-text-${i}`} />
      </a>
    ))}
  </BlogLists>
);

export default MySlice;

const BlogLists = styled.section`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  width: min(1200px, 80%);
  margin: 0 auto;

  @media ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakpoints.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }
`;
