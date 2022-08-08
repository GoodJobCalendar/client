import { produce } from "immer";
import { deleteCookie, setCookie, getCookie } from "../../shared/Cookie";
import axios from "axios";

// initialState
const initialState = {
  month: {
    220830: [
      {
        color: 0,
        companyName: "현대오토에버㈜",
        coverImage: 0,
        date: "2121-12-31 15:00:00",
        memo: null,
        place: "서울 강남구",
        postingId: 2406,
        scheduleId: 0,
        sticker: 0,
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
const SCHEDULE_POST = "schedule_reducer/SCHEDULE_POST";
const SCHEDULE_UPDATE = "schedule_reducer/SCHEDULE_UPDATE";
const LIST_DETAIL = "schedule_reducer/LIST_DETAIL";
const LIST_DELETE = "schedule_reducer/LIST_DELETE";
const MONTH_LIST = "schedule_reducer/MONTH_LIST";
const DAILY_LIST = "schedule_reducer/DAILY_LIST";

// action creator
export function __schedulePost(payload) {
  return { type: SCHEDULE_POST, payload };
}
export function __scheduleUpdate(payload) {
  return { type: SCHEDULE_UPDATE, payload };
}
export function __deletePost(payload) {
  return { type: LIST_DELETE, payload };
}
export function __detailPost(payload) {
  return { type: LIST_DETAIL, payload };
}
export function __loadMonth(payload) {
  return { type: MONTH_LIST, payload };
}
export function __loadDaily(payload) {
  return { type: DAILY_LIST, payload };
}

//middleware

//개인일정 작성
export const schedulePost = (payload) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    axios({
      method: "post",
      url: `https://goodjobcalendar.shop/api/schedule`,
      data: payload,
      headers: { Authorization: `Bearer ${myToken}` },
    })
      .then((res) => {
        dispatch(__schedulePost(res.data.data));
        dispatch(
          loadMonth(
            `${res.data.data.date.split(" ")[0].substr(0, 7)}-01 00:00:00`
          )
        );
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
//일정 삭제
export const deletePost = (scheduleId, startDate) => {
  console.log(scheduleId, startDate);
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
      params: { startDate: startDate },
    };
    axios
      .delete(`https://goodjobcalendar.shop/api/schedule/${scheduleId}`, data)
      .then((res) => {
        console.log(res, "아아ㅏㅇ아ㅏ아");
        dispatch(__deletePost(scheduleId));
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
      .get(`https://goodjobcalendar.shop/api/schedule/${scheduleId}`, data)
      .then((res) => {
        dispatch(__detailPost(res.data.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//월간일정 조회
export const loadMonth = (payload) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
      params: { startDate: payload },
    };
    axios
      .get("https://goodjobcalendar.shop/api/schedule/monthly", data)
      .then((res) => {
        dispatch(__loadMonth(res.data.data));
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
      .get("https://goodjobcalendar.shop/api/schedule/daily", data)
      .then((res) => {
        dispatch(__loadDaily(res.data.data));
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
    case SCHEDULE_UPDATE: {
      return produce(state, (draft) => {
        setCookie("is_login", "true");
        draft.is_login = true;
        function a() {
          if (state.detail.scheduleId === action.payload.scheduleId) {
            return action.payload;
          } else {
            return state.detail;
          }
        }
        draft.detail = a();
      });
    }
    case LIST_DELETE: {
      return produce(state, (draft) => {
        draft.month = draft.month.filter((value) => {
          return value.scheduleId !== Number(action.payload);
        });
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
