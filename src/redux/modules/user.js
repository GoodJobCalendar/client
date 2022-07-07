import { api, instances } from "../../shared/api";

// initialState
const initialState = {
  user: null,
  is_login: null,
};

/* ----------------- 액션 타입 ------------------ */
const SET_USER = "user_reducer/SET_USER";
const LOG_OUT = "user_reducer/LOG_OUT";
const USER_IMG = "user_reducer/USER_IMG";
const SET_USEREMAIL = "user_reducer/SET_USEREMAIL";

/* ----------------- 액션 생성 함수 ------------------ */

export function setUser(payload) {
  return { type: SET_USER, payload };
}
export function logoutUser(payload) {
  return { type: LOG_OUT, payload };
}
// export function enterChatRoom(payload) {
//   return { type: USER_IMG, payload };
// }
// export function enterChatRoom(payload) {
//   return { type: SET_USEREMAIL, payload };
// }

/* ----------------- 미들웨어 ------------------ */

// export const inviteUserDB = (roomId, username) => {
//   return async function (dispatch) {
//       //console.log("inviteUserDB : username", roomid, username);
//       const res = await apis.inviteUser(roomId, username)
//       // dispatch(inviteUser(res.data))
//   };
// };

/* ----------------- 리듀서 ------------------ */
export default function userReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
}
