import React, { useEffect, useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import seedrandom from "seedrandom";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Trait from "../components/Trait";
import personalities from "../personalities.json";
import Spinner from "../components/spinner";

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

const Image = styled.img``;

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
  const [traitValues, setTraitValues] = useState([-1, -1, -1, -1]);

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

    setTraitValues([
      parseInt(((rng() * 1000) % 50) + 1),
      parseInt(((rng() * 1000) % 50) + 1),
      parseInt(((rng() * 1000) % 50) + 1),
      parseInt(((rng() * 1000) % 50) + 1),
    ]);
  }, []);

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "personalities" } }) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
    }
  `);

  if (luckyNum === -1) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  const chosenPersonality = personalities[luckyNum];
  const { title, code, description, image, traits } = chosenPersonality;

  const getImage = name => allFile.edges.find(edge => edge.node.name === name);
  const fucked = Math.round(((luckyNum + 1.0) / 16.0) * 50.0);
  return (
    <Layout>
      <SEO title="Results" />
      <StyledWrapper>
        <ImageSection>
          {/* Insert humaaan here */}
          <Image src={getImage(image).node.publicURL} />
          <WideHeading>{code}</WideHeading>
        </ImageSection>
        <TextSection>
          <SubHeading>Personality Type</SubHeading>
          <Heading>
            {code} &#8212; &ldquo;The {title}&rdquo;
          </Heading>
          <SubHeading>Individual Traits</SubHeading>
          <Trait
            labelLeft="Hot"
            labelRight="Not"
            color="orange"
            valueLeft={code[0] === "H" ? 100 - traitValues[0] : traitValues[0]}
          />
          <Trait
            labelLeft="Gen-Z"
            labelRight="Boomer"
            color="blue"
            valueLeft={code[1] === "Z" ? 100 - traitValues[1] : traitValues[1]}
          />
          <Trait
            labelLeft="Awkward Turtle"
            labelRight="Dunning-Kruger"
            color="pink"
            valueLeft={code[2] === "A" ? 100 - traitValues[2] : traitValues[2]}
          />
          <Trait
            labelLeft="Pretentious Hipster"
            labelRight="Basic white girl"
            color="grey"
            valueLeft={code[3] === "P" ? 100 - traitValues[3] : traitValues[3]}
          />
          <SubHeading>About Yourself</SubHeading>
          <p>{description} </p>
        </TextSection>
      </StyledWrapper>
    </Layout>
  );
}

Results.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Results;
