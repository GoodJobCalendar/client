import { produce } from 'immer';

const initialState = {
  zoom: true,
  active: false,
  date: {
    DATE: new Date(),
    YEAR: new Date().getFullYear(),
    MONTH: new Date().getMonth() + 1,
    TODAY: new Date().getDate(),
  },
  changeMonth: new Date().getMonth() + 1,
  changeYear: new Date().getFullYear(),
  totalDate: [],
};

// action
const TODAY_DATE = 'date/TODAY_DATE';
const NUMBER_DATE = 'date/NUMBER_DATE';
const ZOOM_DATE = 'date/ZOOM_DATE';
const ACTIVE_DATE = 'date/ACTIVE_DATE';
const SELECT_DATE = 'date/SELECT_DATE';
const TOTAL_DATE = 'date/TOTAL_DATE';
const CHANGE_MONTH = 'date/CHANGE_MONTH';
const CHANGE_YEAR = 'date/CHANGE_YEAR';

// action creator
export function __todayDate(payload) {
  return { type: TODAY_DATE, payload };
}

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
export function __totalDate(payload) {
  return { type: TOTAL_DATE, payload };
}
export function __changeMonth(payload) {
  return { type: CHANGE_MONTH, payload };
}
export function __changeYear(payload) {
  return { type: CHANGE_YEAR, payload };
}

//reducer
export default function date(state = initialState, action) {
  switch (action.type) {
    case TODAY_DATE: {
      return produce(state, (draft) => {
        draft.date = action.payload;
      });
    }
    case NUMBER_DATE: {
      return produce(state, (draft) => {
        draft.calendar = action.payload;
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
    case TOTAL_DATE: {
      return produce(state, (draft) => {
        draft.totalDate = action.payload;
      });
    }
    case CHANGE_MONTH: {
      return produce(state, (draft) => {
        draft.changeMonth = action.payload;
      });
    }
    case CHANGE_YEAR: {
      return produce(state, (draft) => {
        draft.changeYear = action.payload;
      });
    }

    default:
      return state;
  }
}
