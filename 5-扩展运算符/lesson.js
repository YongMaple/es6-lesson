// 1.基本使用
// console.log(...[1,2,3]);

// 2.应用
// 函数调用
// function f(v, w, x, y, z) {
//     console.log(v, w, x, y, z);
// }
// var args = [0, 1];
// f(-1, ...args, 2, ...[3]); //相当于f(-1,0,1,2,3)

// 求最大值
// var nums = [14, 3, 77]
// console.log(Math.max(...nums));

//合并数组
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// // Array.prototype.push.apply(arr1, arr2);
// arr1.push(...arr2);
// console.log(arr1);
// // var arr3 = [...arr1,...arr2]
// // console.log(arr3);

//将字符串转为数组
// console.log(...'hello');

//识别Unicode
// console.log('\u4f60\u597d');
// console.log(...'\u4f60\u597d');
