import { api, instances } from './instance/defaultInstance';
const userApi = {
  // 회원가입 (이메일 인증번호 발송)
  signUp: (email, password, confirmPassword, userName) =>
    instances.post('/api/auth/local', email, password, confirmPassword, userName),
  // 인증번호 확인(이메일 인증)
  checkEmailAuthNumber: (email, password, authNumber, userName) =>
    instances.post('/api/auth/verifyNumberForNew', email, password, authNumber, userName),
  // 인증번호 발송(비밀번호 변경)
  sendPwAuthNumber: (userName, email) => instances.post('/api/auth/lostPassword', userName, email),
  // 비밀번호 초기화
  resetPwAuthNumber: (email, authNumber) => instances.patch('/api/auth/verifyNumberForOld', email, authNumber),
  // 비밀번호 변경
  changePw: (email, newPassword, confirmNewPassword) =>
    instances.patch('/api/auth/newPassword', email, newPassword, confirmNewPassword),
  // 카카오 로그인
  kakao: (code) => instances.get(`/api/auth/kakao/callback?code=${code}`),
  // 로그인
  login: (email, password) => instances.post('/api/auth', email, password),
  // 유저정보 조회(마이페이지)
  getUserInfo: () => api.get('/api/auth/userInfo'),
};

export default userApi;
