import { produce } from "immer";
// initialState
const initialState = {};

// action
const SET_USER = "user_reducer/SET_USER";
const PW_USER = "user_reducer/PW_USER";
const TOKEN_USER = "user_reducer/TOKEN_USER";

// action creator
export function __setUser(payload) {
  return { type: SET_USER, payload };
}
export function __pwUser(payload) {
  return { type: PW_USER, payload };
}
export function __tokenUser(payload) {
  return { type: TOKEN_USER, payload };
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
//reducer
export default function userReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case SET_USER: {
      return produce(state, (draft) => {
        draft.user = action.payload;
      });
    }
    case PW_USER: {
      return produce(state, (draft) => {
        draft.user = action.payload;
      });
    }
    default:
      return state;
  }
}
