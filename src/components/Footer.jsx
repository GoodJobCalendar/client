import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FootWrap>
      <FootSmallWrap>
        <FootInner>
          <FootMain>PROJECT</FootMain>
          <Footbaby>FM : 안지선</Footbaby>
          <Footbaby>Designer : 안지선</Footbaby>
          <Footbaby>FrontEnd : 손유정 이경태 최서현</Footbaby>
          <Footbaby>BackEnd : 김성현 황성원</Footbaby>
        </FootInner>
        <FootInner>
          <FootMain>ETC</FootMain>
          <Footbaby>공지사항</Footbaby>
          <Footbaby>이용약관</Footbaby>
          <Footbaby>개인정보처리방침</Footbaby>
          <Footbaby>FAQ</Footbaby>
        </FootInner>
        <FootInner>
          <FootMain>CONTACT</FootMain>
          <Footbaby>깃허브</Footbaby>
        </FootInner>
        <hr/>
      </FootSmallWrap>  
    </FootWrap>
  )
}

export default Footer

const FootWrap = styled.div`
  background-color: #111111;
  height: 466px;
  padding: 30px 0 0 0;
`

const FootSmallWrap =styled.div`
  width: 80%;
  margin: auto;
`
const FootInner = styled.div`
  padding: 10px 0 0 0;
  line-height: 21px;
`

const FootMain = styled.div`
  color: white;
  font-weight: 700;
  font-size: 10px;
  padding: 10px 0;
`

const Footbaby =styled.div`
    color: white;
    font-weight: 500;
    font-size: 10px;
`