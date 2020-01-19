import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 5fr auto auto 1fr;
  align-items: center;
  border: 1px solid ${props => props.theme.black};
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  color: ${props => props.theme.black};
  text-align: center;
`;

const Code = styled.span`
  color: ${props => props.theme.grey};
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  color: ${props => props.theme.black};
  align-self: start;
`;

function Personality(props) {
  const { image, title, code, children } = props;

  return (
    <Wrapper>
      <Image src={image} />
      <Title>{title}</Title>
      <Code>{code}</Code>
      <Description>{children}</Description>
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
