import React from "react";
import styled from "styled-components";
// 컴포넌트
import Mobile from "./Mobile";

function App() {
  return (
    <Bg>
      <MobileWrap>
        <Mobile />
      </MobileWrap>
    </Bg>
  );
}

export default App;
const Bg = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("https://i.ytimg.com/vi/_t9PvIAZvss/maxresdefault.jpg") center
    center no-repeat;
  background-size: cover;
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
const MobileWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  background-color: #fff;
  width: 375px;
  height: 90%;
  max-height: 812px;
  scrollbar-width: none;
  border-radius: 20px;
`;
