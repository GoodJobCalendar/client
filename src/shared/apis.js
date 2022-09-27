import { api } from "./api";

const apis = {
  //회원가입 (이메일 인증번호 발송)
  signUp: (email, password, confirmPassword, userName) =>
    api.post("/api/auth/local", email, password, confirmPassword, userName),
  //인증번호 재발송(이메일 인증)
  sendEmailAuthNumber: (email, password, confirmPassword, userName) =>
    api.post("/api/auth/local", email, password, confirmPassword, userName),
  //인증번호 확인(이메일 인증)
  checkEmailAuthNumber: (email, password, confirmPassword, userName) =>
    api.post(
      "/api/auth/verifyNumberForNew",
      email,
      password,
      confirmPassword,
      userName
    ),
  // 로그인
  login: (email, password) => api.post("/api/auth", email, password),
  // 비밀번호 변경
  pwChange: (email, newPassword, confirmNewPassword) =>
    api.patch("/api/auth", email, newPassword, confirmNewPassword),
  // 일정 삭제
  deletePost: (data, scheduleId) =>
    api.delete(`/api/schedule/${scheduleId}`, data),
  // 인증번호 재발송(비밀번호 변경)
  sendPwAuthNumber: (data, scheduleId) =>
    api.delete("/api/auth/lostPassword", data),
};

export default apis;
