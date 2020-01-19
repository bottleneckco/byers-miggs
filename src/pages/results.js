import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import seedrandom from "seedrandom";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Trait from "../components/Trait";

const testData = {
  age: 18,
  gender: "male",
  // smile: 0,
  // facialHair: {
  //   moustache: 0.1,
  //   beard: 0.1,
  //   sideburns: 0.1,
  // },
  // glasses: "ReadingGlasses",
  // headPose: { roll: -3, yaw: -0.1, pitch: 1.6 },
  // emotion: {
  //   anger: 0,
  //   contempt: 0,
  //   disgust: 0,
  //   fear: 0,
  //   happiness: 0,
  //   neutral: 0.989,
  //   sadness: 0.011,
  //   surprise: 0,
  // },
  hair: { bald: 0.27, invisible: false }, // there is another array here that has hairColor
};

const StyledWrapper = styled.div`
  display: grid;
  grid-template:
    "image text"
    / 30% auto;
  padding-top: 5rem;
  min-height: 100vh;

  @media (max-width: ${props => props.theme.breakLarge}) {
    padding-top: 8rem;
  }

  @media (max-width: ${props => props.theme.breakSmall}) {
    padding-top: 11rem;
  }
`;

const ImageSection = styled.div`
  background: ${props => props.theme.orange};
  text-align: center;
  border-right: 1px solid ${props => props.theme.black};
`;

const WideHeading = styled.h1`
  margin: 0;
  letter-spacing: 1rem;
  color: ${props => props.theme.white};
`;

const TextSection = styled.div`
  margin: 0 2rem;
  max-width: 600px;
`;

const SubHeading = styled.h6`
  margin: 2rem 0 0.5rem;
  color: ${props => props.theme.grey};
  text-transform: uppercase;
`;

const Heading = styled.h1`
  margin: 0;
`;

function Results({ location }) {
  const [luckyNum, setLuckyNum] = useState(-1);

  useEffect(() => {
    // run on default componentDidMount
    let data = testData;
    if (location.state !== null) {
      data = location.state.faceAttributes;
    }

    const obj = { age: data.age, gender: data.gender, hair: data.hair };
    let rng = seedrandom(JSON.stringify(obj));
    const num = parseInt((rng() * 1000) % 16);
    setLuckyNum(num);
  }, [luckyNum, setLuckyNum]);

  return (
    <Layout>
      <SEO title="Results" />
      <StyledWrapper>
        <ImageSection>
          {/* Insert humaaan here */}
          <WideHeading>HZAP</WideHeading>
        </ImageSection>
        <TextSection>
          <SubHeading>Personality Type</SubHeading>
          <Heading>HZAP &#8212; &ldquo;The Architect&rdquo;</Heading>
          <SubHeading>Individual Traits</SubHeading>
          <Trait />
          <SubHeading>About Yourself</SubHeading>
          <p>
            Sit ipsum facilisi nam non. Sit risus, facilisis sit massa. Nunc,
            dui, sed interdum enim. Odio sem elit et sapien, et. Congue erat
            risus adipiscing pellentesque blandit mollis dictum nulla.
          </p>
          <p>{luckyNum !== -1 ? luckyNum : ""}</p>
        </TextSection>
      </StyledWrapper>
    </Layout>
  );
}

Results.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Results;
