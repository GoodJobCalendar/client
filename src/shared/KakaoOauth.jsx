import React, { useEffect } from "react";

import axios from "axios";

// import { kakaoLoginDB } from "../redux/modules/user";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../shared/Cookie";
const KakaoOauth = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const kakaoLoginDB = async (code) => {
    console.log(code);
    await axios
      .get(`https://goodjobcalendar.shop/api/auth/kakao/callback?code=${code}`)
      .then((res) => {
        dispatch(kakaoLoginDB(res));
        setCookie("token", res.data.token, 5);
        navigate("/main");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (!!code) {
      dispatch(kakaoLoginDB(code));
    }
  }, [code]);

  // useEffect(() => {
  //   let authorization_code = new URL(window.location.href).searchParams.get(
  //     'code'
  //   );

  // //   //async/await는 스스로 에러를 잡지 못하기 때문에 try catch랑 써야 함!!
  // //   //async/await를 안쓰면 then catch 도 사용 가능 근데 취향 차이
  //   async function kakaoLogin(auth_code) {
  //     try {
  //       const res = await axios.get(
  //         `http://14.34.139.253:3000/api/auth/kakao/callback?code=${auth_code}`
  //       );
  //       console.log(res)
  //       const { token, user } = res.data.data;
  //       localStorage.setItem('login-token', token);
  //       dispatch(kakaoLoginDB({ user }));
  //     } catch (error) {
  //       alert(error.response.data.msg);
  //     }
  //     window.location.replace('/main');
  //   }
  //   kakaoLogin(authorization_code);
  // }, []);

  return <></>;
};

export default KakaoOauth;
