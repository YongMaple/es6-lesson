let map = new Map()
map.set(1,'1111');
map.set(2,'2222');
let keys = map.keys()           //获取所有的key
let values = map.values()       //获取所有的value
let entries = map.entries()     //获取所有的键值对
for(let o of entries){
    console.log(o)
}
var _this = {
    des : 'shuai'
};
map.forEach(function (k, v) {       //遍历，同时可以传入this
    console.log(this.des,k, v);
},_this);
