// 1.解构数组
var arr = [1,2,3]
var a = arr[0]
var b = arr[1]
var c = arr[2]
// let [a,b,c] = [1,2,3]
console.log(a,b,c);

let [d, [[e], f]] = [1, [[2], 3]];
console.log(d,e,f);

let [ , , g] = ["one", "two", "three"];
console.log(g);
