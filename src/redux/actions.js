
//同步Action
//在箭头函数前添加export表示按需导出
export const add_brand = (data) => ({
    type: 'add_brand', data
});

export const del_brand = (data) => ({
    type: 'del_brand', data
});

export const get_brands = (data) => ({
    type: 'get_brands', data
});


const initData = {

    message: [
        {
            id: 4,
            name: "ABBDES",
            ctime: "2020-11-09",
        },
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
    ]
};


//异步Action
// export const get_brands_async = (dispatch) => ({
//     //请求数据
//     fetch('http://106.13.182.88:3001/brand', {
//         method:'Get'
//     }).then(response => response.json()).then(res => {
//             console.log(res);
//             dispatch(get_brands(res.message))
//         })
// })

export const get_brands_async = function () {
    return (dispatch) => {
        fetch('http://rap2api.taobao.org/app/mock/276395/api/v1/message').then(response => response.json()).then(res => {
            //console.log(res);

            dispatch(get_brands(res.message))
        }, (err) => {
            //网络错误、连接失败、无法解析对方数据
            //console.log('request error');
            //console.log(initData.message);
            dispatch(get_brands(initData.message))
        })
    }
}

export const del_brand_async = function (id) {
    return (dispatch) => {
        //请求数据接口，实现删除操作
        fetch(`http://rap2api.taobao.org/app/mock/276395/api/v1/message/${id}`, {
            method: 'DELETE'
        }).then(response => response.json()).then(res => {
            //console.log(res);

            dispatch(del_brand(id))
        }, (err) => {
            //网络错误、连接失败、无法解析对方数据
            //console.log('request error');
            //console.log(initData.message);
            dispatch(get_brands(initData.message))
        })
    }
}
//导出函数
// export default {
//     add_brand, del_brand
// }

/**
 * 下面这个写法和上面的箭头函数一样功能，只是写法补一下。
 */
// export const add_brand = function (data) {
//     return { type: 'add_brand', data }
// }

// export const del_brand = function (data) {
//     return { type: 'del_brand', data }
// }