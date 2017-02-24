// 1.Array.from
// 类似数组的数据结构转换为数组
// 可以把带有length属性的对象和实现了iterator接口的对象转换为数组

// var arr = Array.from({
//     '0': 'qq 740534248',
//     '1': 'jimmy',
//     'length': 2
// }, function(item, index) {
//     return item + '---' + index
// });
// console.log(arr);

// 类数组
// var set = new Set(['me', 'book', 'leo']);
// console.log(Array.from(set));

// DOM NodeList对象
// <ul>
//     <li>item1</li>
//     <li>item2</li>
//     <li>item3</li>
//     <li>item4</li>
//     <li>item5</li>
// </ul>
// <script>
//     var list = document.querySelectorAll('li');
//     console.log(list)  //NodeList[5]
//     console.log(Array.from(list));  //ArrayList[5]
// </script>

//处理
// var arr = Array.from(['me', 'book', 'leo']).map(x => `---${x}---`);
// console.log(arr);

// 2.Array.of
// 用来构建数组，防止Array(7)这种情况发生
// Array.of(7);       // [7]
// Array.of(1, 2, 3); // [1, 2, 3]
// Array(7);          // [ , , , , , , ]
// Array(1, 2, 3);    // [1, 2, 3]


// 3.find
// 找到符合函数的第一个值
// var arr = [22, 33, 44, 55];
// var value = arr.find(function(value, index, arr) { //值，索引，原数组
//     return value > 33;
// });
// console.log(value); //44

// 4.findIndex
// 找到符合函数的第一个值的索引
// var arr = [22, 33, 44, 55];
// var value = arr.findIndex(function(value, index, arr) { //值，索引，原数组
//     return value > 33;
// });
// console.log(value); //2

// 和IndexOf比较
// var arr2 = [22,NaN];
// console.log(arr2.indexOf(NaN))  //-1
// console.log(arr2.findIndex(function(v){
//    return Object.is(NaN,v);
// }));    //1


// 5.copyWithin
// copyWithin(position,start,end);要被替换的开始位置，用于替换的起始位置，用于替换的结束位置（不包含）
// 也可以用负数，代表从后往前数第几个，如-3代表正数第4个
// var arr = [1,2,3,4,5,6,7];
// //arr.copyWithin(1,5,7);  //[ 1, 6, 7, 4, 5, 6, 7 ]
// arr.copyWithin(2,-3,6); //[ 1, 2, 5, 6, 5, 6, 7 ]
// console.log(arr);

// 6.fill
// 填充数组
// fill(value,start,end)
// 用来填充的值，被填充的起始位置，被填充的结束位置
// var arr = [1,2,3,4,5,6,7];
// //arr.fill(10)
// console.log(arr)    //[10,10,10,10,10,10,10]
// arr.fill(10,2,5)
// console.log(arr)    //[1,2,10,10,10,6,7]

// 7.entries()，keys()和values()
// for (let index of ['a', 'b'].keys()) {
//   console.log(index);
// }
// // 0
// // 1

// for (let elem of ['a', 'b'].values()) {             //../node_modules/.bin/babel-node lesson.js
//   console.log(elem);                                //语法正确，但是目前node不支持，需要babel转成ES5
// }
// // 'a'
// // 'b'

// for (let [index, elem] of ['a', 'b'].entries()) {
//   console.log(index, elem);
// }
// // 0 "a"
// // 1 "b"

// 7.includes
// Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法属于ES7，但Babel转码器已经支持。
// [1, 2, 3].includes(2);     // true
// [1, 2, 3].includes(4);     // false
// [1, 2, NaN].includes(NaN); // true

// 该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，
// 如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
// [1, 2, 3].includes(3, 3);  // false
// [1, 2, 3].includes(3, -1); // true

// 8.空位
// 数组的空位指，数组的某一个位置没有任何值。比如，Array构造函数返回的数组都是空位。
// Array(3) // [, , ,]

// ES5中大多数情况下会忽略空位
// [,'a'].forEach((x,i) => console.log(i)); // 1

// ES6中明确将空位转为undefined
// console.log(Array.from(['a',,'b']));
