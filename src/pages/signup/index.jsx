import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import userApi from '../../apis/user';

// 이미지
import logo from '../../assets/logo/logo.png';
import logotext from '../../assets/logo/logo_text.svg';

// 컴포넌트
import { FormInput } from '../../components/common/Input';
import Button from '../../components/common/Button';
import Form from '../../components/common/Form';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onVaild = async (data) => {
    const { email, password, confirmPassword, userName } = data;
    if (password !== confirmPassword) {
      await setError('passwordchk', { message: '비밀번호가 일치하지 않습니다.' });
    }
    await userApi
      .signUp({
        email,
        password,
        confirmPassword,
        userName,
      })
      .then(() => {
        navigate('/checksignupauthnumber');
      })
      .catch((error) => {
        console.error(error);
        setError('extraError', { message: error.response.data.msg }, { shouldFocus: true });
      });
  };
  const errorText = (errors) => {
    if (errors) {
      const { email, password, confirmPassword, userName, extraError } = errors;
      return (
        userName?.message || email?.message || password?.message || confirmPassword?.message || extraError?.message
      );
    }
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onVaild();
    }
  };
  return (
    <SignUpWrap>
      <header>
        <Logo>
          <Img src={logo} alt='로고' />
          <Img src={logotext} alt='로고' />
        </Logo>
        <Title>회원가입을 환영합니다.</Title>
        <SubTitle>
          <p>
            당신의 <span>취준메이트,</span>
          </p>
          굿잡캘린더와 함께해보세요!
        </SubTitle>
      </header>
      <InputWrap>
        <SignUpForm onSubmit={handleSubmit(onVaild)}>
          <FormInput
            type='text'
            placeholder='이름'
            form={{ ...register('userName', { required: '이름을 입력해주세요.' }) }}
          />
          <Email
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
          <FormInput
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
          />
          <PassWord
            type='password'
            placeholder='비밀번호 확인'
            pwCheck={errors?.confirmPassword}
            form={{
              ...register('confirmPassword', {
                required: '비밀번호 확인을 입력해주세요.',
                pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d`~!@#$%^&*()-_=+ "'{}]{6,15}$/,
              }),
            }}
            onKeyPress={onKeyPress}
          />
          {errorText(errors) && <Check>{errorText(errors)}</Check>}
          <SignUpBtn>이메일 인증받고 가입하기</SignUpBtn>
        </SignUpForm>
      </InputWrap>
      <Footer>
        <FooterText>이미가입하셨다면?</FooterText>
        <FooterBtn
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인
        </FooterBtn>
      </Footer>
    </SignUpWrap>
  );
};

export default SignUp;

const SignUpWrap = styled.div`
  height: 100vh;
  padding: 0 35px;
  padding-top: 89px;
  background-color: var(--blue1);
`;

const Logo = styled.div`
  display: flex;
  gap: 6px;
`;
const Img = styled.img`
  height: 24px;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 9px;
`;
const SubTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: var(--gray4);
  margin-bottom: 43px;
  span {
    font-weight: 700;
    color: inherit;
  }
`;

const InputWrap = styled.main`
  width: 100%;
`;

const SignUpForm = styled(Form)`
  gap: 8px;
`;

const SignUpBtn = styled(Button)`
  background-color: var(--blue4);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 78px;
  color: #fff;
`;

const Email = styled(FormInput)`
  border: ${(props) => props.mailCheck && `1px solid var(--point3)`};
  color: ${(props) => props.mailCheck && `var(--point3)`};
`;
const PassWord = styled(FormInput)`
  border: ${(props) => props.pwCheck && `1px solid var(--point3)`};
  color: ${(props) => props.pwCheck && `var(--point3)`};
`;
const Check = styled.p`
  text-align: center;
  color: var(--blue3);
  font-weight: 600;
  font-size: 14px;
  padding-top: 30px;
  padding-bottom: 24px;
`;

const Footer = styled.footer`
  border-top: 1px solid var(--blue2);
  padding: 15px 0;
  display: flex;
  justify-content: center;
`;
const FooterBtn = styled.button`
  font-weight: 600;
  font-size: 14px;
  margin-left: 11px;
  color: var(--blue4);
`;
const FooterText = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #5f9fff;
`;
