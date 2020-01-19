import React from "react";
import styled from "styled-components";
import standing18 from "../images/standing-18.svg";
import standing19 from "../images/standing-19.svg";
import ArrowButton from "../components/arrowButton";

const Wrapper = styled.div`
  display: grid;
  grid-template:
    "text image"
    / auto 40%;
  min-height: calc(100vh - 5rem);

  @media (max-width: ${props => props.theme.breakLarge}) {
    min-height: calc(100vh - 7.7rem);
    margin-top: -0.3rem;
  }

  @media (max-width: ${props => props.theme.breakMedium}) {
    display: block;
    margin-top: -0.4rem;
  }

  @media (max-width: ${props => props.theme.breakSmall}) {
    min-height: calc(100vh - 11rem);
  }
`;

const TextSection = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 3rem;

  @media (max-width: ${props => props.theme.breakMedium}) {
    padding: 2rem;
  }

  @media (max-width: ${props => props.theme.breakSmall}) {
    display: block;
  }
`;

const Title = styled.h1`
  margin: 0;
`;
const ImageSection = styled.div`
  grid-area: image;
  position: relative;
  display: grid;
  grid-template:
    "image1"
    "image2";
  background-color: #3792ff;

  @media (max-width: ${props => props.theme.breakMedium}) {
    grid-template: "image1 image2";
    height: 25rem;
  }
`;

const Image = styled.img`
  transform: rotate(${props => (props.flip ? "180" : "0")}deg) scaleX(-1);
  height: 40%;

  @media (max-width: ${props => props.theme.breakMedium}) {
    height: 70%;
    max-width: 80%;
  }
`;

const TopImage = styled(Image)`
  grid-area: image1;
  justify-self: start;
`;

const BottomImage = styled(Image)`
  grid-area: image2;
  justify-self: end;
  align-self: end;
`;

function WelcomeSection() {
  return (
    <Wrapper>
      <ImageSection>
        <TopImage src={standing19} flip />
        <BottomImage src={standing18} />
      </ImageSection>
      <TextSection>
        <Title>Learn about your own personality in just one click.</Title>
        <p>
          Our advanced facial recognition software is trained using machine
          learning to recognize different personalities just from facial
          expressions alone.
        </p>
        <ArrowButton to="/face" />
      </TextSection>
    </Wrapper>
  );
}

export default WelcomeSection;
