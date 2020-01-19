import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { graphql } from "gatsby";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ImageSection = styled.div`
  background-color: ${props => props.theme.orange};
`;
const Image = styled.img``;

const ContentSection = styled.div``;

const Category = styled.h6`
  color: ${props => props.theme.grey};
  text-transform: uppercase;
`;

const Title = styled.h1``;

const AboutYourself = styled.p``;

const SpectrumWrapper = styled.div``;

const SpectrumLabel = styled.span``;
const SpectrumValue = styled.span``;

function Spectrum(props) {
  const { labelLeft, labelRight, valueLeft } = props.trait;

  return (
    <SpectrumWrapper>
      <SpectrumValue>{valueLeft}</SpectrumValue>
      <SpectrumLabel>{labelLeft}</SpectrumLabel>
      <SpectrumLabel>{labelRight}</SpectrumLabel>
      <SpectrumValue>{1 - valueLeft}</SpectrumValue>
    </SpectrumWrapper>
  );
}

function PersonalityTemplate(props) {
  const { file } = props.data;
  const { personality } = props.pageContext;
  const { title, code, description, image, traits } = personality;
  console.log(personality);

  return (
    <Layout>
      <SEO title={title} />
      <Wrapper>
        <ImageSection>
          <Image src={file.publicURL} />
        </ImageSection>
        <ContentSection>
          <Category>Personality Type</Category>
          <Title>
            {code} - &quot;The {title}&quot;
          </Title>
          <Category>Individual Traits</Category>
          {traits.map(t => (
            <Spectrum key={t.toString()} trait={t} />
          ))}
          <Category>About Yourself</Category>
          <AboutYourself>{description}</AboutYourself>
        </ContentSection>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query($image: String!) {
    file(name: { eq: $image }) {
      id
      name
      publicURL
    }
  }
`;

export default PersonalityTemplate;
