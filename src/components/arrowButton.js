import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: inline-block;
  border: 1px solid ${props => props.theme.black};
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    svg {
      transform: translateX(10%);
    }
  }

  h4 {
    display: inline-block;
    margin: 0;
    vertical-align: middle;
  }
`;

const Svg = styled.svg`
  padding-left: 10px;
  vertical-align: middle;
  transition: transform 200ms ease-out;
`;

const ArrowButton = ({ to }) => {
  return (
    <Wrapper to={to}>
      <h4>Take the Test</h4>
      <Svg
        width="40"
        height="18"
        viewBox="0 0 41 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 10.7914L40 10.7914"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 1L40 10.7915L30 20.5829"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Wrapper>
  );
};

ArrowButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ArrowButton;
