import React from "react";
import styled from "styled-components";

import CameraView from "../components/CameraView";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;

function FacePage() {
  return (
    <Layout>
      <SEO title="Face" />
      <Wrapper>
        <h1>Smile for the face scan!</h1>
        <CameraView />
      </Wrapper>
    </Layout>
  );
}

export default FacePage;
