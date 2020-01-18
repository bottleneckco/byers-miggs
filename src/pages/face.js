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
  const [faces, setFaces] = useState([]);
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

  // Draw faces
  useEffect(() => {
    const displaySize = {
      width: videoRef.current.videoWidth,
      height: videoRef.current.videoHeight,
    };
    faceApi.matchDimensions(canvasRef.current, displaySize);
    faceApi.draw.drawDetections(canvasRef.current, faces);
  }, [faces]);

  async function detectFaces() {
    const facesArray = await faceApi.detectAllFaces(
      videoRef.current,
      new faceApi.TinyFaceDetectorOptions()
    );
    setFaces(facesArray);
  }

  // Detect faces
  useEffect(() => {
    function callback() {
      if (faces && faces.length > 0) {
        detectFaces();
      }
      window.requestAnimationFrame(callback);
    }
    const handle = window.requestAnimationFrame(callback);
    return () => window.cancelAnimationFrame(handle);
  }, [isVideoReady]);

  return (
    <Wrapper>
      <h1>THE FACE PAGE</h1>
      <Video ref={videoRef} />
      <Canvas ref={canvasRef} />
      <button onClick={detectFaces}>Fuck</button>
    </Wrapper>
  );
}

export default FacePage;
