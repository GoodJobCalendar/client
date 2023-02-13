import { produce } from 'immer';

const initialState = {
  zoom: true,
  active: false,
};

// action
const NUMBER_DATE = 'date/NUMBER_DATE';
const ZOOM_DATE = 'date/ZOOM_DATE';
const ACTIVE_DATE = 'date/ACTIVE_DATE';
const SELECT_DATE = 'date/SELECT_DATE';

// action creator
export function __numberDate(payload) {
  return { type: NUMBER_DATE, payload };
}
export function __zoomDate(payload) {
  return { type: ZOOM_DATE, payload };
}
export function __activeDate(payload) {
  return { type: ACTIVE_DATE, payload };
}
export function __selectDate(payload) {
  return { type: SELECT_DATE, payload };
}

//reducer
export default function date(state = initialState, action) {
  switch (action.type) {
    case NUMBER_DATE: {
      return produce(state, (draft) => {
        draft.date = action.payload;
      });
    }
    case ZOOM_DATE: {
      return produce(state, (draft) => {
        draft.zoom = action.payload;
      });
    }
    case ACTIVE_DATE: {
      return produce(state, (draft) => {
        draft.active = action.payload;
      });
    }
    case SELECT_DATE: {
      return produce(state, (draft) => {
        draft.select = action.payload;
      });
    }

    default:
      return state;
  }
}
