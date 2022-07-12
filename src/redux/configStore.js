import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./modules/user";
import postReducer from "./modules/post";

const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

// 스토어를 만듭니다.
const store = createStore(rootReducer, enhancer);

export default store;
