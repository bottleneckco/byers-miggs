import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const ArrowButton = ({ to }) => {
  const Button = styled.button`
    display: flex;
    align-items: center;
    outline: 1px solid black;
    text-decoration: none;
    font-weight: 700;
    background: none;
    border: 1px solid ${props => props.theme.black};
    padding: 18px 30px;
  `;

  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <Button>
        Take the Test
        <div style={{ display: "inline-block", padding: "5px 0px 0px 10px" }}>
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
        </div>
      </Button>
    </Link>
  );
};

export default ArrowButton;
