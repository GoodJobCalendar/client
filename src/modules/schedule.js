import { produce } from 'immer';
import { setCookie } from '../shared/cookie';
import scheduleApi from '../apis/schedule';

// initialState
const initialState = {
  month: {
    220830: [
      {
        color: 0,
        companyName: '현대오토에버㈜',
        coverImage: 0,
        date: '2121-12-31 15:00:00',
        memo: null,
        place: '서울 강남구',
        postingId: 2406,
        scheduleId: 0,
        sticker: 0,
        title: 'App개발 경력 채용',
        type: 'auto',
      },
    ],
  },
  daily: {
    220830: [
      {
        color: 1,
        companyName: '현대오토에버㈜',
        coverImage: 1,
        date: '2121-12-31 15:00:00',
        memo: null,
        place: '서울 강남구',
        postingId: 2406,
        scheduleId: 54,
        sticker: 1,
        title: 'App개발 경력 채용',
        type: 'auto',
      },
    ],
  },
};

// action
const SCHEDULE_POST = 'schedule/SCHEDULE_POST';
const SCHEDULE_UPDATE = 'schedule/SCHEDULE_UPDATE';
const LIST_DETAIL = 'schedule/LIST_DETAIL';
const LIST_DELETE = 'schedule/LIST_DELETE';
const MONTH_LIST = 'schedule/MONTH_LIST';
const DAILY_LIST = 'schedule/DAILY_LIST';
const SCHEDULE_KEYWORD = 'schedule/SCHEDULE_KEYWORD';

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
export function __scheduleKeyword(payload) {
  return { type: SCHEDULE_KEYWORD, payload };
}

//middleware

//개인일정 작성
export const schedulePost = ({ image, companyName, title, sticker, color, date, place, memo }) => {
  return function (dispatch, getState) {
    scheduleApi
      .postSchedule({ image, companyName, title, sticker, color, date, place, memo })
      .then((res) => {
        dispatch(loadMonth(`${res.data.data.date.split(' ')[0].substr(0, 7)}-01 00:00:00`));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

//개인일정 수정
export const scheduleUpdate = ({ scheduleId, image, companyName, title, sticker, color, date, place, memo }) => {
  return function (dispatch, getState) {
    scheduleApi
      .modifySchedule(scheduleId, { image, companyName, title, sticker, color, date, place, memo })
      .then((res) => {
        dispatch(__scheduleUpdate(res.data.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
//일정 삭제
export const deletePost = (scheduleId) => {
  return function (dispatch, getState) {
    scheduleApi
      .deleteSchedule(scheduleId)
      .then((res) => {
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
    scheduleApi
      .getDetailSchedule(scheduleId)
      .then((res) => {
        dispatch(__detailPost(res.data.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// 일정월별조회
export const loadMonth = (startDate) => {
  return function (dispatch, getState) {
    scheduleApi
      .getMonthlySchedules(startDate)
      .then((res) => {
        dispatch(__loadMonth(res.data.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// 일정일별조회
export const loadDaily = (startDate) => {
  return function (dispatch, getState) {
    scheduleApi
      .getDailySchedules(startDate)
      .then((res) => {
        dispatch(__loadDaily(res.data.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//reducer
export default function schedule(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case SCHEDULE_UPDATE: {
      return produce(state, (draft) => {
        setCookie('is_login', 'true');
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
    case SCHEDULE_KEYWORD: {
      return produce(state, (draft) => {
        draft.keyword = action.payload;
      });
    }
    default:
      return state;
  }
}
