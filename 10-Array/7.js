// 4.findIndex
// 找到符合函数的第一个值的索引
var arr = [22, 33, 44, 55];
var value = arr.findIndex(function(value, index, arr) { //值，索引，原数组
    return value > 33;
});
console.log(value); //2
