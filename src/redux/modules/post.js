import { produce } from "immer";
import { setCookie, getCookie } from "./../../shared/Cookie";
import axios from "axios";

// initialState
const initialState = {
  image: "",
  companyName: "",
  title: "",
  sticker: "",
  date: "",
  place: "",
  memo: "",
  is_login: null,
};

// action
const SCHEDULE_POST = "post_reducer/SCHEDULE_POST";
const SCHEDULE_UPDATE = "post_reducer/SCHEDULE_UPDATE";

// action creator
export function __schedulePost(payload) {
  return { type: SCHEDULE_POST, payload };
}
export function __scheduleUpdate(payload) {
  return { type: SCHEDULE_UPDATE, payload };
}

//middleware

//개인일정 작성
export const schedulePost = (payload) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    axios({
      method: "post",
      url: "https://goodjobcalendar.shop/api/schedule",
      data: payload,
      headers: { Authorization: `Bearer ${myToken}` },
    })
      .then((res) => {
        dispatch(__schedulePost(res.payload));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
//개인일정 수정
export const scheduleUpdate = ({
  image,
  companyName, //필수입력
  title, //필수입력
  sticker,
  date, //필수입력
  place, //필수입력
  memo,
  color,
  scheduleId,
}) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");

    axios({
      method: "patch",
      url: `https://goodjobcalendar.shop/api/schedule/${scheduleId}`,
      data: {
        image,
        companyName, //필수입력
        title, //필수입력
        sticker,
        date, //필수입력
        place, //필수입력
        memo,
        color,
      },
      headers: { Authorization: `Bearer ${myToken}` },
    })
      .then((res) => {
        dispatch(__scheduleUpdate(res.data.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

//reducer
export default function postReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case SCHEDULE_POST: {
      return produce(state, (draft) => {
        setCookie("is_login", "true");
        draft.is_login = true;
        draft.post = action.payload;
      });
    }
    case SCHEDULE_UPDATE: {
      return produce(state, (draft) => {
        setCookie("is_login", "true");
        draft.is_login = true;
        draft.update = action.payload;
      });
    }
    default:
      return state;
  }
}
