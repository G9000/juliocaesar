import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import styled from "@emotion/styled";

const MySlice = ({ slice }) => (
  <ContactSection>
    <div>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
      <a href={Link.url(slice.primary.Contact)}>
        <RichText render={slice.primary.ContactLabel} />
      </a>
    </div>
  </ContactSection>
);

export default MySlice;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  width: min(1200px, 80%);
  height: auto;
  margin: 100px auto;

  a {
    display: inline-flex;
    background: #f7e3fd;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    transition: all 300ms ease;
    margin-top: 1.5rem;

    :hover {
      background: #87479d;
      color: whitesmoke;
    }

    h6 {
      margin: 0;
    }
  }
`;
