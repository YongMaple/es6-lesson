// 注意，属性名表达式与简洁表示法，不能同时使用，会报错。
// 报错
var foo = 'bar';
var bar = 'abc';
var baz = { [foo] };    // Unexpected token }
// 正确
var foo = 'bar';
var baz = { [foo]: 'abc'};
