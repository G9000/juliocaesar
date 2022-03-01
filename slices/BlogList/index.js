import React from "react";
import { RichText } from "prismic-reactjs";
import { Link as PrismicLink } from "prismic-reactjs";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";
import Link from "next/link";
import Image from "next/image";

const MySlice = ({ slice }) => (
  <BlogLists>
    {slice?.items?.map((item, i) => (
      <Link
        key={`item.linking-${i}`}
        href={PrismicLink.url(item.linking)}
        passHref
      >
        <a>
          <Image
            src={item.thumbnail.url}
            alt={item.thumbnail.alt}
            key={`img-${i}`}
            layout="intrinsic"
            width={600}
            height={400}
          />
          <div className="bloglist-content">
            <RichText
              render={item.title}
              key={`rich-text-${i}`}
              className="bloglist-content-title"
            />
            <RichText render={item.excerpt} key={`rich-text-${i}`} />
          </div>
        </a>
      </Link>
    ))}
  </BlogLists>
);

export default MySlice;

const BlogLists = styled.section`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;
  width: min(1400px, 80%);
  margin: 0 auto;

  @media ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakpoints.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  img {
    width: 100%;
  }

  .bloglist-content {
    margin-top: 40px;
  }
`;
