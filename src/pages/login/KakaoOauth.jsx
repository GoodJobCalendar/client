import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { setCookie } from '../../shared/cookie';
import userApi from './../../apis/user';

const KakaoOauth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (!!code) {
      userApi
        .kakao({ code })
        .then((response) => {
          setCookie('token', response.data.token, 5);
          navigate('/main');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [code]);

  return <></>;
};

export default KakaoOauth;
