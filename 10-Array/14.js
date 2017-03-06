// 8.空位
// 数组的空位指，数组的某一个位置没有任何值。比如，Array构造函数返回的数组都是空位。
console.log(Array(3)); // [, , ,]

// ES5中大多数情况下会忽略空位
[,'a'].forEach((x,i) => console.log(i)); // 1

// ES6中明确将空位转为undefined
console.log(Array.from(['a',,'b']));
