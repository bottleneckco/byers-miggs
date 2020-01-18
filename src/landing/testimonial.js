import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.black};
  padding: 40px;
`;

const Quote = styled.blockquote`
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 25px;
`;

const AuthorImage = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  background-color: ${props => props.bgColor};
  margin: 20px 0;
`;

const Author = styled.span`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 20px;
`;

function Testimonial({ author, children }) {
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
      <AuthorImage
        src={edges[Math.floor(Math.random() * edges.length)].node.publicURL}
      />
      <Author>{author}</Author>
    </Wrapper>
  );
}

Testimonial.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Testimonial;
