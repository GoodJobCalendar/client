import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import signUpImg from '../../assets/illust/signupsuccess.png';
import Button from '../../components/common/Button';

//회원이름
const SignUpSuccess = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.user);

  return (
    <EmailWrap>
      <Header>
        <Banner src={signUpImg} alt='배너' />
        <TitleText>
          <Title>회원가입이 완료되었어요!</Title>
          <SubTitle>
            {userInfo.userName} 유저님의 취준 여정에 <br />
            굿잡캘린더가 함께 할게요!
          </SubTitle>
        </TitleText>
      </Header>
      <Main>
        <SignUpBtn
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인하기
        </SignUpBtn>
      </Main>
    </EmailWrap>
  );
};

export default SignUpSuccess;
const EmailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0 35px;
  background-color: ${(props) => props.theme.colors.blue1};
  input {
    outline: none;
    padding: 18px 23px;
    background: #ffffff;
    border: 1px solid ${(props) => props.theme.colors.blue2};
    border-radius: 6px;
    ::placeholder {
      color: ${(props) => props.theme.colors.blue3};
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
const Header = styled.header`
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 70%;
  width: 100%;
  text-align: center;
  z-index: 999;
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
const Banner = styled.img`
  width: 60%;
  border-radius: 26px;
  margin-bottom: 16px;
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
  margin-top: 68px;
`;
