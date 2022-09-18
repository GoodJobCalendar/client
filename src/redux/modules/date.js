import { produce } from "immer";

const initialState = {
  is_login: null,
};

// action
const ZOOM_DATE = "date_reducer/ZOOM_DATE";
const ACTIVE_DATE = "date_reducer/ACTIVE_DATE";
const SELECT_DATE = "date_reducer/SELECT_DATE";
const DAY_DATE = "date_reducer/DAY_DATE";

// action creator
export function __zoomDate(payload) {
  return { type: ZOOM_DATE, payload };
}
export function __activeDate(payload) {
  return { type: ACTIVE_DATE, payload };
}
export function __selectDate(payload) {
  return { type: SELECT_DATE, payload };
}
export function __dayDate(payload) {
  return { type: DAY_DATE, payload };
}

//middleware
export const zoomDate = (zoomInOut) => {
  return function (dispatch) {
    const data = {
      zoomInOut,
    };
    dispatch(__zoomDate(data));
  };
};
export const activeDate = (isActive) => {
  return function (dispatch) {
    const data = {
      isActive,
    };
    dispatch(__activeDate(data));
  };
};
export const selectDate = (year, month, elm) => {
  return function (dispatch) {
    const data = { year, month, elm };
    dispatch(__selectDate(data));
  };
};
export const dayDate = (dayDate) => {
  return function (dispatch) {
    const data = { dayDate };

    dispatch(__dayDate(data));
  };
};

//reducer
export default function dateReducer(state = initialState, action) {
  switch (action.type) {
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
    case DAY_DATE: {
      return produce(state, (draft) => {
        draft.dayDate = action.payload;
      });
    }

    default:
      return state;
  }
}
