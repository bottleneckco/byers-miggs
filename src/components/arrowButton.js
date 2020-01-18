import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const IconWrapper = styled.div`
  display: inline-block;
  padding: 5px 0px 0px 10px;
  transition: transform 40ms ease-in-out;
`;

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  outline: 1px solid black;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid ${props => props.theme.black};
  padding: 18px 30px;
  transition: background-color 20ms;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.orange};

    ${IconWrapper} {
      transform: translateX(10%);
    }

    svg {
      path {
        stroke: ${props => props.theme.white};
      }
    }
  }
`;

const ArrowButton = ({ to }) => {
  return (
    <Wrapper to={to}>
      Take the Test
      <IconWrapper>
        <svg
          width="41"
          height="22"
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
        </svg>
      </IconWrapper>
    </Wrapper>
  );
};

export default ArrowButton;
