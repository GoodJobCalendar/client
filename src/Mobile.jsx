import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import KakaoOauth from "./shared/KakaoOauth";
import EmailSend from "./pages/EmailSend";
import PwSend from "./pages/PwSend";
import PwCheck from "./pages/PwCheck";
import SignupSucess from "./pages/SignUpSuccess";
import PwChangeSuccess from "./pages/PwChangeSuccess";
import Main from "./pages/Main";
import Job from "./pages/Job";
import JobDetail from "./pages/JobDetail";
import JobCategory from "./pages/JobCategory";
import AddSchedule from "./components/AddSchedule";
import PostDetail from "./pages/PostDetail";
import Mypage from "./pages/Mypage";
import NotFound from "./components/NotFound";

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
        <Route path="/signupsuccess" element={<SignupSucess />} />
        <Route path="/pwchangesuccess" element={<PwChangeSuccess />} />
        <Route path="/main" element={<Main />} />
        <Route path="/job" element={<Job />} />
        <Route path="/jobDetail/:id" element={<JobDetail />} />
        <Route path="/jobCategory" element={<JobCategory />} />
        <Route path="/addschedule" element={<AddSchedule />} />
        <Route path="/postdetail/:scheduleId" element={<PostDetail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </MobileWrap>
  );
}

export default Mobile;
const MobileWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
