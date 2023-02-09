import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../pages/home';
import Login from './../pages/login';
import SignUp from '../pages/signup/SignUp';
import KakaoOauth from './../pages/login/KakaoOauth';
import FindPassword from '../pages/findpw/FindPw';
import PwCheck from '../pages/findpw/CheckPwAuthNumber';
import CheckSignUpAuthNumber from './../pages/findpw/CheckPwAuthNumber';
import ChangeSuccessPw from '../pages/findpw/ChangeSuccessPw';
import SignUpSuccess from './../pages/signup/SignUpSuccess';
import ChangePw from './../pages/findpw/ChangePw';
import JobDetail from './../pages/job/JobDetail';
import JobCategory from './../pages/job/JobCategory';
import AddSchedule from './../components/calendar/addschedule';
import PostDetail from './../pages/PostDetail';
import Mypage from './../pages/Mypage';
import ZZim from '../pages/ZZim';
import NotFound from './../pages/NotFound';
import Main from '../pages/Main';
import Calendar from './../components/calendar/Calendar';
import Job from '../pages/job';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/api/auth/kakao/callback' element={<KakaoOauth />} />
      <Route path='/findpw' element={<FindPassword />} />
      <Route path='/pwcheck' element={<PwCheck />} />
      <Route path='/checksignupauthnumber' element={<CheckSignUpAuthNumber />} />
      <Route path='/changesuccesspw' element={<ChangeSuccessPw />} />
      <Route path='/signupsuccess' element={<SignUpSuccess />} />
      <Route path='/changepw' element={<ChangePw />} />
      <Route path='/main' element={<Main />}>
        <Route path={`calendar`} element={<Calendar />} />
        <Route path={`job`} element={<Job />} />
      </Route>
      <Route path='/jobDetail/:id' element={<JobDetail />} />
      <Route path='/jobCategory' element={<JobCategory />} />
      <Route path='/addschedule' element={<AddSchedule />} />
      <Route path='/postdetail/:scheduleId' element={<PostDetail />} />
      <Route path='/mypage' element={<Mypage />} />
      <Route path='/zzim' element={<ZZim />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}
export default Router;
