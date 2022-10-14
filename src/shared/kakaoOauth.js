import React, { useEffect } from "react";

import axios from "axios";

// import { kakaoLoginDB } from "../redux/modules/user";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCookie } from "./cookie";
const KakaoOauth = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (!!code) {
      axios
        .get(
          `https://goodjobcalendar.shop/api/auth/kakao/callback?code=${code}`
        )
        .then((response) => {
          setCookie("token", response.data.token, 5);
          navigate("/main");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [code]);

  return <></>;
};

export default KakaoOauth;
