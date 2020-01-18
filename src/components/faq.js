import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "question expand-button"
    "content content";
  align-items: center;

  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  padding: 20px;
  border: 1px solid ${props => props.theme.black};

  &:hover {
    cursor: pointer;
  }
  user-select: none;
`;

const Question = styled.h4`
  grid-area: question;
  margin: 0;
`;

const Content = styled.div`
  grid-area: content;
  margin-top: 20px;
`;

const ExpandIndicator = styled.span`
  grid-area: expand-button;
  background: none;
  border: none;
`;

function FAQ({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Question>{question}</Question>
      <ExpandIndicator>{isOpen ? "-" : "+"}</ExpandIndicator>
      {isOpen && <Content>{children}</Content>}
    </Wrapper>
  );
}

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FAQ;
