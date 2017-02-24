// 1.解构数组
// var arr = [1,2,3]
// var a = arr[0]
// var b = arr[1]
// var c = arr[2]
// // let [a,b,c] = [1,2,3]
// console.log(a,b,c);

// let [a, [[b], c]] = [1, [[2], 3]];
// console.log(a,b,c);

// let [ , , c] = ["one", "two", "three"];
// console.log(c);

//解构不成功 undefined
// let [a] = [];
// console.log(a);
// let [b, c] = [1];
// console.log(b,c);

// let [x, y] = [1, 2, 3];
// console.log(x,y);

//右边不是可遍历的解构
// let [foo] = 1;   //undefined is not a function
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// 2.解构对象
// var a = { name: 'Jia' }
// var { name : nameA } = a
// console.log(nameA);

//当属性名称和变量名称相同时，可如下简写
// var a = { name: 'Jia' , age: 28 }
// var { name, age } = a
// console.log(name,age);

// var o = {
//     arrs: [
//         'aaa',
//         {
//             second: 'bbb'
//         }
//     ]
// };
// var { arrs: [first,{ second }]} = o;
// console.log(first, second);


// var map = new Map();
// map.set('name', 'JiaYongfeng');
// map.set('age', "28");
// for (var [key, value] of map) {
//   console.log(key + " is " + value);
// }
