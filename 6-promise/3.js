// 加入异常处理
function asyncFun(a, b) {
    return new Promise((resolve,reject)=> {
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject(new Error('Type error'));
        }
        setTimeout(function () {
            resolve(a + b);
        }, 200);
    });
}
asyncFun(1,'a')
    .then(result => {
        if(result > 2){
            return asyncFun(result,2);
        }
    },err =>{
        console.log('first - ', err);
    })
    .then(result => {
        if(result > 4){
            console.log('ok');
        }
    })
    .catch(error => {
        console.log('second - ' , error);
    });
