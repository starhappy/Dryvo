const initData = [
  {
    id: 3,
    name: "ABB",
    ctime: "2020-10-09",
  },
  {
    id: 2,
    name: "ABC",
    ctime: "2020-09-09",
  },
  {
    id: 1,
    name: "ABD",
    ctime: "2020-08-09",
  },
];

//state是状态数据的原始值，action = {type:'add',data:{}}
function brands(state = initData, action) {
  switch (action.type) {
    //新增数据：不能直接修改搞得状态数据，应该根据老的状态数据，生成一个新的状态数据，然后返回
    case "add_brand":
      return [...state].push(action.data);
    case "del_brand":
      const newArr = state.filter((item) => item.id !== action.data);
      return newArr;
    //修改
    // case "update_brnad":

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
}

export default brands;
