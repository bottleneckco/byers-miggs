import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as faceApi from "face-api.js";
import { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import azureCognitiveVision from "../utils/azure-cognitive-vision";
import getCanvasBlob from "../utils/get-canvas-blob";

const BOX_LINE_COLOR = "darkcyan";
const BOX_LINE_WIDTH = 2;

const Wrapper = styled.div``;

const CameraViewWrapper = styled.div`
  display: grid;
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

  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  // Setup HTML5 Camera
  useEffect(() => {
    async function setupCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setIsVideoReady(true);
    }
    setupCamera();
  }, []);

  // Load models
  useEffect(() => {
    async function loadFaceApiModels() {
      await faceApi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceApi.nets.faceExpressionNet.loadFromUri("/models");
      console.log("Loaded");
    }
    loadFaceApiModels();
  }, []);

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
    if (!isVideoReady || !videoRef.current) {
      return;
    }
    function callback() {
      detectFaces();
      window.requestAnimationFrame(callback);
    }
    const handle = window.requestAnimationFrame(callback);
    return () => window.cancelAnimationFrame(handle);
  }, [videoRef, isVideoReady]);

  async function captureImage() {
    var canvas = document.createElement("canvas");
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
  };
}

// function initStage() {
//   const [stage] = useState(1);

//   return {
//     stage,
//   };
// }

function CameraView() {
  const cameraViewState = useCameraViewState();
  // const [stage, setStage] = useState("abcd");

  async function azure() {
    const imageData = await cameraViewState.captureImage();
    console.log(imageData);
    const faces = await azureCognitiveVision(imageData);
    for (const {
      faceId,
      faceLandmarks,
      faceRectangle,
      faceAttributes,
    } of faces) {
      console.log(faceLandmarks);
      console.log(faceAttributes);
    }
  }

  return (
    <CameraViewWrapper>
      <Video ref={cameraViewState.videoRef} />
      <Canvas ref={cameraViewState.canvasRef} />
      <span>{cameraViewState.face ? "GOT PEOPLE" : "NO PEOPLE"}</span>
      <button onClick={azure}>Send</button>
    </CameraViewWrapper>
  );
}

function FacePage() {
  return (
    <Layout>
      <SEO title="Face" />
      <Wrapper>
        <h1>THE FACE PAGE</h1>
        <CameraView />
      </Wrapper>
    </Layout>
  );
}

export default FacePage;
