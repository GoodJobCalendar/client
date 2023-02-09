import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '../../components/common/Input';
import Button from '../../components/common/Button';
import Form from '../../components/common/Form';
import userApi from '../../apis/user';

const ChangePw = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onClickPwChange = async (data) => {
    const { password, confirmPassword } = data;
    await userApi
      .pwChange({
        email: userInfo.email,
        newPassword: password,
        confirmNewPassword: confirmPassword,
      })
      .then(() => {
        navigate('/changesuccesspw');
      })
      .catch((error) => {
        console.error(error);
        setError('extraError', { message: error.response.data.msg }, { shouldFocus: true });
      });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickPwChange();
    }
  };
  const errorText = (errors) => {
    if (errors) {
      const { password, confirmPassword, extraError } = errors;
      return password?.message || confirmPassword?.message || extraError?.message;
    }
  };

  return (
    <PwWrap>
      <Header>
        <TitleText>
          <Title>굿잡 비밀번호 변경</Title>
          <SubTitle>이번 비밀번호는 기억해보는걸로!</SubTitle>
        </TitleText>
      </Header>
      <Main>
        <Form onSubmit={handleSubmit(onClickPwChange)}>
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
          {errorText(errors) && <ErrorCheck>{errorText(errors)}</ErrorCheck>}

          <SignUpBtn>비밀번호 변경하기</SignUpBtn>
        </Form>
      </Main>
    </PwWrap>
  );
};

export default ChangePw;

const PwWrap = styled.div`
  width: 100%;
`;
const Header = styled.header`
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  margin-bottom: 73px;
`;
const TitleText = styled.div`
  position: absolute;
  left: 53%;
  transform: translateX(-50%);
  width: 100%;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
const SubTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray4};
  margin-top: 8px;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const SignUpBtn = styled(Button)`
  background: ${(props) => props.theme.colors.blue4};
  color: #fff;
  margin-bottom: 8px;
`;
const ErrorCheck = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.colors.blue3};
  text-align: center;
  margin-top: 39px;
  margin-bottom: 24px;
`;

const PassWord = styled(FormInput)`
  border: ${(props) => props.pwCheck && `1px solid ${(props) => props.theme.colors.point3}`};
  color: ${(props) => props.pwCheck && `${(props) => props.theme.colors.point3}`};
`;
