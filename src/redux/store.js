import { createStore } from "redux";

import brands from "./reducers";

//createStore创建一个仓储对象
const store = createStore(brands);

export default store;
