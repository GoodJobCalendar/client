import { produce } from 'immer';

// initialState
const initialState = {};

// action
const PW_USER = 'user/PW_USER';

// action creator
export function __pwUser(payload) {
  return { type: PW_USER, payload };
}

//middleware
export const pwEmailUser = (email, userName) => {
  return function (dispatch) {
    const data = {
      email,
      userName,
    };
    dispatch(__pwUser(data));
  };
};

//reducer
export default function user(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case PW_USER: {
      return produce(state, (draft) => {
        draft.user = action.payload;
      });
    }
    default:
      return state;
  }
}
