// 7.includes
// 和indexOf的区别
var str = 'hahaha123'
console.log(str.includes('1'));     //true
console.log(str.indexOf('1'));      //6
var arr = [1,2,3,4,5]
console.log(arr.includes(1));       //true
console.log(arr.indexOf(1));        //0


// includes方法返回一个布尔值，
// 表示某个数组是否包含给定的值，字符串也有includes方法，他们是类似的。
// 该方法属于ES7，但Babel转码器已经支持。
console.log([1, 2, 3].includes(2));     // true
console.log([1, 2, 3].includes(4));     // false
console.log([1, 2, NaN].includes(NaN)); // true
console.log([1, 2, NaN].indexOf(NaN));  // -1

// 该方法的第二个参数表示搜索的起始位置，默认为 0 。
// 如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为 -4 ，但数组长度为 3 ），
// 则会重置为从 0 开始。
console.log([1, 2, 3].includes(3, 3)); // false
console.log([1, 2, 3].includes(3, -1)); // true
