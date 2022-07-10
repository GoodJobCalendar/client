import { api, instances } from "../../shared/api";
import { produce } from "immer";
import { deleteCookie, setCookie, getCookie } from "./../../shared/Cookie";
import axios from "axios";
import { Navigate } from "react-router-dom";
// initialState
const initialState = {
  is_login: null,
};

// action
const SET_USER = "user_reducer/SET_USER";
const LOGIN_USER = "user_reducer/LOGIN_USER";
const LOGOUT_USER = "user_reducer/LOGOUT_USER";
const TOKEN_USER = "user_reducer/TOKEN_USER";

// action creator
export function setUser(payload) {
  return { type: SET_USER, payload };
}
export function loginUser(payload) {
  return { type: LOGIN_USER, payload };
}
export function logoutUser(payload) {
  return { type: LOGOUT_USER, payload };
}
export function tokenUser(payload) {
  return { type: TOKEN_USER, payload };
}

//middleware
export const loginDB = (payload) => {
  return function (dispatch) {
    axios
      .post("http://14.34.139.253:3000/api/auth", payload)
      .then((response) => {
        dispatch(setUser(payload));
        setCookie("token", response.data.token, 5);
      })
      .catch((error) => {
        console.error(error);
        window.alert("이메일 또는 비밀번호를 확인해주세요.");
      });
  };
};

export const kakaoLoginDB = (code) => {
  console.log(code);
  return function (dispatch, getState) {
    axios
      .get(`http://14.34.139.253:3000/api/auth/kakao/callback?code=${code}`)
      .then((response) => {
        console.log("카카오 로그인 성공", response);
        dispatch(setUser());
        setCookie("token", response.data.token, 5);
      })
      .catch((err) => {
        console.log("카카오 로그인 에러", err);
        window.alert("어림없어 돌아가.");
      });
  };
};

//reducer
export default function userReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case SET_USER: {
      return produce(state, (draft) => {
        setCookie("is_login", "true");
        draft.is_login = true;
        draft.user = action.payload;
      });
    }
    case LOGIN_USER: {
      return produce(state, (draft) => {
        setCookie("is_login", "true");
        draft.token = action.payload.user.token;
        draft.user = action.payload.user.user;
        draft.is_login = true;
      });
    }
    case LOGOUT_USER: {
      return produce(state, (draft) => {
        deleteCookie("is_login");
        localStorage.removeItem("username");
        localStorage.removeItem("authorization");
        draft.user = null;
        draft.is_login = false;
      });
    }
    case TOKEN_USER: {
      return produce(state, (draft) => {
        draft.is_login = true;
      });
    }
    default:
      return state;
  }
}
