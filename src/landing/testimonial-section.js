import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ArrowButton from "../components/arrowButton";
import CountUp from "react-countup";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid ${props => props.theme.black};
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
      <CountUp delay={0} end={999999999} separator=",">
        {({ countUpRef }) => <Counter ref={countUpRef} />}
      </CountUp>
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
