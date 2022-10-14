import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

// 액션

const SEARCH_MY_SCHEDULE = "SEARCH_MY_SCHEDULE";

// 초기값

const initialState = {
  search: {
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

// 액션 생성 함수

const __searchMySchedule = createAction(SEARCH_MY_SCHEDULE, (search) => ({
  search,
}));

// 미들웨어

export const searchMySchedule = (keyword) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const bucket = {
      headers: { Authorization: `Bearer ${myToken}` },
      params: { keyword: keyword },
    };
    axios
      .get("https://goodjobcalendar.shop/api/schedule/search", bucket)
      .then((res) => {
        dispatch(__searchMySchedule(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export default handleActions(
  {
    [SEARCH_MY_SCHEDULE]: (state, action) =>
      produce(state, (draft) => {
        draft.search = action.payload.search.data;
      }),
  },
  initialState
);
