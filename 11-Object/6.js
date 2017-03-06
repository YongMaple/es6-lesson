// 方法名也可以用表达式
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
};
console.log(obj.hello());   // hi
