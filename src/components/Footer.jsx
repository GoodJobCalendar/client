import React from 'react'
import styled from 'styled-components'
import Github from "../assets/img/icon/Github.svg"
import Behance from "../assets/img/icon/Behance.svg"
import Notion from "../assets/img/icon/Notion.svg"

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
          <FootMain>CONTACT</FootMain>
          <Footbaby>문의</Footbaby>
        </FootInner>
        <Hr/>
        <FooterIcon>
          <img src={Github} alt="githubicon"/>
          <img src={Github} alt="githubicon"/>
          <img src={Behance} alt="behanceicon"/>
          <img src={Notion} alt="notionicon"/>
        </FooterIcon>
        <FooterCopy>Copyright ©CATLAB.All rights reserved</FooterCopy>
      </FootSmallWrap>  
    </FootWrap>
  )
}

export default Footer

const FootWrap = styled.div`
  background-color: #111111;
  height: 34vh;
  padding: 28px;
`

const FootSmallWrap =styled.div`
  margin: auto;
`
const FootInner = styled.div`
  padding: 10px 0 ;
  line-height: 15px;
`

const FootMain = styled.div`
  color: white;
  font-weight: 700;
  font-size: 10px;
  padding: 15px 0;
`

const Footbaby =styled.div`
    color: white;
    font-weight: 350;
    font-size: 10px;
`
const Hr = styled.div`
  border: 1px solid white;
  margin: 20px 0 15px;
`

const FooterIcon =styled.div`
  display: flex;
  justify-content: space-between;
  img{
    width: 40px;
    height: 40px;
  }
`
const FooterCopy = styled.div`
  color: white;
  margin: auto;
  font-weight: 350;
  font-size: 10px;
  text-align: center;
  margin-top: 24px;
`