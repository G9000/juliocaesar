import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";

const MySlice = ({ slice }) => (
  <HeroContainer>
    <div>
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </div>
    <HeroContent>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h1>Template slice, update me!</h1>
      )}

      {slice.primary.description ? (
        <RichText render={slice.primary.description} />
      ) : (
        <h3>Template slice, update me!</h3>
      )}
    </HeroContent>
  </HeroContainer>
);

export default MySlice;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  width: min(1400px, 80%);
  align-items: center;

  @media ${breakpoints.lg} {
    flex-direction: row;
    gap: 2.5rem;
    margin-bottom: 200px;
  }

  * {
    width: 100%;
  }

  img {
    max-width: 800px;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const HeroContent = styled.div`
  width: 100%;

  h3 {
    font-weight: 300;
    margin-top: 1.5rem;
    max-width: 45ch;
  }
`;
