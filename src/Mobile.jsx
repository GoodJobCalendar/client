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
        <Route path="/pwsend" element={<PwSend />} />
      </Routes>
    </MobileWrap>
  );
}

export default Mobile;
const MobileWrap = styled.div`
  width: 100%;
  height: 100%;
`;
