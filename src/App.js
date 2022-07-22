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
  background: url("https://images.unsplash.com/photo-1570696557714-01186e96d8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
    center center no-repeat;
  background-size: cover;
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
