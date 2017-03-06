// 4.Object.is
// Object.is相当于全等又有些区别
console.log(Object.is({},{}) , {} === {} ); //fasle false
console.log(Object.is(NaN,NaN) , NaN === NaN);  //true false
console.log(Object.is(+0,-0) , +0 === -0);  //false true
