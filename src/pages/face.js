import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as faceApi from "face-api.js";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Spinner from "../components/spinner";
import azureCognitiveVision from "../utils/azure-cognitive-vision";
import getCanvasBlob from "../utils/get-canvas-blob";

const BOX_LINE_COLOR = "darkcyan";
const BOX_LINE_WIDTH = 2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1``;

const CameraViewWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Video = styled.video`
  grid-area: 1/1;
`;

const Canvas = styled.canvas`
  grid-area: 1/1;
`;

function getMostLikelyExpression(obj) {
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}

function useCameraViewState() {
  const [face, setFace] = useState(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [stream, setStream] = useState(null);
  const [camViewErr, setCamViewErr] = useState(null);

  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  // Load models
  useEffect(() => {
    async function loadFaceApiModels() {
      await faceApi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceApi.nets.faceExpressionNet.loadFromUri("/models");
      console.log("Loaded models");
    }
    loadFaceApiModels();
  }, []);

  // Setup HTML5 Camera, runs
  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setStream(stream);
      } catch (err) {
        console.log(err.message);
        if (err.message === "Permission denied") {
          setCamViewErr(
            "The app requires permission to the camera for it to run. Please allow it and refresh."
          );
        } else {
          setCamViewErr(
            "The app went bonkers. You can refresh the page or wait it out."
          );
        }
      }
    }

    setupCamera();
  }, []);

  // Video element handlers
  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    const loadedCallback = () => setIsVideoReady(true);

    videoRef.current.addEventListener("loadeddata", loadedCallback);
    return () =>
      videoRef.current.removeEventListener("loadeddata", loadedCallback);
  }, [videoRef]);

  // Draw face
  useEffect(() => {
    const displaySize = {
      width: videoRef.current.videoWidth,
      height: videoRef.current.videoHeight,
    };

    faceApi.matchDimensions(canvasRef.current, displaySize);
    if (face) {
      const { detection, expressions } = face;
      new faceApi.draw.DrawBox(detection.box, {
        boxColor: BOX_LINE_COLOR,
        lineWidth: BOX_LINE_WIDTH,
        label: `${detection.score.toFixed(2)}\n${getMostLikelyExpression(
          expressions
        ).toUpperCase()}`,
      }).draw(canvasRef.current);
    }
  }, [face]);

  async function detectFaces() {
    const detectedFace = await faceApi
      .detectSingleFace(
        videoRef.current,
        new faceApi.TinyFaceDetectorOptions({
          inputSize: 128,
          scoreThreshold: 0.3,
        })
      )
      .withFaceExpressions();
    setFace(detectedFace);
  }

  // Detect face
  useEffect(() => {
    // This has to be done this way!!
    if (!isVideoReady || !videoRef.current) {
      return;
    }
    function callback() {
      if (!isVideoReady || !videoRef.current) {
        return;
      }
      detectFaces();
      window.requestAnimationFrame(callback);
    }
    const handle = window.requestAnimationFrame(callback);
    return () => window.cancelAnimationFrame(handle);
  }, [videoRef, isVideoReady]);

  async function captureImage() {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    canvas
      .getContext("2d")
      .drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    return getCanvasBlob(canvas);
  }

  return {
    face,
    setFace,
    isVideoReady,
    setIsVideoReady,
    canvasRef,
    videoRef,
    captureImage,
    stream,
    camViewErr,
  };
}

function CameraView() {
  // attr from useCameraViewState that are states are also states here
  const cameraViewState = useCameraViewState();
  const { face, camViewErr } = cameraViewState;
  const [isFetching, setIsFetching] = useState(false);

  // const { face } = cameraViewState;

  async function azure() {
    console.log("Fetching images from azure");
    const imageData = await cameraViewState.captureImage();

    const faces = await azureCognitiveVision(imageData);
    if (faces === undefined) {
      // For some reason, faces will sometimes be undefined but await doesn't stop it.
      setTimeout(() => {}, 1000);
    }

    const { faceId, faceLandmarks, faceRectangle, faceAttributes } = faces[0];
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

  return (
    <CameraViewWrapper>
      {!cameraViewState.isVideoReady && <Spinner />}
      <Video ref={cameraViewState.videoRef} />
      <Canvas ref={cameraViewState.canvasRef} />
      <span>
        {cameraViewState.face ? "" : "Please move into the view of the webcam"}
      </span>
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
