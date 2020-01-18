import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import standing18 from "../images/standing-18.svg";
import standing19 from "../images/standing-19.svg";
import ArrowButton from "../components/arrowButton";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Title = styled.h1`
  margin: 0;
`;
const Tagline = styled.p`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 130px;
`;

const ImageSection = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
  background-color: #3792ff;
`;

const Image = styled.div`
  grid-area: ${props => props.gridArea};
  transform: rotate(${props => (props.flip ? "180" : "0")}deg);
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 100%;
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
        <Image gridArea="2/2" image={standing18} />
        <Image gridArea="1/1" image={standing19} flip />
      </ImageSection>
    </Wrapper>
  );
}

export default WelcomeSection;
