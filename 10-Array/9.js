// 5.copyWithin
// copyWithin(position,start,end);要被替换的开始位置，用于替换的起始位置，用于替换的结束位置（不包含）
// 也可以用负数，代表从后往前数第几个，如-3代表正数第4个
var arr = [1,2,3,4,5,6,7];
//arr.copyWithin(1,5,7);  //[ 1, 6, 7, 4, 5, 6, 7 ]
arr.copyWithin(2,-3,6); //[ 1, 2, 5, 6, 5, 6, 7 ]
console.log(arr);
