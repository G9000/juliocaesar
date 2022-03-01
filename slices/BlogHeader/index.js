import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";

const MySlice = ({ slice }) => (
  <BlogHeader>
    <div>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h1>Template slice, update me!</h1>
      )}

      {slice.primary.description ? (
        <div style={{ color: "#909090" }}>
          <RichText render={slice.primary.description} />
        </div>
      ) : (
        <p>start by editing this slice from inside the SliceMachine builder!</p>
      )}
    </div>
    <img src={slice.primary.Cover.url} alt={slice.primary.Cover.alt} />
  </BlogHeader>
);

export default MySlice;

const BlogHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: min(1400px, 80%);
  margin: 0 auto;
  text-align: center;

  @media ${breakpoints.lg} {
    margin-top: 100px;
  }

  div {
    width: min(65ch, 80%);
    margin: 0 auto;
    padding: 2.5rem 0;
  }
`;
