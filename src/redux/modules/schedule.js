import { produce } from "immer";
import { deleteCookie, setCookie, getCookie } from "../../shared/Cookie";
import axios from "axios";

// initialState
const initialState = {};

// action
const MONTH_LIST = "schedule_reducer/MONTH_LIST";
// action creator
export function Munth(payload) {
  return { type: MONTH_LIST, payload };
}
//middleware

//월간일정 조회

export const monthList = (payload) => {
  console.log(payload);
  return async function (dispatch, getState) {
    const myToken = getCookie("token");
    await axios({
      method: "get",
      url: "http://14.34.139.253:3000/api/schedule/monthly",
      data: payload,
      headers: { Authorization: `Bearer ${myToken}` },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("카테고리 선택 에러 : ", err);
      });
  };
};

//reducer
export default function scheduleReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case MONTH_LIST: {
      return produce(state, (draft) => {
        draft.month = action.payload.month;
      });
    }
    default:
      return state;
  }
}
