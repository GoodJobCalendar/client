import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// 이미지
import guideImg from '../../assets/bg/guide.png';
const Guide = () => {
  const [showModal, setShowModal] = useState(false);

  const HAS_VISITED_BEFORE = localStorage.getItem('hasVisitedBefore');

  useEffect(() => {
    const handleShowModal = () => {
      if (!HAS_VISITED_BEFORE) {
        localStorage.setItem('hasVisitedBefore', true);
        setShowModal(true);
      }
    };

    window.setTimeout(handleShowModal(), 2000);
  }, [HAS_VISITED_BEFORE]);

  const handleClose = () => setShowModal(false);
  return (
    <>
      {showModal ? (
        <GuideBg onClick={handleClose}>
          <GuideBtn onClick={handleClose}>x</GuideBtn>
          <GuideImg src={guideImg} alt='가이드' />
        </GuideBg>
      ) : null}
    </>
  );
};

export default Guide;

const GuideBg = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 100%;
  height: 100%;
`;
const GuideBtn = styled.button`
  position: absolute;
  top: 10%;
  right: 10%;
  color: #fff !important;
  z-index: 999;
  font-size: 20px;
  background-color: transparent;
`;
const GuideImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;
