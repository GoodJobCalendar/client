import { produce } from "immer";
import { deleteCookie, setCookie, getCookie } from "./../../shared/Cookie";
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
const SCHEDULE_POST = "user_reducer/SCHEDULE_POST";

// action creator
export function schedulePost(payload) {
  return { type: SCHEDULE_POST, payload };
}

//middleware
export const SchduleDB = (payload) => {
  console.log(payload);
  return function (dispatch) {
    const token = getCookie("token");

    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .post("http://14.34.139.253:3000/api/schedule", payload, config)
      .then((response) => {
        console.log(response);
        dispatch(schedulePost(payload));
      })
      .catch((error) => {
        console.error(error);
        window.alert("등록 못함 으이그");
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
    default:
      return state;
  }
}
