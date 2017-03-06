// 1.属性的简洁表示法
// ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
var foo = 'bar';
var baz = {foo};
console.log(baz);

// 等同于
var baz = {foo: foo};   // { foo: 'bar' }


function f(x, y) {
  return {x, y};
}

// 等同于
function f(x, y) {
  return {x: x, y: y};
}
console.log(f(1, 2)); // Object {x: 1, y: 2}
