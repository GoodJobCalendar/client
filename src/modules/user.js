import { produce } from 'immer';

// initialState
const initialState = {};

// action
const SIGNUP_USER = 'user/SIGNUP_USER';
const PW_USER = 'user/PW_USER';

// action creator
export function __signUpUser(payload) {
  return { type: SIGNUP_USER, payload };
}
export function __pwUser(payload) {
  return { type: PW_USER, payload };
}

//reducer
export default function user(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case PW_USER: {
      return produce(state, (draft) => {
        draft.pwInfo = action.payload;
      });
    }
    case SIGNUP_USER: {
      return produce(state, (draft) => {
        draft.signUpInfo = action.payload;
      });
    }
    default:
      return state;
  }
}
