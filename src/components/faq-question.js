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
  opacity: 0;
  height: 0px;

  @keyframes show {
    0% {
      opacity: 0;
      height: 0px;
      margin: 0;
    }

    100% {
      opacity: 1;
      height: auto;
    }
  }

  @keyframes hide {
    0% {
      opacity: 1;
      height: auto;
    }
    100% {
      opacity: 0;
      height: 0px;
      margin: 0;
    }
  }

  animation: 50ms ${props => (props.isOpen ? "show" : "hide")} forwards ease-in;
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
      <Content isOpen={isOpen}>{children}</Content>
    </StyledContainer>
  );
}

FaqQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FaqQuestion;
