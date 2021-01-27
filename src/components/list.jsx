import React, { Component } from "react";
import { del_brand, get_brands_async, del_brand_async } from "../redux/actions";

export default class list extends Component {
  constructor(props) {
    super(props);
    this.props.store.dispatch(get_brands_async());
  }

  del(item) {
    //console.log("id:", id);
    //调用store对象的dispatch方法
    if (!window.confirm(`确认删除: ${item.name}?`)) {
      return false;
    }
    //通过异步action实现删除。
    this.props.store.dispatch(del_brand_async(item.id));
    //this.props.store.dispatch(del_brand(item.id));
    //this.props.store.dispatch({ type: "del_brand", data: item.id });
  }

  render() {
    // console.log(this.props.store);
    //从store仓储中获取数据
    const listdata = this.props.store.getState();

    //console.log("listdata",listdata);
    return (
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>CreateTime</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {listdata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.ctime}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      return this.del(item);
                    }}
                  >
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
