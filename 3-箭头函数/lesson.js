// 1.写法
// var fn = function(a) {
//
// };
//
// var fn2 = (a) => {
//
// };
//
// var fn3 = a => {
//
// };
//
// setTimeout(() => {
//
// }, 1000)

// 默认参数
// var fn4 = (x = 1, y = 2) => console.log(x + y);
// fn4()                //3

//剩余参数
// var fn5 = (x, ...args) => console.log(args);
// fn5(1, 2, 3)         //[2,3]

//单行表达式
// var fn6 = x => { return x * x }
// console.log(fn6(3));

// var fn7 = x => x * x
// console.log(fn7(3));

// var fn8 = x => { x * x }
// console.log(fn8(3));

// var fn9 = x => return x * x;
// console.log(fn9(3));

// 2.不能被new
// var a = (name, age) => {
//  this.name = name
//  this.age = age
// }
// var b = new a('Jia', 28)

// new (() => {})

// 3.this
// 猜猜执行结果
// var o = {
//     x: 1,
//     func: function() {
//         console.log(this.x)
//     },
//     test: function() {
//         setTimeout(function() {
//             this.func();
//         }, 100);
//     }
// };
// o.test();

// 箭头函数中的写法
// var o = {
//     x : 1,
//     func : function() { console.log(this.x) },
//     test : function() {
//         setTimeout(() => { this.func() }, 100);
//     }
// };
// o.test();

// 4.不支持arguments
// var fn = function(){
//     for (let arg of arguments) {
//         console.log(arg);
//     }
// }
// var fn = () => {
//     for (let arg of arguments) {
//         console.log(arg);
//     }
// }
// fn('haha','jia','jimmy')
