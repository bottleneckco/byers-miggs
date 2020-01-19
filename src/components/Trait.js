import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
`;

const BarContainer = styled.div`
  display: grid;
  grid-template:
    "left bar right"
    / 2.5rem auto 2.5rem;
`;

const Bar = styled.div`
  grid-area: bar;
  height: 1.25rem;
  border: 1px solid ${props => props.theme.black};
  text-align: ${props => (props.right ? "right" : "left")};

  span {
    display: inline-block;
    width: ${props => props.value}%;
    height: 100%;
    background: ${props => props.theme[props.color]};
  }
`;

const Percentage = styled.p`
  margin: 0;
  text-align: ${props => (props.right ? "right" : "left")};
`;

const LabelsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Label = styled.h6`
  margin: 0;
  text-transform: uppercase;
  text-align: ${props => (props.right ? "right" : "left")};
`;

const Trait = ({ color, labelLeft, labelRight, valueLeft }) => {
  return (
    <StyledWrapper>
      <BarContainer>
        <Percentage>{valueLeft}%</Percentage>
        <Bar
          right={valueLeft < 50}
          color={color}
          value={valueLeft > 50 ? valueLeft : 100 - valueLeft}
        >
          <span></span>
        </Bar>
        <Percentage right>{100 - valueLeft}%</Percentage>
      </BarContainer>
      <LabelsContainer>
        <Label>{labelLeft}</Label>
        <Label right>{labelRight}</Label>
      </LabelsContainer>
    </StyledWrapper>
  );
};

export default Trait;
