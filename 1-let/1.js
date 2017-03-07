// 1.只在块状作用域内生效
// 报错   b is not defined
{
    var a = 12
    let b = 15
}
console.log(a,b);

// for (let i = 0; i < 5; i++) {}
// console.log(i);
