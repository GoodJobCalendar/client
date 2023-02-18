import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __coverShow, __stickerInfo, __stickerShow } from '../../modules/posting';

// 스티커
import img2 from '../../assets/sticker/sticker2.png';
import img3 from '../../assets/sticker/sticker3.png';
import img4 from '../../assets/sticker/sticker4.png';
import img5 from '../../assets/sticker/sticker5.png';
import img6 from '../../assets/sticker/sticker6.png';
import img7 from '../../assets/sticker/sticker7.png';
import img8 from '../../assets/sticker/sticker8.png';

const StickerInput = () => {
  const dispatch = useDispatch();
  const sticker = useSelector((state) => state.posting.sticker);
  const stickerShow = useSelector((state) => state.posting.stickerShow);

  // 스티커 리스트 보이기
  const stickerShowBtn = () => {
    dispatch(__stickerShow(!stickerShow));
    dispatch(__coverShow(false));
  };

  // 스티커 pcik
  const stickerChange = (e) => {
    dispatch(__stickerInfo(e.target.id));
  };

  // 커버 이미지 미리보기 / 커버 이미지 pick
  function stickerChangeView(sticker) {
    if (sticker === '2') {
      return img2;
    }
    if (sticker === '3') {
      return img3;
    }
    if (sticker === '4') {
      return img4;
    }
    if (sticker === '5') {
      return img5;
    }
    if (sticker === '6') {
      return img6;
    }
    if (sticker === '7') {
      return img7;
    }
    if (sticker === '8') {
      return img8;
    }
  }
  return (
    <TitleInput>
      <StickerAddBtn onClick={stickerShowBtn} stickerShow={stickerShow}>
        스티커 추가
      </StickerAddBtn>
      {stickerShow && (
        <Background>
          <StickerList>
            {['1', '2', '3', '4', '5', '6', '7', '8'].map((stickerNum, index) => {
              return (
                <>
                  {stickerNum === '1' && (
                    <StickerPick1 htmlFor='1' sticker={sticker}>
                      <Input type='radio' name='sticker' id='1' onChange={stickerChange} sticker={sticker} />
                      <StickerCoverLine sticker={sticker}></StickerCoverLine>
                    </StickerPick1>
                  )}
                  {stickerNum !== '1' && (
                    <StickerPick htmlFor={stickerNum} sticker={sticker}>
                      <Input type='radio' name='sticker' id={stickerNum} onChange={stickerChange} />
                      <StickerImg src={stickerChangeView(stickerNum)} />
                    </StickerPick>
                  )}
                </>
              );
            })}
          </StickerList>
        </Background>
      )}
    </TitleInput>
  );
};

export default StickerInput;

const Background = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 99;
`;
const TitleInput = styled.label`
  position: relative;
`;
const Input = styled.input`
  display: none;
`;
const StickerAddBtn = styled.button`
  font-weight: 700;
  font-size: 12px;
  border: 1px solid #fff !important;
  padding: 6px 10px;
  border-radius: 8px;
  background-color: transparent;
  color: ${(props) => (props.stickerShow === true ? 'var(--point1)' : ' #fff')};
  border: ${(props) =>
    props.stickerShow === true ? '1px solid var(--point1) !important' : ' 1px solid #fff !important'};
`;

const StickerList = styled.div`
  position: absolute;
  top: 218px;
  right: 5%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  gap: 10px 15px;
  flex-wrap: wrap;
  border: 1px solid var(--gray2);
  border-radius: 15px;
  padding: 8px 12px;
  width: 275px;
  z-index: 99;
  opacity: 1;
`;
const StickerImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const StickerPick1 = styled.label`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  :nth-child(1) {
    border: ${(props) => (props.sticker === '1' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.sticker === '1' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.sticker === '1' ? '700px' : '500px')};
  }
`;
const StickerCoverLine = styled.div`
  border-bottom: ${(props) => (props.sticker === '1' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
  width: 150%;
  transform: rotate(45deg);
  transform-origin: top left;
`;
const StickerPick = styled.label`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :nth-child(2) {
    border: ${(props) => (props.sticker === '2' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.sticker === '2' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.sticker === '2' ? '700px' : '500px')};
  }
  :nth-child(3) {
    border: ${(props) => (props.sticker === '3' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.sticker === '3' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.sticker === '3' ? '700px' : '500px')};
  }
  :nth-child(4) {
    border: ${(props) => (props.sticker === '4' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.sticker === '4' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.sticker === '4' ? '700px' : '500px')};
  }
  :nth-child(5) {
    border: ${(props) => (props.sticker === '5' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.sticker === '5' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.sticker === '5' ? '700px' : '500px')};
  }
  :nth-child(6) {
    border: ${(props) => (props.sticker === '6' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.sticker === '6' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.sticker === '6' ? '700px' : '500px')};
  }
  :nth-child(7) {
    border: ${(props) => (props.sticker === '7' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.sticker === '7' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.sticker === '7' ? '700px' : '500px')};
  }
  :nth-child(8) {
    border: ${(props) => (props.sticker === '8' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.sticker === '8' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.sticker === '8' ? '700px' : '500px')};
  }
`;
