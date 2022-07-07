import React from "react";
import styled from "styled-components";
import video from "./assets/img/work.mp4";
// 컴포넌트
import Mobile from "./Mobile";

function App() {
  return (
    <Bg>
      <Mobile />
      <Video src={video} autoPlay loop />
    </Bg>
  );
}

export default App;
const Bg = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const Video = styled.video`
  width: auto;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
