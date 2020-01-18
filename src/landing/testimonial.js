import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
  align-items: center;
  max-width: 300px;
  padding: 1rem;
  border: 1px solid ${props => props.theme.black};
  text-align: center;
`;

const Quote = styled.blockquote`
  margin: 0;
`;

const AuthorImage = styled.div`
  position: relative;
  overflow: hidden;
  margin: 1rem auto;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: ${props => props.theme[props.bgColor]};

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8rem;
    height: 8rem;
  }
`;

const Author = styled.h6`
  margin: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

function Testimonial({ author, bgColor, children }) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "heads" } }) {
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
  const { edges } = allFile;

  return (
    <Wrapper>
      <Quote>{children}</Quote>
      <AuthorImage bgColor={bgColor}>
        <img
          src={edges[Math.floor(Math.random() * edges.length)].node.publicURL}
        />
      </AuthorImage>
      <Author>{author}</Author>
    </Wrapper>
  );
}

Testimonial.propTypes = {
  author: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Testimonial;
