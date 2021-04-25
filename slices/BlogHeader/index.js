import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";

const MySlice = ({ slice }) => (
  <BlogHeader>
    <div>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h1>Template slice, update me!</h1>
      )}

      {slice.primary.description ? (
        <RichText render={slice.primary.description} />
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
  width: min(1200px, 80%);
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;

  div {
    width: min(60ch, 80%);
    margin: 0 auto;
    padding: 2.5rem 0;
  }
`;
