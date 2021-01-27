import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
//导入store仓储对象
import store from "./redux/store";
// console.log(store);

render();

//监听数据层的更新,通过回调函数重新渲染页面
store.subscribe(() => {
    render();
});

function render() {
    ReactDOM.render(<App store={store} />, document.getElementById("root"));
}
