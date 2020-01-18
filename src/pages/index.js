import React from "react";
import styled from "styled-components";

import SEO from "../components/seo";
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
        <Testimonial author="Robert Downey Jr." bgColor="blue">
          “It’s so incredible to finally be understood. I used to not know who I
          am but after taking this test. I can finally see my true self!”
        </Testimonial>
        <Testimonial author="Benedict Cumberbatch" bgColor="orange">
          “Mindblowing.”
        </Testimonial>
        <Testimonial author="Miko Sakaimoto" bgColor="pink">
          “しないでください。 それは私の人生を永遠に台無しにしました。
          私は自分が本当に誰なのか決して知らないことを望みました。
          妻、子供、家を失いました。 このサイトは私の人生を破壊しました！”
        </Testimonial>
      </TestimonialSection>

      <FAQ id="faq" />
    </StyledLanding>
  </Layout>
);

export default IndexPage;
