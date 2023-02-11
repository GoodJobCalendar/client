import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { setCookie } from '../../shared/Cookie';

// 컴포넌트
import { FormInput } from '../../components/common/Input';
import Button from '../../components/common/Button';
import Form from '../../components/common/Form';
import userApi from '../../apis/user';

const LoginMain = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onVaild = (data) => {
    const { email, password } = data;
    userApi
      .login({ email, password })
      .then((response) => {
        setCookie('token', response.data.token, 5);
        navigate('/main/calendar');
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.msg);
      });
  };
  const errorText = (errors) => {
    if (errors) {
      const { email, password, extraError } = errors;
      return email?.message || password?.message || extraError?.message;
    }
  };
  // 로그인
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onVaild();
    }
  };

  return (
    <InputWrap>
      <Form onSubmit={handleSubmit(onVaild)}>
        <EmailInput
          type='email'
          placeholder='이메일'
          mailCheck={errors?.email}
          form={{
            ...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식이 아닙니다.',
              },
            }),
          }}
        />
        <PwInput
          type='password'
          placeholder='비밀번호'
          pwCheck={errors?.password}
          form={{
            ...register('password', {
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d`~!@#$%^&*()-_=+ "'{}]{6,15}$/,
                message: '비밀번호를 6~15자, 숫자, 대·소문자를 포함하여 입력해주세요.',
              },
            }),
          }}
          onKeyPress={onKeyPress}
        />
        {errorText(errors) && <ErrorCheck>{errorText(errors)}</ErrorCheck>}
        <LoginBtn onClick={onVaild}>로그인</LoginBtn>
      </Form>
      <PwCheck onClick={() => navigate('/findpw')}>
        비밀번호를 혹시 잊어버리셨나요?
        <span>인증메일 보내기</span>
      </PwCheck>
    </InputWrap>
  );
};

export default LoginMain;

const InputWrap = styled.main`
  width: 100%;
`;
const EmailInput = styled(FormInput)`
  background-color: #fff;
  ${(props) =>
    props.mailCheck &&
    css`
      border: 2px solid var(--point3);
      color: var(--point3);
      ::placeholder {
        color: var(--point3);
      }
    `}
`;
const PwInput = styled(FormInput)`
  ${(props) =>
    props.pwCheck &&
    css`
      border: 2px solid var(--point3);
      color: var(--point3);
      ::placeholder {
        color: var(--point3);
      }
    `}
`;

const ErrorCheck = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue3);
  text-align: center;
  margin-top: 39px;
  margin-bottom: 24px;
`;
const PwCheck = styled(Button)`
  font-weight: 500;
  font-size: 14px;
  color: var(--blue3);
  gap: 7px;
  line-height: 17px;
  span {
    font-weight: 600;
    color: var(--blue4);
  }
`;
const LoginBtn = styled(Button)`
  background: var(--blue4);
  color: #fff;
`;
