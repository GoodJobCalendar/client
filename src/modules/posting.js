import { produce } from 'immer';

const initialState = {
  stickerShow: false,
  coverShow: false,
  colorPickerShow: false,
  empty: false,
  selectDate: new Date(),
  textDate: '',
  formatDate: '',
  selectTime: '오전',
  selectHour: '01',
  selectMinute: '00',
  image: '1',
  companyName: '',
  title: '',
  sticker: '1',
  date: '',
  place: '',
  memo: '',
  color: '1',
};

// action
const STICKER_SHOW = 'posting/STICKER_SHOW';
const COVER_SHOW = 'posting/COVER_SHOW';
const COLORPIKER_SHOW = 'posting/COLORPIKER_SHOW';
const EMPTY_CONTENT = 'posting/EMPTY_CONTENT';
const SELECT_DATE = 'posting/SELECT_DATE';
const TEXT_DATE = 'posting/TEXT_DATE';
const FORMAT_DATE = 'posting/FORMAT_DATE';
const SELECT_TIME = 'posting/SELECT_TIME';
const SELECT_HOUR = 'posting/SELECT_HOUR';
const SELECT_MINUTE = 'posting/SELECT_MINUTE';
const IMAGE_POSTING = 'posting/IMAGE_POSTING';
const COMPANYNAME_POSTING = 'posting/COMPANYNAME_POSTING';
const TITLE_POSTING = 'posting/TITLE_POSTING';
const STICKER_POSTING = 'posting/STICKER_POSTING';
const DATE_POSTING = 'posting/DATE_POSTING';
const PLACE_POSTING = 'posting/PLACE_POSTING';
const MEMO_POSTING = 'posting/MEMO_POSTING';
const COLOR_POSTING = 'posting/COLOR_POSTING';

// action creator
export function __stickerShow(payload) {
  return { type: STICKER_SHOW, payload };
}
export function __coverShow(payload) {
  return { type: COVER_SHOW, payload };
}
export function __colorPickerShow(payload) {
  return { type: COLORPIKER_SHOW, payload };
}
export function __emptyContent(payload) {
  return { type: EMPTY_CONTENT, payload };
}
export function __selectDate(payload) {
  return { type: SELECT_DATE, payload };
}
export function __textDate(payload) {
  return { type: TEXT_DATE, payload };
}
export function __formatDate(payload) {
  return { type: FORMAT_DATE, payload };
}
export function __selectTime(payload) {
  return { type: SELECT_TIME, payload };
}
export function __selectHour(payload) {
  return { type: SELECT_HOUR, payload };
}
export function __selectMinute(payload) {
  return { type: SELECT_MINUTE, payload };
}
export function __imageInfo(payload) {
  return { type: IMAGE_POSTING, payload };
}
export function __companyNameInfo(payload) {
  return { type: COMPANYNAME_POSTING, payload };
}
export function __titleInfo(payload) {
  return { type: TITLE_POSTING, payload };
}
export function __stickerInfo(payload) {
  return { type: STICKER_POSTING, payload };
}
export function __dateInfo(payload) {
  return { type: DATE_POSTING, payload };
}
export function __placeInfo(payload) {
  return { type: PLACE_POSTING, payload };
}
export function __memoInfo(payload) {
  return { type: MEMO_POSTING, payload };
}
export function __colorInfo(payload) {
  return { type: COLOR_POSTING, payload };
}

//reducer
export default function posting(state = initialState, action) {
  switch (action.type) {
    case COVER_SHOW: {
      return produce(state, (draft) => {
        draft.coverShow = action.payload;
      });
    }
    case STICKER_SHOW: {
      return produce(state, (draft) => {
        draft.stickerShow = action.payload;
      });
    }
    case COLORPIKER_SHOW: {
      return produce(state, (draft) => {
        draft.colorPickerShow = action.payload;
      });
    }
    case EMPTY_CONTENT: {
      return produce(state, (draft) => {
        draft.empty = action.payload;
      });
    }
    case SELECT_DATE: {
      return produce(state, (draft) => {
        draft.selectDate = action.payload;
      });
    }
    case TEXT_DATE: {
      return produce(state, (draft) => {
        draft.textDate = action.payload;
      });
    }
    case FORMAT_DATE: {
      return produce(state, (draft) => {
        draft.formatDate = action.payload;
      });
    }
    case SELECT_TIME: {
      return produce(state, (draft) => {
        draft.selectTime = action.payload;
      });
    }
    case SELECT_HOUR: {
      return produce(state, (draft) => {
        draft.selectHour = action.payload;
      });
    }
    case SELECT_MINUTE: {
      return produce(state, (draft) => {
        draft.selectMinute = action.payload;
      });
    }
    case IMAGE_POSTING: {
      return produce(state, (draft) => {
        draft.image = action.payload;
      });
    }
    case COMPANYNAME_POSTING: {
      return produce(state, (draft) => {
        draft.companyName = action.payload;
      });
    }
    case TITLE_POSTING: {
      return produce(state, (draft) => {
        draft.title = action.payload;
      });
    }
    case STICKER_POSTING: {
      return produce(state, (draft) => {
        draft.sticker = action.payload;
      });
    }
    case DATE_POSTING: {
      return produce(state, (draft) => {
        draft.date = action.payload;
      });
    }
    case PLACE_POSTING: {
      return produce(state, (draft) => {
        draft.place = action.payload;
      });
    }
    case MEMO_POSTING: {
      return produce(state, (draft) => {
        draft.memo = action.payload;
      });
    }
    case COLOR_POSTING: {
      return produce(state, (draft) => {
        draft.color = action.payload;
      });
    }

    default:
      return state;
  }
}
