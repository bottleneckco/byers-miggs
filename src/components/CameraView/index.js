import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

import Spinner from "../spinner";
import azureCognitiveVision from "../../utils/azure-cognitive-vision";

import useCameraViewState from "./hooks/useCameraViewState";

const CameraViewWrapper = styled.div`
  display: grid;
`;

const Video = styled.video`
  grid-area: 1/1;
`;

const Canvas = styled.canvas`
  grid-area: 1/1;
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
    if (cameraViewState.isVideoReady) {
      return cameraViewState.face ? "" : "Move into the webcam view";
    }
    return "";
  };

  return (
    <CameraViewWrapper>
      {!cameraViewState.isVideoReady && <Spinner />}
      <Video ref={cameraViewState.videoRef} />
      <Canvas ref={cameraViewState.canvasRef} />
      <span>{renderWebCamMsg()}</span>
      <p>{camViewErr !== null ? camViewErr : ""}</p>
      <p>
        {isFetching
          ? "Sending your image to our highly volatile mechatron to calculate your results"
          : ""}
      </p>
      {/* <button onClick={azure}>Send</button> */}
    </CameraViewWrapper>
  );
}

export default CameraView;
