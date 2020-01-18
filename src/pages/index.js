import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import SEO from "../components/seo";
import Image from "../components/image";
import Layout from "../components/layout";
import Testimonial from "../landing/testimonial";
import TestimonialSection from "../landing/testimonial-section";
import WelcomeSection from "../landing/welcome-section";
import FAQ from "../components/faq";

const StyledLanding = styled.div``;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledLanding>
      <WelcomeSection />
      <TestimonialSection id="testimonial-section">
        <Testimonial
          author="Ivan Tan &mdash; &ldquo;the Weeb&rdquo;"
          bgColor="blue"
        >
          “Aliquam commodo cras molestie tristique libero. Justo, in et donec
          orci viverra.”
        </Testimonial>
        <Testimonial
          author="Ivan Tan &mdash; &ldquo;the Weeb&rdquo;"
          bgColor="orange"
        >
          “Aliquam commodo cras molestie tristique libero. Justo, in et donec
          orci viverra.”
        </Testimonial>
        <Testimonial
          author="Ivan Tan &mdash; &ldquo;the Weeb&rdquo;"
          bgColor="pink"
        >
          “Aliquam commodo cras molestie tristique libero. Justo, in et donec
          orci viverra.”
        </Testimonial>
      </TestimonialSection>

      <FAQ id="faq" />
    </StyledLanding>
  </Layout>
);

export default IndexPage;
