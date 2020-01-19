import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 12rem auto;
  align-items: center;
  padding: 20px;
  text-align: center;
  border: 1px solid ${props => props.theme.black};
`;

const Image = styled.img`
  width: 100%;
  max-height: 100%;
`;

const Info = styled.div`
  align-self: start;
`;

const Code = styled.span`
  color: ${props => props.theme.grey};
`;

const Description = styled.p`
  margin-bottom: 0;
`;

function Personality(props) {
  const { image, title, code, children } = props;

  return (
    <Wrapper>
      <Image src={image} />
      <Info>
        <h3>{title}</h3>
        <Code>{code}</Code>
        <Description>{children}</Description>
      </Info>
    </Wrapper>
  );
}

Personality.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Personality;
