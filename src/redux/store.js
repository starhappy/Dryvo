import { createStore, applyMiddleware } from "redux";
import brands from "./reducers";
import thunk from 'redux-thunk';
//createStore创建一个仓储对象
const store = createStore(brands, applyMiddleware(thunk));

export default store;
