import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";
import Image from "next/image";

const MySlice = ({ slice }) => (
  <HeroContainer>
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
    <Image
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
      layout="intrinsic"
      width={800}
      height={550}
    />
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
    margin-bottom: 200px;
  }

  img {
    border-radius: 10px;
  }
`;

const HeroContent = styled.div`
  width: min(600px, 100%);
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
