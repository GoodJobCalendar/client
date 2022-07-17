import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
<<<<<<< HEAD
import { getCookie } from "../../shared/Cookie";

// 액션
const LOAD_JOB_LIST = "LOAD_JOB_LIST";
const LOAD_CATEGORY_LIST = "LOAD_CATEGORY_LIST";
const SELECT_CATEGORY = "SELECT_CATEGORY";

// 초기값
const initialState = {
  job: [],
  category: [],
  select: [],
};

// 액션 생성 함수
const __loadJobList = createAction(LOAD_JOB_LIST, (list) => ({ list }));
const __loadCategoryList = createAction(LOAD_CATEGORY_LIST, (category) => ({
  category,
}));
const __selectCategory = createAction(SELECT_CATEGORY, (categoryData) => ({
  categoryData,
}));
=======
import {getCookie} from "../../shared/Cookie";

// 액션 
const LOAD_JOB_LIST = 'LOAD_JOB_LIST';
const LOAD_CATEGORY_LIST = 'LOAD_CATEGORY_LIST';
const SELECT_CATEGORY = 'SELECT_CATEGORY';

// 초기값
const initialState = {
  job : [],
  category : [],
  select : []
}

// 액션 생성 함수
const __loadJobList = createAction(LOAD_JOB_LIST, (list) => ({list}))
const __loadCategoryList = createAction(LOAD_CATEGORY_LIST, (category) => ({category}))
const __selectCategory = createAction(SELECT_CATEGORY, (categoryData) => ({categoryData}))
>>>>>>> f7fe01f7e9aa7c68cf31af70a0ca3988989eb428

// 미들웨어

// 추천채용 불러오기
export const loadJobList = () => {
  return function (dispatch, getState) {
<<<<<<< HEAD
    const myToken = getCookie("token");
    console.log(myToken);
    axios
      .get("http://14.34.139.253:3000/api/posting", {
        headers: { Authorization: `Bearer ${myToken}` },
      })
=======
    const myToken = getCookie("token")
    console.log(myToken);
    axios.get('http://14.34.139.253:3000/api/posting'
      , {headers : {Authorization: `Bearer ${myToken}`}}
      )
>>>>>>> f7fe01f7e9aa7c68cf31af70a0ca3988989eb428
      .then((res) => {
        dispatch(__loadJobList(res.data));
        console.log("리덕스 콘솔 1", res.data);
      })
<<<<<<< HEAD
      .catch((err) => {
        console.log("추천채용 불러오기 에러입니다.: ", err);
      });
  };
};
=======
      .catch((err)=> {
        console.log("추천채용 불러오기 에러입니다.: ", err)
      })
    }
  }
>>>>>>> f7fe01f7e9aa7c68cf31af70a0ca3988989eb428

// 추천채용 카테고리별 불러오기
export const loadCategoryList = () => {
  return function (dispatch, getState) {
<<<<<<< HEAD
    const myToken = getCookie("token");
    axios
      .get("http://14.34.139.253:3000/api/posting/category", {
        headers: { Authorization: `Bearer ${myToken}` },
      })
=======
    const myToken = getCookie("token")
    axios.get('http://14.34.139.253:3000/api/posting/category'
      ,{headers : {Authorization: `Bearer ${myToken}`}}
      )
>>>>>>> f7fe01f7e9aa7c68cf31af70a0ca3988989eb428
      .then((res) => {
        dispatch(__loadCategoryList(res.data));
        console.log("리덕스 콘솔 2", res.data);
      })
<<<<<<< HEAD
      .catch((err) => {
        console.log("추천채용 카테고리별 불러오기 에러입니다.: ", err);
      });
  };
};

// 추천채용 카테고리 선택하기
export const selectCategory = (categoryData) => {
  console.log(categoryData);
  return function (dispatch, getState) {
    if (!categoryData) {
      window.alert("companyType이 없습니다!");
    }
    const myToken = getCookie("token");
    axios({
      method: "patch",
      url: "http://14.34.139.253:3000/api/posting/category",
      data: categoryData,
      headers: { Authorization: `Bearer ${myToken}` },
    })
      .then((res) => {
        dispatch(__selectCategory(res.data));
      })
      .catch((err) => {
        console.log("카테고리 선택 에러 : ", err);
      });
  };
};
=======
      .catch((err)=> {
        console.log("추천채용 카테고리별 불러오기 에러입니다.: ", err)
      })
    }
  }

// 추천채용 카테고리 선택하기
export const selectCategory = (categoryData) => {
  console.log(categoryData)
  return function (dispatch, getState) {
    if(!categoryData) {window.alert("companyType이 없습니다!")}
    const myToken = getCookie("token");
    axios({
      method: "patch",
      url: 'http://14.34.139.253:3000/api/posting/category',
      data : categoryData
      ,
      headers: {Authorization: `Bearer ${myToken}`},
    })
    .then((res) => {
      dispatch(__selectCategory(res.data));
      })
    .catch((err) => {
      console.log("카테고리 선택 에러 : ", err)
    })
  }
}

// 리듀서
export default handleActions(
  {
    [LOAD_JOB_LIST]: (state, action) =>
      produce(state, (draft) => {
      draft.list = action.payload.list;  
    }),
    [LOAD_CATEGORY_LIST]: (state, action) =>
      produce(state, (draft) => {
      draft.category = action.payload.category;  
    }),
    // [SELECT_CATEGORY]: (state, action) =>
    //   produce(state, (draft) => {
    //   draft.category = action.payload.category;  
    // }),
  },
  initialState
);
>>>>>>> f7fe01f7e9aa7c68cf31af70a0ca3988989eb428

// 리듀서
export default handleActions(
  {
    [LOAD_JOB_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [LOAD_CATEGORY_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.category = action.payload.category;
      }),
    // [SELECT_CATEGORY]: (state, action) =>
    //   produce(state, (draft) => {
    //   draft.category = action.payload.category;
    // }),
  },
  initialState
);
