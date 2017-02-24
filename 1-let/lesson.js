// 1.只在块状作用域内生效
// {
//     var a = 12
//     let b = 15
// }
// console.log(a,b);

// for (var i = 0; i < 5; i++) {}
// console.log(i);

// 2.变量提升
// console.log(a);
// var a = 2
//
// console.log(b);
// let b = 3

// 3.暂时性死区
// var a = 2
// {
//     a = 3
//     let a
//     console.log(a);
// }

// 4.不允许重复声明
// {
//   let a = 10;
//   var a = 1;
// }

// {
//   let a = 10;
//   let a = 1;
// }

// function fun(arg) {
//   let arg;
// }


//例子
// var arr = [];
// function f() {
//     for (var i = 0; i < 5; i++) {
//         arr.push(function() {
//             console.log(i);
//         })
//     }
// }
// f();
// arr[3]()


// var arr = [];
// function f() {
//     for (var i = 0; i < 5; i++) {
//         arr.push((function(i) {
//             return function() {
//                 console.log(i);
//             }
//         })(i));
//     }
// }
// f();
// arr[3]()
