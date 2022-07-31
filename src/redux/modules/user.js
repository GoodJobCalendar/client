import { api, instances } from "../../shared/api";
import { produce } from "immer";
import { deleteCookie, setCookie, getCookie } from "./../../shared/Cookie";
import axios from "axios";
// initialState
const initialState = {
  is_login: null,
};

// action
const SET_USER = "user_reducer/SET_USER";
const LOGIN_USER = "user_reducer/LOGIN_USER";
const PW_USER = "user_reducer/PW_USER";
const LOGOUT_USER = "user_reducer/LOGOUT_USER";
const TOKEN_USER = "user_reducer/TOKEN_USER";

// action creator
export function setUser(payload) {
  return { type: SET_USER, payload };
}
export function loginUser(payload) {
  return { type: LOGIN_USER, payload };
}
export function pwUser(payload) {
  return { type: PW_USER, payload };
}
export function __logoutUser(payload) {
  return { type: LOGOUT_USER, payload };
}
export function tokenUser(payload) {
  return { type: TOKEN_USER, payload };
}

//middleware

export const pwEmailUser = (email, userName) => {
  return function (dispatch) {
    const data = {
      email,
      userName,
    };
    dispatch(pwUser(data));
  };
};

export const kakaoLoginDB = (code) => {
  return function (dispatch, getState) {
    axios
      .get(`https://goodjobcalendar.shop/api/auth/kakao/callback?code=${code}`)
      .then((response) => {
        dispatch(setUser());
        setCookie("token", response.data.token, 5);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
//로그 아웃
export const logoutUser = () => (dispatch, getState) => {
  dispatch(__logoutUser());
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
    case PW_USER: {
      return produce(state, (draft) => {
        draft.user = action.payload;
      });
    }
    case LOGOUT_USER: {
      return produce(state, (draft) => {
        deleteCookie("is_login");
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
