// 默认参数
var fn4 = (x = 1, y = 2) => console.log(x + y);
fn4()                //3

//剩余参数
var fn5 = (x, ...args) => console.log(args);
fn5(1, 2, 3)         //[2,3]
