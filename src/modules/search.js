import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import scheduleApi from '../apis/schedule';

// 액션
const SEARCH_MY_SCHEDULE = 'SEARCH_MY_SCHEDULE';

// 초기값
const initialState = {
  search: {
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

// 액션 생성 함수

const __searchMySchedule = createAction(SEARCH_MY_SCHEDULE, (search) => ({
  search,
}));

// 미들웨어

export const searchMySchedule = (keyword) => {
  return function (dispatch, getState) {
    scheduleApi
      .getSearchList(keyword)
      .then((res) => {
        dispatch(__searchMySchedule(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const search = handleActions(
  {
    [SEARCH_MY_SCHEDULE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
        draft.search = action.payload.search.data;
      }),
  },
  initialState,
);
