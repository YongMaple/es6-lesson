//all   方法用于将多个Promise实例，包装成一个新的Promise实例
function asyncFun(a, b) {
    return new Promise(function (resolve, reject ) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('Type Error'));
        }
        setTimeout(function () {
            resolve(a + b);
        },200);
    });
}
var resultList = [];
asyncFun(1, 2)
   .then(function (result) {
       resultList.push(result);
       return asyncFun(2, 3);
   })
   .then(function (result) {
       resultList.push(result);
       console.log(resultList);
   });

var promise = Promise.all([asyncFun(1,2),asyncFun(2,3),asyncFun(3,4)])
promise.then(function(result){
    console.log(result);
})
