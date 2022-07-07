import { api, instances } from "../../shared/api";
import { produce } from "immer";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import cookies from "universal-cookie";

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

export const kakaoLoginDB = (code) => {
  console.log(code)
  return async function (dispatch, getState, { history }) {
    await axios.get(`http://175.112.86.142:8088/api/user/kakao/callback?code=${code}`)
      .then((response) => {
        console.log("카카오 로그인 성공", response);
        if (Math.floor(response.status / 100) === 2) {
          console.log("카카오 로그인 성공", response);
          const userToken = response.headers?.authorization?.split(" ")[1];
          // const decoded = jwt_decode(userToken);
          setCookie("userToken", userToken);
          // dispatch(
          //   logIn({
          //     expiredDate: decoded.EXPIRED_DATE,
          //     email: decoded.USER_EMAIL,
          //     name: decoded.USER_NAME,
          //     level: decoded.USER_LEVEL,
          //   })
          // );
          history.replace("/");
        }
      })
      .catch((err) => {
        console.log("카카오 로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/");
    });
  };
};

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
