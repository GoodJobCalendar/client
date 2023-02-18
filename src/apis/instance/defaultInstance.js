import axios from 'axios';
import { getCookie } from '../../shared/cookie';
//1. axios 인터셉터 생성
export const api = axios.create({
  baseURL: process.env.REACT_APP_AUTH_BASE_URL,
});
export const instances = axios.create({
  baseURL: process.env.REACT_APP_AUTH_BASE_URL,
});

//2. 요청 인터셉터
api.interceptors.request.use(
  //요청직전 호출
  (config) => {
    const token = getCookie('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  //에러 전 호출
);

//3. 응답 인터셉터
api.interceptors.response.use(
  (success) => {
    const response = success.data;

    if (response.statusCode === 200 && response.responseMessage === '조회 성공') {
      return response;
    }

    return success;
  },
  (error) => {
    console.error(error);
    if (error.response.status === 500) {
      window.alert('로그인 유효시간이 만료되었습니다');
      window.location.href = 'https://goodjobcalendar.com/login';
    }
  },
);
