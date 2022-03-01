import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";

const MySlice = ({ slice }) => (
  <HeroContainer>
    <HeroContent>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <HeadingOne>Template slice, update me!</HeadingOne>
      )}

      {slice.primary.description ? (
        <RichText render={slice.primary.description} />
      ) : (
        <h3>Template slice, update me!</h3>
      )}
    </HeroContent>
    <hr style={{ width: "100%", marginTop: "60px" }} />
  </HeroContainer>
);

export default MySlice;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  width: min(1400px, 80%);

  img {
    border-radius: 10px;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  margin-bottom: 50px;

  h3 {
    font-weight: 300;
    margin-top: 1.5rem;
  }

  @media ${breakpoints.lg} {
    margin-right: 10%;
    margin-bottom: 0;
  }
`;
