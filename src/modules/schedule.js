import { produce } from 'immer';
import scheduleApi from '../apis/schedule';
import {
  __colorInfo,
  __companyNameInfo,
  __imageInfo,
  __memoInfo,
  __placeInfo,
  __selectHour,
  __selectMinute,
  __selectTime,
  __stickerInfo,
  __titleInfo,
} from './update';
// initialState
const initialState = {
  month: {},
  daily: {},
  updateShow: false,
  scheduleId: null,
};

// action
const SCHEDULE_POST = 'schedule/SCHEDULE_POST';
const SCHEDULE_UPDATE = 'schedule/SCHEDULE_UPDATE';
const LIST_DETAIL = 'schedule/LIST_DETAIL';
const LIST_DELETE = 'schedule/LIST_DELETE';
const MONTH_LIST = 'schedule/MONTH_LIST';
const DAILY_LIST = 'schedule/DAILY_LIST';
const SCHEDULE_KEYWORD = 'schedule/SCHEDULE_KEYWORD';
const UPDATE_SHOW = 'schedule/UPDATE_SHOW';
const SCHEDULEID_GET = 'schedule/SCHEDULEID_GET';

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
export function __updateShow(payload) {
  return { type: UPDATE_SHOW, payload };
}
export function __scheduleIdGet(payload) {
  return { type: SCHEDULEID_GET, payload };
}

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
        const dataList = res.data.data;
        dispatch(__detailPost(dataList));
        if (dataList.date.split(' ')[1].split(':')[0] > 12) {
          dispatch(__selectTime('오후'));
        } else {
          dispatch(__selectTime('오전'));
        }
        dispatch(__selectHour(dataList.date.split(' ')[1].split(':')[0]));
        dispatch(__selectMinute(dataList.date.split(' ')[1].split(':')[1]));
        dispatch(__imageInfo(String(dataList.coverImage)));
        dispatch(__companyNameInfo(dataList.companyName));
        dispatch(__titleInfo(dataList.title));
        dispatch(__stickerInfo(String(dataList.sticker)));
        dispatch(__colorInfo(String(dataList.color)));
        dispatch(__placeInfo(dataList.place));
        dispatch(__memoInfo(dataList.memo));
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
    case UPDATE_SHOW: {
      return produce(state, (draft) => {
        draft.updateShow = action.payload;
      });
    }
    case SCHEDULEID_GET: {
      return produce(state, (draft) => {
        draft.scheduleId = action.payload;
      });
    }
    default:
      return state;
  }
}
