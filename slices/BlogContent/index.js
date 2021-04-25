import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";

const MySlice = ({ slice }) => (
  <BlogContent>
    <RichText render={slice.primary.content} />
  </BlogContent>
);

export default MySlice;

const BlogContent = styled.section`
  display: flex;
  flex-direction: column;

  width: min(600px, 80%);
  margin: 100px auto;

  img {
    width: 100%;
  }

  a {
    color: #ce84e1;
    text-decoration: underline;
  }
`;
