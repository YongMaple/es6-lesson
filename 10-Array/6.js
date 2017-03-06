// 3.find
// 找到符合函数的第一个值
var arr = [22, 33, 44, 55];
var value = arr.find(function(value, index, arr) { //值，索引，原数组
    return value > 33;
});
console.log(value); //44
