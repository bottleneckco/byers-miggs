import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import SEO from "../components/seo";
import Image from "../components/image";
import Layout from "../components/layout";
import Testimonial from "../landing/testimonial";
import TestimonialSection from "../landing/testimonial-section";
import FAQ from "../components/faq";

const StyledLanding = styled.div``;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledLanding>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <TestimonialSection>
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

      <FAQ />
    </StyledLanding>
  </Layout>
);

export default IndexPage;
