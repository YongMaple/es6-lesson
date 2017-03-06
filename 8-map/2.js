//值得注意NaN在map和set是全等的
let map = new Map()
console.log(NaN === NaN)    //false
map.set(NaN,'1111');
map.set(NaN,'2222');
console.log(map.get(NaN));    //2222
for(let o of map){              //遍历
    console.log(o)
}
