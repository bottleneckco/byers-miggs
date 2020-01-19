import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import Layout from "../components/layout";
import Personality from "../components/personality";
import heroImage from "../images/standing-17.svg";
import personalities from "../personalities.json";
import { useStaticQuery, graphql } from "gatsby";

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

  const getImage = name => allFile.edges.find(edge => edge.node.name === name);

  return (
    <Layout>
      <Wrapper>
        <Title>Personality Types</Title>
        <PersonalityGrid>
          {personalities.map(p => (
            <Personality
              image={getImage(p.image).node.publicURL}
              key={p.title}
              title={p.title}
              code={p.code}
            >
              {p.description}
            </Personality>
          ))}
        </PersonalityGrid>
      </Wrapper>
    </Layout>
  );
}
export default PersonalityTypesPage;
