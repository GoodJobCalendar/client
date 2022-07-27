import axios from "axios";
import { getCookie } from "./Cookie";

export const api = axios.create({
  baseURL: "https://goodjobcalendar.com/",
  // withCredentials: false,
});
//1. axios 인터셉터 생성
export const instances = axios.create({
  baseURL: "URL",
});

//2. 요청 인터셉터
api.interceptors.request.use(
  //요청직전 호출
  (config) => {
    const token = getCookie("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
  //에러 전 호출
);

instances.interceptors.request.use(
  //요청직전 호출
  (config) => {
    const token = getCookie("token");
    // const tokens = Token.split('=')[1];
    config.headers = {
      "Content-Type": "multipart/form-data",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  //에러 전 호출
  (err) => {
    console.log(err);
  }
);

//3. 응답 인터셉터
api.interceptors.response.use(
  (success) => {
    const response = success.data;

    if (
      response.statusCode === 200 &&
      response.responseMessage === "조회 성공"
    ) {
      return response.posts;
    }

    return success;
  },
  (error) => {
    console.log(error);
  }
);

// export const TokenCheck = localStorage.getItem("token") ? true : false;

// kakao 연결용
const kakao_redirect_uri = "http://localhost:3000/api/auth/kakao/callback";

// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=6bab61d2018ab50ba83a774f064b53e8&redirect_uri=${kakao_redirect_uri}&response_type=code`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${kakao_redirect_uri}&response_type=code`;

// console.log(KAKAO_AUTH_URL)
// console.log(process.env.REACT_APP_KAKAO_CLIENT_ID)
