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
  height: 100vh;

  @media (max-width: ${props => props.theme.breakMedium}) {
    grid-template:
      "image" 50%
      "text" auto;
  }
`;

const TextSection = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 3rem 0;
`;

const Title = styled.h1`
  margin: 0;
`;

const Tagline = styled.p`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const ImageSection = styled.div`
  grid-area: image;
  position: relative;
  display: grid;
  grid-template:
    "image1"
    "image2";
  padding-top: 5rem;
  background-color: #3792ff;

  @media (max-width: ${props => props.theme.breakLarge}) {
    padding-top: 8rem;
  }

  @media (max-width: ${props => props.theme.breakMedium}) {
    grid-template: "image1 image2";
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
      <TextSection>
        <Title>Vitae velit faucibus fusce semper auctor lectus.</Title>
        <Tagline>
          Gravida dui porttitor mauris convallis turpis tincidunt turpis
          suspendisse massa.
        </Tagline>
        <ArrowButton to="/face" />
      </TextSection>
      <ImageSection>
        <TopImage src={standing19} flip />
        <BottomImage src={standing18} />
      </ImageSection>
    </Wrapper>
  );
}

export default WelcomeSection;
