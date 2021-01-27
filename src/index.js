import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//导入store仓储对象
import store from "./redux/store";
// console.log(store);
ReactDOM.render(<App store={store} />, document.getElementById("root"));
