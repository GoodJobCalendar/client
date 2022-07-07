import React, { useEffect } from "react";

import { kakaoLoginDB } from "../redux/modules/user";

import { useDispatch } from "react-redux";

const KakaoOauth = (props) => {
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (!!code) {
      dispatch(kakaoLoginDB(code));
    }
  }, [code]);

  return <></>;
};

export default KakaoOauth;