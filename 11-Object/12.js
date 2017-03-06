// 6.for...in
// 可以得到自身和继承的原型链上的属性,但必须是可枚举属性.
var obj = {
    name:"Jimmy",
    age:28,
    gender:'male'
}
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}
