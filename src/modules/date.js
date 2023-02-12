import { produce } from 'immer';

const initialState = {
  zoom: {
    zoomInOut: true,
  },
  active: {
    isActive: false,
  },
};

// action
const NUMBER_DATE = 'date/NUMBER_DATE';
const ZOOM_DATE = 'date/ZOOM_DATE';
const ACTIVE_DATE = 'date/ACTIVE_DATE';
const SELECT_DATE = 'date/SELECT_DATE';
const DAY_DATE = 'date/DAY_DATE';

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
export function __dayDate(payload) {
  return { type: DAY_DATE, payload };
}

//middleware
export const zoom = (zoomInOut) => {
  return function (dispatch) {
    const data = {
      zoomInOut,
    };
    dispatch(__zoomDate(data));
  };
};
export const active = (isActive) => {
  return function (dispatch) {
    const data = {
      isActive,
    };
    dispatch(__activeDate(data));
  };
};
export const select = (year, month, elm) => {
  return function (dispatch) {
    const data = { year, month, elm };
    dispatch(__selectDate(data));
  };
};
export const day = (dayDate) => {
  return function (dispatch) {
    const data = { dayDate };

    dispatch(__dayDate(data));
  };
};

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
    case DAY_DATE: {
      return produce(state, (draft) => {
        draft.dayDate = action.payload;
      });
    }

    default:
      return state;
  }
}
