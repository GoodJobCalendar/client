import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __coverShow, __imageInfo, __stickerShow } from '../../modules/posting';

const CoverInput = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.posting.image);
  const coverShow = useSelector((state) => state.posting.coverShow);

  // 커버 이미지 보이기
  const coverShowBtn = () => {
    dispatch(__coverShow(!coverShow));
    dispatch(__stickerShow(false));
  };
  // 커버 이미지 미리보기 / 커버 이미지 pick
  const coverChange = (e) => {
    dispatch(__imageInfo(e.target.id));
    // setCoverShow(!coverShow);
  };
  return (
    <TitleInput>
      <AddBtn onClick={coverShowBtn} coverShow={coverShow}>
        커버 변경
      </AddBtn>
      {coverShow && (
        <Background>
          <CoverList>
            {[
              { text: '', num: '1' },
              { text: '응원', num: '2' },
              { text: '출근', num: '3' },
              { text: '일', num: '4' },
            ].map((imageNum) => {
              return (
                <>
                  {imageNum.num === '1' && (
                    <CoverPick1 htmlFor='1' image={image}>
                      <Input type='radio' name='cover' id='1' onChange={coverChange} />
                      <CoverLine image={image}></CoverLine>
                    </CoverPick1>
                  )}
                  {imageNum.num !== '1' && (
                    <CoverPick htmlFor={imageNum.num} image={image}>
                      <Input type='radio' name='cover' id={imageNum.num} onChange={coverChange} />
                      {imageNum.text}
                    </CoverPick>
                  )}
                </>
              );
            })}
          </CoverList>
        </Background>
      )}
    </TitleInput>
  );
};

export default CoverInput;
const TitleInput = styled.label`
  position: relative;
`;
const Input = styled.input`
  display: none;
`;
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
const CoverList = styled.div`
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
`;

const CoverPick1 = styled.label`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  :nth-child(1) {
    border: ${(props) => (props.image === '1' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.image === '1' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.image === '1' ? '700px' : '500px')};
  }
`;
const CoverLine = styled.div`
  border-bottom: ${(props) => (props.image === '1' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
  width: 150%;
  transform: rotate(45deg);
  transform-origin: top left;
`;
const CoverPick = styled.label`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :nth-child(2) {
    border: ${(props) => (props.image === '2' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.image === '2' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.image === '2' ? '700px' : '500px')};
  }
  :nth-child(3) {
    border: ${(props) => (props.image === '3' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.image === '3' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.image === '3' ? '700px' : '500px')};
  }
  :nth-child(4) {
    border: ${(props) => (props.image === '4' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
    color: ${(props) => (props.image === '4' ? 'var(--blue4)' : 'var(--gray2)')};
    font-weight: ${(props) => (props.image === '4' ? '700px' : '500px')};
  }
`;
const AddBtn = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff !important;
  padding: 6px 10px;
  border-radius: 8px;
  background-color: transparent;
  color: ${(props) => (props.coverShow === true ? 'var(--point1)' : ' #fff')};
  border: ${(props) =>
    props.coverShow === true ? '1px solid var(--point1) !important' : ' 1px solid #fff !important'};
`;
