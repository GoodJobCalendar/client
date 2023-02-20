import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../pages/home';
import Login from './../pages/login';
import SignUp from '../pages/signup';
import KakaoOauth from './../pages/login/KakaoOauth';
import FindPassword from '../pages/findpw';
import PwCheck from '../pages/findpw/CheckPwAuthNumber';
import CheckPwAuthNumber from './../pages/findpw/CheckPwAuthNumber';
import ChangeSuccessPw from '../pages/findpw/ChangeSuccessPw';
import SignUpSuccess from './../pages/signup/SignUpSuccess';
import ChangePw from './../pages/findpw/ChangePw';
import JobDetail from './../pages/job/JobDetail';
import JobCategory from './../pages/job/JobCategory';
import PostDetail from './../pages/PostDetail';
import Mypage from './../pages/mypage';
import ZZim from '../pages/ZZim';
import NotFound from './../pages/NotFound';
import Job from '../pages/job';
import CheckSignUpAuthNumber from '../pages/signup/CheckSignUpAuthNumber';
import Main from '../pages/Main';
import AddSchedule from '../pages/addschedule';
import Calendar from './../pages/calendar';
import UpdateSchedule from './../pages/updateschedule';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/api/auth/kakao/callback' element={<KakaoOauth />} />
      <Route path='/findpw' element={<FindPassword />} />
      <Route path='/pwcheck' element={<PwCheck />} />
      <Route path='/checkpwauthnumber' element={<CheckPwAuthNumber />} />
      <Route path='/checksignupauthnumber' element={<CheckSignUpAuthNumber />} />
      <Route path='/changesuccesspw' element={<ChangeSuccessPw />} />
      <Route path='/signupsuccess' element={<SignUpSuccess />} />
      <Route path='/changepw' element={<ChangePw />} />
      <Route path='/main' element={<Main />}>
        <Route path={`job`} element={<Job />} />
        <Route path={`calendar`} element={<Calendar />} />
      </Route>
      <Route path='/jobDetail/:id' element={<JobDetail />} />
      <Route path='/jobCategory' element={<JobCategory />} />
      <Route path='/addschedule' element={<AddSchedule />} />
      <Route path='/updateschedule' element={<UpdateSchedule />} />
      <Route path='/postdetail/:scheduleId' element={<PostDetail />} />
      <Route path='/mypage' element={<Mypage />} />
      <Route path='/zzim' element={<ZZim />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}
export default Router;
