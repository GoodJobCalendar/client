import React from 'react';
import styled from 'styled-components';

import emptyImg from '../../../assets/illust/needlogin.png';

const EmptyInputModal = ({ setEmpty }) => {
  return (
    <NeedPost>
      <NeedPostModal>
        <p>빈칸 작성 필요</p>
        <img src={emptyImg} alt='빈칸 작성 필요' />
        <span>빈칸을 모두 입력해주세요.</span>
        <NeedPostBtn
          onClick={() => {
            setEmpty(null);
          }}
        >
          계속 작성하기
        </NeedPostBtn>
      </NeedPostModal>
    </NeedPost>
  );
};

export default EmptyInputModal;

const NeedPost = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.3);
  z-index: 99999;
`;
const NeedPostBtn = styled.button`
  background-color: var(--blue4);
  padding: 16px 30px;
  color: #fff;
  border-radius: 9px;
  margin-top: 17px;
  a {
    width: 100%;
    height: 100%;
  }
`;
const NeedPostModal = styled.div`
  p {
    font-weight: 700;
    color: var(--blue4);
    margin-bottom: 10px;
  }
  span {
    font-weight: 500;
    color: var(--blue4);
    margin-top: 15px;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 99999;
  box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32), inset 0px 8px 14px rgba(255, 255, 255, 0.3);
  border-radius: 21px;
  padding: 40px 80px;
  width: 45%;
  text-align: center;
`;
