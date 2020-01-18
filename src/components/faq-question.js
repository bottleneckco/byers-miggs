import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-areas:
    "question expand-button"
    "content filler";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-column-gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.black};
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${props => (!props.open ? props.theme.pink : "")};
    color: ${props => (!props.open ? props.theme.white : "")};
  }
`;

const Question = styled.h4`
  grid-area: question;
  margin: 0;
`;

const Content = styled.div`
  grid-area: content;
  margin-top: 0.5rem;
`;

const ExpandIndicator = styled.h4`
  grid-area: expand-button;
  background: none;
  border: none;
  margin: 0;
  font-weight: 400;
`;

function FaqQuestion({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledContainer onClick={() => setIsOpen(!isOpen)} open={isOpen}>
      <Question>{question}</Question>
      <ExpandIndicator>{isOpen ? "-" : "+"}</ExpandIndicator>
      {isOpen && <Content>{children}</Content>}
    </StyledContainer>
  );
}

FaqQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FaqQuestion;
