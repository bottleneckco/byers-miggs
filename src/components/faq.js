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
        <FaqQuestion question="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          Aenean nec magna luctus, porttitor neque at, aliquet nulla. Mauris
          sagittis venenatis felis ultricies ultrices. Pellentesque varius
          scelerisque sapien id efficitur. Quisque in augue at dolor egestas
          auctor. Etiam in justo et lectus efficitur ornare et sit amet risus.
          Sed ut cursus sapien, at laoreet urna. Cras neque enim, fringilla sed
          ultrices a, vestibulum id massa.
        </FaqQuestion>
        <FaqQuestion question="Quisque commodo pellentesque suscipit. Etiam blandit a justo id sollicitudin.">
          Donec mattis iaculis felis quis lacinia. Donec auctor tempor eros et
          blandit. Duis a egestas tortor. Sed tincidunt maximus maximus.
          Maecenas malesuada aliquet aliquet. Nulla ut quam ipsum. Morbi
          pellentesque ex sed pretium auctor.
        </FaqQuestion>
        <FaqQuestion question="Mauris hendrerit finibus nisi ut porttitor. Nulla pulvinar neque id cursus efficitur.">
          Pellentesque efficitur dui vel tempus efficitur. Sed ipsum ligula,
          pretium quis dui a, aliquet consequat mauris. Vestibulum eu lectus
          condimentum, blandit libero lobortis, porttitor lectus. Quisque in
          efficitur massa. Praesent risus urna, faucibus a pellentesque id,
          iaculis at augue. Fusce cursus placerat urna, vitae iaculis nisi
          vestibulum sit amet. Praesent eget faucibus risus, id interdum lacus.
          In pretium hendrerit sodales. Nulla facilisi. Morbi viverra eros non
          felis aliquet tempus.
        </FaqQuestion>
        <FaqQuestion question="Fusce nec efficitur nulla. Aliquam aliquam odio nec quam pulvinar pharetra.">
          Ut quis euismod turpis. Morbi quam urna, ultrices ut orci vitae,
          posuere auctor dolor. Duis sit amet euismod sem. Aliquam nibh nisl,
          laoreet eget dui ut, tempus tempor lacus. Fusce interdum tristique
          elit, ut imperdiet est fermentum a. Maecenas maximus neque dui, at
          dictum sapien tempus et. Fusce semper consectetur mi, in ornare nisl
          tincidunt nec. Suspendisse ut dictum lorem. Maecenas leo felis,
          molestie non nulla dictum, tristique tristique augue. Pellentesque
          lacinia at purus vel volutpat. Donec pretium pharetra erat non
          tincidunt. Ut non sem lorem. Donec mi dolor, tempus vitae venenatis
          quis, faucibus ut lacus.
        </FaqQuestion>
        <FaqQuestion question="Phasellus quis pellentesque sapien.">
          Donec vitae tristique risus, ut accumsan sem. Nulla tempus nisi
          iaculis lectus scelerisque, ac egestas neque aliquam. Maecenas porta
          lacus at odio luctus fermentum. Integer scelerisque nisi eget cursus
          lobortis. Nullam nec tortor tristique, placerat ante eu, commodo elit.
          Pellentesque blandit ultricies velit eu rutrum.
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
