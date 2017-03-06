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
