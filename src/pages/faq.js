import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../components/layout";
import heroImage from "../images/standing-17.svg";
import FAQ from "../components/faq";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeroImageWrapper = styled.div`
  padding: 70px;
  background-color: #ffa437;
`;

const HeroImage = styled.img``;

const Content = styled.div`
  padding: 70px;
`;
const FAQList = styled.div``;

const Title = styled.h1`
  margin: 0;
`;

function FAQPage() {
  return (
    <Layout>
      <Wrapper>
        <HeroImageWrapper>
          <HeroImage src={heroImage} />
        </HeroImageWrapper>
        <Content>
          <Title>Frequently Asked Questions</Title>
          <FAQList>
            <FAQ question="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
              Aenean nec magna luctus, porttitor neque at, aliquet nulla. Mauris
              sagittis venenatis felis ultricies ultrices. Pellentesque varius
              scelerisque sapien id efficitur. Quisque in augue at dolor egestas
              auctor. Etiam in justo et lectus efficitur ornare et sit amet
              risus. Sed ut cursus sapien, at laoreet urna. Cras neque enim,
              fringilla sed ultrices a, vestibulum id massa.
            </FAQ>
            <FAQ question="Quisque commodo pellentesque suscipit. Etiam blandit a justo id sollicitudin.">
              Donec mattis iaculis felis quis lacinia. Donec auctor tempor eros
              et blandit. Duis a egestas tortor. Sed tincidunt maximus maximus.
              Maecenas malesuada aliquet aliquet. Nulla ut quam ipsum. Morbi
              pellentesque ex sed pretium auctor.
            </FAQ>
            <FAQ question="Mauris hendrerit finibus nisi ut porttitor. Nulla pulvinar neque id cursus efficitur.">
              Pellentesque efficitur dui vel tempus efficitur. Sed ipsum ligula,
              pretium quis dui a, aliquet consequat mauris. Vestibulum eu lectus
              condimentum, blandit libero lobortis, porttitor lectus. Quisque in
              efficitur massa. Praesent risus urna, faucibus a pellentesque id,
              iaculis at augue. Fusce cursus placerat urna, vitae iaculis nisi
              vestibulum sit amet. Praesent eget faucibus risus, id interdum
              lacus. In pretium hendrerit sodales. Nulla facilisi. Morbi viverra
              eros non felis aliquet tempus.
            </FAQ>
            <FAQ question="Fusce nec efficitur nulla. Aliquam aliquam odio nec quam pulvinar pharetra.">
              Ut quis euismod turpis. Morbi quam urna, ultrices ut orci vitae,
              posuere auctor dolor. Duis sit amet euismod sem. Aliquam nibh
              nisl, laoreet eget dui ut, tempus tempor lacus. Fusce interdum
              tristique elit, ut imperdiet est fermentum a. Maecenas maximus
              neque dui, at dictum sapien tempus et. Fusce semper consectetur
              mi, in ornare nisl tincidunt nec. Suspendisse ut dictum lorem.
              Maecenas leo felis, molestie non nulla dictum, tristique tristique
              augue. Pellentesque lacinia at purus vel volutpat. Donec pretium
              pharetra erat non tincidunt. Ut non sem lorem. Donec mi dolor,
              tempus vitae venenatis quis, faucibus ut lacus.
            </FAQ>
            <FAQ question="Phasellus quis pellentesque sapien.">
              Donec vitae tristique risus, ut accumsan sem. Nulla tempus nisi
              iaculis lectus scelerisque, ac egestas neque aliquam. Maecenas
              porta lacus at odio luctus fermentum. Integer scelerisque nisi
              eget cursus lobortis. Nullam nec tortor tristique, placerat ante
              eu, commodo elit. Pellentesque blandit ultricies velit eu rutrum.
            </FAQ>
          </FAQList>
        </Content>
      </Wrapper>
    </Layout>
  );
}

export default FAQPage;
