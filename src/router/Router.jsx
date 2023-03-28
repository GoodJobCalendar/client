import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './../pages/signup/index';
import FindPassword from './../pages/findpw/index';
import CheckPwAuthNumber from '../pages/findpw/CheckPwAuthNumber';
import ChangePw from './../pages/findpw/ChangePw';
import Job from './../pages/job/index';
import Calendar from './../pages/calendar/index';
import AddSchedule from './../pages/addschedule/index';
import UpdateSchedule from '../pages/updateschedule';
import Splash from '../pages/home/Splash';

const Home = lazy(() => import('./../pages/home'));
const Login = lazy(() => import('./../pages/login'));
const KakaoOauth = lazy(() => import('./../pages/login/KakaoOauth'));
const PwCheck = lazy(() => import('../pages/findpw/CheckPwAuthNumber'));
const ChangeSuccessPw = lazy(() => import('../pages/findpw/ChangeSuccessPw'));
const SignUpSuccess = lazy(() => import('./../pages/signup/SignUpSuccess'));
const JobDetail = lazy(() => import('./../pages/job/JobDetail'));
const JobCategory = lazy(() => import('./../pages/job/JobCategory'));
const PostDetail = lazy(() => import('./../pages/PostDetail'));
const Mypage = lazy(() => import('./../pages/mypage'));
const ZZim = lazy(() => import('../pages/ZZim'));
const NotFound = lazy(() => import('./../pages/NotFound'));
const CheckSignUpAuthNumber = lazy(() => import('../pages/signup/CheckSignUpAuthNumber'));
const Main = lazy(() => import('../pages/Main'));

function Router() {
  return (
    <Suspense fallback={<Splash />}>
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
    </Suspense>
  );
}
export default Router;
