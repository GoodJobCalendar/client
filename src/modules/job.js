import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import jobApi from '../apis/job';

// 액션
const LOAD_JOB_LIST = 'LOAD_JOB_LIST';
const LOAD_CATEGORY_LIST = 'LOAD_CATEGORY_LIST';
const SELECT_CATEGORY = 'SELECT_CATEGORY';
const LOAD_JOB_DETAILS = 'LOAD_JOB_DETAILS';
const ADD_SCRAP = 'ADD_SCRAP';

// 초기값
const initialState = {
  job: {},
  category: {
    data: {
      career: '경력무관',
      cityMain: '전체',
      citySub: '전체',
      companyType: '대기업',
      jobMain: '전체',
      jobSub: '전체',
    },
  },
  select: [],
  list: [],

  details: {
    career: '',
    city: '',
    companyName: '',
    companyType: '',
    deadline: '',
    job: [],
    title: '',
    url: '',
  },
  scrap: [],
  page: 0,
  postings: [],
};

// 액션 생성 함수
const __loadJobList = createAction(LOAD_JOB_LIST, (list) => ({ list }));
const __loadCategoryList = createAction(LOAD_CATEGORY_LIST, (category) => ({
  category,
}));
const __selectCategory = createAction(SELECT_CATEGORY, (categoryData) => ({
  categoryData,
}));
const __loadJobDetails = createAction(LOAD_JOB_DETAILS, (details) => ({
  details,
}));
const __addScrap = createAction(ADD_SCRAP, (postingId) => ({ postingId }));

// 미들웨어

// 추천채용 불러오기

export const loadJobList = (nextCursor, previousCursor) => {
  return function (dispatch, getState) {
    jobApi
      .getJobs(nextCursor, previousCursor)
      .then((res) => {
        dispatch(__loadJobList(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 추천채용 카테고리별 불러오기
export const loadCategoryList = () => {
  return function (dispatch, getState) {
    jobApi
      .getJobCategory()
      .then((res) => {
        dispatch(__loadCategoryList(res.data.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 추천채용 카테고리 선택하기
export const selectCategory = (categoryData) => {
  return function (dispatch, getState) {
    const { career, companyType, cityMain, citySub, jobMain, jobSub } = categoryData;
    if (!categoryData) {
      window.alert('companyType이 없습니다!');
    }
    jobApi
      .changeCategory(career, companyType, cityMain, citySub, jobMain, jobSub)
      .then((res) => {
        dispatch(__selectCategory(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 추천채용 상세 페이지 보기
export const loadJobDetails = (postingId) => {
  return function (dispatch, getState) {
    jobApi
      .getDetailJob(postingId)
      .then((res) => {
        dispatch(__loadJobDetails(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// 추가 미들웨어
export const addScrap = (postingId) => {
  return function (dispatch, getState) {
    if (!postingId) {
      window.alert('postingId가 없습니다!');
    }
    jobApi
      .scrapJob(postingId)
      .then((res) => {
        dispatch(__addScrap(res.data));
        jobApi
          .getDetailJob(postingId)
          .then((res) => {
            dispatch(__loadJobDetails(res.data));
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error('스크랩 추가 에러: ', err);
        window.alert('이미 스크랩이 완료된 게시물입니다!');
      });
  };
};

export const addLike = (postingId) => {
  return function (dispatch, getState) {
    if (!postingId) {
      window.alert('postingId가 없습니다!');
    }
    jobApi
      .likePosting(postingId)
      .then((res) => {
        dispatch(__addScrap(res.data));
        jobApi
          .getDetailJob(postingId)
          .then((res) => {
            dispatch(__loadJobDetails(res.data));
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error('스크랩 추가 에러: ', err);
        window.alert('이미 스크랩이 완료된 게시물입니다!');
      });
  };
};

export const deleteLike = (postingId) => {
  return function (dispatch, getState) {
    if (!postingId) {
      window.alert('postingId가 없습니다!');
    }
    jobApi
      .deleteLikePosting(postingId)
      .then((res) => {
        dispatch(__addScrap(res.data));
        jobApi
          .getDetailJob(postingId)
          .then((res) => {
            dispatch(__loadJobDetails(res.data));
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error('스크랩 추가 에러: ', err);
        window.alert('이미 스크랩이 완료된 게시물입니다!');
      });
  };
};

// 리듀서
export const job = handleActions(
  {
    [LOAD_JOB_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [LOAD_CATEGORY_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.category = action.payload.category;
      }),
    [LOAD_JOB_DETAILS]: (state, action) =>
      produce(state, (draft) => {
        draft.details = action.payload.details;
      }),
  },
  initialState,
);
