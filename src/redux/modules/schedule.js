import { produce } from "immer";
import { deleteCookie, setCookie, getCookie } from "../../shared/Cookie";
import axios from "axios";

// initialState
const initialState = {
  month: {
    220830: [
      {
        color: 1,
        companyName: "현대오토에버㈜",
        coverImage: 1,
        date: "2121-12-31 15:00:00",
        memo: null,
        place: "서울 강남구",
        postingId: 2406,
        scheduleId: 54,
        sticker: 1,
        title: "App개발 경력 채용",
        type: "auto",
      },
    ],
  },
  daily: {
    220830: [
      {
        color: 1,
        companyName: "현대오토에버㈜",
        coverImage: 1,
        date: "2121-12-31 15:00:00",
        memo: null,
        place: "서울 강남구",
        postingId: 2406,
        scheduleId: 54,
        sticker: 1,
        title: "App개발 경력 채용",
        type: "auto",
      },
    ],
  },
};

// action
const LIST_DETAIL = "schedule_reducer/LIST_DETAIL";
const LIST_DELETE = "schedule_reducer/LIST_DELETE";
const MONTH_LIST = "schedule_reducer/MONTH_LIST";
const DAILY_LIST = "schedule_reducer/DAILY_LIST";

// action creator
export function __deletePost(payload) {
  return { type: LIST_DELETE, payload };
}
export function __detailPost(payload) {
  return { type: LIST_DETAIL, payload };
}
export function __loadMonth(payload) {
  console.log(payload);
  return { type: MONTH_LIST, payload };
}
export function __loadDaily(payload) {
  return { type: DAILY_LIST, payload };
}

//middleware

//일정 삭제
export const deletePost = (scheduleId) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
    };
    axios
      .delete(`https://goodjobcalendar.com/api/schedule/${scheduleId}`, data)
      .then((res) => {
        dispatch(__deletePost(res.data.data));
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
//일정상세 조회
export const detailPost = (scheduleId) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
    };
    axios
      .get(`https://goodjobcalendar.com/api/schedule/${scheduleId}`, data)
      .then((res) => {
        dispatch(__detailPost(res.data.data));
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//월간일정 조회
export const loadMonth = (payload) => {
  console.log(payload);
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
      params: { startDate: payload },
    };
    axios
      .get("https://goodjobcalendar.com/api/schedule/monthly", data)
      .then((res) => {
        dispatch(__loadMonth(res.data.data));
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//일간일정 조회
export const loadDaily = (payload) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
      params: { startDate: payload },
    };
    axios
      .get("https://goodjobcalendar.com/api/schedule/daily", data)
      .then((res) => {
        dispatch(__loadDaily(res.data.data));
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//reducer
export default function scheduleReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LIST_DELETE: {
      return produce(state, (draft) => {
        draft.delete = action.payload;
      });
    }
    case LIST_DETAIL: {
      return produce(state, (draft) => {
        draft.detail = action.payload;
      });
    }
    case MONTH_LIST: {
      return produce(state, (draft) => {
        draft.month = action.payload;
      });
    }
    case DAILY_LIST: {
      return produce(state, (draft) => {
        draft.daily = action.payload;
      });
    }
    default:
      return state;
  }
}
