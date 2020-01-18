import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as faceApi from "face-api.js";
import { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
      await faceApi.nets.tinyFaceDetector.loadFromUri("./models");
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
      new faceApi.draw.DrawBox(face.box, {
        boxColor: BOX_LINE_COLOR,
        lineWidth: BOX_LINE_WIDTH,
        label: face.score.toFixed(2),
      }).draw(canvasRef.current);
    }
  }, [face]);

  async function detectFaces() {
    const detectedFace = await faceApi.detectSingleFace(
      videoRef.current,
      new faceApi.TinyFaceDetectorOptions({
        inputSize: 128,
        scoreThreshold: 0.3,
      })
    );
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

  return {
    face,
    setFace,
    isVideoReady,
    setIsVideoReady,
    canvasRef,
    videoRef,
  };
}

function CameraView() {
  const cameraViewState = useCameraViewState();
  return (
    <CameraViewWrapper>
      <Video ref={cameraViewState.videoRef} />
      <Canvas ref={cameraViewState.canvasRef} />
      <span>{cameraViewState.face ? "GOT PEOPLE" : "NO PEOPLE"}</span>
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
