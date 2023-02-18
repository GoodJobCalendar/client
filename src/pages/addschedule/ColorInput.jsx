import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __colorInfo, __colorPickerShow } from '../../modules/posting';

const ColorInput = () => {
  const dispatch = useDispatch();
  const [colorPick, setColorPick] = useState('');
  const colorPickerShow = useSelector((state) => state.posting.colorPickerShow);

  // 컬러 리스트 보이기
  const colorShowBtn = () => {
    dispatch(__colorPickerShow(!colorPickerShow));
  };

  // 컬러 미리보기 / 컬러 pcik
  const colorChange = (e) => {
    dispatch(__colorInfo(e.target.id));
    setColorPick(e.target.value);
    dispatch(__colorPickerShow(!colorPickerShow));
  };
  return (
    <>
      <ColorPicker onClick={colorShowBtn} colorPick={colorPick} colorPickerShow={colorPickerShow} />
      {colorPickerShow && (
        <ColorList>
          <Color1 htmlFor='1'>
            <ColorCoverLine colorPick={colorPick}></ColorCoverLine>
          </Color1>
          {[
            { color: 'var(--blue1)', num: '1' },
            { color: 'var(--point3)', num: '2' },
            { color: 'rgba(253, 187, 110, 1)', num: '3' },
            { color: 'rgba(110,253,150,1)', num: '4' },
            { color: 'rgba(110,253,150,1)', num: '5' },
            { color: 'rgba(110,218,253,1)', num: '6' },
            { color: 'rgba(130,110,253,1)', num: '7' },
            { color: 'var(--gray2)', num: '8' },
          ].map((colorNum) => {
            return (
              <>
                <Input type='radio' name='color' id={colorNum.num} value={colorNum.color} onChange={colorChange} />
                {colorNum.num !== '1' && <Color htmlFor={colorNum.num} bgColor={colorNum.color} />}
              </>
            );
          })}
        </ColorList>
      )}
    </>
  );
};

export default ColorInput;

const ColorPicker = styled.button`
  width: 18px;
  height: 18px;
  background-color: ${(props) => (props.colorPick ? props.colorPick : 'var(--blue4)')};
  border-radius: 100%;
  border: 5px solid var(--gray1);
  position: absolute;
  right: 8%;
  top: ${(props) => (props.colorPickerShow ? '19%' : '50%')};
  transform: translateY(-50%);
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border-radius: 100%;
    border: ${(props) => (props.colorPick ? '' : '1px solid var(--blue4)')};
  }
`;
const ColorList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  width: 100%;
  border-radius: 6px;
  margin-top: 16px;
  background: var(--blue1);
  box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32), inset 0px 8px 14px rgba(255, 255, 255, 0.3);
  z-index: 99;
`;
const Input = styled.input`
  display: none;
`;
const Color = styled.label`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
  overflow: hidden;
  background-color: ${(props) => props.bgColor};
`;
const Color1 = styled.label`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
  overflow: hidden;
`;

const ColorCoverLine = styled.div`
  border-bottom: ${(props) => (props.colorPick === '1' ? '2px solid var(--blue4)' : '2px solid var(--gray2)')};
  width: 150%;
  transform: rotate(45deg);
  transform-origin: top left;
`;
