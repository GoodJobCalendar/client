import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { logoutUser, __logoutUser } from "./../redux/modules/user";
import { getCookie } from "../shared/Cookie";

//이미지
import calendar_w from "../assets/img/icon/calendar_w.svg";
import calendar_c from "../assets/img/icon/calendar_c.svg";
import element_w from "../assets/img/icon/element_w.svg";
import element_c from "../assets/img/icon/element_c.svg";
import MypageBtn from "../assets/img/icon/MypageBtn.svg";
import heart from "../assets/img/icon/Heart.svg";
import needLogin from "../assets/img/illust/needlogin.png";
import { deleteCookie } from "./../shared/Cookie";

const Nav = (props) => {
  const token = getCookie("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nav, setNav] = useState(props.navData);
  const [loginOn, setLoginOn] = useState(false);
  // const is_Login = useSelector((state) => state.user.is_login);

  const logOut = () => {
    deleteCookie("token");
    setLoginOn(false);
  };

  useEffect(() => {
    if (token) {
      setLoginOn(true);
    }
  }, [loginOn]);

  return (
    <NavWrap>
      {loginOn ? (
        ""
      ) : (
        <NeedLogin>
          <NeedLoginModal>
            <p>로그인 필요</p>
            <img src={needLogin} alt="로그인 필요" />
            <span>
              로그인된 상태에서만
              <br />
              이용할 수 있습니다.
            </span>
            <NeedLoginBtn
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인하러가기
            </NeedLoginBtn>
          </NeedLoginModal>
        </NeedLogin>
      )}

      <NavTitle>
        {/* <Ham >
          <LineList>
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </LineList>
        </Ham> */}
            <LogOutBtn
            onClick={()=>{
              navigate("/mypage")
            }}
            >
              <img src={MypageBtn} alt="마이페이지" />
            </LogOutBtn>
            <span 
            style={{fontSize:"12px",letterSpacing:"0.8px"}}
            >{nav ? "취준캘린더" : "추천채용"}</span>
            <LogOutBtn onClick={()=>{
              navigate("/zzim")
            }}>
              <img src={heart} alt="찜페이지" />
            </LogOutBtn>
      </NavTitle>
      <NavList>
        <NavItem nav={nav}>
          <NavLink to="/main">
            <img src={nav ? calendar_c : calendar_w} alt="캘린더" />
            <span>캘린더</span>
          </NavLink>
        </NavItem>
        <NavItem nav={nav}>
          <NavLink to="/job">
            <img src={nav ? element_w : element_c} alt="추천채용" />
            <span>추천채용</span>
          </NavLink>
        </NavItem>
      </NavList>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--blue4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  * {
    color: #fff;
  }
`;
const NeedLogin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.3);
  z-index: 99999;
`;
const NeedLoginBtn = styled.button`
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
const NeedLoginModal = styled.div`
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
  box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32),
    inset 0px 8px 14px rgba(255, 255, 255, 0.3);
  border-radius: 21px;
  padding: 40px 80px;
  width: 40%;
  text-align: center;
`;
const NavTitle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 7;
  padding: 20px 17px;
  padding-bottom: 30px;
  height: 56px;
  span {
    font-weight: 700;
    display: block;
  }
`;
const NavList = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-end;
  height: 70px;
  flex: 3;
  > * {
    flex: 1;
  }
  height: 70px;
`;
const Ham = styled.button`
  background-color: transparent;
`;
const LineList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Line = styled.li`
  background: var(--blue1);
  border-radius: 4px;
  width: 19px;
  height: 2px;
`;
const LogOutBtn = styled.button`
  background-color: transparent;
`;
const NavLink = styled(Link)`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
const NavItem = styled.li`
  :nth-of-type(1) {
    span {
      display: block;
      padding: 8px 27.5px;
      border-bottom: ${(props) => (props.nav ? "2px solid var(--point1)" : "")};
      color: ${(props) => (props.nav ? "var(--point1)" : "")};
    }
  }
  :nth-of-type(2) {
    span {
      display: block;
      padding: 8px 27.5px;
      border-bottom: ${(props) => (props.nav ? "" : "2px solid var(--point1)")};
      color: ${(props) => (props.nav ? "" : "var(--point1)")};
    }
  }
  flex: 1;
`;
