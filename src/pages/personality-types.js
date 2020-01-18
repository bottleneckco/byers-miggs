import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import Layout from "../components/layout";
import Personality from "../components/personality";
import heroImage from "../images/standing-17.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 50px 0;
  font-size: 48px;
  text-align: center;
`;

const PersonalityGrid = styled.div`
  display: grid;

  ${breakpoint("mobile")`
    grid-template-columns: 1fr;
  `}

  ${breakpoint("tablet")`
    grid-template-columns: 1fr 1fr;
  `}

  ${breakpoint("desktop")`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

`;

function PersonalityTypesPage() {
  return (
    <Layout>
      <Wrapper>
        <Title>Personality Types</Title>
        <PersonalityGrid>
          <Personality image={heroImage} title="Architect" code="ABCD">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Personality>
        </PersonalityGrid>
      </Wrapper>
    </Layout>
  );
}
export default PersonalityTypesPage;
