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
import SignupSucess from "./pages/SignUpSuccess";
import PwChangeSuccess from "./pages/PwChangeSuccess";
import PwChange from "./pages/PwChange";

// import AddSchedule from "./componenets/AddSchedule";
import Job from "./pages/Job";
import JobDetail from "./pages/JobDetail";
import JobCategory from "./pages/JobCategory";
import AddSchedule from "./componenets/AddSchedule";
import PostDtail from "./pages/PostDtail";
import Nav from "./src/componenets/Nav";

function MainHome() {
  return (
    <MobileWrap>
      <Nav />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/job" element={<Job />} />
        <Route path="/jobDetail" element={<JobDetail />} />
        <Route path="/jobCategory" element={<JobCategory />} />
        <Route path="/addschedule" element={<AddSchedule />} />
        <Route path="/postdetail/:id" element={<PostDtail />} />
      </Routes>
    </MobileWrap>
  );
}

export default MainHome;
const MobileWrap = styled.div`
  width: 100%;
  height: 100%;
`;
