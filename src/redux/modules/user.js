import { produce } from "immer";
import { deleteCookie, setCookie } from "../../shared/cookie";
// initialState
const initialState = {};

// action
const LOGIN_USER = "user_reducer/LOGIN_USER";
const PW_USER = "user_reducer/PW_USER";
const LOGOUT_USER = "user_reducer/LOGOUT_USER";

// action creator

export function __loginUser(payload) {
  return { type: LOGIN_USER, payload };
}
export function __pwUser(payload) {
  return { type: PW_USER, payload };
}
export function __logoutUser(payload) {
  return { type: LOGOUT_USER, payload };
}

//middleware

export const pwEmailUser = (email, userName) => {
  return function (dispatch) {
    const data = {
      email,
      userName,
    };
    dispatch(__pwUser(data));
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
    case LOGIN_USER: {
      return produce(state, (draft) => {
        setCookie("is_login", "true");
        draft.token = action.payload.user.token;
        draft.user = action.payload.user.user;
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
      });
    }
    default:
      return state;
  }
}
