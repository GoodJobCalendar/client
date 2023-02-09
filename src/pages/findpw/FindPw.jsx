import React from 'react';
import styled, { css } from 'styled-components';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { pwEmailUser } from '../../modules/user';
import userApi from '../../apis/user';

// 컴포넌트
import { FormInput } from '../../components/common/Input';
import Button from '../../components/common/Button';
import Form from './../../components/common/Form';

const FindPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onClickPwFind = async (data) => {
    const { userName, email } = data;
    await userApi
      .sendPwAuthNumber({
        userName,
        email,
      })
      .then((res) => {
        dispatch(pwEmailUser(email, userName));
        navigate('/pwcheck');
      })
      .catch((error) => {
        console.error(error);
        setError('extraError', { message: error.response.data.msg }, { shouldFocus: true });
      });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickPwFind();
    }
  };
  const errorText = (errors) => {
    if (errors) {
      const { email, userName, extraError } = errors;
      return userName?.message || email?.message || extraError?.message;
    }
  };
  return (
    <EmailWrap>
      <Header>
        <Title>인증메일을 보내드려요</Title>
        <SubTitle>계정을 찾아드릴게요!</SubTitle>
      </Header>
      <Main>
        <Form onSubmit={handleSubmit(onClickPwFind)}>
          <UserNameInput
            type='text'
            placeholder='이름'
            form={{ ...register('userName', { required: '이름을 입력해주세요.' }) }}
            userNamecheck={errors?.userName}
          />
          <EmailInput
            type='text'
            placeholder='이메일'
            form={{
              ...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: '이메일 형식이 아닙니다.',
                },
              }),
            }}
            emailcheck={errors?.email}
            onKeyPress={onKeyPress}
          />
          {errorText(errors) ? (
            <>
              <ErrorCheck>{errorText(errors)}</ErrorCheck>
              <PwCheckEmailSendBtn>인증메일 재발송하기</PwCheckEmailSendBtn>
            </>
          ) : (
            <PwCheckEmailSendBtn>인증번호 발송하기</PwCheckEmailSendBtn>
          )}
        </Form>
      </Main>
    </EmailWrap>
  );
};

export default FindPassword;
const EmailWrap = styled.div`
  height: 100vh;
  padding: 0 35px;
  padding-top: 165px;
`;
const Header = styled.header`
  width: 100%;
  margin-bottom: 82px;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
`;
const SubTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray4};
  margin-top: 16px;
`;

const Main = styled.main`
  width: 100%;
`;
const UserNameInput = styled(FormInput)`
  ${(props) =>
    props.userNamecheck &&
    css`
      border: 2px solid ${(props) => props.theme.colors.point3};
      color: ${(props) => props.theme.colors.point3};
      ::placeholder {
        color: ${(props) => props.theme.colors.point3};
      }
    `}
`;
const EmailInput = styled(FormInput)`
  ${(props) =>
    props.emailcheck &&
    css`
      border: 2px solid ${(props) => props.theme.colors.point3};
      color: ${(props) => props.theme.colors.point3};
      ::placeholder {
        color: ${(props) => props.theme.colors.point3};
      }
    `}
`;
const PwCheckEmailSendBtn = styled(Button)`
  background: ${(props) => props.theme.colors.blue4};
  color: #fff;
  margin-top: 80px;
`;
const ErrorCheck = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.colors.point3};
  margin: 40px 0;
  text-align: center;
`;
