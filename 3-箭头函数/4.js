// 2.不能被new
var a = (name, age) => {
 this.name = name
 this.age = age
}
var b = new a('Jia', 28)

// new (() => {})
