import { produce } from "immer";
import { deleteCookie, setCookie, getCookie } from "../../shared/Cookie";
import axios from "axios";

// initialState
const initialState = {
  schedule : []
};

// action
const MONTH_LIST = "schedule_reducer/MONTH_LIST";

// action creator
export function loadMonth(payload) {
  return { type: MONTH_LIST, payload };
}

//middleware

//월간일정 조회
export const monthList = (payload) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const bucket = {
      headers: { Authorization: `Bearer ${myToken}` },
      params: { startDate: payload },
    }
    axios.get("http://14.34.139.253:3000/api/schedule/monthly", bucket)
    .then((res) => {
      dispatch(loadMonth(res.data.data));
      console.log(res.data.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

//reducer
export default function scheduleReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case MONTH_LIST: {
      return produce(state, (draft) => {
        draft.month = action.payload;
      });
    }
    default:
      return state;
  }
}
