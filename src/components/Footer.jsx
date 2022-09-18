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
          <a href='https://github.com/rtg1014/goodjob_BE' target="_blank"><img src={Github} alt="githubicon"/></a>
          <a href='https://github.com/YoujungSon/Good-Job-Calender' target="_blank"><img src={Github} alt="githubicon"/></a>
          <img src={Behance} alt="behanceicon"/>
          <a target="_blank" href='https://marked-chemistry-398.notion.site/3f8a1983d30844b3b8b812a7e3d995f0'><img src={Notion} alt="notionicon"/></a>
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
  /* overflow-y: hidden; */
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
  margin: 10px 0 10px;
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
  margin-bottom: 20px;
`