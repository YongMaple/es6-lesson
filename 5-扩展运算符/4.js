//合并数组
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Array.prototype.push.apply(arr1, arr2);  //其他方法
arr1.push(...arr2);
console.log(arr1);
// var arr3 = [...arr1,...arr2]
// console.log(arr3);
