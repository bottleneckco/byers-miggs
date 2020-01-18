import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Video = styled.video``;

function FacePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function setupCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
    setupCamera();
  }, []);
  return (
    <div>
      <h1>THE FACE PAGE</h1>
      <Video ref={videoRef} />
    </div>
  );
}

export default FacePage;
