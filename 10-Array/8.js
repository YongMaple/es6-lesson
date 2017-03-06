// 和IndexOf比较
var arr2 = [22,NaN];
console.log(arr2.indexOf(NaN))  //-1
console.log(arr2.findIndex(function(v){
   return Object.is(NaN,v);
}));    //1
