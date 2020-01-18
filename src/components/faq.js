import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import heroImage from "../images/standing-17.svg";
import FaqQuestion from "./faq-question";

const Wrapper = styled.div`
  display: grid;
  grid-template:
    "hero title"
    "hero faq"
    / 35% auto;
  border-top: 1px solid ${props => props.theme.black};

  @media (max-width: ${props => props.theme.breakMedium}) {
    grid-template:
      "hero title"
      "faq faq"
      / 35% auto;
  }

  @media (max-width: ${props => props.theme.breakSmall}) {
    grid-template:
      "hero title"
      "faq faq"
      / 1fr auto;
  }
`;

const HeroImageWrapper = styled.div`
  grid-area: hero;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.orange};
  border-right: 1px solid ${props => props.theme.black};
`;

const HeroImage = styled.img`
  width: 100%;

  @media (max-width: ${props => props.theme.breakMedium}) {
    max-height: 10rem;
  }
`;

const Title = styled.h1`
  grid-area: title;
  margin: 0;
  padding: 2rem;

  @media (max-width: ${props => props.theme.breakMedium}) {
    padding: 1rem;
  }
`;

const FAQWrapper = styled.div`
  grid-area: faq;
`;

function FAQ({ id }) {
  return (
    <Wrapper id={id}>
      <HeroImageWrapper>
        <HeroImage src={heroImage} />
      </HeroImageWrapper>
      <Title>
        Frequently
        <br />
        Asked
        <br />
        Questions
      </Title>
      <FAQWrapper>
        <FaqQuestion question="Is this accurate?">
          Definitely. We wouldn’t waste time making this site beautiful if it
          wasn’t.
        </FaqQuestion>
        <FaqQuestion question="Should I use this site?">
          You already are. Might as well get through it.
        </FaqQuestion>
        <FaqQuestion question="Is this site GDPR-compliant?">
          Byers-Miggs is compliant with the 2018 European Union GDPR
          regulations.
        </FaqQuestion>
        <FaqQuestion question="Is my data secure?">
          Your data is stored in a secure facility with the latest AES-6144
          encryption.
        </FaqQuestion>
        <FaqQuestion question="What is your return policy?">
          We do not offer returns.
        </FaqQuestion>
      </FAQWrapper>
    </Wrapper>
  );
}

FAQ.defaultProps = {
  id: "",
};

FAQ.propTypes = {
  id: PropTypes.string,
};

export default FAQ;
