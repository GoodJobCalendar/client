import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import EmailSend from "./pages/EmailSend";
import PwSend from "./pages/PwSend";
import PwCheck from "./pages/PwCheck";
import Main from "./pages/Main";
import KakaoOauth from "./shared/KakaoOauth";

function Mobile() {
  return (
    <MobileWrap>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api/auth/kakao/callback" element={<KakaoOauth />} />
        <Route path="/emailsend" element={<EmailSend />} />
        <Route path="/pwsend" element={<PwSend />} />
        <Route path="/pwcheck" element={<PwCheck />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </MobileWrap>
  );
}

export default Mobile;
const MobileWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  background-color: #fff;
  width: 375px;
  height: 90%;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  border-radius: 20px;
`;
