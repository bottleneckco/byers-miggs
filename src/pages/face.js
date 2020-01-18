import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as faceApi from "face-api.js";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
`;

const Video = styled.video`
  grid-area: 1/1;
`;

const Canvas = styled.canvas`
  grid-area: 1/1;
`;

function FacePage() {
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
      faceApi.draw.drawDetections(canvasRef.current, [face]);
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

  return (
    <Wrapper>
      <h1>THE FACE PAGE</h1>
      <Video ref={videoRef} />
      <Canvas ref={canvasRef} />
      <span>{face ? "GOT PEOPLE" : "NO PEOPLE"}</span>
    </Wrapper>
  );
}

export default FacePage;
