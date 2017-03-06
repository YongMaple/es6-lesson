//race
function asyncFun(a, b,time) {
    return new Promise(function (resolve, reject ) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('Type Error'));
        }
        setTimeout(function () {
            resolve(a + b);
        }, time);
    });
}
var promise = Promise.race([asyncFun(1, 2 , 500),asyncFun(2, 3,20),asyncFun(1, 22,22)]);
promise.then(function (result) {
    console.log(result);
}).catch(err=>{
    console.log(err)
});
