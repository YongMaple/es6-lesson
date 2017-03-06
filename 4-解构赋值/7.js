//实际开发中，遍历map就经常用到解构
var map = new Map();
map.set('name', 'JiaYongfeng');
map.set('age', "28");
for (var [key, value] of map) {
  console.log(key + " is " + value);
}
