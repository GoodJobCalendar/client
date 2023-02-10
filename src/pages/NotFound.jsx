import React from 'react';
import styled from 'styled-components';
import notfound from '../assets/illust/notfound.svg';

const NotFound = () => {
  return (
    <NotFoundWrap>
      <NotFoundContent>
        <NotFoundImg src={notfound} alt='404페이지오류' />
        <NotFoundTitle>404 not found</NotFoundTitle>
        <NotFoundText>페이지를 찾을 수 없어요!</NotFoundText>
      </NotFoundContent>
    </NotFoundWrap>
  );
};

export default NotFound;

const NotFoundWrap = styled.div`
  background-color: var(--blue1);
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;

const NotFoundContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NotFoundImg = styled.img`
  width: 190px;
  height: 170px;
`;
const NotFoundTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #2b75a9;
  margin: 15px 0;
`;
const NotFoundText = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #2b75a9;
`;
