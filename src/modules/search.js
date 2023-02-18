import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// 액션
const SEARCH_MY_SCHEDULE = 'search/SEARCH_MY_SCHEDULE';
const SEARCH_KEWORD = 'search/SEARCH_KEWORD';

// 초기값
const initialState = {
  search: {},
  searchKeyword: '',
};

// 액션 생성 함수

export const __searchMySchedule = createAction(SEARCH_MY_SCHEDULE, (search) => search);
export const __searchKeyword = createAction(SEARCH_KEWORD, (keyword) => keyword);

export const search = handleActions(
  {
    [SEARCH_MY_SCHEDULE]: (state, action) =>
      produce(state, (draft) => {
        draft.search = action.payload.data;
      }),
    [SEARCH_KEWORD]: (state, action) =>
      produce(state, (draft) => {
        draft.searchKeyword = action.payload;
      }),
  },
  initialState,
);
