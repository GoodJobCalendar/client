import { api } from './instance/defaultInstance';
const userApi = {
  // 회원가입 (이메일 인증번호 발송)
  signUp: (email, password, confirmPassword, userName) =>
    api.post('/api/auth/local', email, password, confirmPassword, userName),
  // 인증번호 확인(이메일 인증)
  checkEmailAuthNumber: (email, password, authNumber, userName) =>
    api.post('/api/auth/verifyNumberForNew', email, password, authNumber, userName),
  // 인증번호 재발송(비밀번호 변경)
  sendPwAuthNumber: (userName, email) => api.post('/api/auth/lostPassword', userName, email),
  // 비밀번호 초기화
  resetPwAuthNumber: (email, authNumber) => api.patch('/api/auth/verifyNumberForOld', email, authNumber),
  // 비밀번호 변경
  changePw: (email, newPassword, confirmNewPassword) =>
    api.patch('/api/auth/newPassword', email, newPassword, confirmNewPassword),
  // 카카오 로그인
  kakao: (code) => api.get(`/api/auth/kakao/callback?code=${code}`),
  // 로그인
  login: (email, password) => api.post('/api/auth', email, password),
  // 유저정보 조회(마이페이지)
  getUserInfo: () => api.get('/api/auth/userInfo'),
};

export default userApi;
