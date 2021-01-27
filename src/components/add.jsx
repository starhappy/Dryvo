import React, { Component } from "react";
import { add_brand } from "../redux/actions";

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
    };
  }
  render() {
    return (
      <div className="form">
        <div className="form-group">
          <input
            value={this.state.brand}
            onChange={(event) => this.inputChange(event)}
            type="text"
            className="form-control"
            placeholder="请输入名称"
          />
          <div className="form-group">
            <button onClick={() => this.addBrand()} className="btn btn-success">
              确认添加
            </button>
          </div>
        </div>
      </div>
    );
  }

  inputChange(event) {
    // console.log('event',event.target.value);
    this.setState({
      brand: event.target.value,
    });
  }

  addBrand() {
    // console.log("brand", this.state.brand);
    //手动构造对象
    const data = {
      id: Date.now(),
      name: this.state.brand,
      ctime: new Date().toLocaleDateString(),
    };
    //console.log("data:", data);

    //调用store.dispatch方法出发一个action
    //this.props.store.dispatch({ type: "add_brand", data });
    this.props.store.dispatch(add_brand(data));
    //重置表单内容
    this.setState({
      brand: "",
    });
  }
}

export default Add;
