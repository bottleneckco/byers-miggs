import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ArrowButton from "../components/arrowButton";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  text-align: center;
`;

const Counter = styled.h1`
  color: ${props => props.theme.grey};
  margin: 0;
`;

const CounterText = styled(Counter)`
  color: ${props => props.theme.black};
`;

const Tagline = styled.p`
  color: ${props => props.theme.black};
  margin: 1rem 0 0;
  text-align: center;
`;

const TestimonialList = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  margin: 2rem auto;
  max-width: 90%;

  @media (max-width: ${props => props.theme.breakMedium}) {
    grid-auto-flow: row;
  }
`;

function TestimonialSection({ children }) {
  return (
    <StyledSection>
      <Counter>999,999,999</Counter>
      <CounterText>tests taken so far</CounterText>
      <Tagline>
        Quisque gravida eget dignissim pretium pharetra magnis in nunc.
      </Tagline>
      <TestimonialList>{children}</TestimonialList>
      <ArrowButton to="/face" />
    </StyledSection>
  );
}

TestimonialSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestimonialSection;
