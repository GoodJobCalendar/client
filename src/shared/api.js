import axios from "axios";
import { getCookie } from "./cookie";

export const api = axios.create({
  baseURL: "https://goodjobcalendar.shop/",
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
    console.error(err);
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
    console.error(error);
  }
);

// export const TokenCheck = localStorage.getItem("token") ? true : false;

// kakao 연결용
const kakao_redirect_uri =
  "https://goodjobcalendar.com/api/auth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${kakao_redirect_uri}&response_type=code`;
