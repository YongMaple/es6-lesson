// ES5
// function asyncFun(a, b, cb) {
//    setTimeout(function () {
//        console.log(a+b);
//        cb(a + b);
//    }, 200);
// }
//
// asyncFun(1, 2, function (result) {
//    if (result > 2) {
//        asyncFun(result, 2, function (result) {
//            if (result > 4) {
//                asyncFun(result, 2, function (result) {
//                    console.log('ok');
//                });
//            }
//        });
//    }
// });

// ES6
// function asyncFun(a, b) {
//     return new Promise(function (resolve,reject) {
//         setTimeout(function () {
//             console.log(a+b);
//             resolve(a + b);
//         }, 200);
//     });
// }
// asyncFun(1,2)
//     .then(function(result){
//         if(result > 2){
//             return asyncFun(result,2)
//         }
//     })
//     .then(function(result){
//         if(result > 4){
//             console.log('ok');
//         }
//     })

// 加入异常处理
// function asyncFun(a, b) {
//     return new Promise((resolve,reject)=> {
//         if(typeof a !== 'number' || typeof b !== 'number'){
//             reject(new Error('Type error'));
//         }
//         setTimeout(function () {
//             resolve(a + b);
//         }, 200);
//     });
// }
// asyncFun(1,'a')
//     .then(result => {
//         if(result > 2){
//             return asyncFun(result,2);
//         }
//     },err =>{
//         console.log('first - ', err);
//     })
//     .then(result => {
//         if(result > 4){
//             console.log('ok');
//         }
//     })
//     .catch(error => {
//         console.log('second - ' , error);
//     });


//fetch
// fetch(url).then(function(response) {
//   return response.json();
// }).then(function(data) {
//   console.log(data);
// }).catch(function(e) {
//   console.log("Oops, error");
// });

//实际例子
// export function submitOrder(params) {
//   return fetch(`${baseurl}json/submitorder.html`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(params)
//   })
//   .then(checkStatus)        //检查状态
//   .then(response => {
//     return response.json()
//   })
// }


//all   方法用于将多个Promise实例，包装成一个新的Promise实例
// function asyncFun(a, b) {
//     return new Promise(function (resolve, reject ) {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject(new Error('Type Error'));
//         }
//         setTimeout(function () {
//             resolve(a + b);
//         },200);
//     });
// }
// var resultList = [];
// asyncFun(1, 2)
//    .then(function (result) {
//        resultList.push(result);
//        return asyncFun(2, 3);
//    })
//    .then(function (result) {
//        resultList.push(result);
//        console.log(resultList);
//    });

// var promise = Promise.all([asyncFun(1,2),asyncFun(2,3),asyncFun(3,4)])
// promise.then(function(result){
//     console.log(result);
// })

//race
// function asyncFun(a, b,time) {
//     return new Promise(function (resolve, reject ) {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             reject(new Error('Type Error'));
//         }
//         setTimeout(function () {
//             resolve(a + b);
//         }, time);
//     });
// }
// var promise = Promise.race([asyncFun('a', 2 , 500),asyncFun(2, 3,20),asyncFun(1, 22,22)]);
// promise.then(function (result) {
//     console.log(result);
// }).catch(err=>{
//     console.log(err)
// });
