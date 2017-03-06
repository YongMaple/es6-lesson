// 6.fill
// 填充数组
// fill(value,start,end)
// 用来填充的值，被填充的起始位置，被填充的结束位置
var arr = [1,2,3,4,5,6,7];
//arr.fill(10)
console.log(arr)    //[10,10,10,10,10,10,10]
arr.fill(10,2,5)
console.log(arr)    //[1,2,10,10,10,6,7]
