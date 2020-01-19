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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 2rem auto;
  max-width: 90%;

  @media (max-width: ${props => props.theme.breakMedium}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

function TestimonialSection({ id, children }) {
  return (
    <StyledSection id={id}>
      <CountUp delay={0} end={999999999} separator=",">
        {({ countUpRef }) => <Counter ref={countUpRef} />}
      </CountUp>
      <CounterText>tests taken so far</CounterText>
      <Tagline>
        Join the millions of others who have discovered themselves right now.
      </Tagline>
      <TestimonialList>{children}</TestimonialList>
      <ArrowButton to="/face" />
    </StyledSection>
  );
}

TestimonialSection.defaultProps = {
  id: "",
};

TestimonialSection.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TestimonialSection;
