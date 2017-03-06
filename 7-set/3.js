//不能用于对象
let set = new Set()
set.add({name:'1'})
console.log(set.size);
set.add({name:'1'})
console.log(set.size);

let set2 = new Set();

set2.add({});
console.log(set2.size);

set2.add({});
console.log(set2.size);
