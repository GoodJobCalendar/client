import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/signup/Login";
import KakaoOauth from "./shared/kakaoOauth";
import EmailSend from "./pages/signup/EmailSend";
import PwSend from "./pages/signup/PwSend";
import PwCheck from "./pages/signup/PwCheck";
import SignupSucess from "./pages/signup/SignUpSuccess";
import PwChangeSuccess from "./pages/signup/PwChangeSuccess";
import PwChange from "./pages/signup/PwChange";
import Main from "./pages/Main";
import Job from "./pages/job/Job";
import JobDetail from "./pages/job/JobDetail";
import JobCategory from "./pages/job/JobCategory";
import AddSchedule from "./components/AddSchedule";
import PostDetail from "./pages/PostDetail";
import Mypage from "./pages/Mypage";
import NotFound from "./components/NotFound";
import ZZim from "./pages/ZZim";

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
        <Route path="/pwchange" element={<PwChange />} />
        <Route path="/main" element={<Main />} />
        <Route path="/job" element={<Job />} />
        <Route path="/jobDetail/:id" element={<JobDetail />} />
        <Route path="/jobCategory" element={<JobCategory />} />
        <Route path="/addschedule" element={<AddSchedule />} />
        <Route path="/postdetail/:scheduleId" element={<PostDetail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/zzim" element={<ZZim />} />
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
