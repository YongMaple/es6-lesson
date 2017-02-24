// 1.属性的简洁表示法
var foo = 'bar';
var baz = {foo};
console.log(baz);

// 等同于
var baz = {foo: foo};

function f(x, y) {
  return {x, y};
}

// 等同于
function f(x, y) {
  return {x: x, y: y};
}
f(1, 2) // Object {x: 1, y: 2}

//方法也可以简写
var o = {
  method() {
    return "Hello!";
  }
};

// 等同于
var o = {
  method: function() {
    return "Hello!";
  }
};

// 例子
var birth = '2000/01/01';
var Person = {
  name: '张三',
  //等同于birth: birth
  birth,
  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }
};

// 2.属性名表达式
// 方法一
obj.foo = true;

// 方法二      //把表达式放在方括号内
obj['a' + 'bc'] = 123;

// 例子
var lastWord = 'last word';
var a = {
  'first word': 'hello',
  [lastWord]: 'world'
};
a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"

// 方法名也可以用表达式
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
};
obj.hello() // hi

// 注意，属性名表达式与简洁表示法，不能同时使用，会报错。
// 报错
var foo = 'bar';
var bar = 'abc';
var baz = { [foo] };
// 正确
var foo = 'bar';
var baz = { [foo]: 'abc'};

// 3.方法的name属性
const person = {
  sayName() {
    console.log('hello!');
  },
};
person.sayName.name   // "sayName"

// 例子
var obj = {
    one(){
        console.log('one1');
    },
    two(){
        console.log('two2');
    },
    three(){
        console.log('three3');
    }
}
for (let k in obj) {
    console.log(obj[k].name);
}

// 4.Object.is
// Object.is相当于全等又有些区别
console.log(Object.is({},{}) , {} === {} ); //fasle false
console.log(Object.is(NaN,NaN) , NaN === NaN);  //true false
console.log(Object.is(+0,-0) , +0 === -0);  //false true


// 5.Object.assign
// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
var obj = {};
Object.assign(obj, {name: 'Jimmy'}, {age: 28});
console.log(obj);

const DEFAULT_OPTIONS = {
    name: 'Jimmy'
};
function test(opts) {
    let options = Object.assign({}, DEFAULT_OPTIONS, opts);
    console.log(options);
}
test();
test({name:'JiaYongfeng'});

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
