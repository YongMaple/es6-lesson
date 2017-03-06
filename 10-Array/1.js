// 1.Array.from
// 类似数组的数据结构转换为数组
// 可以把带有length属性的对象和实现了iterator接口的对象转换为数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr2 = Array.from(arrayLike);
console.log(arr2);

var arr = Array.from({
    '0': 'qq 740534248',
    '1': 'jimmy',
    'length': 2
}, function(item, index) {
    return item + '---' + index
});
console.log(arr);
