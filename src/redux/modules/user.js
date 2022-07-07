import { api, instances } from "../../shared/api";
import { produce } from "immer";
import { deleteCookie, setCookie } from "./../../shared/Cookie";
import { axios } from "axios";
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
export const loginDB = (email, password) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5001/user", {
        email,
        password,
      })
      .then((response) => {
        dispatch(
          loginUser({
            is_login: true,
            token: response.headers.authorization,
          })
        );
        setCookie(
          "authorization",
          response.headers.Authorization.split(" ")[1]
        );
        setCookie("email", email);
      })
      .catch((error) => {
        window.alert("이메일 또는 비밀번호를 확인해주세요.");
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
