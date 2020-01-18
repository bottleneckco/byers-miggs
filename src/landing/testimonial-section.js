import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Counter = styled.h1`
  color: ${props => props.theme.grey};
  margin: 0;
  padding: 0;
`;

const CounterText = styled(Counter)`
  color: ${props => props.theme.black};
`;

const Tagline = styled.span`
  color: ${props => props.theme.black};
  margin-top: 20px;
`;

const TestimonialList = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 16px;
  margin: 60px 0;
`;

const StyledLink = styled(Link)`
  border: 1px solid ${props => props.theme.black};
  padding: 18px 30px;
  text-decoration: none;
  font-weight: 700;
`;

function TestimonialSection({ children }) {
  return (
    <Wrapper>
      <Counter>999,999,999</Counter>
      <CounterText>tests taken so far</CounterText>
      <Tagline>
        Quisque gravida eget dignissim pretium pharetra magnis in nunc.
      </Tagline>
      <TestimonialList>{children}</TestimonialList>
      <StyledLink to="/face">Take the Test</StyledLink>
    </Wrapper>
  );
}

TestimonialSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestimonialSection;
