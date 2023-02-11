import React from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import userApi from '../../apis/user';
import { __pwUser } from '../../modules/user';

// 이미지
import mailSendImg from '../../assets/illust/mailsend.png';

// 컴포넌트
import { FormInput } from '../../components/common/Input';
import Button from '../../components/common/Button';
import Form from '../../components/common/Form';

const CheckPwAuthNumber = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.pwInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onClickAuthNumberCheck = async (data) => {
    const { authNumber } = data;
    await userApi
      .resetPwAuthNumber({
        email: userInfo?.email,
        authNumber: Number(authNumber),
      })
      .then(() => {
        dispatch(__pwUser({ email: userInfo?.email }));
        navigate('/changepw');
      })
      .catch((error) => {
        console.error(error);
        setError('extraError', { message: error.response.data.msg }, { shouldFocus: true });
      });
  };

  // 인증번호 재발송
  const MailReSendBtn = async () => {
    await userApi
      .sendPwAuthNumber({
        email: userInfo?.email,
        userName: userInfo?.userName,
      })
      .catch((error) => {
        console.error(error);
        setError('extraError', { message: error.response.data.msg }, { shouldFocus: true });
      });
  };
  const errorText = (errors) => {
    if (errors) {
      const { authNumber, extraError } = errors;
      return authNumber?.message || extraError?.message;
    }
  };
  return (
    <PwWrap>
      <Header>
        <Banner src={mailSendImg} alt='배너' />
        <TitleText>
          <Title>인증메일을 전송했어요!</Title>
          <SubTitle>인증 메일 확인하러 메일함으로 고고</SubTitle>
        </TitleText>
      </Header>
      <Main>
        <Email>{userInfo?.email}</Email>
        <Form onSubmit={handleSubmit(onClickAuthNumberCheck)}>
          <Input
            type='password'
            placeholder='인증번호 입력'
            form={{ ...register('authNumber', { required: '인증번호를 입력해주세요.' }) }}
            errorcheck={errors?.authNumber}
          />
          {errorText(errors) && (
            <>
              <ErrorCheck>{errorText(errors)}</ErrorCheck>
              <PwChangeBtn onClick={MailReSendBtn}>인증메일 재발송하기</PwChangeBtn>
            </>
          )}

          <PwChangeBtn>비밀번호 변경하기</PwChangeBtn>
        </Form>
      </Main>
    </PwWrap>
  );
};

export default CheckPwAuthNumber;
const PwWrap = styled.div`
  height: 100vh;
  padding: 0 35px;
  padding-top: 58px;
`;
const Header = styled.header`
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  margin-bottom: 73px;
  text-align: center;
`;
const TitleText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 70%;
  width: 100%;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
`;
const SubTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: var(--gray4);
  margin-top: 16px;
`;
const Banner = styled.img`
  max-width: 180px;
  width: 100%;
  border-radius: 26px;
`;
const Main = styled.main`
  width: 100%;
`;

const PwChangeBtn = styled(Button)`
  background: var(--blue4);
  width: 100%;
  color: #fff;
  margin-bottom: 8px;
`;
const ErrorCheck = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue3);
  text-align: center;
  margin-top: 39px;
  margin-bottom: 24px;
`;
const Email = styled.p`
  font-weight: 800;
  font-size: 16px;
  color: var(--blue3);
  text-align: center;
  margin-bottom: 55px;
`;
const Input = styled(FormInput)`
  ${(props) =>
    props.errorcheck &&
    css`
      border: 2px solid var(--point3);
      color: var(--point3);
      ::placeholder {
        color: var(--point3);
      }
    `}
  margin-bottom: 72px;
`;
