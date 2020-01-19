import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import Spinner from "../spinner";
import azureCognitiveVision from "../../utils/azure-cognitive-vision";

import useCameraViewState from "./hooks/useCameraViewState";

const Wrapper = styled.div`
  padding: 1rem;
  text-align: center;
`;

const CameraViewWrapper = styled.div`
  display: grid;
`;

const Video = styled.video.attrs(() => ({
  playsinline: true
}))`
  grid-area: 1/1;
  margin: 0 auto;

`;

const Canvas = styled.canvas`
  grid-area: 1/1;
  margin: 0 auto;
`;

function CameraView() {
  // attr from useCameraViewState that are states are also states here
  const cameraViewState = useCameraViewState();
  const { face, camViewErr } = cameraViewState;
  const [isFetching, setIsFetching] = useState(false);

  async function azure() {
    console.log("Fetching images from azure");
    let azureRes = [];

    while (azureRes.length === 0) {
      if (face !== null && face !== undefined) {
        const imageData = await cameraViewState.captureImage();
        azureRes = await azureCognitiveVision(imageData);
      }
    }

    const {
      faceId,
      faceLandmarks,
      faceRectangle,
      faceAttributes,
    } = azureRes[0];
    cameraViewState.stream.getTracks().forEach(track => track.stop());

    navigate("/results", {
      state: { faceAttributes },
    });
  }

  // try to send to azure automatically
  useEffect(() => {
    // for initial fetch
    if (!isFetching && face !== null && face !== undefined) {
      azure();
      setIsFetching(true);
    }
  }, [face, isFetching, setIsFetching]);

  const renderWebCamMsg = () => {
    if (camViewErr !== null) {
      return camViewErr;
    } else if (cameraViewState.isVideoReady && !isFetching) {
      return cameraViewState.face ? "" : "Move into the webcam view";
    } else {
      return "";
    }
  };

  return (
    <Wrapper>
      <CameraViewWrapper>
        {!cameraViewState.isVideoReady && <Spinner />}
        <Video ref={cameraViewState.videoRef} />
        <Canvas ref={cameraViewState.canvasRef} />
      </CameraViewWrapper>
      <p>{renderWebCamMsg()}</p>
      <p>
        {isFetching
          ? "Sending your image to our highly volatile mechatron to calculate your results"
          : ""}
      </p>
    </Wrapper>
  );
}

export default CameraView;
