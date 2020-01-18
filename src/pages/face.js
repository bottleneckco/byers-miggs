import React from "react";
import styled from "styled-components";

import CameraView from "../components/CameraView";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1``;

function FacePage() {
  return (
    <Layout>
      <SEO title="Face" />
      <Wrapper>
        <Title>Say cheese.</Title>
        <CameraView />
      </Wrapper>
    </Layout>
  );
}

export default FacePage;
