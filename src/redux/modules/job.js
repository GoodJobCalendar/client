// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import axios from "axios";
// import {getCookie} from "../../shared/Cookie";

// // 액션 
// const LOAD_JOB_LIST = 'LOAD_JOB_LIST';
// const LOAD_CATEGORY_LIST = 'LOAD_CATEGORY_LIST';
// const SELECT_CATEGORY = 'SELECT_CATEGORY';

// // 초기값
// const initialState = {
//   job : [],
//   category : []
// }

// // 액션 생성 함수
// const __loadJobList = createAction(LOAD_JOB_LIST, (list) => ({list}))
// const __loadCategoryList = createAction((category) => ({category}))
// const __selectCategory = createAction((category) => ({category}))

// // 미들웨어

// // 추천채용 불러오기
// export const loadJobList = () => {
//   return function (dispatch, getState) {
//     const myToken = getCookie("Authorization")
//     axios.get('http://14.34.139.253:3000/api/posting'
//       ,{headers : {"Authorization" : `Bearer ${myToken}`}}
//       )
//       .then((res) => {
//         dispatch(__loadJobList(res.data));
//       })
//       .catch((err)=> {
//         console.log("추천채용 불러오기 에러입니다.: ", err)
//       })
//     }
//   }

// // 추천채용 카테고리별 불러오기
// export const loadCategoryList = () => {
//   return function (dispatch, getState) {
//     const myToken = getCookie("Authorization")
//     axios.get('http://14.34.139.253:3000/api/posting/category'
//       ,{headers : {"Authorization" : `Bearer ${myToken}`}}
//       )
//       .then((res) => {
//         dispatch(__loadCategoryList(res.data));
//       })
//       .catch((err)=> {
//         console.log("추천채용 카테고리별 불러오기 에러입니다.: ", err)
//       })
//     }
//   }

// // 추천채용 카테고리 선택하기
// export const selectCategory = (career, companyType, city1, city2, job1, job2) => {
//   return function (dispatch, getState) {
//     if(!companyType) {window.alert("companyType이 없습니다!")}
//     const myToken = getCookie("Authorization");
//     axios({
//       method: "put",
//       url: 'http://14.34.139.253:3000/api/posting/category',
//       data: {
//         career,
//         companyType,
//         city1,
//         city2,
//         job1,
//         job2,
//       },
//       headers: {Authorization: `Bearer ${myToken}`},
//     })
//     .then((res) => {
//       dispatch(__selectCategory(res.data));
//       })
//     .catch((err) => {
//       console.log("카테고리 선택 에러 : ", err)
//     })
//   }
// }

// // 리듀서
// export default handleActions(
//   {
//     [LOAD_JOB_LIST]: (state, action) =>
//       produce(state, (draft) => {
//       draft.list = action.payload.list;  
//     }),
//     [LOAD_CATEGORY_LIST]: (state, action) =>
//       produce(state, (draft) => {
//       draft.category = action.payload.category;  
//     }),
//     // [SELECT_CATEGORY]: (state, action) =>
//     //   produce(state, (draft) => {
//     //   draft.category = action.payload.category;  
//     // }),
//   },
//   initialState
// );

