// 3.方法的name属性
const person = {
  sayName() {
    console.log('hello!');
  },
};
person.sayName.name   // "sayName"
