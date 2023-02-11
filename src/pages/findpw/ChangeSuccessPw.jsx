import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import passwordChangeImg from '../../assets/illust/passwordchange.png';
import Button from '../../components/common/Button';
const ChangeSuccessPw = () => {
  return (
    <EmailWrap>
      <Header>
        <Banner src={passwordChangeImg} alt='배너' />
        <TitleText>
          <Title>비밀번호가 변경되었어요!</Title>
          <SubTitle>다시 한번 힘차게 로그인하러 가볼까요?</SubTitle>
        </TitleText>
      </Header>
      <Main>
        <SignUpBtn>
          <Link to='/login'>로그인하기</Link>
        </SignUpBtn>
      </Main>
    </EmailWrap>
  );
};

export default ChangeSuccessPw;
const EmailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0 35px;
  background-color: var(--blue1);
`;
const Header = styled.header`
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  margin-bottom: 73px;
`;
const TitleText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 70%;
  width: 100%;
  text-align: center;
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
  width: 100%;
  border-radius: 26px;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const SignUpBtn = styled(Button)`
  background: var(--blue4);
  margin-bottom: 78px;
  font-weight: 400;
  color: #fff;
  margin-top: 72px;
`;
